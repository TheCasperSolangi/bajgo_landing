import { Store, FileText, Users, CreditCard, AlertTriangle, Scale, Shield, Mail } from "lucide-react";
import Link from "next/link";

export default function TermsOfService() {
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
              <span className="text-gray-600 text-sm">/ Terms of Service</span>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FileText className="mr-2" size={16} />
            Legal Agreement
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Terms of Service
          </h1>
          
          <p className="text-lg text-gray-600 mb-6">
            Last updated: December 2024
          </p>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            These terms govern your use of Bajgo e-commerce platform and services.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Acceptance of Terms */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                <Scale className="text-red-500" size={20} />
              </div>
              <h2 className="text-2xl font-bold text-black">Acceptance of Terms</h2>
            </div>
            
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                By accessing or using Bajgo platform and services, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our services.
              </p>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. 
                Your continued use of our services after changes constitutes acceptance of the new terms.
              </p>
            </div>
          </div>

          {/* Service Description */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                <Store className="text-red-500" size={20} />
              </div>
              <h2 className="text-2xl font-bold text-black">Service Description</h2>
            </div>
            
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>Bajgo provides:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>E-commerce platform and website building tools</li>
                <li>Payment processing and transaction management</li>
                <li>Inventory management and order tracking</li>
                <li>Marketing and analytics tools</li>
                <li>Customer support and technical assistance</li>
              </ul>
              <p>
                Our services are provided as is and we continuously work to improve and expand our offerings.
              </p>
            </div>
          </div>

          {/* User Accounts */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                <Users className="text-red-500" size={20} />
              </div>
              <h2 className="text-2xl font-bold text-black">User Accounts</h2>
            </div>
            
            <div className="prose prose-lg text-gray-600 space-y-4">
              <h3 className="text-lg font-semibold text-black">Account Creation</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>You must provide accurate and complete information</li>
                <li>You are responsible for maintaining account security</li>
                <li>One person may not maintain multiple accounts</li>
                <li>You must be at least 18 years old to create an account</li>
              </ul>

              <h3 className="text-lg font-semibold text-black mt-8">Account Responsibilities</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Keep login credentials confidential</li>
                <li>Notify us immediately of unauthorized access</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Maintain accurate business and contact information</li>
              </ul>
            </div>
          </div>

          {/* Payment and Billing */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                <CreditCard className="text-red-500" size={20} />
              </div>
              <h2 className="text-2xl font-bold text-black">Payment and Billing</h2>
            </div>
            
            <div className="prose prose-lg text-gray-600 space-y-4">
              <h3 className="text-lg font-semibold text-black">Subscription Fees</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fees are billed in advance on a recurring basis</li>
                <li>All fees are non-refundable unless required by law</li>
                <li>We may change pricing with 30 days notice</li>
                <li>Taxes may apply based on your location</li>
              </ul>

              <h3 className="text-lg font-semibold text-black mt-8">Transaction Processing</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>We process payments through third-party providers</li>
                <li>Transaction fees may apply as outlined in your plan</li>
                <li>Chargebacks and disputes are handled per our policies</li>
                <li>You must comply with payment card industry standards</li>
              </ul>
            </div>
          </div>

          {/* Prohibited Uses */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                <AlertTriangle className="text-red-500" size={20} />
              </div>
              <h2 className="text-2xl font-bold text-black">Prohibited Uses</h2>
            </div>
            
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>You may not use our services for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Illegal activities or prohibited goods/services</li>
                <li>Fraudulent or deceptive practices</li>
                <li>Spam, malware, or harmful content</li>
                <li>Violating intellectual property rights</li>
                <li>Harassment or discriminatory content</li>
                <li>Adult content or age-restricted materials</li>
                <li>High-risk or restricted businesses</li>
              </ul>
              <p>
                We reserve the right to suspend or terminate accounts that violate these restrictions.
              </p>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                <Shield className="text-red-500" size={20} />
              </div>
              <h2 className="text-2xl font-bold text-black">Intellectual Property</h2>
            </div>
            
            <div className="prose prose-lg text-gray-600 space-y-4">
              <h3 className="text-lg font-semibold text-black">Our Rights</h3>
              <p>
                Bajgo owns all rights to our platform, software, designs, and related intellectual property. 
                We grant you a limited license to use our services according to these terms.
              </p>

              <h3 className="text-lg font-semibold text-black mt-6">Your Content</h3>
              <p>
                You retain ownership of content you upload to our platform. By using our services, you grant us 
                a license to use your content as necessary to provide our services.
              </p>
            </div>
          </div>

          {/* Liability and Disclaimers */}
          <div className="mb-12">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-lg font-semibold text-black mb-4">Liability and Disclaimers</h3>
              <div className="text-gray-600 space-y-4">
                <p>
                  <strong>Service Availability:</strong> We strive for 99.9% uptime but cannot guarantee uninterrupted service.
                </p>
                <p>
                  <strong>Limitation of Liability:</strong> Our liability is limited to the amount you paid for services in the 12 months prior to any claim.
                </p>
                <p>
                  <strong>Indemnification:</strong> You agree to indemnify Bajgo against claims arising from your use of our services.
                </p>
              </div>
            </div>
          </div>

          {/* Termination */}
          <div className="mb-12">
            <div className="prose prose-lg text-gray-600 space-y-4">
              <h3 className="text-lg font-semibold text-black">Termination</h3>
              <p>
                Either party may terminate this agreement at any time. Upon termination:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your access to services will be suspended</li>
                <li>Data may be deleted after a reasonable period</li>
                <li>Outstanding fees remain due</li>
                <li>Certain provisions survive termination</li>
              </ul>
            </div>
          </div>

          {/* Governing Law */}
          <div className="mb-12">
            <div className="prose prose-lg text-gray-600 space-y-4">
              <h3 className="text-lg font-semibold text-black">Governing Law</h3>
              <p>
                These terms are governed by the laws of [Your Jurisdiction]. Any disputes will be resolved 
                through binding arbitration or in the courts of [Your Jurisdiction].
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-black rounded-2xl p-8 text-center">
            <Mail className="text-red-500 mx-auto mb-4" size={32} />
            <h3 className="text-2xl font-bold text-white mb-4">Questions About Our Terms?</h3>
            <p className="text-gray-300 mb-6">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="text-white space-y-2">
              <p>Email: <span className="text-red-500">legal@bajgo.com</span></p>
              <p>Address: Bajgo Legal Team, [Your Address]</p>
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