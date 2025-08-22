import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    business: "Handmade Jewelry Store",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64",
    rating: 5,
    testimonial: "StoreForge transformed my small craft business into a thriving online empire. The ease of use and powerful features helped me scale from $1K to $50K monthly revenue.",
  },
  {
    name: "Michael Chen",
    business: "Tech Accessories Store",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64",
    rating: 5,
    testimonial: "The analytics and inventory management features are game-changers. I can track everything in real-time and make data-driven decisions for my business.",
  },
  {
    name: "Emma Rodriguez",
    business: "Fashion Boutique",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64",
    rating: 5,
    testimonial: "Customer support is incredible! They helped me migrate from my old platform seamlessly. My sales increased 300% within the first three months.",
  },
];

const partners = ["STRIPE", "PAYPAL", "SHOPIFY", "AMAZON"];

export default function TestimonialsSection() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-gray mb-4" data-testid="testimonials-title">
            Loved by Thousands of Vendors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="testimonials-subtitle">
            See what our successful merchants have to say about growing their business with StoreForge
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm" data-testid={`testimonial-card-${index}`}>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex" data-testid={`rating-${index}`}>
                    {renderStars(testimonial.rating)}
                  </div>
                  <span className="ml-2 text-gray-600 text-sm">{testimonial.rating}.0</span>
                </div>
                <blockquote className="text-gray-600 mb-6 leading-relaxed" data-testid={`testimonial-quote-${index}`}>
                  {testimonial.testimonial}
                </blockquote>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.name}, ${testimonial.business} owner`}
                    className="w-12 h-12 rounded-full mr-4" 
                    data-testid={`testimonial-avatar-${index}`}
                  />
                  <div>
                    <div className="font-semibold text-brand-gray" data-testid={`testimonial-name-${index}`}>
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500" data-testid={`testimonial-business-${index}`}>
                      {testimonial.business}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-gray-500 mb-8" data-testid="trust-indicator">
            Trusted by over 10,000+ businesses worldwide
          </p>
          
          <div className="flex justify-center items-center space-x-8 opacity-50">
            {partners.map((partner, index) => (
              <div key={index} className="text-2xl font-bold text-gray-400" data-testid={`partner-${index}`}>
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
