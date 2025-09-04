import React from 'react';
import { ArrowRight, MapPin, Star, TrendingUp, Phone, Calendar, Hammer, Wrench, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const CaseStudies = () => {
  const cases = [
    {
      trade: 'Driveway Specialist',
      location: 'Edinburgh',
      name: 'Hallmark Driveways Edinburgh',
      quote: 'Built Proper completely transformed our driveway business. From struggling to get leads to now being booked 3 months in advance across all Edinburgh postcodes. Best investment we ever made for our block paving and resin driveway services.',
      beforeAfter: { before: '£8k/month revenue', after: '£45k/month revenue' },
      results: '+460% revenue growth',
      timeframe: '6 months',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5,
      icon: Hammer,
      featured: true,
      services: ['Professional website design', 'Local SEO for Edinburgh', 'Google Ads management', 'Photography services'],
      keywords: 'driveway specialists Edinburgh, block paving Edinburgh, resin driveways Edinburgh'
    },
    {
      trade: 'Builder',
      location: 'Glasgow',
      name: 'MacLeod Construction Glasgow',
      quote: 'Website paid for itself in 2 weeks. Getting calls from customers who found me on Google every day now. Ranking #1 for "builder Glasgow" and getting premium jobs through the website.',
      beforeAfter: { before: '2-3 jobs/month', after: '12-15 jobs/month' },
      results: '+400% more work',
      timeframe: '3 months',
      image: 'https://images.pexels.com/photos/8092507/pexels-photo-8092507.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5,
      icon: Hammer,
      services: ['Website design and development', 'Local SEO Glasgow', 'Google Business Profile optimisation'],
      keywords: 'builder Glasgow, construction company Glasgow, home extensions Glasgow'
    },
    {
      trade: 'Electrician',
      location: 'Manchester',
      name: 'Northern Electrical Services',
      quote: 'Finally have a website that shows off our electrical work properly. Customers trust us more and we can charge premium rates. Getting commercial contracts through the website now.',
      beforeAfter: { before: '£35/hour average rate', after: '£55/hour average rate' },
      results: '+57% higher hourly rates',
      timeframe: '4 months',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5,
      icon: Zap,
      services: ['Electrician website design', 'Local SEO Manchester', 'Professional photography'],
      keywords: 'electrician Manchester, electrical services Manchester, commercial electrician Manchester'
    }
  ];

  return (
    <section id="work" className="relative py-32 bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Smooth transition */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-slate-950 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter">
            REAL RESULTS
            <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              REAL TRADESMEN
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto font-light">
            See how we've helped UK tradesmen transform their businesses with 
            <span className="text-white font-semibold"> websites that actually work</span>.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((case_, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group bg-gradient-to-br ${
                case_.featured 
                  ? 'from-orange-500/10 to-orange-600/10 border-2 border-orange-500/50' 
                  : 'from-slate-800/50 to-slate-900/50 border border-white/10'
              } backdrop-blur-sm rounded-3xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 cursor-pointer`}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={case_.image} 
                  alt={`${case_.trade} in ${case_.location}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                
                {/* Trade Icon */}
                <div className="absolute top-4 left-4 w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
                  <case_.icon className="w-5 h-5 text-white" />
                </div>

                {/* Results Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-2 rounded-lg text-sm font-bold">
                  {case_.results}
                </div>

                {/* Location */}
                <div className="absolute bottom-4 left-4 flex items-center text-white">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">{case_.location}</span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{case_.name}</h3>
                  <div className="flex items-center">
                    {[...Array(case_.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-orange-500 fill-current" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-gray-400 mb-6 italic">
                  "{case_.quote}"
                </blockquote>
                
                {/* Before/After Stats */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 mb-6 border border-white/10">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Before</div>
                      <div className="font-semibold text-gray-400">{case_.beforeAfter.before}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">After</div>
                      <div className="font-semibold text-orange-400">{case_.beforeAfter.after}</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    {case_.timeframe}
                  </span>
                  <button className="text-orange-400 hover:text-orange-300 font-semibold flex items-center group/btn">
                    Full Story
                    <ArrowRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-12 py-5 rounded-full transition-all duration-300 shadow-lg hover:shadow-orange-500/30 inline-flex items-center"
          >
            View All Success Stories
            <ArrowRight className="ml-3 w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;