import { Button } from "@/components/ui/button";
import { Rocket, Play, CheckCircle, TrendingUp, Users } from "lucide-react";

export default function HeroSection() {
  const scrollToSignup = () => {
    const element = document.querySelector('[data-testid="signup-form"]');
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section 
      className="relative text-white py-20 lg:py-32 overflow-hidden" 
      style={{
        background: 'linear-gradient(135deg, var(--brand-red), var(--brand-red-dark))'
      }}
      data-testid="hero-section"
    >
      <div className="absolute inset-0 bg-black opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6" data-testid="hero-title">
              Everyone Can  
              <span className="text-yellow-300"> Sell Online</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-red-100 leading-relaxed" data-testid="hero-subtitle">
              Build your Online empire with instant delivery
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
             <Button 
  size="lg"
  className="bg-white px-8 py-4 text-lg shadow-lg"
  style={{
    color: 'var(--brand-red)',
    backgroundColor: 'white'
  }}
  onMouseEnter={(e) => {
    (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#f3f4f6';
  }}
  onMouseLeave={(e) => {
    (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'white';
  }}
  onClick={scrollToSignup}
  data-testid="button-start-trial"
>
  <Rocket className="mr-2" size={20} />
  Start Free Trial
</Button>
             
            </div>
            
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-red-100">
              <div className="flex items-center">
                <CheckCircle className="mr-2" size={16} />
                <span>No Setup Fees</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-2" size={16} />
                <span>14-Day Free Trial</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-2" size={16} />
                <span>Cancel Anytime</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern business dashboard interface showing analytics and sales data"
              className="rounded-2xl shadow-2xl w-full transform rotate-3 hover:rotate-0 transition-transform duration-500"
              data-testid="hero-dashboard-image"
            />
            
            {/* Floating stats cards */}
            <div 
              className="absolute -top-4 -left-4 p-4 rounded-xl shadow-lg" 
              style={{
                backgroundColor: 'white',
                color: 'var(--brand-gray)'
              }}
              data-testid="stats-sales"
            >
              <div className="flex items-center space-x-2">
                <TrendingUp className="text-green-500" size={20} />
                <div>
                  <div className="text-sm font-medium">Sales Today</div>
                  <div className="text-lg font-bold">$2,847</div>
                </div>
              </div>
            </div>
            
            <div 
              className="absolute -bottom-4 -right-4 p-4 rounded-xl shadow-lg" 
              style={{
                backgroundColor: 'white',
                color: 'var(--brand-gray)'
              }}
              data-testid="stats-customers"
            >
              <div className="flex items-center space-x-2">
                <Users className="text-blue-500" size={20} />
                <div>
                  <div className="text-sm font-medium">Active Customers</div>
                  <div className="text-lg font-bold">1,249</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}