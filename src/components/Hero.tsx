import React from 'react';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-500/5"></div>
        <div className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")`
          }}
        ></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-orange-500/5 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-orange-500/5 to-transparent blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-20">
        <div className="flex flex-col items-center text-center">
          {/* Main Content */}
          <div className="space-y-8 max-w-5xl">
            {/* Trust Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full blur-xl opacity-20 animate-pulse"></div>
                <div className="relative inline-flex items-center bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2 animate-pulse"></div>
                  WEBSITES FOR UK TRADESMEN
                </div>
              </div>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9]">
                <motion.span 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="block text-white tracking-tighter"
                >
                  BUILT
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent italic"
                  style={{ transform: 'skewX(-5deg)' }}
                >
                  PROPER
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mt-2"
                  />
                </motion.span>
              </h1>
            </div>

            {/* Taglines */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4 max-w-4xl mx-auto"
            >
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light leading-relaxed">
                We don't do half-arsed. We don't do templates.{' '}
                <br className="hidden sm:block" />
                <span className="text-white font-medium">We build proper websites for proper tradesmen.</span>
              </p>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-white/80 leading-relaxed">
                Every site <span className="text-orange-400 font-semibold">Built Proper</span>.{' '}
                Every feature <span className="text-orange-400 font-semibold">Built Proper</span>.{' '}
                <br className="hidden sm:block" />
                Every result? <span className="text-orange-400 font-semibold">Proper impressive</span>.
              </p>
            </motion.div>

            {/* Value Props */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap justify-center gap-4 pt-4"
            >
              {[
                { icon: <CheckCircle className="w-4 h-4" />, text: '100% Custom Code' },
                { icon: <CheckCircle className="w-4 h-4" />, text: 'No WordPress' },
                { icon: <CheckCircle className="w-4 h-4" />, text: 'Fast Delivery' },
                { icon: <CheckCircle className="w-4 h-4" />, text: 'UK-Based Team' }
              ].map((prop, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2.5 rounded-full hover:bg-white/10 transition-all"
                >
                  <span className="text-green-400">{prop.icon}</span>
                  <span className="text-white font-medium text-sm">{prop.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            >
              <motion.a
                href="#quote"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-2xl hover:shadow-orange-500/30 text-base inline-flex items-center justify-center"
              >
                Get Your Site Built Proper
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href="#work"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group border border-white/20 hover:border-orange-500/50 text-white hover:text-orange-400 font-medium px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10 text-base inline-flex items-center justify-center"
              >
                <Play className="mr-2 w-5 h-5" />
                See Our Work
              </motion.a>
            </motion.div>

            {/* Social Proof Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="grid grid-cols-3 gap-8 pt-12 border-t border-white/10 max-w-3xl mx-auto mt-12"
            >
              {[
                { value: '247', label: 'Sites Built Proper', highlight: true },
                { value: '£2M+', label: 'Client Revenue', highlight: false },
                { value: '7 Days', label: 'Average Build', highlight: false }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className={`text-3xl sm:text-4xl font-bold mb-1 ${
                    stat.highlight 
                      ? 'bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent' 
                      : 'text-white'
                  }`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;