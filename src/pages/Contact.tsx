import React, { useState } from 'react';
import { Mail, MapPin, Clock, Phone, Send, CheckCircle, MessageSquare, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AlexChat from '../components/AlexChat';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    service: '',
    message: '',
    timeline: '',
    budget: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: MessageSquare,
      title: "Get Your Quote",
      description: "Fill out our quote form for a detailed proposal",
      action: "Start Quote",
      primary: true
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "hello@builtproper.com",
      action: "Send Email",
      primary: false
    },
    {
      icon: Calendar,
      title: "Book a Call",
      description: "Schedule a 30-minute strategy call",
      action: "Book Call",
      primary: false
    }
  ];

  const offices = [
    {
      city: "Manchester",
      address: "WeWork, 1 St Peter's Square",
      postcode: "Manchester M2 3AE",
      region: "North West England"
    },
    {
      city: "London", 
      address: "The Shard, 32 London Bridge Street",
      postcode: "London SE1 9SG",
      region: "Greater London"
    },
    {
      city: "Edinburgh",
      address: "CodeBase, 38 Castle Terrace",
      postcode: "Edinburgh EH3 9SJ", 
      region: "Scotland"
    }
  ];

  return (
    <div className="font-inter antialiased bg-slate-950">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-500/5"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase mb-6">
              <MessageSquare className="w-3 h-3 mr-2" />
              GET IN TOUCH
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight">
              Let's Build Something<br />
              <span className="text-orange-400">Proper Together</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Ready to transform your trade business? Get a custom quote in 24 hours or book a call to discuss your project.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Options */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`text-center p-8 rounded-2xl border transition-all hover:scale-105 ${
                  info.primary 
                    ? 'bg-gradient-to-br from-orange-500/20 to-orange-600/20 border-orange-500/50' 
                    : 'bg-slate-800/50 border-white/10 hover:border-orange-500/30'
                }`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                  info.primary 
                    ? 'bg-gradient-to-br from-orange-500 to-orange-600' 
                    : 'bg-gradient-to-br from-slate-700 to-slate-800'
                }`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                <p className="text-gray-400 mb-4">{info.description}</p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`font-semibold px-6 py-3 rounded-full transition-all ${
                    info.primary
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-lg hover:shadow-orange-500/30'
                      : 'border border-white/20 text-white hover:border-orange-500/50 hover:text-orange-400'
                  }`}
                >
                  {info.action}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Quote Form */}
      <section id="quote" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black text-white mb-4">
              Get Your Custom Quote
            </h2>
            <p className="text-xl text-gray-400">
              Tell us about your project and we'll send you a detailed proposal within 24 hours
            </p>
          </motion.div>
          
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-white/10"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 transition-all"
                  placeholder="John Smith"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 transition-all"
                  placeholder="07123 456789"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  name="business"
                  value={formData.business}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 transition-all"
                  placeholder="Smith Plumbing Ltd"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Service Needed *
                </label>
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-orange-500/50 transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="website">Custom Website</option>
                  <option value="seo">Local SEO</option>
                  <option value="branding">Trade Branding</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="ai">AI & Automation</option>
                  <option value="complete">Complete Package</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Timeline
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-orange-500/50 transition-all"
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP</option>
                  <option value="1month">Within 1 month</option>
                  <option value="3months">Within 3 months</option>
                  <option value="6months">Within 6 months</option>
                  <option value="planning">Just planning</option>
                </select>
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Budget Range
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-700/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-orange-500/50 transition-all"
              >
                <option value="">Select budget range</option>
                <option value="under5k">Under £5,000</option>
                <option value="5k-10k">£5,000 - £10,000</option>
                <option value="10k-20k">£10,000 - £20,000</option>
                <option value="20k-50k">£20,000 - £50,000</option>
                <option value="over50k">£50,000+</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Tell us about your project *
              </label>
              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-700/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 transition-all resize-none"
                placeholder="Describe your business, goals, and what you're looking to achieve..."
              />
            </div>
            
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 rounded-lg hover:shadow-2xl hover:shadow-orange-500/30 transition-all flex items-center justify-center"
            >
              <Send className="mr-2 w-5 h-5" />
              Send My Quote Request
            </motion.button>
            
            <p className="text-sm text-gray-400 mt-4 text-center">
              We'll respond within 24 hours with a detailed proposal
            </p>
          </motion.form>
        </div>
      </section>
      
      {/* Office Locations */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-white mb-4">
              Our Offices
            </h2>
            <p className="text-xl text-gray-400">
              UK-based team with offices across England and Scotland
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-2xl p-6 border border-white/10 text-center"
              >
                <MapPin className="w-8 h-8 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{office.city}</h3>
                <p className="text-gray-400 mb-1">{office.address}</p>
                <p className="text-gray-400 mb-2">{office.postcode}</p>
                <p className="text-sm text-orange-400">{office.region}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center bg-slate-800/50 rounded-full px-6 py-3 border border-white/10">
              <Clock className="w-5 h-5 text-orange-400 mr-2" />
              <span className="text-gray-300">Mon-Fri: 9:00-17:30 GMT</span>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
      <AlexChat />
    </div>
  );
};

export default Contact;
