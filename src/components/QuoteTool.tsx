import React, { useState } from 'react';
import { ChevronRight, Calculator, MapPin, Palette, Search, Hammer, Wrench, Zap, HardHat, Paintbrush, TreePine, ToyBrick as Brick, Square, Cog, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const QuoteTool = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    trade: '',
    location: '',
    needsLogo: false,
    needsSEO: false
  });

  const trades = [
    { name: 'Builder', icon: Hammer, emoji: '🏗️' },
    { name: 'Plumber', icon: Wrench, emoji: '🔧' },
    { name: 'Electrician', icon: Zap, emoji: '⚡' },
    { name: 'Joiner', icon: Square, emoji: '🪚' },
    { name: 'Roofer', icon: HardHat, emoji: '🏠' },
    { name: 'Decorator', icon: Paintbrush, emoji: '🎨' },
    { name: 'Landscaper', icon: TreePine, emoji: '🌿' },
    { name: 'Plasterer', icon: Brick, emoji: '🧱' },
    { name: 'Tiler', icon: Square, emoji: '⬜' },
    { name: 'Other', icon: Cog, emoji: '🔨' }
  ];

  return (
    <section id="quote" className="relative py-32 bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Smooth transition */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-slate-950 to-transparent pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 text-orange-400 px-6 py-3 rounded-full text-sm font-bold tracking-wider uppercase mb-8">
            <Calculator className="w-4 h-4 mr-3" />
            Instant Quote Calculator
          </div>
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter">
            GET YOUR
            <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              INSTANT QUOTE
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-400 font-light">
            Tell us about your trade and get a personalised quote in 
            <span className="text-white font-semibold"> 30 seconds</span>
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/10"
        >
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-gray-400">Step {step} of 3</span>
              <span className="text-sm font-medium text-orange-400">{Math.round((step / 3) * 100)}% Complete</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(step / 3) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {/* Step 1: Choose Trade */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">What's your trade?</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                  {trades.map((trade) => (
                    <motion.button
                      key={trade.name}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setFormData({ ...formData, trade: trade.name });
                        setStep(2);
                      }}
                      className="group p-6 border-2 border-white/20 rounded-2xl hover:border-orange-500 hover:bg-white/5 transition-all duration-300 text-center"
                    >
                      <span className="text-3xl mb-2 block">{trade.emoji}</span>
                      <span className="font-semibold text-gray-300 group-hover:text-orange-400 transition-colors">
                        {trade.name}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Location & Extras */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Where are you based?</h3>
                <div className="space-y-6">
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Enter your city or postcode"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border-2 border-white/20 rounded-xl focus:border-orange-500 focus:outline-none text-lg transition-all duration-300 text-white placeholder-gray-400"
                    />
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Need any extras?</h4>
                    <div className="space-y-3">
                      <label className="flex items-center p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.needsLogo}
                          onChange={(e) => setFormData({ ...formData, needsLogo: e.target.checked })}
                          className="w-5 h-5 mr-4"
                        />
                        <div className="flex-1">
                          <span className="font-medium text-white">Professional Logo Design</span>
                          <span className="block text-sm text-gray-400">Stand out with a proper brand</span>
                        </div>
                        <Palette className="w-5 h-5 text-orange-400" />
                      </label>
                      
                      <label className="flex items-center p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.needsSEO}
                          onChange={(e) => setFormData({ ...formData, needsSEO: e.target.checked })}
                          className="w-5 h-5 mr-4"
                        />
                        <div className="flex-1">
                          <span className="font-medium text-white">Local SEO Package</span>
                          <span className="block text-sm text-gray-400">Rank #1 in your area</span>
                        </div>
                        <Search className="w-5 h-5 text-orange-400" />
                      </label>
                    </div>
                  </div>
                  
                  <motion.button
                    onClick={() => setStep(3)}
                    disabled={!formData.location}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:from-gray-500 disabled:to-gray-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center shadow-lg"
                  >
                    Get Your Quote
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Quote Result */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="inline-block mb-6"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </motion.div>
                
                <h3 className="text-3xl font-bold text-white mb-4">Your Custom Quote is Ready!</h3>
                <p className="text-gray-400 mb-8">
                  Based on your requirements as a <span className="text-orange-400 font-semibold">{formData.trade}</span> in <span className="text-orange-400 font-semibold">{formData.location}</span>
                </p>
                
                <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-orange-500/20">
                  <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">Your Investment</p>
                  <div className="text-5xl font-black text-white mb-4">
                    Get Custom Quote
                  </div>
                  <p className="text-gray-400">Includes everything you need to dominate online</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <h4 className="text-lg font-semibold text-white">What's Included:</h4>
                  <ul className="space-y-2 text-left max-w-md mx-auto">
                    {[
                      'Professional 5-page website',
                      'Mobile-responsive design',
                      'Contact forms & quote system',
                      'Google Business setup',
                      formData.needsLogo && 'Professional logo design',
                      formData.needsSEO && 'Local SEO package',
                      '30-day money-back guarantee'
                    ].filter(Boolean).map((item, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center text-gray-300"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mr-3"></div>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-4 bg-white/10 border-2 border-white/20 rounded-xl focus:border-orange-500 focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-4 bg-white/10 border-2 border-white/20 rounded-xl focus:border-orange-500 focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Best Contact Number (Optional)"
                    className="w-full p-4 bg-white/10 border-2 border-white/20 rounded-xl focus:border-orange-500 focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-orange-500/30"
                  >
                    Claim Your Quote Now
                  </motion.button>
                </form>
                
                <button
                  onClick={() => {
                    setStep(1);
                    setFormData({ trade: '', location: '', needsLogo: false, needsSEO: false });
                  }}
                  className="mt-4 text-gray-400 hover:text-orange-400 transition-colors"
                >
                  ← Start Over
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteTool;