import React from 'react';
import { ArrowLeft, ArrowRight, TrendingUp, Clock, Users, DollarSign, Target, CheckCircle, Quote, Award, Calendar, MapPin, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import AlexChat from './AlexChat';

interface CaseStudyProps {
  caseStudy: {
    client: string;
    industry: string;
    location: string;
    timeline: string;
    projectType: string;
    heroImage?: string;
    overview: {
      challenge: string;
      solution: string;
      outcome: string;
    };
    metrics: {
      label: string;
      before: string;
      after: string;
      improvement: string;
      icon: React.ElementType;
    }[];
    testimonial: {
      quote: string;
      author: string;
      position: string;
    };
    services: string[];
    process: {
      phase: string;
      title: string;
      description: string;
      duration: string;
      deliverables: string[];
    }[];
    challenges: {
      title: string;
      description: string;
      solution: string;
    }[];
    results: {
      title: string;
      description: string;
      impact: string;
    }[];
    tools: string[];
    nextSteps?: string;
    relatedCases: {
      title: string;
      client: string;
      industry: string;
      slug: string;
    }[];
  };
}

const CaseStudyTemplate: React.FC<CaseStudyProps> = ({ caseStudy }) => {
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
          >
            {/* Back to Case Studies */}
            <motion.a
              href="/case-studies"
              className="inline-flex items-center text-gray-400 hover:text-orange-400 mb-8 transition-colors"
              whileHover={{ x: -5 }}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </motion.a>
            
            {/* Project Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase">
                <Award className="w-3 h-3 mr-2" />
                SUCCESS STORY
              </div>
              <span className="text-gray-400 text-sm">{caseStudy.industry}</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-400 text-sm flex items-center">
                <MapPin className="w-3 h-3 mr-1" />
                {caseStudy.location}
              </span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
              {caseStudy.client}
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 font-light max-w-3xl">
              {caseStudy.overview.outcome}
            </p>
            
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-12">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Timeline: {caseStudy.timeline}
              </div>
              <div className="flex items-center">
                <Target className="w-4 h-4 mr-2" />
                {caseStudy.projectType}
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                {caseStudy.services.length} Services
              </div>
            </div>
            
            {/* Key Metrics Preview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {caseStudy.metrics.slice(0, 4).map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center"
                >
                  <metric.icon className="w-5 h-5 text-orange-400 mx-auto mb-2" />
                  <div className="text-lg font-bold text-green-400 mb-1">{metric.improvement}</div>
                  <div className="text-xs text-gray-400">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Overview Section */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-8"
          >
            <div>
              <h3 className="text-sm font-bold text-orange-400 mb-3 uppercase tracking-wider">The Challenge</h3>
              <p className="text-gray-300 leading-relaxed">{caseStudy.overview.challenge}</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-orange-400 mb-3 uppercase tracking-wider">Our Solution</h3>
              <p className="text-gray-300 leading-relaxed">{caseStudy.overview.solution}</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-orange-400 mb-3 uppercase tracking-wider">The Outcome</h3>
              <p className="text-gray-300 leading-relaxed">{caseStudy.overview.outcome}</p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Detailed Results */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-white mb-4">
              Results Achieved
            </h2>
            <p className="text-xl text-gray-400">
              Measurable improvements across all key metrics
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudy.metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-center justify-between mb-4">
                  <metric.icon className="w-8 h-8 text-orange-400" />
                  <span className="text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded-full font-bold">
                    +{metric.improvement}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-4">{metric.label}</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Before</span>
                    <span className="text-red-400 font-semibold">{metric.before}</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-1">
                    <div className="bg-gradient-to-r from-red-500 to-green-500 h-1 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">After</span>
                    <span className="text-green-400 font-semibold">{metric.after}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonial */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/30 rounded-3xl p-8 lg:p-12 text-center"
          >
            <Quote className="w-12 h-12 text-orange-400 mx-auto mb-6" />
            <blockquote className="text-2xl lg:text-3xl font-light text-white mb-8 leading-relaxed">
              "{caseStudy.testimonial.quote}"
            </blockquote>
            <div className="flex flex-col items-center">
              <h4 className="text-lg font-bold text-white">{caseStudy.testimonial.author}</h4>
              <p className="text-gray-400">{caseStudy.testimonial.position}</p>
              <p className="text-orange-400 font-semibold">{caseStudy.client}</p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Process Breakdown */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-white mb-4">
              How We Did It
            </h2>
            <p className="text-xl text-gray-400">
              Step-by-step breakdown of our process
            </p>
          </motion.div>
          
          <div className="space-y-8">
            {caseStudy.process.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-8"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                    {phase.phase}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-4 mb-2">
                    <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                    <span className="text-sm text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full">
                      {phase.duration}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{phase.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {phase.deliverables.map((deliverable, idx) => (
                      <span key={idx} className="text-xs bg-slate-800/50 text-gray-400 px-3 py-1 rounded-full">
                        {deliverable}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Challenges & Solutions */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-white mb-4">
              Challenges & Solutions
            </h2>
            <p className="text-xl text-gray-400">
              How we overcame obstacles to deliver results
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudy.challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-2xl p-6 border border-white/10"
              >
                <h3 className="text-lg font-bold text-white mb-3">{challenge.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{challenge.description}</p>
                <div className="border-t border-white/10 pt-4">
                  <h4 className="text-sm font-bold text-orange-400 mb-2">Our Solution:</h4>
                  <p className="text-gray-300 text-sm">{challenge.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Used */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-black text-white mb-8">
              Services Delivered
            </h2>
            
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {caseStudy.services.map((service, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold"
                >
                  {service}
                </motion.span>
              ))}
            </div>
            
            {caseStudy.tools.length > 0 && (
              <>
                <h3 className="text-xl font-bold text-white mb-6">Built Proper Tools Used</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {caseStudy.tools.map((tool, index) => (
                    <span key={index} className="text-xs bg-slate-800/50 text-gray-400 px-3 py-1 rounded-full">
                      {tool}
                    </span>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </div>
      </section>
      
      {/* Related Case Studies */}
      {caseStudy.relatedCases.length > 0 && (
        <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Related Success Stories</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {caseStudy.relatedCases.map((related, index) => (
                  <motion.a
                    key={index}
                    href={`/case-studies/${related.slug}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-slate-800/50 rounded-2xl p-6 border border-white/10 hover:border-orange-500/50 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs bg-slate-700/50 text-gray-400 px-2 py-1 rounded-full">
                        {related.industry}
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                      {related.client}
                    </h3>
                    <p className="text-gray-400 text-sm">{related.title}</p>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/30 rounded-3xl p-12"
          >
            <Star className="w-12 h-12 text-orange-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready for Similar Results?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can transform your trade business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-orange-500/30 transition-all"
              >
                Get Your Custom Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
              <motion.a
                href="/case-studies"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center border border-white/20 text-white hover:text-orange-400 font-medium px-8 py-4 rounded-full hover:border-orange-500/50 transition-all"
              >
                View More Cases
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
      <AlexChat />
    </div>
  );
};

export default CaseStudyTemplate;
