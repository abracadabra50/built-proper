import React from 'react';
import { Mail, MessageSquare, Clock, MapPin, Zap, ArrowRight, Hammer } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 bg-gradient-to-b from-slate-900 to-slate-950">
      {/* Smooth transition */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-slate-900 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter">
            LET'S BUILD
            <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              SOMETHING PROPER
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto font-light">
            Your website, done right, delivered fast. Get your free quote 
            and see exactly how we'll <span className="text-white font-semibold">transform your business</span>.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-10 border border-white/10"
          >
            <h3 className="text-3xl font-bold text-white mb-8">Get Your Free Quote</h3>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 bg-white/10 border-2 border-white/20 rounded-xl focus:border-orange-500 focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
                  required
                />
                <input
                  type="text"
                  placeholder="Business Name"
                  className="w-full p-4 bg-white/10 border-2 border-white/20 rounded-xl focus:border-orange-500 focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
                  required
                />
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-4 bg-white/10 border-2 border-white/20 rounded-xl focus:border-orange-500 focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
                  required
                />
                <label htmlFor="trade-select" className="sr-only">Select your trade</label>
                <select id="trade-select" aria-label="Select your trade" className="w-full p-4 bg-white/10 border-2 border-white/20 rounded-xl focus:border-orange-500 focus:outline-none transition-all duration-300 text-white">
                  <option value="">Your Trade</option>
                  <option value="builder">Builder</option>
                  <option value="plumber">Plumber</option>
                  <option value="electrician">Electrician</option>
                  <option value="carpenter">Carpenter</option>
                  <option value="painter">Painter & Decorator</option>
                  <option value="roofer">Roofer</option>
                  <option value="landscaper">Landscaper</option>
                  <option value="other">Other Trade</option>
                </select>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Your Location"
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border-2 border-white/20 rounded-xl focus:border-orange-500 focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
                  />
                </div>
                <label htmlFor="timeline-select" className="sr-only">Select project timeline</label>
                <select id="timeline-select" aria-label="Select project timeline" className="w-full p-4 bg-white/10 border-2 border-white/20 rounded-xl focus:border-orange-500 focus:outline-none transition-all duration-300 text-white">
                  <option value="">Project Timeline</option>
                  <option value="asap">ASAP - Need it now</option>
                  <option value="1week">Within 1 week</option>
                  <option value="2weeks">Within 2 weeks</option>
                  <option value="1month">Within 1 month</option>
                  <option value="planning">Just planning</option>
                </select>
              </div>
              
              <textarea
                placeholder="Tell us about your business and what you need..."
                rows={4}
                className="w-full p-4 bg-white/10 border-2 border-white/20 rounded-xl focus:border-orange-500 focus:outline-none resize-none transition-all duration-300 text-white placeholder-gray-400"
              />
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-orange-500/30"
              >
                Get Your Free Quote
              </motion.button>
            </form>
            
            <p className="text-sm text-gray-400 mt-6 text-center">
              No spam, no bollocks. Just a proper quote within 30 minutes.
            </p>
          </motion.div>
          
          {/* Info Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Quick Response Promise */}
            <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 backdrop-blur-sm rounded-3xl p-8 border border-orange-500/20">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">30-Minute Response</h4>
                  <p className="text-gray-400">
                    Get a proper quote within 30 minutes during business hours. 
                    No waiting around, no chasing us up.
                  </p>
                </div>
              </div>
            </div>
            
            {/* What You Get */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h4 className="text-2xl font-bold text-white mb-6">What You'll Get:</h4>
              <ul className="space-y-4">
                {[
                  'Free homepage mockup design',
                  'Exact pricing - no hidden costs',
                  'Timeline for going live',
                  'SEO strategy for your area',
                  'Examples of similar trades we\'ve helped',
                  'No-obligation consultation'
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center text-gray-300"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mr-3"></div>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            
            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center text-gray-300 hover:text-orange-400 transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="text-sm text-gray-400">hello@builtproper.co.uk</p>
                </div>
              </div>
              
              <div className="flex items-center text-gray-300">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold">Response Time</p>
                  <p className="text-sm text-gray-400">Mon-Fri: 30 minutes | Weekends: 2 hours</p>
                </div>
              </div>
              
              <div className="flex items-center text-gray-300">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="font-semibold">Coverage</p>
                  <p className="text-sm text-gray-400">Serving tradesmen across all of UK</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;