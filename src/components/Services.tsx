import React from 'react';
import { Globe, Search, Palette, Code2, Brain, Zap, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const coreServices = [
    {
      icon: Globe,
      title: 'Custom Trade Websites',
      description: 'Proper websites built from scratch. No WordPress, no page builders, no templates. Every line of code written specifically for your trade business.',
      features: [
        '100% custom-built - no templates ever',
        'Mobile-responsive design that works everywhere',
        'Lightning-fast loading (under 2 seconds)',
        'Professional portfolio & project galleries',
        'Smart quote request forms that convert',
        'Customer testimonials & trust signals',
        'Built to rank on Google from day one'
      ],
      highlight: 'MOST POPULAR',
      cta: 'Build My Website',
      link: '/services/websites',
      popular: true
    },
    {
      icon: Search,
      title: 'Local SEO Domination',
      description: 'Get found when people search for your trade. We\'ll get you ranking #1 for "plumber near me", "emergency electrician", and the searches that matter.',
      features: [
        'Google Business Profile optimisation',
        'Local keyword research & targeting',
        'Citation building across 50+ directories',
        'Review generation & management',
        'Competitor analysis & tracking',
        'Monthly ranking reports',
        'Content strategy for your trade'
      ],
      highlight: 'GET FOUND',
      cta: 'Dominate Google',
      link: '/services/seo',
      popular: false
    },
    {
      icon: Palette,
      title: 'Trade Business Branding',
      description: 'Stand out from cowboys with a brand that screams quality. Professional design that builds trust and lets you charge premium prices.',
      features: [
        'Professional logo design',
        'Complete brand guidelines',
        'Business cards & stationery',
        'Van livery & signage design',
        'Social media templates',
        'Uniform & workwear concepts',
        'Brand consistency across everything'
      ],
      highlight: 'LOOK PROPER',
      cta: 'Build My Brand',
      popular: false
    }
  ];

  const advancedServices = [
    {
      icon: Brain,
      title: 'AI Lead Management',
      description: 'Once your website\'s bringing in leads, let AI handle them. Instant responses, qualification, booking - all automated.',
      features: [
        'AI chatbots for instant response',
        'Intelligent lead qualification',
        'Automated appointment booking',
        'Smart quote generation',
        'WhatsApp & SMS integration',
        'CRM automation'
      ],
      link: '/services/ai-automation'
    },
    {
      icon: Code2,
      title: 'Custom Business Systems',
      description: 'Need something specific? Quote trackers, job management, customer portals - we build whatever your business needs.',
      features: [
        'Custom quote management',
        'Job tracking systems',
        'Customer portals',
        'Invoice automation',
        'Team collaboration tools',
        'API integrations'
      ],
      link: '/services/ai-automation'
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Stop doing repetitive tasks. We\'ll automate your follow-ups, reminders, invoicing - anything that wastes your time.',
      features: [
        'Email automation',
        'Review requests',
        'Payment reminders',
        'Lead nurturing',
        'Report generation',
        'Multi-channel messaging'
      ],
      link: '/services/ai-automation'
    }
  ];

  return (
    <section id="services" className="relative py-32 bg-gradient-to-b from-slate-900 to-slate-950">
      {/* Smooth transition from previous section */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-900 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Main Services Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 text-orange-400 px-6 py-3 rounded-full text-sm font-bold tracking-wider uppercase mb-8"
          >
            <Sparkles className="w-4 h-4 mr-3" />
            The Gateway to Growth
          </motion.div>
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter">
            WEBSITES THAT
            <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              GET YOU WORK
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-400 max-w-4xl mx-auto font-light">
            Start with a proper website that ranks on Google and brings in customers. 
            <span className="text-white font-semibold"> Then add AI automation, custom systems, and whatever else you need to scale</span>.
          </p>
        </motion.div>

        {/* Core Services - The Gateway */}
        <div className="mb-32">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Start Here: The Essentials
          </motion.h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group ${
                  service.popular 
                    ? 'transform scale-105' 
                    : ''
                }`}
              >
                <motion.div 
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className={`h-full bg-gradient-to-br ${
                    service.popular 
                      ? 'from-orange-500/20 to-orange-600/20 border-orange-500/50' 
                      : 'from-slate-800/50 to-slate-900/50 border-white/10'
                  } backdrop-blur-sm rounded-3xl p-8 border hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10`}>
                  
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                        {service.highlight}
                      </div>
                    </div>
                  )}

                  {!service.popular && (
                    <div className="absolute -top-4 right-8">
                      <div className="bg-slate-900 border border-slate-700 text-orange-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        {service.highlight}
                      </div>
                    </div>
                  )}
                  
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <service.icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <CheckCircle className="w-4 h-4 text-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.a
                    href={service.link || '#quote'}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full flex items-center justify-center ${
                      service.popular 
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white' 
                        : 'bg-white/10 text-white hover:bg-white/20'
                    } font-semibold py-3 px-6 rounded-full transition-all duration-300`}
                  >
                    {service.cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </motion.a>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Advanced Services - The Next Level */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-orange-500/5 to-orange-600/5 border border-orange-500/20 rounded-3xl p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready for More? We Do That Too.
            </h3>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Once your website's bringing in leads, we can build custom systems to handle them. 
              AI agents, automation, whatever you need - all custom-built for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {advancedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 hover:border-orange-500/50 transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-orange-600/20 text-orange-400 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-500 text-sm">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={service.link}
                  className="inline-flex items-center text-orange-400 hover:text-orange-300 text-sm font-semibold transition-colors group-hover:translate-x-1"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* No WordPress Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            ⚠️ We Don't Do WordPress
          </h3>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-6">
            Every site is custom-coded from scratch. No bloated plugins, no security vulnerabilities, 
            no "this plugin isn't compatible" nonsense. Just clean, fast, professional websites that work.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-gray-300">
              ❌ No WordPress
            </span>
            <span className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-gray-300">
              ❌ No Wix
            </span>
            <span className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-gray-300">
              ❌ No Squarespace
            </span>
            <span className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-gray-300">
              ❌ No Page Builders
            </span>
            <span className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400">
              ✓ 100% Custom Code
            </span>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-24"
        >
          <h3 className="text-4xl font-bold text-white mb-6">
            Ready to Get Proper Online?
          </h3>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's build you a website that actually brings in work. 
            No templates, no monthly fees, just results.
          </p>
          <motion.a
            href="#quote"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300"
          >
            Get Your Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;