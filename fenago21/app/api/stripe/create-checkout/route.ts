import { NextResponse, NextRequest } from "next/server";
// import { getServerSession } from "next-auth/next";
// import { authOptions } from "@/libs/next-auth";
import { createCheckout } from "@/libs/stripe";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";

// This function is used to create a Stripe Checkout Session (one-time payment or subscription)
// It's called by the <ButtonCheckout /> component
// By default, it doesn't force users to be authenticated. But if they are, it will prefill the Checkout data with their email and/or credit card (if any)
export async function POST(req: NextRequest) {
  const body = await req.json();

  if (!body.priceId) {
    return NextResponse.json({ error: "Price ID is required" }, { status: 400 });
  } else if (!body.successUrl || !body.cancelUrl) {
    return NextResponse.json(
      { error: "Success and cancel URLs are required" },
      { status: 400 }
    );
  } else if (!body.mode) {
    return NextResponse.json(
      {
        error:
          "Mode is required (either 'payment' for one-time payments or 'subscription' for recurring subscription)",
      },
      { status: 400 }
    );
  }

  try {
    // const session = await getServerSession(authOptions);
    const session: any = null; // Temporarily disabled auth

    await connectMongo();

    const { priceId, mode, successUrl, cancelUrl, couponId } = body;

    const stripeSession = await createCheckout({
      priceId,
      mode,
      successUrl,
      cancelUrl,
      couponId,
      // If user is logged in, it will pass the user ID to the Stripe Session so we can retrieve it in the webhook later
      clientReferenceId: session?.user?.id,
      // If user is logged in, this will automatically prefill the form with their email
      user: session?.user,
    });

    return NextResponse.json({ url: stripeSession });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e?.message }, { status: 500 });
  }
}
