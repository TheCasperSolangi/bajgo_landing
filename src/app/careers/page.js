"use client"
import { Store, Users, Mail, MapPin, Clock, Heart, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const companyValues = [
  {
    title: "Innovation First",
    description: "We push boundaries and embrace cutting-edge technologies to deliver exceptional e-commerce solutions."
  },
  {
    title: "Customer Obsessed",
    description: "Every decision we make is centered around creating value and success for our customers."
  },
  {
    title: "Team Collaboration",
    description: "We believe in the power of diverse perspectives and collaborative problem-solving."
  },
  {
    title: "Quality Excellence",
    description: "We maintain the highest standards in everything we build and deliver."
  }
];

export default function CareersPage() {
  const [showDialog, setShowDialog] = useState(false);
  const [email, setEmail] = useState("");

  const handleNotifyClick = () => {
    setShowDialog(true);
  };

  const handleEmailSubmit = () => {
    if (email.trim()) {
      setShowDialog(true);
    }
  };

  const closeDialog = () => {
    setShowDialog(false);
    setEmail("");
  };
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Link href="/">
            <div className="text-2xl font-bold text-red-500 flex items-center">
              <Store className="mr-2" size={24} />
              Bajgo
            </div>
            </Link>
            <nav className="ml-8">
              <span className="text-gray-600 text-sm">/ Careers</span>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Clock className="mr-2" size={16} />
            Currently Not Hiring
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Join the Future of
            <span className="text-red-500 block">E-commerce</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            While we are not actively recruiting at the moment, we are always interested in connecting 
            with talented individuals who share our passion for innovation and excellence.
          </p>
          
          <div className="flex justify-center">
           
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Our Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              These core principles guide everything we do and shape the culture we are building.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:border-red-200 hover:shadow-lg transition-all duration-200">
                <h3 className="text-xl font-semibold text-black mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We're Building */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">What We are Building</h2>
            <p className="text-gray-600 text-lg">
              We are creating the next generation of e-commerce tools that empower entrepreneurs worldwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Store className="text-red-500" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Powerful Platform</h3>
              <p className="text-gray-600">Comprehensive e-commerce solutions for businesses of all sizes.</p>
            </div>
            
            <div className="p-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="text-red-500" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Community Focus</h3>
              <p className="text-gray-600">Building tools that bring entrepreneurs and customers together.</p>
            </div>
            
            <div className="p-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="text-red-500" size={24} />
              </div>
              <h3 className="text-lg font-semibent text-black mb-2">Impact Driven</h3>
              <p className="text-gray-600">Creating meaningful change in how people build and grow businesses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stay Connected */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-black rounded-2xl p-12">
            <Mail className="text-red-500 mx-auto mb-6" size={48} />
            <h2 className="text-3xl font-bold text-white mb-4">Stay in Touch</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              While we are not hiring right now, we do love to hear from exceptional talent. 
              Drop us a line and we will keep you in mind for future opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
              />
              <button 
                onClick={handleEmailSubmit}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 whitespace-nowrap"
              >
                Notify Me
              </button>
            </div>
            
            <p className="text-gray-400 text-sm mt-4">
              We will let you know when new positions open up.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Credits */}
      <footer className="py-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500 text-sm">
            <span className="inline-flex items-center">
              Designed with <span className="text-red-500 mx-1">❤️</span> by IME Technologies
            </span>
            <span className="mx-2 text-gray-300">•</span>
            <span className="inline-flex items-center">
              Developed with <span className="text-red-500 mx-1">❤️</span> by Agentra Technologies
            </span>
          </div>
        </div>
      </footer>

      {/* Thank You Dialog */}
      {showDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md mx-4 relative">
            <button 
              onClick={closeDialog}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-red-500" size={24} />
              </div>
              
              <h3 className="text-2xl font-bold text-black mb-4">Thank You!</h3>
              <p className="text-gray-600 mb-6">
                We will be in touch with you when new opportunities become available.
              </p>
              
              <button 
                onClick={closeDialog}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}