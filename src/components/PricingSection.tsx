import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const pricingTiers = [
  {
    name: "Starter",
    price: 99,
    description: "Perfect for Small Vendors",
    features: [
      "Up to 30 products",
      "2GB storage",
      "Basic analytics",
      "Email support",
    ],
    popular: false,
    buttonText: "Start Free Trial",
    buttonVariant: "outline" as const,
  },
  {
    name: "BizGro",
    price: 199,
    description: "For growing businesses and startups",
    features: [
      "Upto 100 Products",
      "20GB storage",
      "Advanced analytics",
      "Priority support",
      "Custom domain",
    ],
    popular: true,
    buttonText: "Start Free Trial",
    buttonVariant: "default" as const,
  },
  {
    name: "Enterprise",
    price: 399,
    description: "For large-scale operations",
    features: [
      "Everything in Professional",
      "Unlimited storage",
      "5% Commision (order above 50RM)",
      "API access (subject to use cases)",
      "Unlimited Products"
    ],
    popular: false,
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const,
  },
];

export default function PricingSection() {
  const scrollToSignup = () => {
    const element = document.querySelector('[data-testid="signup-form"]');
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-brand-cream" data-testid="pricing-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-gray mb-4" data-testid="pricing-title">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="pricing-subtitle">
            Choose the plan that fits your business size. Scale up or down anytime with no hidden fees.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <Card 
              key={index} 
              className={`shadow-lg border ${tier.popular ? 'border-2 border-brand-red relative' : 'border-gray-100'}`}
              data-testid={`pricing-card-${tier.name.toLowerCase()}`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-brand-red text-white px-4 py-2">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardContent className={`p-8 ${tier.popular ? 'mt-4' : ''}`}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-brand-gray mb-2" data-testid={`tier-name-${index}`}>
                    {tier.name}
                  </h3>
                  <div className="text-4xl font-bold text-brand-red mb-2" data-testid={`tier-price-${index}`}>
                    {tier.price}
                    <span className="text-lg text-gray-500 font-normal">/month</span>
                  </div>
                  <p className="text-gray-600" data-testid={`tier-description-${index}`}>
                    {tier.description}
                  </p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center" data-testid={`tier-feature-${index}-${featureIndex}`}>
                      <Check className="text-green-500 mr-3" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full py-3 font-semibold transition-colors ${
                    tier.popular 
                      ? 'bg-brand-red hover:bg-brand-red-dark text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-brand-gray'
                  }`}
                  onClick={tier.buttonText === "Start Free Trial" ? scrollToSignup : undefined}
                  data-testid={`button-${tier.name.toLowerCase()}`}
                >
                  {tier.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
