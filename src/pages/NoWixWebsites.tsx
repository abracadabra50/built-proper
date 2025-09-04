import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  AlertTriangle, X, Check, ArrowRight, TrendingDown, 
  Lock, Zap, Search, DollarSign, Code, Globe, Shield
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';

const NoWixWebsites = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-orange-500/10" />
        
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
              <AlertTriangle className="w-4 h-4 text-purple-500" />
              <span className="text-sm text-purple-400">Wix Alternative for UK Trades</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
              <span className="text-white">Why UK Tradesmen</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-600">
                Should AVOID WIX
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Wix traps your business in their ecosystem. You can't export, can't optimise, can't compete. 
              <span className="text-white font-semibold"> Here's the Wix alternative that actually works.</span>
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="/website-cost-calculator"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all"
              >
                Get Your Custom Site Quote
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#wix-problems"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                See Wix Problems
                <TrendingDown className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Wix Monthly Cost', value: '£45+', subtext: 'Forever increasing' },
              { label: 'SEO Limitations', value: '73%', subtext: 'Features you can\'t access' },
              { label: 'Page Load Speed', value: '4.2s', subtext: 'Average Wix site' },
              { label: 'Export Your Site?', value: 'NEVER', subtext: 'Locked in forever' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 border border-red-500/20 rounded-xl p-6 text-center"
              >
                <div className="text-3xl font-bold text-red-400 mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.subtext}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The 7 Deadly Sins of Wix */}
      <section id="wix-problems" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">The 7 Deadly Sins of</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-600">
                Wix for Tradesmen
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Why Wix is the worst choice for serious UK trade businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Lock,
                title: '1. You\'re Locked In Forever',
                description: 'Can\'t export your site. Ever. If you leave Wix, you start from scratch. Your content, design, everything - trapped.',
                impact: 'Business Risk: EXTREME'
              },
              {
                icon: Search,
                title: '2. Terrible for Local SEO',
                description: 'Wix sites struggle to rank locally. No proper schema markup, limited meta control, bloated code Google hates.',
                impact: 'Lead Loss: 60-80%'
              },
              {
                icon: DollarSign,
                title: '3. Hidden Costs Everywhere',
                description: '£45/month becomes £100+ quickly. Remove Wix ads? Pay. Email? Pay. Booking system? Pay. Storage? Pay more.',
                impact: 'True Cost: £1,200+/year'
              },
              {
                icon: TrendingDown,
                title: '4. Slow as Molasses',
                description: 'Average Wix site: 4.2 seconds to load. Google punishes slow sites. Customers leave after 3 seconds.',
                impact: 'Conversion Loss: 40%'
              },
              {
                icon: Code,
                title: '5. Zero Real Customisation',
                description: 'Need custom features? Tough. Wix decides what you can have. No code access, no real flexibility.',
                impact: 'Growth Limited: 100%'
              },
              {
                icon: Globe,
                title: '6. Amateur Hour Branding',
                description: 'Every Wix site looks like a Wix site. Templates scream "DIY". Customers notice. Trust drops.',
                impact: 'Credibility: DAMAGED'
              },
              {
                icon: Shield,
                title: '7. No Ownership, No Asset',
                description: 'You\'re renting space on Wix. You own nothing. Can\'t sell it. Can\'t move it. It\'s not a business asset.',
                impact: 'Asset Value: £0'
              }
            ].map((sin, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 border border-red-500/20 rounded-xl p-6 hover:border-red-500/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <sin.icon className="w-6 h-6 text-red-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{sin.title}</h3>
                    <p className="text-gray-300 mb-3">{sin.description}</p>
                    <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-3 py-1">
                      <span className="text-sm text-red-400 font-semibold">{sin.impact}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wix vs Custom Comparison */}
      <section className="py-20 px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">Wix vs Custom:</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-600">
                The Real Numbers
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Wix Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-red-500/10 to-red-600/10 border border-red-500/20 rounded-2xl p-8"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Wix Website</h3>
                <p className="text-red-400">What you're really getting</p>
              </div>
              
              <ul className="space-y-4">
                {[
                  { text: '£45-100/month forever', bad: true },
                  { text: 'Can\'t export or move site', bad: true },
                  { text: 'Template looks like everyone else', bad: true },
                  { text: 'Slow loading (4+ seconds)', bad: true },
                  { text: 'Poor local SEO performance', bad: true },
                  { text: 'Wix branding on your site', bad: true },
                  { text: 'Limited to Wix features only', bad: true },
                  { text: 'No code ownership', bad: true },
                  { text: 'Can\'t sell as business asset', bad: true },
                  { text: '5-year cost: £3,000-6,000', bad: true }
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Custom Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-green-500/10 to-green-600/10 border border-green-500/20 rounded-2xl p-8"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Custom Website</h3>
                <p className="text-green-400">Built Proper solution</p>
              </div>
              
              <ul className="space-y-4">
                {[
                  { text: '£3-5k one-time investment', good: true },
                  { text: 'You own everything 100%', good: true },
                  { text: 'Unique design for your brand', good: true },
                  { text: 'Lightning fast (<1 second)', good: true },
                  { text: 'Dominates local SEO', good: true },
                  { text: 'Your branding only', good: true },
                  { text: 'Unlimited custom features', good: true },
                  { text: 'Full code ownership', good: true },
                  { text: 'Sellable business asset', good: true },
                  { text: '5-year cost: £3-5k total', good: true }
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-orange-500/10 border border-orange-500/20 rounded-xl p-6 text-center"
          >
            <p className="text-lg text-white font-semibold mb-2">
              The Verdict: Wix costs MORE and delivers LESS
            </p>
            <p className="text-gray-300">
              Over 5 years, Wix costs the same or more than a custom site, but you end up with nothing to show for it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Real Stories */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">UK Trades Who</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Escaped Wix
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Tom Bradley',
                business: 'Bradley Electrical',
                location: 'Manchester',
                before: 'Paying £75/month to Wix, getting 2-3 leads',
                after: 'Custom site brings 40+ leads/month',
                quote: 'Wix was bleeding me dry. £900/year for a site that looked amateur and brought no work.'
              },
              {
                name: 'Steve Kumar',
                business: 'Kumar Plumbing',
                location: 'Birmingham',
                before: 'Stuck on page 5 of Google with Wix',
                after: 'Now ranking #1 for "emergency plumber Birmingham"',
                quote: 'My Wix site was invisible. Custom site had me ranking in 6 weeks. Game changer.'
              },
              {
                name: 'Mark Thompson',
                business: 'Thompson Builders',
                location: 'Leeds',
                before: 'Wix site loading in 6+ seconds, losing customers',
                after: 'Site loads in 0.8 seconds, conversions up 250%',
                quote: 'Customers were bouncing from my slow Wix site. Now they stay and enquire.'
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 border border-white/10 rounded-2xl p-8 hover:border-orange-500/50 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-1">{story.name}</h3>
                <p className="text-orange-400 mb-1">{story.business}</p>
                <p className="text-sm text-gray-400 mb-6">{story.location}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                    <p className="text-sm"><span className="text-red-400 font-semibold">Before:</span> <span className="text-gray-300">{story.before}</span></p>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                    <p className="text-sm"><span className="text-green-400 font-semibold">After:</span> <span className="text-gray-300">{story.after}</span></p>
                  </div>
                </div>
                
                <blockquote className="text-gray-300 italic border-l-4 border-orange-500 pl-4">
                  "{story.quote}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">The Wix Alternative</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                That Actually Works
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stop renting from Wix. Get a website you actually own.
            </p>
          </motion.div>

          <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-3xl p-12">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">What You Get:</h3>
                <ul className="space-y-3">
                  {[
                    '100% custom coded website',
                    'Full ownership of code & content',
                    'Lightning fast performance',
                    'Dominates local SEO',
                    'Unlimited customisation',
                    'No monthly fees to platforms',
                    'Sellable business asset',
                    'Professional design'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-4">The Process:</h3>
                <ol className="space-y-3">
                  {[
                    'Free consultation & quote',
                    'Custom design mockups',
                    'Build your unique site',
                    'Optimise for local SEO',
                    'Launch & training',
                    'Ongoing support available'
                  ].map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-orange-500 text-white text-sm rounded-full flex items-center justify-center flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-gray-300">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="text-center">
              <motion.a
                href="/website-cost-calculator"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all text-lg"
              >
                Get Your Free Quote (No Wix Required)
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              
              <p className="text-sm text-gray-400 mt-4">
                Takes 60 seconds • No spam • No obligations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">Common Questions About</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-600">
                Leaving Wix
              </span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: 'Can I move my Wix content to a new site?',
                a: 'Yes, we can manually transfer your content, images, and text to your new custom site. Wix won\'t let you export, but we can rebuild everything properly.'
              },
              {
                q: 'Will I lose my Google rankings?',
                a: 'Temporarily, there might be a small dip. But within 2-3 months, custom sites consistently outrank Wix sites due to better performance and SEO.'
              },
              {
                q: 'Is a custom site really worth 10x the monthly Wix cost?',
                a: 'It\'s not 10x - over 5 years, custom sites often cost LESS than Wix. Plus you own an asset worth £15-25k vs £0 with Wix.'
              },
              {
                q: 'What if I need changes after the site is built?',
                a: 'Unlike Wix, you OWN your site. Any developer can make changes, or we offer affordable maintenance. You\'re never locked in.'
              },
              {
                q: 'How long does it take to replace my Wix site?',
                a: 'Typically 2-3 weeks from start to launch. We can build while your Wix site stays live, then switch over seamlessly.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.q}</h3>
                <p className="text-gray-300">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">Stop Renting from Wix.</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Start Owning.
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Every month you stay with Wix is money thrown away. 
              Get a website that's actually yours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/website-cost-calculator"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all"
              >
                Calculate Your Savings
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="/no-wordpress-tradesman-websites"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                See All Page Builder Problems
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NoWixWebsites;

