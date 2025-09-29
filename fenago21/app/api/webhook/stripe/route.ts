import { NextResponse, NextRequest } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";
import connectMongo from "@/libs/mongoose";
import configFile from "@/config";
import User from "@/models/User";
import { findCheckoutSession } from "@/libs/stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2023-08-16",
  typescript: true,
});
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

export async function POST(req: NextRequest) {
  await connectMongo();

  const body = await req.text();

  // Next 15: headers() may be awaited
  const hdrs = await headers();
  const signature = hdrs.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing Stripe signature" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err: any) {
    console.error(`Webhook signature verification failed. ${err.message}`);
    return NextResponse.json({ error: err.message }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const stripeObject: Stripe.Checkout.Session = event.data.object as Stripe.Checkout.Session;

        const session = await findCheckoutSession(stripeObject.id);
        const customerId = session?.customer as string | undefined;
        const priceId = session?.line_items?.data[0]?.price.id as string | undefined;
        const userId = stripeObject.client_reference_id as string | undefined;
        const plan = configFile.stripe.plans.find((p) => p.priceId === priceId);
        if (!plan) break;

        const customer = (await stripe.customers.retrieve(customerId as string)) as Stripe.Customer;

        let user: any;
        if (userId) {
          user = await User.findById(userId);
        } else if (customer.email) {
          user = await User.findOne({ email: customer.email });
          if (!user) {
            user = await User.create({ email: customer.email, name: customer.name });
            await user.save();
          }
        } else {
          throw new Error("No user identifier available");
        }

        user.priceId = priceId;
        user.customerId = customerId;
        user.hasAccess = true;
        await user.save();
        break;
      }

      case "checkout.session.expired": {
        // Optional: handle expired checkout sessions
        break;
      }

      case "customer.subscription.updated": {
        // Optional: handle subscription updates
        break;
      }

      case "customer.subscription.deleted": {
        const stripeObject: Stripe.Subscription = event.data.object as Stripe.Subscription;
        const subscription = await stripe.subscriptions.retrieve(stripeObject.id);
        const user = await User.findOne({ customerId: subscription.customer });
        if (user) {
          user.hasAccess = false;
          await user.save();
        }
        break;
      }

      case "invoice.paid": {
        const stripeObject: Stripe.Invoice = event.data.object as Stripe.Invoice;
        const priceId = stripeObject.lines.data[0].price.id as string;
        const customerId = stripeObject.customer as string;
        const user = await User.findOne({ customerId });
        if (user && user.priceId === priceId) {
          user.hasAccess = true;
          await user.save();
        }
        break;
      }

      case "invoice.payment_failed": {
        // Optional: handle failed payments
        break;
      }

      default: {
        // Unhandled event type
        break;
      }
    }
  } catch (e: any) {
    console.error("stripe error:", e.message);
  }

  return NextResponse.json({ received: true });
}