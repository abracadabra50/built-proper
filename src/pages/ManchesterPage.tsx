import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Star, TrendingUp, Users, Award, ArrowRight, CheckCircle } from 'lucide-react';

const ManchesterPage = () => {
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
              <span className="text-sm text-orange-400">Serving Greater Manchester</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
              <span className="text-white">Bespoke Web Development</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                for Manchester Trades
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We build custom websites that help Manchester tradesmen stand out and win more work. 
              No templates, no WordPress - proper Northern quality.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="#quote"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all"
              >
                Get Your Manchester Quote
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                View Manchester Projects
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
              { label: 'Manchester Projects', value: '80+', icon: Award },
              { label: 'Average ROI', value: '420%', icon: TrendingUp },
              { label: 'Local Rankings', value: 'Top 3', icon: Star },
              { label: 'Happy Tradesmen', value: '100+', icon: Users }
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

      {/* Manchester-Specific Services */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">Why Manchester Builders</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Choose Built Proper
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From Salford to Stockport, we understand what makes Manchester trades different. 
              Straight-talking websites for straight-talking tradesmen.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Local Area Domination',
                description: 'Rank #1 across Greater Manchester - from city centre to suburbs. We know every postcode.',
                features: [
                  'Area-specific landing pages',
                  'M1-M90 postcode targeting',
                  'Local review integration',
                  'Manchester dialect content'
                ]
              },
              {
                title: 'Northern Straight-Talk',
                description: 'No fancy Southern nonsense. Clear, honest messaging that Manchester customers trust.',
                features: [
                  'Plain English content',
                  'Transparent pricing displays',
                  'No-nonsense design',
                  'Direct call-to-actions'
                ]
              },
              {
                title: 'Weather-Ready Features',
                description: 'Emergency callout features for Manchester weather - from frozen pipes to storm damage.',
                features: [
                  'Emergency service badges',
                  '24/7 contact forms',
                  'Weather alert integration',
                  'Seasonal service promotion'
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

      {/* Manchester Areas We Serve */}
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
                Greater Manchester
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Proudly serving all 10 boroughs of Greater Manchester
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              'Manchester City Centre', 'Salford', 'Bolton', 'Bury', 'Oldham',
              'Rochdale', 'Stockport', 'Tameside', 'Trafford', 'Wigan',
              'Altrincham', 'Sale', 'Stretford', 'Urmston', 'Eccles',
              'Swinton', 'Worsley', 'Prestwich', 'Whitefield', 'Radcliffe',
              'Heywood', 'Middleton', 'Failsworth', 'Droylsden', 'Denton',
              'Hyde', 'Stalybridge', 'Ashton-under-Lyne', 'Cheadle', 'Bramhall',
              'Hazel Grove', 'Marple', 'Romiley', 'Leigh', 'Atherton'
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                className="bg-slate-800/30 border border-white/10 rounded-lg px-4 py-3 text-center hover:border-orange-500/50 hover:bg-slate-800/50 transition-all"
              >
                <span className="text-gray-300 text-sm">{area}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manchester Success Stories */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">Manchester Success</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Stories
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Mitchell Plumbing',
                location: 'Didsbury',
                trade: 'Plumber',
                result: '15 leads per month consistently',
                quote: 'Was paying £89/month for nothing. Built Proper delivered real results. Paid for itself in 8 weeks.',
                image: '/images/plumber-site-manchester.jpg'
              },
              {
                name: 'Northern Electrical',
                location: 'Salford',
                trade: 'Electrician',
                result: 'Ranking #1 for "electrician Salford"',
                quote: 'Stopped needing Checkatrade completely. Our website brings better jobs at better prices.',
                image: '/images/electrician-site-manchester.jpg'
              },
              {
                name: 'Manchester Builders Co',
                location: 'Chorlton',
                trade: 'Builder',
                result: '£300k in projects from website',
                quote: 'Professional website changed everything. We now work on premium projects only.',
                image: '/images/builder-site-manchester.jpg'
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
        </div>
      </section>

      {/* Manchester CTA */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm border border-orange-500/30 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">Ready to Own</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Manchester?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 100+ Manchester tradesmen getting proper results from proper websites.
              <br />
              <span className="text-white font-semibold">No templates. No WordPress. Just Northern quality.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#quote"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all"
              >
                Get Your Free Manchester Quote
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="tel:01612345678"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                <Phone className="w-5 h-5" />
                Call: 0161 234 5678
              </motion.a>
            </div>
            
            <p className="text-sm text-gray-400 mt-8">
              Proudly Manchester-based. Supporting local trades since 2024.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <h2 className="text-3xl font-bold text-white mb-6">
            Custom Web Development for Manchester Tradesmen
          </h2>
          <p className="text-gray-300 mb-6">
            Built Proper is Manchester's leading custom web development agency for tradesmen. We specialise in 
            creating bespoke websites for builders, plumbers, electricians, and all trades across Greater Manchester. 
            Unlike generic website builders or WordPress templates, we hand-code every website from scratch.
          </p>
          <p className="text-gray-300 mb-6">
            Manchester's trade industry is booming, but competition is fierce. Whether you're based in the Northern 
            Quarter, Didsbury, Sale, or Stockport, you need a website that sets you apart. Our custom development 
            approach ensures your site loads lightning-fast, ranks well in local searches, and converts visitors 
            into paying customers.
          </p>
          <h3 className="text-2xl font-bold text-white mb-4">
            Why Manchester Trades Choose Custom Development
          </h3>
          <p className="text-gray-300 mb-6">
            Manchester customers do their research. They compare quotes, read reviews, and choose tradesmen who 
            appear professional and trustworthy. A templated website screams "amateur" - a custom-built site 
            shows you mean business. We build websites that reflect Manchester values: quality, reliability, 
            and no-nonsense service.
          </p>
          <h3 className="text-2xl font-bold text-white mb-4">
            Dominate Greater Manchester Search Results
          </h3>
          <p className="text-gray-300">
            Our Manchester-specific SEO strategies ensure you rank for the searches that matter: "emergency plumber 
            Salford", "builder near me Chorlton", "electrician Trafford". We know the local market, understand 
            seasonal patterns (frozen pipes in winter, garden work in summer), and build websites that capture 
            these opportunities.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ManchesterPage;
