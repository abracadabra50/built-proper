import React from 'react';
import { Calendar, User, ArrowRight, Clock, TrendingUp, Hammer, Search, BarChart3, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const BlogPreview = () => {
  const articles = [
    {
      title: 'Best Tradesman Websites UK 2025: Complete Analysis',
      excerpt: 'We analysed 200+ UK tradesman websites to identify what converts visitors into paying customers. Includes builder, plumber, electrician, and landscaper website examples.',
      category: 'Web Design',
      author: 'Built Proper SEO Team',
      date: '15 Aug 2025',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '12 min read',
      trending: true,
      icon: Hammer,
      keywords: 'best tradesman websites UK, builder website design, plumber website examples'
    },
    {
      title: 'Local SEO for Tradesmen 2025: Complete Guide',
      excerpt: 'How to rank #1 on Google for "near me" searches. Step-by-step local SEO strategy for plumbers, builders, electricians. Includes Google Business Profile optimisation.',
      category: 'SEO',
      author: 'Built Proper SEO Team',
      date: '12 Aug 2025',
      image: 'https://images.pexels.com/photos/8092507/pexels-photo-8092507.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '15 min read',
      trending: true,
      icon: Search,
      keywords: 'local SEO for tradesmen, plumber SEO, builder local SEO, Google Business Profile'
    },
    {
      title: 'Why UK Tradesmen Lose £50k+ Per Year Without Websites',
      excerpt: 'Industry analysis: How poor online presence costs UK tradesmen thousands in lost revenue. Plus the 30-day action plan to fix it and start winning more work.',
      category: 'Business Growth',
      author: 'Built Proper Business Team',
      date: '10 Aug 2025',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '8 min read',
      trending: true,
      icon: BarChart3,
      keywords: 'tradesman business growth, UK trade industry statistics, tradesman marketing'
    },
    {
      title: 'Emergency Plumber Marketing: Get 10+ Calls Per Day',
      excerpt: 'Complete marketing strategy for emergency plumbers. How to dominate "emergency plumber near me" searches and generate consistent high-value call-outs.',
      category: 'Case Study',
      author: 'Built Proper Marketing Team',
      date: '8 Aug 2025',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '10 min read',
      trending: false,
      icon: Users,
      keywords: 'emergency plumber marketing, plumber Google Ads, emergency call generation'
    },
    {
      title: 'Builder Website Design 2025: What Converts Customers',
      excerpt: 'Analysis of high-converting builder websites. Design elements, copy, and features that turn website visitors into booked jobs for construction companies.',
      category: 'Web Design',
      author: 'Built Proper Design Team',
      date: '5 Aug 2025',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '9 min read',
      trending: false,
      icon: Hammer,
      keywords: 'builder website design, construction company websites, builder marketing'
    },
    {
      title: 'Electrician SEO 2025: Rank #1 for Electrical Services',
      excerpt: 'Complete SEO guide for electricians. How to rank for high-value keywords like "electrician near me", "emergency electrician", and commercial electrical services.',
      category: 'SEO',
      author: 'Built Proper SEO Team',
      date: '3 Aug 2025',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '11 min read',
      trending: false,
      icon: Zap,
      keywords: 'electrician SEO, electrical services SEO, electrician Google ranking'
    }
  ];

  const categories = [
    { name: 'Tradesman SEO', count: 47 },
    { name: 'Website Design', count: 32 },
    { name: 'Local Marketing', count: 28 },
    { name: 'Case Studies', count: 24 },
    { name: 'Business Growth', count: 19 },
    { name: 'Google Ads', count: 15 }
  ];

  return (
    <section id="blog" className="relative py-32 bg-gradient-to-b from-slate-900 to-slate-950">
      {/* Smooth transition */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-slate-900 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter">
            GROW YOUR
            <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              TRADES BUSINESS
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto font-light">
            Free guides, tips, and strategies to help you 
            <span className="text-white font-semibold"> dominate your local market</span>.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <button 
            className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-orange-500/30"
          >
            <span className="flex items-center">
              All Articles
            </span>
          </button>
          {categories.map((category, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full border border-white/20 hover:border-orange-500/50 hover:bg-white/5 transition-all duration-300 group"
            >
              <span className="font-semibold text-gray-300 group-hover:text-orange-400 transition-colors">
                {category.name} ({category.count})
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Articles Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {articles.map((article, index) => (
            <motion.article 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-orange-500/50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="lg:w-1/3 h-48 lg:h-auto relative overflow-hidden">
                  {article.trending && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-2 rounded-lg text-sm font-bold flex items-center z-10">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      Trending
                    </div>
                  )}
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="flex-1 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-semibold text-orange-400 uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 line-clamp-2">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {article.author}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {article.date}
                      </span>
                    </div>
                    
                    <button className="flex items-center text-orange-400 hover:text-orange-300 font-bold group-hover:translate-x-1 transition-all duration-300">
                      Read More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 backdrop-blur-sm rounded-3xl p-12 text-center border border-orange-500/20"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Get Weekly Tips to Grow Your Business
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join 500+ UK tradesmen getting practical advice on websites, SEO, and digital marketing. 
            No spam, just proper tips that work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-all duration-300"
            />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-orange-500/30"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPreview;