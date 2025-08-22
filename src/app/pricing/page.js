"use client"

import Footer from "@/components/Footer";

import Navigation from "@/components/Navigation";
import PricingSection from "@/components/PricingSection";
import QuickSignupForm from "@/components/QuickSignupForm";

export default function Home() {
  return (
   <>
   <Navigation />
    <PricingSection />
    <QuickSignupForm />
   <Footer /> 
   </>
  );
}
