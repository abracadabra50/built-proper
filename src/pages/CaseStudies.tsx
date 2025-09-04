import React from 'react';
import { TrendingUp, Users, DollarSign, Clock, ArrowRight, Star, Award, Target, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AlexChat from '../components/AlexChat';

const CaseStudies = () => {
  const caseStudies = [
    {
      client: "Hallmark Driveways Edinburgh",
      industry: "Driveway & Paving",
      challenge: "Struggling to generate consistent leads, relying on word-of-mouth and local advertising",
      solution: "Complete digital transformation - custom website, local SEO, Google Ads, review system",
      results: [
        { metric: "Monthly Leads", before: "5-8", after: "45+", improvement: "500%" },
        { metric: "Pipeline Value", before: "£50k", after: "£2M+", improvement: "4000%" },
        { metric: "Average Job Value", before: "£2,500", after: "£8,500", improvement: "240%" },
        { metric: "Google Ranking", before: "Page 5", after: "#1", improvement: "Top 3" }
      ],
      testimonial: "Built Proper didn't just build us a website - they transformed our entire business. We went from struggling to find work to having a £2M+ pipeline. Best investment we ever made.",
      timeline: "6 months",
      services: ["Custom Website", "Local SEO", "Google Ads", "Review Management"],
      featured: true
    },
    {
      client: "Elite Electrical Edinburgh", 
      industry: "Electrical Services",
      challenge: "Competing on price, low profit margins, amateur brand perception",
      solution: "Complete rebrand, premium positioning, custom website, content marketing",
      results: [
        { metric: "Hourly Rate", before: "£45", after: "£75", improvement: "67%" },
        { metric: "Monthly Revenue", before: "£15k", after: "£35k", improvement: "133%" },
        { metric: "Profit Margin", before: "15%", after: "35%", improvement: "133%" },
        { metric: "Customer Quality", before: "Price shoppers", after: "Premium clients", improvement: "Quality up" }
      ],
      testimonial: "The rebrand was a game changer. Customers now see us as the premium choice, not the cheap option. We're booked solid with quality work.",
      timeline: "4 months",
      services: ["Branding", "Custom Website", "Premium Positioning", "Content Strategy"],
      featured: true
    },
    {
      client: "Premier Plumbing Manchester",
      industry: "Plumbing & Heating", 
      challenge: "Owner working 60+ hours/week, no systems, manual quote process",
      solution: "AI automation, smart scheduling, automated follow-ups, workflow optimisation",
      results: [
        { metric: "Working Hours", before: "60hrs/week", after: "40hrs/week", improvement: "33% less" },
        { metric: "Revenue", before: "£180k", after: "£270k", improvement: "50%" },
        { metric: "Quote Response Time", before: "2-3 days", after: "30 minutes", improvement: "95% faster" },
        { metric: "Lead Conversion", before: "25%", after: "45%", improvement: "80%" }
      ],
      testimonial: "I got my life back. The AI handles all the admin while I focus on the work I love. Revenue up 50% while working 20 hours less per week.",
      timeline: "3 months",
      services: ["AI Automation", "Workflow Systems", "Smart Scheduling", "CRM Integration"],
      featured: true
    },
    {
      client: "Yorkshire Heating Solutions",
      industry: "Heating & Gas",
      challenge: "Seasonal business fluctuations, low online visibility, poor lead quality",
      solution: "Multi-channel marketing, seasonal campaigns, lead qualification system",
      results: [
        { metric: "Weekly Leads", before: "2-3", after: "25+", improvement: "1000%" },
        { metric: "Seasonal Revenue Dip", before: "60%", after: "15%", improvement: "75% better" },
        { metric: "Lead Quality Score", before: "3/10", after: "8/10", improvement: "167%" },
        { metric: "Cost Per Lead", before: "£180", after: "£45", improvement: "75% less" }
      ],
      testimonial: "We used to dread summer - no heating work, no money. Now we're busy year-round with maintenance contracts and cooling systems.",
      timeline: "6 months",
      services: ["Digital Marketing", "Seasonal Campaigns", "Lead Qualification", "Multi-channel Strategy"],
      featured: false
    },
    {
      client: "MacLeod Construction Glasgow",
      industry: "General Building",
      challenge: "Invisible on Google, losing jobs to competitors, outdated website",
      solution: "SEO overhaul, content marketing, Google Business Profile optimisation",
      results: [
        { metric: "Google Ranking", before: "Page 5", after: "#1", improvement: "Position 1" },
        { metric: "Organic Traffic", before: "50/month", after: "2,500/month", improvement: "5000%" },
        { metric: "Monthly Enquiries", before: "8", after: "35", improvement: "338%" },
        { metric: "Project Value", before: "£25k avg", after: "£65k avg", improvement: "160%" }
      ],
      testimonial: "We went from invisible to the first result for 'builders Glasgow'. The phone hasn't stopped ringing since. Proper job by Built Proper.",
      timeline: "4 months",
      services: ["Local SEO", "Content Marketing", "Google Business Profile", "Technical SEO"],
      featured: false
    },
    {
      client: "London Luxury Kitchens",
      industry: "Kitchen Fitting",
      challenge: "High-end market, needed premium online presence, visual showcase required",
      solution: "Luxury website design, professional photography, portfolio showcase system",
      results: [
        { metric: "Average Project Value", before: "£15k", after: "£45k", improvement: "200%" },
        { metric: "Conversion Rate", before: "8%", after: "28%", improvement: "250%" },
        { metric: "Premium Enquiries", before: "20%", after: "80%", improvement: "300%" },
        { metric: "Time to Book", before: "3 weeks", after: "Next day", improvement: "95% faster" }
      ],
      testimonial: "The new website positions us exactly where we want to be - the luxury choice. Customers now come to us expecting to pay premium prices.",
      timeline: "5 months",
      services: ["Luxury Website", "Professional Photography", "Portfolio System", "Premium Positioning"],
      featured: false
    }
  ];

  const featuredStudies = caseStudies.filter(study => study.featured);
  const regularStudies = caseStudies.filter(study => !study.featured);

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
            <div className="inline-flex items-center bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase mb-6">
              <Award className="w-3 h-3 mr-2" />
              CLIENT SUCCESS STORIES
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight">
              Real Results for<br />
              <span className="text-orange-400">Real Tradesmen</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              See how we've transformed UK trade businesses. From struggling sole traders to million-pound operations.
            </p>
          </motion.div>
          
          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {[
              { label: "Clients Transformed", value: "1000+" },
              { label: "Revenue Generated", value: "£50M+" },
              { label: "Average ROI", value: "400%" },
              { label: "Success Rate", value: "96%" }
            ].map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-black text-orange-400 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Featured Case Studies */}
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
              Featured Transformations
            </h2>
            <p className="text-xl text-gray-400">
              Our most dramatic business transformations
            </p>
          </motion.div>
          
          <div className="space-y-16">
            {featuredStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-8 lg:p-12 border border-white/10 hover:border-orange-500/30 transition-all"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Left Column - Story */}
                  <div>
                    <div className="flex items-center mb-4">
                      <span className="bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-xs font-bold uppercase">
                        FEATURED
                      </span>
                      <span className="ml-3 text-gray-400 text-sm">{study.industry}</span>
                    </div>
                    
                    <h3 className="text-3xl font-black text-white mb-4">{study.client}</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-sm font-bold text-orange-400 mb-1">THE CHALLENGE</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-bold text-orange-400 mb-1">OUR SOLUTION</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                    </div>
                    
                    <blockquote className="border-l-4 border-orange-500 pl-4 py-2 mb-6">
                      <p className="text-lg text-gray-200 italic">"{study.testimonial}"</p>
                    </blockquote>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.services.map((service, idx) => (
                        <span key={idx} className="text-xs bg-slate-700/50 text-gray-400 px-3 py-1 rounded-full">
                          {service}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock className="w-4 h-4 mr-1" />
                      Timeline: {study.timeline}
                    </div>
                  </div>
                  
                  {/* Right Column - Results */}
                  <div>
                    <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-orange-400" />
                      Results Achieved
                    </h4>
                    
                    <div className="space-y-4">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="bg-slate-700/30 rounded-xl p-4">
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-sm font-medium text-gray-300">{result.metric}</span>
                            <span className="text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded-full">
                              +{result.improvement}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="text-center">
                              <div className="text-sm text-gray-500">Before</div>
                              <div className="text-lg font-bold text-red-400">{result.before}</div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-500 mx-4" />
                            <div className="text-center">
                              <div className="text-sm text-gray-500">After</div>
                              <div className="text-lg font-bold text-green-400">{result.after}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* More Case Studies */}
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
              More Success Stories
            </h2>
            <p className="text-xl text-gray-400">
              Every client gets results - here are more transformations
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-2xl p-6 border border-white/10 hover:border-orange-500/30 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs bg-slate-700/50 text-gray-400 px-2 py-1 rounded-full">
                    {study.industry}
                  </span>
                  <span className="text-xs text-gray-500">{study.timeline}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{study.client}</h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{study.challenge}</p>
                
                <div className="space-y-2 mb-4">
                  {study.results.slice(0, 2).map((result, idx) => (
                    <div key={idx} className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">{result.metric}</span>
                      <span className="text-green-400 font-semibold">+{result.improvement}</span>
                    </div>
                  ))}
                </div>
                
                <blockquote className="text-sm text-gray-300 italic mb-4 line-clamp-2">
                  "{study.testimonial}"
                </blockquote>
                
                <div className="flex flex-wrap gap-1">
                  {study.services.slice(0, 2).map((service, idx) => (
                    <span key={idx} className="text-xs bg-slate-700/50 text-gray-500 px-2 py-1 rounded">
                      {service}
                    </span>
                  ))}
                  {study.services.length > 2 && (
                    <span className="text-xs text-gray-500 px-2 py-1">
                      +{study.services.length - 2} more
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
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
            <Star className="w-12 h-12 text-orange-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 1000+ UK tradesmen who've transformed their business with Built Proper
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-orange-500/30 transition-all"
            >
              Start Your Transformation
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

export default CaseStudies;
