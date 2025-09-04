import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FileText, MapPin, Wrench, BookOpen, Users, 
  Building2, Phone, Shield, ChevronRight, Home
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';

const Sitemap = () => {
  const sitemapSections = [
    {
      title: 'Main Pages',
      icon: Home,
      links: [
        { label: 'Homepage', href: '/' },
        { label: 'About Us', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Portfolio', href: '/tradesman-website-examples' },
        { label: 'Website Cost Calculator', href: '/website-cost-calculator' },
        { label: 'Client Portal', href: '/portal' }
      ]
    },
    {
      title: 'Services',
      icon: Wrench,
      links: [
        { label: 'Custom Websites', href: '/services/websites' },
        { label: 'Plumber Websites', href: '/services/plumber-websites' },
        { label: 'Electrician Websites', href: '/services/electrician-websites' },
        { label: 'Local SEO', href: '/services/seo' },
        { label: 'Trade Branding', href: '/services/branding' },
        { label: 'AI & Automation', href: '/services/ai-automation' },
        { label: 'Digital Marketing', href: '/services/marketing' }
      ]
    },
    {
      title: 'Locations',
      icon: MapPin,
      links: [
        { label: 'London', href: '/locations/london' },
        { label: 'Manchester', href: '/locations/manchester' },
        { label: 'Birmingham', href: '/locations/birmingham' },
        { label: 'Edinburgh', href: '/locations/edinburgh' },
        { label: 'Glasgow', href: '/locations/glasgow' },
        { label: 'Leeds', href: '/locations/leeds' },
        { label: 'Bristol', href: '/locations/bristol' }
      ]
    },
    {
      title: 'Resources & Guides',
      icon: BookOpen,
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'No WordPress Guide', href: '/no-wordpress-tradesman-websites' },
        { label: 'True Cost of Websites', href: '/blog/true-cost-tradesman-websites' },
        { label: 'Checkatrade Alternative', href: '/blog/checkatrade-alternative' },
        { label: 'Local SEO Guide', href: '/blog/local-seo-guide-tradesmen' },
        { label: 'Lead Generation Guide', href: '/blog/generate-quality-leads' },
        { label: 'AI Tools for Trades', href: '/blog/ai-tools-for-trades' },
        { label: 'Million Pound Business', href: '/blog/million-pound-trade-business' },
        { label: 'Premium Positioning', href: '/blog/premium-positioning-trades' }
      ]
    },
    {
      title: 'Case Studies',
      icon: Users,
      links: [
        { label: 'All Case Studies', href: '/case-studies' },
        { label: 'Hallmark Driveways Edinburgh', href: '/case-studies/hallmark-driveways-edinburgh' }
      ]
    },
    {
      title: 'Company',
      icon: Building2,
      links: [
        { label: 'About Built Proper', href: '/about' },
        { label: 'Our Team', href: '/about#team' },
        { label: 'How We Work', href: '/about#process' },
        { label: 'Careers', href: '/careers' }
      ]
    },
    {
      title: 'Legal',
      icon: Shield,
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-black mb-4">
              <span className="text-white">Site Map</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Complete overview of all pages and resources on Built Proper
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sitemap Grid */}
      <section className="py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sitemapSections.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: sectionIndex * 0.1 }}
                className="bg-slate-800/30 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <section.icon className="w-6 h-6 text-orange-500" />
                  <h2 className="text-xl font-bold text-white">{section.title}</h2>
                </div>
                
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.href}
                        className="group flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors py-1"
                      >
                        <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-20 px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-invert"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              About Built Proper
            </h2>
            <p className="text-gray-300 mb-6">
              Built Proper is the UK's leading custom website development agency exclusively for tradesmen. 
              We specialise in creating bespoke, high-performance websites that help plumbers, electricians, 
              builders, and all trades dominate their local market.
            </p>
            
            <h3 className="text-xl font-bold text-white mb-3">
              Our Services
            </h3>
            <p className="text-gray-300 mb-6">
              From custom website development to local SEO, AI automation to digital marketing, we provide 
              everything UK tradesmen need to succeed online. Every solution is built from scratch - no 
              WordPress, no templates, just proper custom development.
            </p>
            
            <h3 className="text-xl font-bold text-white mb-3">
              UK Coverage
            </h3>
            <p className="text-gray-300 mb-6">
              We serve tradesmen across the entire United Kingdom, with dedicated local expertise in London, 
              Manchester, Birmingham, Edinburgh, Glasgow, Leeds, Bristol, and beyond. Our local SEO strategies 
              ensure you dominate searches in your specific service areas.
            </p>
            
            <h3 className="text-xl font-bold text-white mb-3">
              Why Choose Built Proper?
            </h3>
            <p className="text-gray-300">
              We're the only UK agency that refuses to use WordPress for tradesman websites. Every site is 
              custom-coded for maximum performance, security, and lead generation. With an average ROI of 
              580% and over 250 successful projects, we're the proven choice for ambitious UK trades.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm border border-orange-500/30 rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-white">Can't Find What You're Looking For?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch and we'll help you find exactly what you need
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all"
              >
                <Phone className="w-5 h-5" />
                Contact Us
              </Link>
              <Link
                to="/website-cost-calculator"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sitemap;

