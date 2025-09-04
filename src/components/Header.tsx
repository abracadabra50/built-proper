import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MessageSquare, LogIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Services', href: '/#services' },
    { name: 'Portfolio', href: '/tradesman-website-examples' },
    { name: 'No WordPress', href: '/no-wordpress-tradesman-websites' },
    { name: 'Resources', href: '/blog' },
    { name: 'Locations', href: '/locations/london' },
    { name: 'Contact', href: '/#contact' }
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-white/10 shadow-2xl' 
          : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Fixed Width */}
          <div className="flex-shrink-0 w-32">
            <motion.a 
              href="/"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center group cursor-pointer"
            >
              <div className="flex flex-col -space-y-2">
                <span className="text-xl font-black text-white tracking-wider">BUILT</span>
                <span className="text-xl font-black bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent tracking-wider italic">PROPER</span>
              </div>
            </motion.a>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center justify-center flex-1 space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-orange-400 font-semibold transition-all duration-300 relative group whitespace-nowrap">
                <span className="relative">
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 group-hover:w-full transition-all duration-300"></span>
                </span>
              </a>
            ))}
          </nav>

          {/* CTA Section - Right Aligned */}
          <div className="hidden lg:flex items-center justify-end gap-3 flex-shrink-0">
            {/* Client Portal Login - Smaller */}
            <motion.a
              href="/portal"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="text-gray-400 hover:text-white font-medium px-4 py-2 rounded-full transition-all duration-300 border border-white/10 hover:border-white/20 flex items-center text-sm"
            >
              <LogIn className="mr-1.5 w-3.5 h-3.5" />
              Portal
            </motion.a>
            
            {/* Main CTA - More Prominent */}
            <motion.a
              href="#quote"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 py-2.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-orange-500/30 flex items-center group text-sm"
            >
              <span className="flex items-center">
                Get Started
                <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            className="lg:hidden p-2 rounded-lg transition-all duration-300 text-white hover:bg-white/10">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden"
            >
              <div className="bg-slate-800/95 backdrop-blur-md rounded-2xl mx-4 mb-4 p-6 shadow-2xl border border-white/10">
                <div className="space-y-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block text-gray-300 hover:text-orange-400 font-semibold py-3 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <div className="pt-4 border-t border-white/10 space-y-3">
                    <a
                      href="/portal"
                      onClick={() => setIsMenuOpen(false)}
                      className="w-full text-gray-300 hover:text-white font-medium px-6 py-4 rounded-full transition-all duration-300 border border-white/20 hover:border-white/40 backdrop-blur-sm bg-white/5 hover:bg-white/10 flex items-center justify-center"
                    >
                      <LogIn className="mr-2 w-4 h-4" />
                      Client Login
                    </a>
                    <a
                      href="#quote"
                      onClick={() => setIsMenuOpen(false)}
                      className="relative w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-6 py-4 rounded-full transition-all duration-300 flex items-center justify-center"
                    >
                      Start Your Project
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;