import React from 'react';
import { Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight, Star, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const services = [
    { name: 'Custom Websites', href: '/services/websites' },
    { name: 'Local SEO', href: '/services/seo' },
    { name: 'Trade Branding', href: '/services/branding' },
    { name: 'Digital Marketing', href: '/services/marketing' },
    { name: 'AI & Automation', href: '/services/ai-automation' },
    { name: 'View All Services', href: '/#services' }
  ];

  const resources = [
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog & Guides', href: '/blog' },
    { name: 'Client Portal', href: '/portal' },
    { name: 'Get Quote', href: '/contact' },
    { name: 'Book Call', href: '/contact' },
    { name: 'Support', href: '/contact' }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'How We Work', href: '/about#process' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' },
    { name: 'Join Us', href: '/careers#apply' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/privacy#cookies' },
    { name: 'GDPR Compliance', href: '/privacy#gdpr' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex flex-col -space-y-1">
              <span className="text-2xl font-black text-white tracking-wider">BUILT</span>
              <span className="text-2xl font-black bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent tracking-wider italic">PROPER</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              We create professional websites and digital marketing solutions specifically for UK tradesmen. 
              No technical jargon, just results that pay for themselves.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center hover:text-orange-400 transition-colors duration-300 cursor-pointer">
                <MessageSquare className="w-5 h-5 text-orange-500 mr-3" />
                <span className="font-medium">Get Your Quote Online</span>
              </div>
              <div className="flex items-center hover:text-orange-400 transition-colors duration-300 cursor-pointer">
                <Mail className="w-5 h-5 text-blue-400 mr-3" />
                <span className="font-medium">hello@builtproper.co.uk</span>
              </div>
              <div className="flex items-center hover:text-orange-400 transition-colors duration-300 cursor-pointer">
                <MapPin className="w-5 h-5 text-green-400 mr-3" />
                <span className="font-medium">Serving all of UK</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href} 
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group"
                  >
                    <span>{service.name}</span>
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-lg font-bold mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a 
                    href={resource.href} 
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group"
                  >
                    <span>{resource.name}</span>
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-3 mb-8">
              {company.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group"
                  >
                    <span>{item.name}</span>
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 backdrop-blur-sm rounded-xl p-4 border border-orange-500/20"
            >
              <h4 className="font-bold mb-2">Quick Quote</h4>
              <p className="text-sm text-gray-400 mb-3">Get pricing in 30 seconds</p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-4 py-2 rounded-lg text-sm transition-all duration-300 w-full"
              >
                Start Quote
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-wrap gap-6 text-sm">
              {legal.map((item) => (
                <a 
                  key={item.name}
                  href={item.href} 
                  className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
            
            <div className="text-center lg:text-right">
              <div className="text-sm text-gray-400 mb-2">
                © 2025 Built Proper. All rights reserved.
              </div>
              <div className="inline-flex items-center bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 text-orange-400 px-3 py-2 rounded-full text-sm font-semibold">
                <Star className="w-4 h-4 mr-1 fill-current" />
                This site was Built Proper ✓
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;