import { Card, CardContent } from "@/components/ui/card";
import { Paintbrush, CreditCard, TrendingUp, Smartphone, Truck, Headphones, Check } from "lucide-react";

const features = [
  {
    icon: Paintbrush,
    title: "Custom Store Design",
    description: "Choose from hundreds of professional templates or create your own unique design with our drag-and-drop builder.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Accept all major payment methods with built-in fraud protection and PCI compliance included.",
  },
  {
    icon: TrendingUp,
    title: "Advanced Analytics",
    description: "Track sales, customer behavior, and inventory with detailed reports and real-time dashboards.",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Your store looks perfect on every device with responsive design and mobile-first optimization.",
  },
  {
    icon: Truck,
    title: "Shipping Management",
    description: "Integrate with major carriers for real-time rates, tracking, and automated label printing.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Get help when you need it with our expert support team available around the clock.",
  },
];

const benefits = [
  "Unlimited products and categories",
  "Multi-currency and multi-language support",
  "Advanced inventory management",
  "SEO optimization built-in",
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white" data-testid="features-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-gray mb-4" data-testid="features-title">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="features-subtitle">
            From storefront design to payment processing, we have got every aspect of your e-commerce business covered
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-lg transition-shadow" data-testid={`feature-card-${index}`}>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-brand-red-light rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="text-brand-red" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-brand-gray mb-4" data-testid={`feature-title-${index}`}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed" data-testid={`feature-description-${index}`}>
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern SaaS platform dashboard showing comprehensive business management tools"
              className="rounded-2xl shadow-2xl w-full" 
              data-testid="features-showcase-image"
            />
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-brand-gray mb-6" data-testid="scale-title">
              Built for Scale
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed" data-testid="scale-description">
              Whether you are just starting out or processing thousands of orders daily, 
              StoreForge grows with your business automatically.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center" data-testid={`benefit-${index}`}>
                  <Check className="text-green-500 mr-4" size={20} />
                  <span className="text-brand-gray">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
