import React, { useState } from 'react';
import { Lock, Mail, Eye, EyeOff, ArrowRight, Shield, Users, Clock, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ClientPortal = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', formData);
  };

  const features = [
    {
      icon: BarChart3,
      title: "Real-Time Progress",
      description: "Track your project milestones and see exactly what's being worked on"
    },
    {
      icon: Users,
      title: "Direct Team Access",
      description: "Chat directly with developers, designers, and project managers"
    },
    {
      icon: Clock,
      title: "Timeline Tracking",
      description: "See project timelines, deadlines, and delivery schedules"
    },
    {
      icon: Shield,
      title: "Secure File Sharing",
      description: "Access all project files, assets, and documentation safely"
    }
  ];

  return (
    <div className="font-inter antialiased bg-slate-950 min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-500/5"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Login Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase mb-6">
                <Lock className="w-3 h-3 mr-2" />
                CLIENT PORTAL
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight">
                Welcome Back
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                Access your project dashboard, chat with your team, and track progress in real-time.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      required
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-12 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 transition-all"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 text-orange-500 bg-slate-800 border-white/10 rounded focus:ring-orange-500/50" />
                    <span className="ml-2 text-sm text-gray-300">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-orange-400 hover:text-orange-300 transition-colors">
                    Forgot password?
                  </a>
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-3 rounded-lg hover:shadow-2xl hover:shadow-orange-500/30 transition-all flex items-center justify-center"
                >
                  Access Portal
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
              </form>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-sm text-gray-400 text-center">
                  Don't have access yet?{' '}
                  <a href="/contact" className="text-orange-400 hover:text-orange-300 transition-colors">
                    Contact your project manager
                  </a>
                </p>
              </div>
            </motion.div>
            
            {/* Right Column - Features */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-black text-white mb-4">
                  Your Project Command Centre
                </h2>
                <p className="text-gray-400">
                  Complete transparency and control over your Built Proper project. See everything, chat with everyone, track all progress.
                </p>
              </div>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-bold text-white mb-2">Portal Features</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></div>
                    Real-time project updates
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></div>
                    Direct team messaging
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></div>
                    File and asset library
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></div>
                    Invoice and payment history
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></div>
                    Performance analytics
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Security Notice */}
      <section className="py-12 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800/30 rounded-2xl p-6 border border-white/10 text-center"
          >
            <Shield className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Bank-Level Security</h3>
            <p className="text-gray-400 text-sm">
              Your portal is protected with 256-bit SSL encryption, two-factor authentication, and regular security audits. 
              All data stays on UK servers and is fully GDPR compliant.
            </p>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ClientPortal;
