"use client"
import ContactSection from "@/components/ContactSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import PricingSection from "@/components/PricingSection";
import QuickSignupForm from "@/components/QuickSignupForm";
import TestimonialsSection from "@/components/TestimonialSection";
import FAQSection from "@/components/ui/FAQSection";


export default function Home() {
  return (
   <>
   <Navigation />
   <HeroSection />

   <FeaturesSection />
   <PricingSection />
   <TestimonialsSection />
   <FAQSection />
   <ContactSection />
   <Footer /> 
   </>
  );
}
