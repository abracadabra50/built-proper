import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Star, TrendingUp, Users, Award, ArrowRight, CheckCircle, Building2, Hammer, Wrench } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import FAQ from './FAQ';
import Breadcrumbs from './Breadcrumbs';

interface LocationData {
  city: string;
  county?: string;
  stats: {
    projects: string;
    roi: string;
    ranking: string;
    clients: string;
  };
  areas: string[];
  caseStudies: {
    name: string;
    location: string;
    trade: string;
    result: string;
    quote: string;
  }[];
  seoContent: {
    intro: string;
    whyCustom: string;
    localSeo: string;
  };
}

interface LocationPageTemplateProps {
  data: LocationData;
}

const LocationPageTemplate: React.FC<LocationPageTemplateProps> = ({ data }) => {
  const { city, county, stats, areas, caseStudies, seoContent } = data;

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
              <MapPin className="w-4 h-4 text-orange-500" />
              <span className="text-sm text-orange-400">Serving {city} {county ? `& ${county}` : '& Surrounding Areas'}</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
              <span className="text-white">Custom Tradesman Websites</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                in {city}
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We build bespoke websites that help {city} trades dominate their local market. 
              No templates, no WordPress - just proper custom development that gets you more jobs.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all"
              >
                Get Your {city} Quote
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="/tradesman-website-examples"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                View {city} Projects
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Local Stats */}
      <section className="py-20 px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: `${city} Projects`, value: stats.projects, icon: Award },
              { label: 'Average ROI', value: stats.roi, icon: TrendingUp },
              { label: 'Local Rankings', value: stats.ranking, icon: Star },
              { label: 'Happy Tradesmen', value: stats.clients, icon: Users }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">Why {city} Tradesmen</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Choose Built Proper
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We understand {city}'s market. High competition, demanding customers, 
              and the need to stand out from the crowd. That's why we build different.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: `${city}-Focused SEO`,
                icon: MapPin,
                description: `Dominate ${city} search results with targeted local SEO that brings you customers from your exact service areas.`,
                features: [
                  'Area-specific landing pages',
                  'Local citation building',
                  'Google My Business optimization',
                  `"Near me" search domination`
                ]
              },
              {
                title: 'Lead Generation Machine',
                icon: TrendingUp,
                description: 'Convert more visitors into paying customers with proven design patterns and conversion optimization.',
                features: [
                  'Smart contact forms',
                  'Click-to-call buttons',
                  'Live chat integration',
                  'Quote calculators'
                ]
              },
              {
                title: 'Stand Out From Competition',
                icon: Award,
                description: `Make your competitors look amateur with premium design and functionality that ${city} customers expect.`,
                features: [
                  'Custom coded (no WordPress)',
                  'Lightning fast loading',
                  'Mobile-first design',
                  'Professional photography'
                ]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-orange-500/50 transition-all"
              >
                <service.icon className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      {areas && areas.length > 0 && (
        <section className="py-20 px-6 lg:px-8 bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="text-white">Building Websites Across</span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                  {city} {county ? `& ${county}` : ''}
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                We've built successful websites for tradesmen in all these areas
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {areas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.02 }}
                  className="bg-slate-800/30 border border-white/10 rounded-lg px-4 py-3 text-center hover:border-orange-500/50 hover:bg-slate-800/50 transition-all"
                >
                  <span className="text-gray-300">{area}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Success Stories */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">{city} Tradesmen</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Success Stories
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Real results from real {city} trades who took their business online properly
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all"
              >
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    <span className="text-sm text-orange-400">{story.location}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{story.name}</h3>
                  <p className="text-gray-400 mb-4">{story.trade}</p>
                  <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4 mb-6">
                    <p className="text-orange-400 font-semibold">{story.result}</p>
                  </div>
                  <blockquote className="text-gray-300 italic">
                    "{story.quote}"
                  </blockquote>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/tradesman-website-examples"
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors"
            >
              View All {city} Case Studies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trade Types We Serve */}
      <section className="py-20 px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">Websites for Every</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                {city} Trade
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Plumbers', icon: Wrench, link: '/services/plumber-websites' },
              { name: 'Electricians', icon: Building2, link: '/services/electrician-websites' },
              { name: 'Builders', icon: Hammer, link: '/services/websites' },
              { name: 'Decorators', icon: Building2, link: '/services/websites' },
              { name: 'Joiners', icon: Hammer, link: '/services/websites' },
              { name: 'Roofers', icon: Building2, link: '/services/websites' }
            ].map((trade, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={trade.link}
                  className="flex items-center gap-4 bg-slate-800/30 border border-white/10 rounded-xl p-6 hover:border-orange-500/50 hover:bg-slate-800/50 transition-all group"
                >
                  <trade.icon className="w-8 h-8 text-orange-500" />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white">{city} {trade.name}</h3>
                    <p className="text-gray-400 text-sm">Custom website solutions</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                </Link>
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
              <span className="text-white">Ready to Dominate</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                {city}?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join {stats.clients} {city} tradesmen who've transformed their business with a proper website.
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
                Get Your Free {city} Quote
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="/tradesman-website-examples"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                View Portfolio
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
            
            <p className="text-sm text-gray-400 mt-8">
              Average response time: 2 hours during business hours
            </p>
          </motion.div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-20 px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <h2 className="text-3xl font-bold text-white mb-6">
            Custom Website Development for {city} Trades
          </h2>
          <p className="text-gray-300 mb-6">
            {seoContent.intro}
          </p>
          
          <h3 className="text-2xl font-bold text-white mb-4">
            Why {city} Tradesmen Need Custom Websites
          </h3>
          <p className="text-gray-300 mb-6">
            {seoContent.whyCustom}
          </p>
          
          <h3 className="text-2xl font-bold text-white mb-4">
            Local SEO for {city} Trades
          </h3>
          <p className="text-gray-300 mb-6">
            {seoContent.localSeo}
          </p>
          
          <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6 mt-8">
            <p className="text-orange-400 font-semibold mb-2">Ready to get started?</p>
            <p className="text-gray-300">
              Contact Built Proper today for your free {city} website consultation. 
              We'll show you exactly how we can transform your online presence and bring you more customers.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      <Footer />
    </div>
  );
};

export default LocationPageTemplate;
