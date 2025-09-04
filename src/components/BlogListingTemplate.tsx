import React, { useState } from 'react';
import { Search, Filter, Calendar, Clock, User, ArrowRight, BookOpen, TrendingUp, Zap, Code2, Wrench, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import AlexChat from './AlexChat';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  featured: boolean;
  slug: string;
  icon: React.ElementType;
}

const BlogListingTemplate = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'All Guides' },
    { value: 'websites', label: 'Websites' },
    { value: 'seo', label: 'SEO' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'business', label: 'Business Growth' },
    { value: 'tech', label: 'Technology' }
  ];

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Why WordPress is Holding Your Trade Business Back',
      excerpt: 'Discover why custom-built websites outperform WordPress for UK tradesmen. Real data, real results, no fluff.',
      author: 'Built Proper Team',
      date: 'August 2025',
      readTime: '8 min',
      category: 'websites',
      featured: true,
      slug: 'wordpress-holding-you-back',
      icon: Code2
    },
    {
      id: '2',
      title: 'The Complete Guide to Local SEO for UK Tradesmen',
      excerpt: 'Everything you need to dominate Google in your local area. From "near me" searches to the Map Pack.',
      author: 'Built Proper Team',
      date: 'August 2025',
      readTime: '12 min',
      category: 'seo',
      featured: true,
      slug: 'local-seo-guide-tradesmen',
      icon: Target
    },
    {
      id: '3',
      title: 'How to Generate 100+ Quality Leads Per Month',
      excerpt: 'The exact system we use to flood our clients with quality enquiries. No theory, just proven tactics.',
      author: 'Built Proper Team',
      date: 'August 2025',
      readTime: '10 min',
      category: 'marketing',
      featured: false,
      slug: 'generate-quality-leads',
      icon: TrendingUp
    },
    {
      id: '4',
      title: 'AI Tools That Actually Work for Trade Businesses',
      excerpt: 'Cut through the AI hype. Here are the tools that genuinely save time and make money for tradesmen.',
      author: 'Built Proper Team',
      date: 'August 2025',
      readTime: '7 min',
      category: 'tech',
      featured: false,
      slug: 'ai-tools-for-trades',
      icon: Zap
    },
    {
      id: '5',
      title: 'Building a £1M+ Trade Business: The Digital Blueprint',
      excerpt: 'How modern tradesmen are scaling to seven figures using proper digital systems and automation.',
      author: 'Built Proper Team',
      date: 'August 2025',
      readTime: '15 min',
      category: 'business',
      featured: true,
      slug: 'million-pound-trade-business',
      icon: Wrench
    },
    {
      id: '6',
      title: 'Stop Competing on Price: Position Your Trade as Premium',
      excerpt: 'Learn how to charge 30% more than competitors by positioning your trade business properly.',
      author: 'Built Proper Team',
      date: 'August 2025',
      readTime: '9 min',
      category: 'business',
      featured: false,
      slug: 'premium-positioning-trades',
      icon: BookOpen
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="font-inter antialiased bg-slate-950">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-500/5"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase mb-6">
              <BookOpen className="w-3 h-3 mr-2" />
              BUILT PROPER GUIDES
            </div>
            
            {/* Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight">
              Trade Business Guides
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Real advice for real tradesmen. No fluff, no theory, just proven strategies that work in the UK market.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search guides..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-white/10 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 transition-all"
                />
              </div>
            </div>
          </motion.div>
          
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mt-8"
          >
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-5 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category.value
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white'
                    : 'bg-slate-800/50 text-gray-400 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-12">Featured Guides</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <motion.a
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-white/10 hover:border-orange-500/50 transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl flex items-center justify-center">
                        <post.icon className="w-6 h-6 text-orange-400" />
                      </div>
                      <span className="text-xs bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full">
                        FEATURED
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {post.date}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}
      
      {/* Regular Posts */}
      {regularPosts.length > 0 && (
        <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-12">All Guides</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularPosts.map((post, index) => (
                  <motion.a
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group bg-slate-800/30 rounded-xl p-6 border border-white/10 hover:border-orange-500/30 transition-all"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-lg flex items-center justify-center mb-4">
                      <post.icon className="w-5 h-5 text-orange-400" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 text-sm line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/30 rounded-3xl p-12"
          >
            <TrendingUp className="w-12 h-12 text-orange-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Stop reading, start doing. Let's build something proper together.
            </p>
            <motion.a
              href="#quote"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-orange-500/30 transition-all"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
      
      <Footer />
      <AlexChat />
    </div>
  );
};

export default BlogListingTemplate;
