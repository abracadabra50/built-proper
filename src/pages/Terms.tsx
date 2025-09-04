import React from 'react';
import { FileText, Scale, Shield, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Terms = () => {
  return (
    <div className="font-inter antialiased bg-slate-950">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-500/5"></div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase mb-6">
              <FileText className="w-3 h-3 mr-2" />
              TERMS OF SERVICE
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight">
              Terms of Service
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              The legal terms and conditions for using Built Proper services
            </p>
            
            <p className="text-sm text-gray-400">
              Last updated: August 2025
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Content */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
                <div className="text-gray-300 space-y-4">
                  <p>By accessing and using Built Proper's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
                  
                  <p>These Terms of Service ("Terms") govern your use of our website, services, and products offered by Built Proper Ltd ("we," "us," or "our").</p>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
                <div className="text-gray-300 space-y-4">
                  <p>Built Proper provides digital services for UK trade businesses including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Custom website design and development</li>
                    <li>Search engine optimisation (SEO)</li>
                    <li>Digital marketing services</li>
                    <li>Brand design and development</li>
                    <li>AI and automation solutions</li>
                    <li>Client portal and project management tools</li>
                  </ul>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Client Responsibilities</h2>
                <div className="text-gray-300 space-y-4">
                  <p>As a client, you agree to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate and complete information</li>
                    <li>Respond to requests for information in a timely manner</li>
                    <li>Make payments according to agreed terms</li>
                    <li>Provide necessary access to accounts, systems, and materials</li>
                    <li>Review and approve work within specified timeframes</li>
                    <li>Use our services in compliance with applicable laws</li>
                  </ul>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Payment Terms</h2>
                <div className="text-gray-300 space-y-4">
                  <p><strong>Project Payments:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>50% deposit required to commence work</li>
                    <li>Remaining balance due upon project completion</li>
                    <li>Payment terms are Net 14 days unless otherwise agreed</li>
                    <li>Late payments may incur interest charges of 1.5% per month</li>
                  </ul>
                  
                  <p><strong>Ongoing Services:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Monthly services billed in advance</li>
                    <li>Payment due on the same date each month</li>
                    <li>Services may be suspended for non-payment</li>
                    <li>30 days notice required for cancellation</li>
                  </ul>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
                <div className="text-gray-300 space-y-4">
                  <p><strong>Client Ownership:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Upon full payment, clients own all custom work created specifically for them</li>
                    <li>This includes website code, designs, content, and branding materials</li>
                    <li>Clients receive full source code and design files</li>
                  </ul>
                  
                  <p><strong>Built Proper Ownership:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We retain ownership of our proprietary tools and methodologies</li>
                    <li>We retain the right to use project work for portfolio and marketing purposes</li>
                    <li>Third-party tools and licenses remain property of their respective owners</li>
                  </ul>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Warranties and Disclaimers</h2>
                <div className="text-gray-300 space-y-4">
                  <p><strong>Our Warranties:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We warrant that our services will be performed in a professional manner</li>
                    <li>We provide a 30-day warranty on all development work</li>
                    <li>We will correct any defects in our work at no additional charge</li>
                  </ul>
                  
                  <p><strong>Disclaimers:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We cannot guarantee specific results from SEO or marketing services</li>
                    <li>Third-party platform changes may affect functionality</li>
                    <li>We are not responsible for content provided by clients</li>
                  </ul>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
                <div className="text-gray-300 space-y-4">
                  <p>Our total liability for any claim arising from our services shall not exceed the total amount paid by the client for the specific service that gave rise to the claim.</p>
                  
                  <p>We shall not be liable for:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Indirect, incidental, or consequential damages</li>
                    <li>Loss of profits, revenue, or business opportunities</li>
                    <li>Damages caused by third-party services or platforms</li>
                    <li>Issues arising from client-provided content or materials</li>
                  </ul>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Termination</h2>
                <div className="text-gray-300 space-y-4">
                  <p><strong>By Client:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Projects may be cancelled with written notice</li>
                    <li>Client is responsible for payment of work completed</li>
                    <li>Ongoing services require 30 days notice</li>
                  </ul>
                  
                  <p><strong>By Built Proper:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We may terminate services for non-payment</li>
                    <li>We may terminate for breach of these terms</li>
                    <li>We will provide reasonable notice when possible</li>
                  </ul>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Confidentiality</h2>
                <div className="text-gray-300 space-y-4">
                  <p>Both parties agree to maintain confidentiality of:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Business information and trade secrets</li>
                    <li>Customer data and personal information</li>
                    <li>Proprietary methods and processes</li>
                    <li>Financial information and pricing</li>
                  </ul>
                  
                  <p>This obligation survives termination of our agreement.</p>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. Force Majeure</h2>
                <div className="text-gray-300 space-y-4">
                  <p>Neither party shall be liable for any failure or delay in performance due to circumstances beyond their reasonable control, including but not limited to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Natural disasters or extreme weather</li>
                    <li>Government actions or regulations</li>
                    <li>Internet or infrastructure failures</li>
                    <li>Pandemics or health emergencies</li>
                  </ul>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">11. Governing Law</h2>
                <div className="text-gray-300 space-y-4">
                  <p>These Terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">12. Changes to Terms</h2>
                <div className="text-gray-300 space-y-4">
                  <p>We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Continued use of our services constitutes acceptance of modified terms.</p>
                  
                  <p>For material changes, we will provide reasonable notice to existing clients.</p>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">13. Contact Information</h2>
                <div className="text-gray-300 space-y-4">
                  <p>If you have questions about these Terms, please contact us:</p>
                  
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-white/10 mt-6">
                    <div className="space-y-3">
                      <p><strong>Built Proper Ltd</strong></p>
                      <p>Email: legal@builtproper.com</p>
                      <p>Address: WeWork, 1 St Peter's Square, Manchester M2 3AE, United Kingdom</p>
                      <p>Company Registration: [Company Number]</p>
                      <p>VAT Number: [VAT Number]</p>
                    </div>
                  </div>
                </div>
              </section>
              
              <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/30 rounded-2xl p-6 mt-12">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Important Notice</h3>
                    <p className="text-gray-300 text-sm">
                      These terms are designed to be fair and transparent. If you have any questions or concerns about any clause, 
                      please contact us before engaging our services. We're happy to clarify any points or discuss modifications 
                      for larger projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Terms;
