import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

const footerSections = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "/features" },
      { name: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Contact Us", href: "/contact" },
      { name: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
];

export default function Footer() {
  return (
    <footer 
      className="bg-black text-white py-12 border-t border-red-900/20"
      data-testid="footer"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div 
              className="text-2xl font-bold mb-4 text-red-500 flex items-center"
              data-testid="footer-logo"
            >
              <Image 
                src="/logo.png" // Update this path to your actual logo file
                alt="Bajgo Logo"
                width={24}
                height={24}
                className="mr-2"
              />
              Bajgo
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6" data-testid="footer-description">
              Empowering entrepreneurs with powerful e-commerce tools.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="text-gray-500 hover:text-red-500 transition-colors duration-200 p-2 rounded-lg hover:bg-red-500/10"
                  data-testid={`social-link-${social.name.toLowerCase()}`}
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide" data-testid={`footer-section-title-${index}`}>
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm hover:underline"
                      data-testid={`footer-link-${section.title.toLowerCase()}-${linkIndex}`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-sm" data-testid="footer-copyright">
            © 2024 Bajgo. All rights reserved.
          </p>
          
          <div className="text-gray-500 text-xs">
            <span className="inline-flex items-center">
              Designed with <span className="text-red-500 mx-1">❤️</span> by IME Technologies
            </span>
            <span className="mx-2 text-gray-700">•</span>
            <span className="inline-flex items-center">
              Developed with <span className="text-red-500 mx-1">❤️</span> by Agentra Technologies
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}