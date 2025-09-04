import React from 'react';
import { Check, Star, Zap, Crown, Rocket, Building, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const packages = [
    {
      name: 'Basic Build',
      icon: Building,
      price: 'Get Quote',
      description: 'Get online quick and proper',
      features: [
        'Solid 1-page website',
        'Works on phones & tablets', 
        'Contact form that actually works',
        'Google Business sorted',
        'Basic SEO to get found',
        '1 month backup if needed'
      ],
      cta: 'Get Your Quote',
      popular: false,
      savings: null
    },
    {
      name: 'Proper Build',
      icon: Crown,
      price: 'Get Quote',
      description: 'The full works for serious tradesmen',
      features: [
        'Full 5-page website',
        'Logo designed proper',
        'Show off your best work',
        'Quote system that converts',
        'Google Maps sorted',
        'SEO to dominate local search',
        '3 months backup',
        'Social media handled'
      ],
      cta: 'Get Your Quote',
      popular: true,
      savings: 'Best Value',
    },
    {
      name: 'Business Dominator',
      icon: Rocket,
      price: 'Get Quote',
      description: 'Everything to dominate your local market',
      features: [
        'Full website + blog',
        'Complete branding sorted',
        'SEO to crush competition',
        'Google Ads managed properly',
        'Reviews handled for you',
        'Content created monthly',
        '6 months full support',
        'Track every lead coming in'
      ],
      cta: 'Get Your Quote',
      popular: false,
      savings: 'Premium Package'
    }
  ];

  return (
    <section id="pricing" className="relative py-32 bg-gradient-to-b from-slate-900 to-slate-950">
      {/* Smooth transition */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-slate-900 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter">
            CHOOSE YOUR
            <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              PACKAGE
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto font-light">
            Pick what works for your business and 
            <span className="text-white font-semibold"> get a custom quote</span>.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {packages.map((pkg, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${
                pkg.popular ? 'transform scale-105' : ''
              }`}
            >
              <motion.div 
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className={`h-full rounded-3xl p-10 ${
                  pkg.popular 
                    ? 'bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-sm border-2 border-orange-500/50 shadow-2xl shadow-orange-500/20' 
                    : 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10'
                }`}>
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Savings Badge */}
                {pkg.savings && !pkg.popular && (
                  <div className="absolute -top-4 right-6">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-xs font-bold">
                      {pkg.savings}
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mb-6 shadow-lg">
                    <pkg.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4 text-white">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {pkg.description}
                  </p>
                  <div className="text-sm text-orange-400 font-semibold uppercase tracking-wider">
                    Custom Pricing Available
                  </div>
                </div>
              
                <ul className="space-y-4 mb-10">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-orange-400" />
                      <span className="text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-5 px-8 rounded-full font-bold transition-all duration-300 text-lg flex items-center justify-center ${
                    pkg.popular 
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-2xl hover:shadow-orange-500/30' 
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-orange-500/50'
                  }`}
                >
                  {pkg.cta}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-orange-500/10 to-orange-600/10 backdrop-blur-sm border border-orange-500/20 rounded-3xl p-12 max-w-2xl">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Money Back If It Doesn't Work</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              30 days to see results or we'll give you every penny back. No questions, no bollocks. 
              <span className="text-orange-400 font-semibold"> That's how sure we are.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;