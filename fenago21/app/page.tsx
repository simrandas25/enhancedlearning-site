import { Suspense } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import SolutionSection from "../components/SolutionSection";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import ROICalculator from "../components/ROICalculator";
import Pricing from "../components/Pricing";
import Testimonials3 from "../components/Testimonials3";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { getSEOTags } from "../libs/seo";

// Academic AI platform metadata
export const metadata = getSEOTags({
  title: "AI-Powered University Management Platform | Transform Your Campus Operations",
  description: "Revolutionize your university operations with our AI platform. Reduce administrative costs by 75%, improve student retention by 18%, and empower faculty with intelligent automation. Trusted by 150+ academic institutions.",
  canonicalUrlRelative: "/"
});

export default function Home(): JSX.Element {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <main>
        {/* FeNAgO - The complete platform for building agentic AI-powered SaaS products */}
        <Hero />
        <Problem />
        <SolutionSection />
        <FeaturesAccordion />
        <ROICalculator />
        <Pricing />
        <Testimonials3 />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
