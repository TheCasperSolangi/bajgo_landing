import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Store, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50" data-testid="navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center">
                <Image 
                  src="/logo.png" // Update this path to your actual logo file
                  alt="Bajgo Logo"
                  width={32}
                  height={32}
                  className="mr-2"
                />
                <span className="text-xl font-extrabold text-red-600 font-serif tracking-wide drop-shadow-lg">
  Bajgo
</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/features">
            <button 
              
              className="text-brand-gray hover:text-brand-red transition-colors"
              data-testid="nav-features"
            >
              Features
            </button>
            </Link>
            <Link href="/pricing">
            <button 
             
              className="text-brand-gray hover:text-brand-red transition-colors"
              data-testid="nav-pricing"
            >
              Pricing
            </button>
            </Link>
            <Link href="/contact">
           
           
            <button 
              
              className="text-brand-gray hover:text-brand-red transition-colors"
              data-testid="nav-contact"
            >
              Contact
            </button>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
           
          </div>
          
          <button 
            className="md:hidden text-brand-gray"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link href="/features">
              <button 
             
                className="text-brand-gray hover:text-brand-red transition-colors text-left"
                data-testid="mobile-nav-features"
              >
                Features
              </button>
              </Link>
              <Link href="/pricing">
              <button 
             
                className="text-brand-gray hover:text-brand-red transition-colors text-left"
                data-testid="mobile-nav-pricing"
              >
                Pricing
              </button></Link>
              <Link href="/contact">
              
            
              <button 
               
                className="text-brand-gray hover:text-brand-red transition-colors text-left"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
               
             
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
