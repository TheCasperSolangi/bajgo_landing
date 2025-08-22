"use client"
import ContactSection from "@/components/ContactSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

import Navigation from "@/components/Navigation";

import FAQSection from "@/components/ui/FAQSection";


export default function Home() {
  return (
   <>
   <Navigation />
    <FeaturesSection />
    <FAQSection />
    <ContactSection />
   <Footer /> 
   </>
  );
}
