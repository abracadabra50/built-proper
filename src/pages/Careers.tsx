import React from 'react';
import { Briefcase, MapPin, Clock, DollarSign, Heart, Zap, Users, Coffee, Trophy, Laptop, Home, Calendar, ArrowRight, CheckCircle, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AlexChat from '../components/AlexChat';

const Careers = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Proper Salary",
      description: "Top tier compensation. We pay for talent, not excuses."
    },
    {
      icon: Home,
      title: "Remote First",
      description: "Work from anywhere in the UK. Office optional, results required."
    },
    {
      icon: Calendar,
      title: "Flexible Hours",
      description: "We care about output, not hours. Work when you're most productive."
    },
    {
      icon: Laptop,
      title: "Top Kit",
      description: "MacBook Pro, monitors, whatever you need to do your best work."
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Private health insurance, gym membership, mental health support."
    },
    {
      icon: Trophy,
      title: "Growth Path",
      description: "Clear progression, learning budget, conference attendance."
    }
  ];

  const openRoles = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Remote (UK)",
      type: "Full-time",
      salary: "£70-90k",
      description: "Build custom websites and systems for UK trades. React, Node.js, TypeScript required. WordPress haters preferred.",
      requirements: [
        "5+ years commercial development experience",
        "Expert in React, TypeScript, Node.js",
        "Experience with custom CMS development",
        "Passionate about performance and clean code",
        "Bonus: Experience with AI/ML integration"
      ]
    },
    {
      title: "SEO Specialist",
      department: "Marketing",
      location: "Remote (UK)",
      type: "Full-time",
      salary: "£40-55k",
      description: "Get trade businesses ranking #1 on Google. Local SEO expertise essential. Must understand UK market.",
      requirements: [
        "3+ years SEO experience",
        "Proven local SEO track record",
        "Experience with trade/service businesses",
        "Technical SEO knowledge",
        "Data-driven approach to strategy"
      ]
    },
    {
      title: "Client Success Manager",
      department: "Operations",
      location: "Remote (UK)",
      type: "Full-time",
      salary: "£35-45k",
      description: "Keep our trade clients happy and successful. Be their digital partner and trusted advisor.",
      requirements: [
        "2+ years client management experience",
        "Understanding of digital marketing",
        "Excellent communication skills",
        "Problem-solving mindset",
        "Bonus: Trade industry knowledge"
      ]
    },
    {
      title: "AI/Automation Engineer",
      department: "Engineering",
      location: "Remote (UK)",
      type: "Full-time",
      salary: "£80-100k",
      description: "Build AI solutions that actually help trades. ChatGPT, automation, and practical AI applications.",
      requirements: [
        "Experience with LLMs and AI APIs",
        "Python, JavaScript proficiency",
        "Understanding of automation workflows",
        "Practical approach to AI implementation",
        "Portfolio of working AI projects"
      ]
    }
  ];

  const culture = [
    {
      title: "No Bullshit",
      description: "We say what we mean, do what we say. No corporate politics, no pointless meetings."
    },
    {
      title: "Results Matter",
      description: "We measure everything. If it doesn't help trades succeed, we don't do it."
    },
    {
      title: "Always Learning",
      description: "Tech changes fast. We stay ahead. Learning budget for everyone."
    },
    {
      title: "Work Hard, Live Well",
      description: "We work intensely, then we switch off. No weekend emails, no burnout culture."
    },
    {
      title: "Trades First",
      description: "Every decision starts with 'does this help tradesmen?' If not, we don't do it."
    },
    {
      title: "Built Proper",
      description: "Quality over quantity, always. We'd rather do less, but do it properly."
    }
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
              <Briefcase className="w-3 h-3 mr-2" />
              CAREERS AT BUILT PROPER
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight">
              Join the Team<br />
              <span className="text-orange-400">Building the Future</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Help us transform how UK trades do business online. 
              No agencies bullshit. Just proper work for proper people.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                30+ Team Members
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Fully Remote
              </div>
              <div className="flex items-center">
                <Rocket className="w-4 h-4 mr-2" />
                High Growth
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Why Join Section */}
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
              Why Join Built Proper?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We're not another agency. We're building something special for an industry that's been ignored by tech.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="text-5xl font-black text-orange-400 mb-2">1000+</div>
              <p className="text-gray-400">Trade businesses transformed</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-black text-orange-400 mb-2">200%</div>
              <p className="text-gray-400">Year-on-year growth</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-5xl font-black text-orange-400 mb-2">4.9★</div>
              <p className="text-gray-400">Glassdoor rating</p>
            </motion.div>
          </div>
          
          <div className="prose prose-invert prose-lg max-w-none text-center">
            <p className="text-gray-300">
              We're on a mission to digitally transform every quality trade business in the UK. 
              Not with generic solutions, but with custom-built systems that actually work. 
              If you want to build something meaningful, work with brilliant people, and have proper work-life balance, 
              you'll love it here.
            </p>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
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
              Benefits & Perks
            </h2>
            <p className="text-xl text-gray-400">
              We look after our team properly
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Culture Section */}
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
              Our Culture
            </h2>
            <p className="text-xl text-gray-400">
              How we work, what we believe, who we are
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {culture.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-xl p-6 border border-white/10"
              >
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Open Roles Section */}
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
              Open Positions
            </h2>
            <p className="text-xl text-gray-400">
              Join us in transforming UK trades
            </p>
          </motion.div>
          
          <div className="space-y-6">
            {openRoles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-white/10 hover:border-orange-500/50 transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{role.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="text-gray-400 flex items-center">
                        <Briefcase className="w-4 h-4 mr-1" />
                        {role.department}
                      </span>
                      <span className="text-gray-400 flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {role.location}
                      </span>
                      <span className="text-gray-400 flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {role.type}
                      </span>
                      <span className="text-orange-400 flex items-center font-semibold">
                        <DollarSign className="w-4 h-4 mr-1" />
                        {role.salary}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{role.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-white mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {role.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start text-gray-400 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <motion.a
                  href={`mailto:careers@builtproper.com?subject=Application: ${role.title}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-6 py-3 rounded-full hover:shadow-lg hover:shadow-orange-500/30 transition-all"
                >
                  Apply Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Application Process */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-black text-white mb-12 text-center">
              Our Hiring Process
            </h2>
            
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-start"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Application</h3>
                  <p className="text-gray-400">Send your CV and a proper cover letter. Tell us why you want to work here, not generic waffle.</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-start"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Quick Chat</h3>
                  <p className="text-gray-400">30-minute video call. We'll tell you about us, you tell us about you. No tricks, just conversation.</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Technical Assessment</h3>
                  <p className="text-gray-400">Role-specific task. Real work, not leetcode nonsense. Usually takes 2-3 hours, always paid.</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Team Interview</h3>
                  <p className="text-gray-400">Meet your future colleagues. Culture fit matters - we want people who'll thrive here.</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-start"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Offer</h3>
                  <p className="text-gray-400">If we're both happy, you'll get an offer within 48 hours. Proper salary, proper benefits, proper job.</p>
                </div>
              </motion.div>
            </div>
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
            <Rocket className="w-12 h-12 text-orange-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Don't See Your Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for brilliant people. Send us your CV and tell us how you can help transform UK trades.
            </p>
            <motion.a
              href="mailto:careers@builtproper.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-orange-500/30 transition-all"
            >
              Send Your CV
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

export default Careers;
