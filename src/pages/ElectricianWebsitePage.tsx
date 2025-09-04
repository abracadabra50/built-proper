import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Shield, 
  Phone, 
  Clock, 
  Star, 
  CheckCircle, 
  ArrowRight,
  MapPin,
  Users,
  TrendingUp,
  Award,
  AlertTriangle,
  DollarSign,
  Search,
  Smartphone,
  Home,
  Building
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ElectricianWebsitePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-orange-500/10" />
        
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span className="text-sm text-yellow-400">Electrical Specialists</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
              <span className="text-white">ELECTRICIAN WEBSITE</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">
                DESIGN & DEVELOPMENT
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Custom websites that help UK electricians get found for emergency calls, 
              rewiring jobs, and electrical installations. Built for safety, built for results.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <motion.a
                href="#quote"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-yellow-500/25 transition-all"
              >
                Get Your Electrician Website Quote
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#examples"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                See Electrician Examples
              </motion.a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { label: 'Electrician Sites Built', value: '120+', subtext: 'Qualified sparks' },
                { label: 'Emergency Call Increase', value: '420%', subtext: 'More callouts' },
                { label: 'Safety Certifications', value: '100%', subtext: 'Displayed properly' },
                { label: 'Local Search Rankings', value: 'Top 3', subtext: 'Google results' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-yellow-500 mb-1">{stat.value}</div>
                  <div className="text-sm text-white font-medium">{stat.label}</div>
                  <div className="text-xs text-gray-400">{stat.subtext}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Electrician-Specific Features */}
      <section className="py-20 px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">Features Built for</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">
                Electrical Businesses
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every feature designed for how electricians work and how customers find electrical services.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Emergency Electrical Services',
                description: 'Capture urgent electrical calls with emergency contact systems.',
                features: [
                  '24/7 emergency contact forms',
                  'Power outage response pages',
                  'Electrical fault diagnostics',
                  'Emergency electrician badges'
                ],
                color: 'yellow'
              },
              {
                icon: Home,
                title: 'Service Specializations',
                description: 'Showcase your electrical specialties from domestic to commercial work.',
                features: [
                  'Domestic electrical services',
                  'Commercial electrical work',
                  'Solar panel installations',
                  'EV charging point setup'
                ],
                color: 'green'
              },
              {
                icon: Shield,
                title: 'Safety & Certifications',
                description: 'Display your qualifications and safety standards prominently.',
                features: [
                  'NICEIC certification display',
                  'Part P compliance info',
                  'Insurance details',
                  'Safety guarantee badges'
                ],
                color: 'blue'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-yellow-500/50 transition-all"
              >
                <feature.icon className={`w-12 h-12 text-${feature.color}-500 mb-6`} />
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 text-${feature.color}-500 mt-0.5 flex-shrink-0`} />
                      <span className="text-gray-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="examples" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">Electrician Website</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">
                Success Stories
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Real UK electricians powering up their business with Built Proper websites
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Tom Richards',
                business: 'Richards Electrical',
                location: 'Bristol',
                before: 'Struggling to get domestic electrical work, low rates',
                after: 'Booked 3 months ahead, premium pricing, commercial contracts',
                quote: 'My website shows I\'m a professional electrician, not just another spark. Customers pay my rates without question.',
                results: ['600% lead increase', '£95k first year revenue', 'Hired apprentice electrician']
              },
              {
                name: 'Lisa Chen',
                business: 'PowerUp Electrical',
                location: 'Edinburgh',
                before: 'Competing with 50+ electricians on directories',
                after: 'Dominating "electrician Edinburgh" searches',
                quote: 'Built Proper helped me escape the race to the bottom. I now get the best electrical jobs in the city.',
                results: ['Ranking #1 locally', '£150k annual revenue', 'Specializing in smart homes']
              },
              {
                name: 'Mark Johnson',
                business: 'Johnson Emergency Electrical',
                location: 'Liverpool',
                before: 'Only getting small domestic jobs, inconsistent work',
                after: 'Emergency electrical specialist, commercial contracts',
                quote: 'The emergency features on my site are brilliant. I get called first when businesses have electrical emergencies.',
                results: ['400% emergency calls', '£200k revenue target', 'Commercial client base']
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-yellow-500/50 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center">
                    <Zap className="w-8 h-8 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{story.name}</h3>
                    <p className="text-yellow-400">{story.business}</p>
                    <p className="text-sm text-gray-400">{story.location}</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                    <p className="text-sm text-gray-300"><strong className="text-red-400">Before:</strong> {story.before}</p>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                    <p className="text-sm text-gray-300"><strong className="text-green-400">After:</strong> {story.after}</p>
                  </div>
                </div>
                
                <blockquote className="text-gray-300 italic border-l-4 border-yellow-500 pl-4 mb-6">
                  "{story.quote}"
                </blockquote>

                <div className="space-y-2">
                  {story.results.map((result, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-green-400">{result}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="quote" className="py-20 px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 backdrop-blur-sm border border-yellow-500/30 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">Ready to Power Up</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">
                Your Electrical Business?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 120+ UK electricians who've electrified their business with professional websites.
              <br />
              <span className="text-white font-semibold">No WordPress. No monthly fees. Just more electrical work.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-yellow-500/25 transition-all"
              >
                Get Your Free Electrician Quote
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="tel:02012345678"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                <Phone className="w-5 h-5" />
                Call: 020 1234 5678
              </motion.a>
            </div>
            
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500 mb-1">120+</div>
                <div className="text-sm text-gray-400">Electricians Trust Us</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500 mb-1">420%</div>
                <div className="text-sm text-gray-400">Average Call Increase</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500 mb-1">6-8</div>
                <div className="text-sm text-gray-400">Week Payback</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <h2 className="text-3xl font-bold text-white mb-6">
            Professional Electrician Website Design Services
          </h2>
          <p className="text-gray-300 mb-6">
            Built Proper creates custom websites exclusively for UK electricians. We understand that 
            electrical work requires trust, expertise, and immediate response capability. Our electrician 
            websites are designed to showcase your qualifications, capture emergency calls, and 
            dominate local search results.
          </p>
          <p className="text-gray-300 mb-6">
            Whether you specialize in domestic electrical work, commercial installations, or emergency 
            callouts, we build websites that reflect your professionalism and expertise. Every electrician 
            website includes safety certification displays, emergency contact systems, and local SEO 
            optimization to help you rank for "electrician near me" searches.
          </p>
          <h3 className="text-2xl font-bold text-white mb-4">
            Why Electricians Need Custom Websites
          </h3>
          <p className="text-gray-300 mb-6">
            Electrical work is about safety and trust. Customers need to know you're qualified, insured, 
            and reliable before they let you into their homes or businesses. A professional website 
            instantly establishes credibility and helps you win higher-value electrical contracts.
          </p>
          <h3 className="text-2xl font-bold text-white mb-4">
            Electrician SEO That Gets Results
          </h3>
          <p className="text-gray-300">
            Our electrician SEO strategies help you rank for the searches that bring the best work: 
            "emergency electrician [your area]", "electrical installation near me", "commercial 
            electrician [your city]". We optimize for both emergency calls and planned electrical 
            projects to keep your diary full year-round.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ElectricianWebsitePage;
