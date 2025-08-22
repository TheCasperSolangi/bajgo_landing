import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How quickly can I launch my store?",
    answer: "You can have your store up and running in under 30 minutes. Our guided setup wizard walks you through every step, from choosing a template to adding your first products.",
  },
  {
    question: "Do I need technical knowledge to use StoreForge?",
    answer: "Not at all! StoreForge is designed for entrepreneurs, not developers. Our drag-and-drop interface makes it easy to customize your store without any coding knowledge.",
  },
  {
    question: "What payment methods are supported?",
    answer: "We support all major credit cards, PayPal, Apple Pay, Google Pay, and many local payment methods. All transactions are secured with industry-standard encryption.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time with no cancellation fees. Your store will remain active until the end of your current billing period.",
  },
  {
    question: "Is there a setup fee?",
    answer: "No setup fees, ever. You only pay your monthly subscription fee. We believe in transparent pricing with no hidden costs or surprise charges.",
  },
];

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-brand-cream" data-testid="faq-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-gray mb-4" data-testid="faq-title">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600" data-testid="faq-subtitle">
            Everything you need to know about getting started with StoreForge
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-white shadow-sm" data-testid={`faq-item-${index}`}>
              <button 
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors" 
                onClick={() => toggleFAQ(index)}
                data-testid={`faq-toggle-${index}`}
              >
                <span className="text-lg font-semibold text-brand-gray" data-testid={`faq-question-${index}`}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`text-brand-red transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}
                  size={20}
                />
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-4 text-gray-600" data-testid={`faq-answer-${index}`}>
                  {faq.answer}
                </div>
              )}
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button 
            className="bg-brand-red hover:bg-brand-red-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            data-testid="button-contact-support"
          >
            <span className="mr-2">💬</span>
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}
