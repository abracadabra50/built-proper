import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Star, TrendingUp, Users, Award, ArrowRight, CheckCircle } from 'lucide-react';

const LondonPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
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
              <span className="text-sm text-orange-400">Serving All London Boroughs</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
              <span className="text-white">Custom Website Development</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                for London Tradesmen
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We build bespoke websites that help London trades dominate their local market. 
              No templates, no WordPress - just proper custom development.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="#quote"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all"
              >
                Get Your Custom Quote
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                View London Projects
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
              { label: 'London Projects', value: '150+', icon: Award },
              { label: 'Average ROI', value: '380%', icon: TrendingUp },
              { label: 'Local Rankings', value: 'Top 3', icon: Star },
              { label: 'Happy Tradesmen', value: '200+', icon: Users }
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

      {/* London-Specific Services */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">Why London Tradesmen</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Choose Built Proper
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We understand the unique challenges of running a trade business in London. 
              High competition, demanding customers, and the need to stand out.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Zone-Specific SEO',
                description: 'Dominate your London borough with targeted local SEO. Rank #1 in Hackney, Camden, Westminster - wherever you operate.',
                features: [
                  'Borough-specific pages',
                  'Local citation building',
                  'Google My Business optimization',
                  'Zone targeting strategy'
                ]
              },
              {
                title: 'Congestion Zone Features',
                description: 'Built-in features for London trades including ULEZ compliance badges, congestion charge info, and zone coverage maps.',
                features: [
                  'ULEZ compliance badges',
                  'Service area maps',
                  'Zone pricing tables',
                  'Travel cost calculators'
                ]
              },
              {
                title: 'Competitive Edge',
                description: 'Stand out in London\'s crowded market with premium design and functionality that converts visitors into customers.',
                features: [
                  'Premium design quality',
                  'Fast loading speeds',
                  'Mobile-first approach',
                  'Conversion optimization'
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

      {/* London Areas We Serve */}
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
                Greater London
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              From Zone 1 to Zone 6, we've built successful websites for tradesmen in every borough
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'Westminster', 'Camden', 'Islington', 'Hackney',
              'Tower Hamlets', 'Greenwich', 'Lewisham', 'Southwark',
              'Lambeth', 'Wandsworth', 'Hammersmith', 'Kensington',
              'Fulham', 'Richmond', 'Kingston', 'Merton',
              'Sutton', 'Croydon', 'Bromley', 'Bexley',
              'Barking', 'Havering', 'Redbridge', 'Newham',
              'Waltham Forest', 'Haringey', 'Enfield', 'Barnet',
              'Harrow', 'Brent', 'Ealing', 'Hounslow'
            ].map((area, index) => (
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

      {/* London Success Stories */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">London Tradesmen</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Success Stories
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: 'East End Electrical',
                location: 'Hackney',
                trade: 'Electrician',
                result: 'From 2 leads/month to 45 leads/month',
                quote: 'Built Proper transformed our business. We now dominate Hackney searches and turn away work.',
                image: '/images/electrician-site.jpg'
              },
              {
                name: 'SW London Plumbing',
                location: 'Wandsworth',
                trade: 'Plumber',
                result: '400% ROI in 3 months',
                quote: 'Stopped relying on Checkatrade completely. Our website brings in better quality leads.',
                image: '/images/plumber-site.jpg'
              },
              {
                name: 'North London Builders',
                location: 'Barnet',
                trade: 'Builder',
                result: '£500k in new projects',
                quote: 'The website paid for itself in the first week. Absolute game changer for our business.',
                image: '/images/builder-site.jpg'
              }
            ].map((story, index) => (
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
              to="/case-studies"
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors"
            >
              View All London Case Studies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* London-Specific CTA */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950">
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
                London?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 200+ London tradesmen who've transformed their business with a proper website.
              <br />
              <span className="text-white font-semibold">No templates. No WordPress. Just results.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#quote"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all"
              >
                Get Your Free London Quote
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="tel:02012345678"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                <Phone className="w-5 h-5" />
                Call: 020 1234 5678
              </motion.a>
            </div>
            
            <p className="text-sm text-gray-400 mt-8">
              Average response time: 2 hours during London business hours
            </p>
          </motion.div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <h2 className="text-3xl font-bold text-white mb-6">
            Custom Website Development for London Trades
          </h2>
          <p className="text-gray-300 mb-6">
            As London's leading custom website development agency for tradesmen, we understand the unique challenges 
            of operating in the capital. With over 50,000 trade businesses competing for attention, having a 
            professional website isn't optional - it's essential for survival.
          </p>
          <p className="text-gray-300 mb-6">
            We specialise in building bespoke websites for London plumbers, electricians, builders, decorators, 
            carpenters, and all other trades. Unlike template-based solutions or DIY website builders, every site 
            we create is custom-coded from scratch to meet your specific needs.
          </p>
          <h3 className="text-2xl font-bold text-white mb-4">
            Why London Tradesmen Need Custom Websites
          </h3>
          <p className="text-gray-300 mb-6">
            London customers expect professionalism. They research online before calling, compare multiple quotes, 
            and choose tradesmen who appear trustworthy and established. A professional website instantly elevates 
            your credibility and helps you win higher-value projects in affluent areas like Chelsea, Hampstead, 
            and Richmond.
          </p>
          <p className="text-gray-300 mb-6">
            Our custom development approach means your website loads fast (crucial for mobile users on the Tube), 
            ranks well in local searches, and converts visitors into customers. We don't use WordPress or page 
            builders - everything is hand-coded for maximum performance and reliability.
          </p>
          <h3 className="text-2xl font-bold text-white mb-4">
            Local SEO for Every London Borough
          </h3>
          <p className="text-gray-300">
            Whether you're a plumber in Peckham, an electrician in Ealing, or a builder in Brixton, we'll ensure 
            you dominate local search results. Our London-specific SEO strategies help you rank for searches like 
            "emergency plumber Hackney" or "electrician near me Westminster", bringing you customers actively 
            looking for your services.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LondonPage;
