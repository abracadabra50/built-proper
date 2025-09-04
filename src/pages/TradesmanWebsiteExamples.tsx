import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Eye, TrendingUp, Clock, Award, Filter, 
  Wrench, Building2, Hammer, Paintbrush, Home, Zap,
  CheckCircle, ExternalLink, Star, Users, Phone
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';

const TradesmanWebsiteExamples = () => {
  const [selectedTrade, setSelectedTrade] = useState('all');
  const [selectedFeature, setSelectedFeature] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      name: 'Hallmark Driveways Edinburgh',
      trade: 'Driveway Specialist',
      location: 'Edinburgh',
      url: 'hallmarkdriveways.co.uk',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600',
      results: {
        leads: 'From 5 to 85 leads/month',
        roi: '680% ROI',
        ranking: '#1 for "driveways Edinburgh"',
        time: '3 months to top rankings'
      },
      features: ['3D Design Tool', 'Instant Quotes', 'Before/After Gallery', 'Video Testimonials'],
      description: 'Premium driveway specialist dominating Edinburgh with interactive 3D design tools and instant quoting system.',
      caseStudyLink: '/case-studies/hallmark-driveways-edinburgh'
    },
    {
      id: 2,
      name: 'Elite Electrical London',
      trade: 'Electrician',
      location: 'London',
      url: 'eliteelectrical.co.uk',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600',
      results: {
        leads: '120+ emergency calls/month',
        roi: '520% ROI',
        ranking: 'Top 3 for 15+ keywords',
        time: '2 months to profitability'
      },
      features: ['24/7 Booking', 'Live Chat', 'Safety Certificates', 'Service Area Map'],
      description: 'Emergency electrician service with 24/7 automated booking and live chat support, generating 120+ calls monthly.'
    },
    {
      id: 3,
      name: 'Manchester Master Builders',
      trade: 'Builder',
      location: 'Manchester',
      url: 'manchestermasterbuilders.com',
      image: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=600',
      results: {
        leads: '£2.5m in projects',
        roi: '950% ROI',
        ranking: '#1 for "builders Manchester"',
        time: '6 months to £1m pipeline'
      },
      features: ['Project Portfolio', 'Cost Calculator', 'Client Portal', 'Progress Tracking'],
      description: 'High-end building contractor with sophisticated project galleries and client portal for real-time updates.'
    },
    {
      id: 4,
      name: 'Pristine Plumbing Glasgow',
      trade: 'Plumber',
      location: 'Glasgow',
      url: 'pristineplumbing.scot',
      image: 'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=600',
      results: {
        leads: 'From 8 to 95 leads/month',
        roi: '440% ROI',
        ranking: 'Dominates "emergency plumber"',
        time: '4 months to full diary'
      },
      features: ['Emergency Booking', 'Price Guide', 'Maintenance Plans', 'Review Integration'],
      description: 'Emergency plumbing service with instant booking system and transparent pricing, now fully booked weeks ahead.'
    },
    {
      id: 5,
      name: 'Premium Painters Leeds',
      trade: 'Decorator',
      location: 'Leeds',
      url: 'premiumpainters.co.uk',
      image: 'https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=600',
      results: {
        leads: '65 high-value projects',
        roi: '380% ROI',
        ranking: 'Top 3 for all target keywords',
        time: '3 months to premium positioning'
      },
      features: ['Colour Visualiser', 'Portfolio Galleries', 'Quote System', 'Booking Calendar'],
      description: 'Premium decorating service with interactive colour visualiser tool and stunning portfolio galleries.'
    },
    {
      id: 6,
      name: 'Bristol Bathroom Specialists',
      trade: 'Bathroom Fitter',
      location: 'Bristol',
      url: 'bristolbathrooms.com',
      image: 'https://images.pexels.com/photos/1909791/pexels-photo-1909791.jpeg?auto=compress&cs=tinysrgb&w=600',
      results: {
        leads: '£800k in renovations',
        roi: '620% ROI',
        ranking: '#1 "bathroom fitters Bristol"',
        time: '5 months to market leader'
      },
      features: ['3D Design Studio', 'Product Catalogue', 'Finance Calculator', 'Virtual Tours'],
      description: 'Bathroom renovation experts with 3D design studio and virtual showroom tours driving premium projects.'
    },
    {
      id: 7,
      name: 'Eco Heating Birmingham',
      trade: 'Heating Engineer',
      location: 'Birmingham',
      url: 'ecoheatingbirmingham.co.uk',
      image: 'https://images.pexels.com/photos/3637739/pexels-photo-3637739.jpeg?auto=compress&cs=tinysrgb&w=600',
      results: {
        leads: '150+ boiler installations',
        roi: '710% ROI',
        ranking: 'Dominates heat pump searches',
        time: '4 months to category leader'
      },
      features: ['Energy Calculator', 'Grant Checker', 'Maintenance Portal', 'Smart Booking'],
      description: 'Eco-focused heating company with energy savings calculator and government grant checker tools.'
    },
    {
      id: 8,
      name: 'Secure Locksmiths Liverpool',
      trade: 'Locksmith',
      location: 'Liverpool',
      url: 'secureliverpool.com',
      image: 'https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg?auto=compress&cs=tinysrgb&w=600',
      results: {
        leads: '200+ emergency callouts/month',
        roi: '580% ROI',
        ranking: '#1 for emergency searches',
        time: '2 months to 24/7 bookings'
      },
      features: ['GPS Tracking', 'Instant Quotes', '24/7 System', 'Security Audit Tool'],
      description: '24/7 emergency locksmith with live GPS tracking and instant quote system for maximum conversions.'
    }
  ];

  const trades = [
    { value: 'all', label: 'All Trades', icon: Building2 },
    { value: 'Electrician', label: 'Electricians', icon: Zap },
    { value: 'Plumber', label: 'Plumbers', icon: Wrench },
    { value: 'Builder', label: 'Builders', icon: Hammer },
    { value: 'Decorator', label: 'Decorators', icon: Paintbrush },
    { value: 'Driveway Specialist', label: 'Driveways', icon: Home },
    { value: 'Bathroom Fitter', label: 'Bathrooms', icon: Home },
    { value: 'Heating Engineer', label: 'Heating', icon: Home },
    { value: 'Locksmith', label: 'Locksmiths', icon: Home }
  ];

  const features = [
    { value: 'all', label: 'All Features' },
    { value: '24/7 Booking', label: '24/7 Booking' },
    { value: 'Live Chat', label: 'Live Chat' },
    { value: 'Cost Calculator', label: 'Calculators' },
    { value: 'Client Portal', label: 'Client Portals' },
    { value: '3D Design', label: '3D Tools' }
  ];

  const filteredItems = portfolioItems.filter(item => {
    const tradeMatch = selectedTrade === 'all' || item.trade === selectedTrade;
    const featureMatch = selectedFeature === 'all' || 
      item.features.some(f => f.includes(selectedFeature.replace(' System', '').replace(' Tool', '')));
    return tradeMatch && featureMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4 text-orange-500" />
              <span className="text-sm text-orange-400">Real Results from Real Tradesmen</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
              <span className="text-white">Tradesman Website</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Examples & Portfolio
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              See how we've transformed UK trades businesses with custom websites that 
              generate leads, dominate Google, and grow revenue. <span className="text-white font-semibold">Real sites, real results.</span>
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all"
              >
                Get Your Custom Website
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#filter"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                <Filter className="w-5 h-5" />
                Browse by Trade
              </motion.a>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { label: 'Websites Built', value: '250+', icon: Building2 },
                { label: 'Average ROI', value: '580%', icon: TrendingUp },
                { label: 'Leads Generated', value: '15k+/mo', icon: Users },
                { label: 'Client Rating', value: '4.9/5', icon: Star }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section id="filter" className="py-12 px-6 lg:px-8 bg-slate-900/50 sticky top-0 z-40 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <span className="text-gray-400 self-center mr-2">Filter by trade:</span>
              {trades.map((trade) => (
                <button
                  key={trade.value}
                  onClick={() => setSelectedTrade(trade.value)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                    selectedTrade === trade.value
                      ? 'bg-orange-500 text-white'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-white/10'
                  }`}
                >
                  <trade.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{trade.label}</span>
                </button>
              ))}
            </div>
            <div className="text-sm text-gray-400">
              Showing {filteredItems.length} examples
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all group"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                      {item.trade}
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                      {item.location}
                    </span>
                  </div>
                  <a
                    href={`https://${item.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-gray-300 mb-6">{item.description}</p>

                  {/* Results Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-900/50 rounded-lg p-3">
                      <TrendingUp className="w-4 h-4 text-orange-500 mb-1" />
                      <p className="text-xs text-gray-400">Lead Growth</p>
                      <p className="text-sm font-semibold text-white">{item.results.leads}</p>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-3">
                      <Award className="w-4 h-4 text-orange-500 mb-1" />
                      <p className="text-xs text-gray-400">Return on Investment</p>
                      <p className="text-sm font-semibold text-white">{item.results.roi}</p>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-3">
                      <Eye className="w-4 h-4 text-orange-500 mb-1" />
                      <p className="text-xs text-gray-400">Search Rankings</p>
                      <p className="text-sm font-semibold text-white">{item.results.ranking}</p>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-3">
                      <Clock className="w-4 h-4 text-orange-500 mb-1" />
                      <p className="text-xs text-gray-400">Time to Results</p>
                      <p className="text-sm font-semibold text-white">{item.results.time}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <p className="text-xs text-gray-400 mb-2">KEY FEATURES</p>
                    <div className="flex flex-wrap gap-2">
                      {item.features.map((feature, i) => (
                        <span key={i} className="text-xs bg-slate-900/50 text-gray-300 px-3 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4">
                    {item.caseStudyLink && (
                      <Link
                        to={item.caseStudyLink}
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all"
                      >
                        Read Case Study
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                    <a
                      href={`https://${item.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${item.caseStudyLink ? '' : 'flex-1'} inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-3 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20`}
                    >
                      Visit Site
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Our Sites Different */}
      <section className="py-20 px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">What Makes Our Sites</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Different?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every website we build is custom-coded from scratch. No WordPress, no templates, 
              no page builders - just proper development that delivers results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Custom Coded',
                description: '100% bespoke development. Every line of code written specifically for your business.',
                icon: Building2
              },
              {
                title: 'Lightning Fast',
                description: 'Average load time under 1 second. Fast sites rank better and convert more visitors.',
                icon: Zap
              },
              {
                title: 'Lead Focused',
                description: 'Built to generate enquiries. Smart forms, booking systems, and conversion optimization.',
                icon: Phone
              },
              {
                title: 'SEO Dominant',
                description: 'Structured to rank #1. Technical SEO, local optimization, and content strategy included.',
                icon: TrendingUp
              },
              {
                title: 'Mobile Perfect',
                description: '60% of searches are mobile. Our sites look and work perfectly on every device.',
                icon: Award
              },
              {
                title: 'Fully Managed',
                description: 'We handle everything. Hosting, updates, security, and ongoing optimization included.',
                icon: CheckCircle
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/30 border border-white/10 rounded-xl p-6 hover:border-orange-500/50 transition-all"
              >
                <feature.icon className="w-10 h-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">Ready to Join These</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Success Stories?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a custom website that generates leads, dominates Google, and grows your business.
              <br />
              <span className="text-white font-semibold">No templates. No WordPress. Just results.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all"
              >
                Get Your Free Quote
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="/blog/true-cost-tradesman-websites"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                See Pricing Guide
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TradesmanWebsiteExamples;
