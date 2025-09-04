import React from 'react';
import { Shield, Code2, Zap, Gauge, Lock, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

const ProperGuarantee = () => {
  const guarantees = [
    {
      icon: Code2,
      title: 'Built Proper',
      description: 'Every line of code written from scratch. No templates, no WordPress, no shortcuts. Proper custom development.'
    },
    {
      icon: Zap,
      title: 'Fast Proper',
      description: 'Under 2-second load times guaranteed. If your site runs slow, we fix it free. That\'s proper fast.'
    },
    {
      icon: Shield,
      title: 'Secure Proper',
      description: 'No plugins to hack, no vulnerabilities to exploit. Bank-level security because we build it proper.'
    },
    {
      icon: Gauge,
      title: 'Performs Proper',
      description: 'Google PageSpeed score of 90+ or your money back. SEO-optimised to rank proper high.'
    },
    {
      icon: Lock,
      title: 'Yours Proper',
      description: 'You own every line of code. No licensing, no subscriptions, no nonsense. It\'s yours, proper.'
    },
    {
      icon: HeartHandshake,
      title: 'Supported Proper',
      description: '30-day support after launch, UK-based team, actual humans answer the phone. Proper support.'
    }
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-950 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 text-green-400 px-6 py-3 rounded-full text-sm font-bold tracking-wider uppercase mb-8"
          >
            <Shield className="w-4 h-4 mr-3" />
            The Built Proper Standard
          </motion.div>
          
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter">
            BUILT PROPER
            <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              OR YOUR MONEY BACK
            </span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-400 max-w-4xl mx-auto font-light">
            We don't just say it's built proper - we guarantee it. 
            <span className="text-white font-semibold"> Every site comes with the Built Proper promise: 
            if it's not proper, we make it proper. Simple as that.</span>
          </p>
        </motion.div>

        {/* Guarantee Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <guarantee.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">
                  {guarantee.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {guarantee.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The Proper Promise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-3xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            The Proper Promise
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Every Built Proper site comes with our signature badge. It's not just a logo - 
            it's a mark of quality that tells your customers this site was built right. 
            Built proper. Built to last. Built to perform.
          </p>
          
          {/* Badge Preview */}
          <div className="inline-flex items-center bg-slate-900 border border-slate-700 rounded-full px-6 py-3 mb-8">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3"></div>
            <span className="text-white font-bold mr-2">This site was</span>
            <span className="text-orange-400 font-black">BUILT PROPER</span>
            <span className="text-gray-500 ml-2">✓</span>
          </div>
          
          <p className="text-sm text-gray-500">
            * The Built Proper badge is a mark of quality. Sites displaying this badge meet our strict standards for code quality, 
            performance, security, and user experience. Verified and guaranteed.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Want Your Site Built Proper?
          </h3>
          <p className="text-xl text-gray-400 mb-8">
            Join hundreds of UK tradesmen who've gone from broken to proper.
          </p>
          <motion.a
            href="#quote"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300"
          >
            Get Built Proper
            <Shield className="ml-2 w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProperGuarantee;
