import React from 'react';
import { Shield, Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Privacy = () => {
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
              <Shield className="w-3 h-3 mr-2" />
              PRIVACY POLICY
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight">
              Your Privacy Matters
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              How Built Proper collects, uses, and protects your personal information
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
                <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                <div className="text-gray-300 space-y-4">
                  <p>We collect information you provide directly to us, such as when you:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Fill out our contact or quote forms</li>
                    <li>Subscribe to our newsletter or blog updates</li>
                    <li>Create an account in our client portal</li>
                    <li>Communicate with us via email, phone, or chat</li>
                    <li>Participate in surveys or feedback requests</li>
                  </ul>
                  
                  <p><strong>Types of information collected:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Contact information (name, email, phone number, address)</li>
                    <li>Business information (company name, industry, website)</li>
                    <li>Project details and requirements</li>
                    <li>Payment and billing information</li>
                    <li>Communications and correspondence</li>
                  </ul>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                <div className="text-gray-300 space-y-4">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send you technical notices, updates, and support messages</li>
                    <li>Respond to your comments, questions, and customer service requests</li>
                    <li>Communicate with you about products, services, and events</li>
                    <li>Monitor and analyse trends, usage, and activities</li>
                    <li>Personalise and improve your experience</li>
                  </ul>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
                <div className="text-gray-300 space-y-4">
                  <p>We do not sell, trade, or otherwise transfer your personal information to third parties except:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Service Providers:</strong> Trusted partners who assist us in operating our website and conducting business</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition</li>
                    <li><strong>With Your Consent:</strong> When you explicitly agree to share information</li>
                  </ul>
                  
                  <p>All third-party service providers are contractually obligated to maintain the confidentiality of your information.</p>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
                <div className="text-gray-300 space-y-4">
                  <p>We implement appropriate security measures to protect your personal information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Encryption:</strong> All data is encrypted in transit and at rest using industry-standard methods</li>
                    <li><strong>Access Controls:</strong> Strict access controls limit who can view your information</li>
                    <li><strong>Regular Audits:</strong> We conduct regular security audits and assessments</li>
                    <li><strong>Staff Training:</strong> All team members are trained on data protection practices</li>
                    <li><strong>UK Servers:</strong> All data is stored on secure servers within the United Kingdom</li>
                  </ul>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights (GDPR)</h2>
                <div className="text-gray-300 space-y-4">
                  <p>Under GDPR, you have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Access:</strong> Request a copy of your personal data</li>
                    <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                    <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                    <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
                    <li><strong>Restriction:</strong> Limit how we process your data</li>
                    <li><strong>Object:</strong> Object to processing based on legitimate interests</li>
                    <li><strong>Withdraw Consent:</strong> Withdraw consent for processing where applicable</li>
                  </ul>
                  
                  <p>To exercise these rights, contact us at <a href="mailto:privacy@builtproper.com" className="text-orange-400 hover:text-orange-300">privacy@builtproper.com</a></p>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Cookies and Tracking</h2>
                <div className="text-gray-300 space-y-4">
                  <p>We use cookies and similar technologies to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Remember your preferences and settings</li>
                    <li>Analyse website traffic and usage patterns</li>
                    <li>Improve our website functionality</li>
                    <li>Provide personalised content and advertisements</li>
                  </ul>
                  
                  <p>You can control cookies through your browser settings. However, disabling cookies may affect website functionality.</p>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Data Retention</h2>
                <div className="text-gray-300 space-y-4">
                  <p>We retain your personal information for as long as necessary to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide our services to you</li>
                    <li>Comply with legal obligations</li>
                    <li>Resolve disputes and enforce agreements</li>
                  </ul>
                  
                  <p>Typically, we retain client data for 7 years after project completion for business and legal purposes.</p>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Children's Privacy</h2>
                <div className="text-gray-300 space-y-4">
                  <p>Our services are not directed to children under 16. We do not knowingly collect personal information from children under 16. If we become aware that we have collected such information, we will take steps to delete it promptly.</p>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Changes to This Policy</h2>
                <div className="text-gray-300 space-y-4">
                  <p>We may update this Privacy Policy from time to time. We will notify you of any changes by:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Posting the new Privacy Policy on this page</li>
                    <li>Sending you an email notification (for material changes)</li>
                    <li>Updating the "last updated" date at the top of this policy</li>
                  </ul>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
                <div className="text-gray-300 space-y-4">
                  <p>If you have any questions about this Privacy Policy, please contact us:</p>
                  
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-white/10 mt-6">
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-orange-400 mr-3" />
                        <span>privacy@builtproper.com</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-orange-400 mr-3" />
                        <span>Data Protection Officer</span>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 text-orange-400 mr-3 mt-0.5" />
                        <div>
                          <p>Built Proper Ltd</p>
                          <p>WeWork, 1 St Peter's Square</p>
                          <p>Manchester M2 3AE</p>
                          <p>United Kingdom</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Privacy;
