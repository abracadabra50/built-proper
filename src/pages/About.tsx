import React from 'react';
import { Users, Target, Award, Zap, Code2, Heart, Rocket, Shield, CheckCircle, ArrowRight, Building, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AlexChat from '../components/AlexChat';

const About = () => {
  const values = [
    {
      icon: Code2,
      title: "Built Proper",
      description: "No shortcuts, no templates, no nonsense. Every project built from scratch with clean, custom code."
    },
    {
      icon: Users,
      title: "Trades First",
      description: "We only work with tradesmen. We know your industry, speak your language, understand your customers."
    },
    {
      icon: Shield,
      title: "Transparent Always",
      description: "Full portal access, daily updates, honest pricing. You see everything we do, when we do it."
    },
    {
      icon: Rocket,
      title: "Results Obsessed",
      description: "We measure success in leads generated, rankings achieved, and businesses transformed."
    }
  ];

  const team = [
    {
      name: "James Mitchell",
      role: "Founder & CEO",
      bio: "Ex-tradesman turned digital expert. Built and sold two trade businesses before starting Built Proper.",
      expertise: ["Business Strategy", "Trade Marketing", "Digital Transformation"]
    },
    {
      name: "Sarah Chen",
      role: "Head of Development",
      bio: "15 years building custom web solutions. Hates WordPress with a passion. Loves clean code.",
      expertise: ["Custom Development", "Performance Optimisation", "Technical SEO"]
    },
    {
      name: "Tom Richardson",
      role: "Head of SEO",
      bio: "Ranked 500+ trade businesses on Google. Knows every local SEO trick that actually works.",
      expertise: ["Local SEO", "Content Strategy", "Google Business Profile"]
    },
    {
      name: "Alex Kumar",
      role: "Lead AI Engineer",
      bio: "Building AI solutions that actually help trades, not just fancy tech for tech's sake.",
      expertise: ["AI Development", "Automation", "Machine Learning"]
    }
  ];

  const milestones = [
    { year: "2020", event: "Founded during lockdown - saw trades struggling online" },
    { year: "2021", event: "First 100 trade clients - proved the model works" },
    { year: "2022", event: "Launched BP Portal - complete transparency for clients" },
    { year: "2023", event: "500+ websites built - zero WordPress, all custom" },
    { year: "2024", event: "AI integration launched - Alex chatbot goes live" },
    { year: "2025", event: "1000+ trades transformed - UK's leading trade digital agency" }
  ];

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
              <Building className="w-3 h-3 mr-2" />
              ABOUT BUILT PROPER
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight">
              We Build Digital Success<br />
              <span className="text-orange-400">For UK Tradesmen</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ex-tradesmen and digital experts who got sick of seeing good trades fail online. 
              So we built an agency that actually understands your business.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-black text-white mb-6">
                Our Mission is Simple
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Every quality tradesman in the UK should have a proper digital presence. Not a DIY website that looks amateur. Not an overpriced agency site that doesn't convert. A proper website that generates proper business.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                We're not another web agency. We're trades-focused, UK-based, and obsessed with results. We don't do corporate. We don't do e-commerce. We don't do WordPress.
              </p>
              <p className="text-lg text-gray-300">
                We do one thing brilliantly: <span className="text-orange-400 font-semibold">transform trade businesses through proper digital systems</span>.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-white/10"
              >
                <div className="text-4xl font-black text-orange-400 mb-2">1000+</div>
                <div className="text-gray-400">Trades Transformed</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-white/10"
              >
                <div className="text-4xl font-black text-orange-400 mb-2">£50M+</div>
                <div className="text-gray-400">Revenue Generated</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-white/10"
              >
                <div className="text-4xl font-black text-orange-400 mb-2">0</div>
                <div className="text-gray-400">WordPress Sites</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-white/10"
              >
                <div className="text-4xl font-black text-orange-400 mb-2">100%</div>
                <div className="text-gray-400">UK Based Team</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Values Section */}
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
              Our Values
            </h2>
            <p className="text-xl text-gray-400">
              What we stand for, what we believe in, what drives us
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-black text-white mb-8 text-center">
              The Built Proper Story
            </h2>
            
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-gray-300 mb-6">
                Built Proper started in a garage in Manchester. Our founder, James, had just sold his plumbing business and watched the new owners struggle to get online properly. They hired a "web expert" who built them a WordPress site that cost £5k and generated zero leads.
              </p>
              <p className="text-gray-300 mb-6">
                That's when it clicked. The trades industry was being taken advantage of by agencies who didn't understand the business, didn't care about results, and saw tradesmen as easy marks for overpriced, underdelivering websites.
              </p>
              <p className="text-gray-300 mb-6">
                So we built something different. An agency that only works with trades. That builds everything custom. That provides complete transparency. That measures success in leads generated, not pages built.
              </p>
              <p className="text-gray-300 mb-8">
                Five years later, we're the UK's leading digital agency for tradesmen. Not because we're the biggest or the flashiest. But because we get results. Proper results for proper tradesmen.
              </p>
            </div>
            
            {/* Timeline */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-white mb-8">Our Journey</h3>
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-20 flex-shrink-0">
                      <span className="text-orange-400 font-bold">{milestone.year}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-300">{milestone.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Team Section */}
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
              The Team
            </h2>
            <p className="text-xl text-gray-400">
              Ex-tradesmen, digital experts, and people who give a damn
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-white/10"
              >
                <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-orange-400 mb-4">{member.role}</p>
                <p className="text-gray-400 mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, idx) => (
                    <span key={idx} className="text-xs bg-slate-800 text-gray-400 px-3 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Location Section */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <MapPin className="w-12 h-12 text-orange-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Proudly UK Based
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              No outsourcing. No offshore teams. Every line of code written in the UK by people who understand UK trades.
            </p>
            <p className="text-gray-400">
              Offices in Manchester, London, and Edinburgh<br />
              Working with trades across all of the UK
            </p>
          </motion.div>
        </div>
      </section>
      
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
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Join 1000+ Successful Trades?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's build something proper together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#quote"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-orange-500/30 transition-all"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
              <motion.a
                href="/careers"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center border border-white/20 text-white hover:text-orange-400 font-medium px-8 py-4 rounded-full hover:border-orange-500/50 transition-all"
              >
                Join Our Team
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

export default About;
