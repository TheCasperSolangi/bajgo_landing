import { Store, Shield, Eye, Lock, Users, Globe, Mail, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
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
              <span className="text-gray-600 text-sm">/ Privacy Policy</span>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="mr-2" size={16} />
            Your Privacy Matters
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Privacy Policy
          </h1>
          
          <p className="text-lg text-gray-600 mb-6">
            Last updated: December 2024
          </p>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            At Bajgo, we are committed to protecting your privacy and ensuring the security of your personal information.
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Information We Collect */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                <Eye className="text-red-500" size={20} />
              </div>
              <h2 className="text-2xl font-bold text-black">Information We Collect</h2>
            </div>
            
            <div className="prose prose-lg text-gray-600 space-y-4">
              <h3 className="text-lg font-semibold text-black">Personal Information</h3>
              <p>When you use our services, we may collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, email address, and contact information</li>
                <li>Business information and company details</li>
                <li>Payment and billing information</li>
                <li>Account credentials and preferences</li>
              </ul>

              <h3 className="text-lg font-semibold text-black mt-8">Usage Information</h3>
              <p>We automatically collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Device information and browser type</li>
                <li>IP address and location data</li>
                <li>Usage patterns and feature interactions</li>
                <li>Performance and error logs</li>
              </ul>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                <Users className="text-red-500" size={20} />
              </div>
              <h2 className="text-2xl font-bold text-black">How We Use Your Information</h2>
            </div>
            
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and maintain our e-commerce platform services</li>
                <li>Process transactions and manage your account</li>
                <li>Send important updates and security notifications</li>
                <li>Improve our products and develop new features</li>
                <li>Provide customer support and technical assistance</li>
                <li>Comply with legal obligations and prevent fraud</li>
              </ul>
            </div>
          </div>

          {/* Information Sharing */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                <Globe className="text-red-500" size={20} />
              </div>
              <h2 className="text-2xl font-bold text-black">Information Sharing</h2>
            </div>
            
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>We do not sell your personal information. We may share information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Providers:</strong> Third-party vendors who help us operate our platform</li>
                <li><strong>Payment Processors:</strong> To process transactions securely</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with mergers or acquisitions</li>
              </ul>
            </div>
          </div>

          {/* Data Security */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                <Lock className="text-red-500" size={20} />
              </div>
              <h2 className="text-2xl font-bold text-black">Data Security</h2>
            </div>
            
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>We implement industry-standard security measures to protect your information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Regular security audits and monitoring</li>
                <li>Access controls and authentication systems</li>
                <li>Secure data storage and backup procedures</li>
                <li>Employee training on data protection</li>
              </ul>
            </div>
          </div>

          {/* Your Rights */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                <AlertCircle className="text-red-500" size={20} />
              </div>
              <h2 className="text-2xl font-bold text-black">Your Rights</h2>
            </div>
            
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access and review your personal information</li>
                <li>Update or correct inaccurate data</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Data portability and export</li>
                <li>Withdraw consent where applicable</li>
              </ul>
              
              <p className="mt-6">
                To exercise these rights, please contact us at privacy@bajgo.com
              </p>
            </div>
          </div>

          {/* Cookies and Tracking */}
          <div className="mb-12">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-lg font-semibold text-black mb-4">Cookies and Tracking</h3>
              <p className="text-gray-600 mb-4">
                We use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content.
              </p>
              <p className="text-gray-600">
                You can manage cookie preferences through your browser settings or by contacting us directly.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-black rounded-2xl p-8 text-center">
            <Mail className="text-red-500 mx-auto mb-4" size={32} />
            <h3 className="text-2xl font-bold text-white mb-4">Questions About Privacy?</h3>
            <p className="text-gray-300 mb-6">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="text-white space-y-2">
              <p>Email: <span className="text-red-500">privacy@bajgo.com</span></p>
              <p>Address: Bajgo Privacy Team, [Your Address]</p>
            </div>
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
    </div>
  );
}