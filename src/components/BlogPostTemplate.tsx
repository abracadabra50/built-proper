import React from 'react';
import { Calendar, User, Clock, ArrowLeft, ArrowRight, Share2, BookOpen, CheckCircle, TrendingUp, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import AlexChat from './AlexChat';

interface BlogPostProps {
  post: {
    title: string;
    subtitle: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    featured: boolean;
    metaDescription: string;
    keywords: string[];
    heroImage?: string;
    sections: {
      type: 'heading' | 'paragraph' | 'list' | 'quote' | 'cta' | 'tip' | 'stats';
      content: string | string[] | { label: string; value: string }[];
      heading?: string;
    }[];
    relatedPosts: {
      title: string;
      slug: string;
      readTime: string;
    }[];
    cta: {
      title: string;
      description: string;
      buttonText: string;
      buttonLink: string;
    };
  };
}

const BlogPostTemplate: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <div className="font-inter antialiased bg-slate-950">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-500/5"></div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back to Blog */}
            <motion.a
              href="/blog"
              className="inline-flex items-center text-gray-400 hover:text-orange-400 mb-8 transition-colors"
              whileHover={{ x: -5 }}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </motion.a>
            
            {/* Category Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase mb-6">
              <BookOpen className="w-3 h-3 mr-2" />
              {post.category}
            </div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
              {post.title}
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 font-light">
              {post.subtitle}
            </p>
            
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {post.readTime} read
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            {post.sections.map((section, index) => {
              switch (section.type) {
                case 'heading':
                  return (
                    <motion.h2
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="text-3xl font-bold text-white mt-12 mb-6"
                    >
                      {section.content}
                    </motion.h2>
                  );
                  
                case 'paragraph':
                  return (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="text-gray-300 mb-6 leading-relaxed"
                    >
                      {section.content}
                    </motion.p>
                  );
                  
                case 'list':
                  return (
                    <motion.ul
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="space-y-3 mb-8"
                    >
                      {(section.content as string[]).map((item, idx) => (
                        <li key={idx} className="flex items-start text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </motion.ul>
                  );
                  
                case 'quote':
                  return (
                    <motion.blockquote
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="border-l-4 border-orange-500 pl-6 py-4 my-8 bg-slate-800/30 rounded-r-xl"
                    >
                      <p className="text-xl text-gray-200 italic">{section.content}</p>
                    </motion.blockquote>
                  );
                  
                case 'tip':
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/30 rounded-2xl p-6 my-8"
                    >
                      <div className="flex items-start">
                        <Lightbulb className="w-6 h-6 text-orange-400 mr-3 flex-shrink-0" />
                        <div>
                          {section.heading && (
                            <h3 className="text-lg font-bold text-white mb-2">{section.heading}</h3>
                          )}
                          <p className="text-gray-300">{section.content}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                  
                case 'stats':
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="grid grid-cols-2 md:grid-cols-3 gap-6 my-12"
                    >
                      {(section.content as { label: string; value: string }[]).map((stat, idx) => (
                        <div key={idx} className="bg-slate-800/50 rounded-xl p-4 text-center">
                          <div className="text-2xl font-bold text-orange-400 mb-1">{stat.value}</div>
                          <div className="text-sm text-gray-400">{stat.label}</div>
                        </div>
                      ))}
                    </motion.div>
                  );
                  
                case 'cta':
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 my-12 text-center border border-white/10"
                    >
                      <h3 className="text-2xl font-bold text-white mb-4">{section.heading}</h3>
                      <p className="text-gray-300 mb-6">{section.content}</p>
                      <motion.a
                        href="#quote"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-6 py-3 rounded-full hover:shadow-2xl hover:shadow-orange-500/30 transition-all"
                      >
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </motion.a>
                    </motion.div>
                  );
                  
                default:
                  return null;
              }
            })}
          </motion.div>
          
          {/* Share Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 pt-8 border-t border-white/10"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-gray-400">Share this guide:</span>
                <button className="text-gray-400 hover:text-orange-400 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.keywords.map((keyword, index) => (
                  <span key={index} className="text-xs bg-slate-800 text-gray-400 px-3 py-1 rounded-full">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Main CTA Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/30 rounded-3xl p-12 text-center"
          >
            <TrendingUp className="w-12 h-12 text-orange-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">{post.cta.title}</h2>
            <p className="text-xl text-gray-300 mb-8">{post.cta.description}</p>
            <motion.a
              href={post.cta.buttonLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-orange-500/30 transition-all"
            >
              {post.cta.buttonText}
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
      
      {/* Related Posts */}
      {post.relatedPosts.length > 0 && (
        <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Related Guides</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {post.relatedPosts.map((related, index) => (
                  <motion.a
                    key={index}
                    href={`/blog/${related.slug}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-slate-800/50 rounded-2xl p-6 border border-white/10 hover:border-orange-500/50 transition-all"
                  >
                    <h3 className="text-xl font-bold text-white mb-2">{related.title}</h3>
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock className="w-4 h-4 mr-2" />
                      {related.readTime} read
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}
      
      <Footer />
      <AlexChat />
    </div>
  );
};

export default BlogPostTemplate;
