import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Zap, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  ArrowRight,
  Clock,
  DollarSign,
  Users,
  Award,
  Target,
  Wrench,
  Bug
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NoWordPressPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-orange-500/10" />
        
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-6">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              <span className="text-sm text-red-400">WordPress Warning</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black mb-6">
              <span className="text-white">NO WORDPRESS</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                NO WIX. NO SQUARESPACE.
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              We're the ONLY UK agency that refuses WordPress, Wix, Squarespace & all page builders. 
              100% custom code. Here's why that matters for your business.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <motion.a
                href="#why-no-wordpress"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all"
              >
                See The Proof
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#get-quote"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                Get Custom Quote
              </motion.a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { label: 'WordPress Sites Hacked', value: '90,000+', subtext: 'Daily attacks' },
                { label: 'Plugin Vulnerabilities', value: '15,000+', subtext: 'Known issues' },
                { label: 'Speed Improvement', value: '300%', subtext: 'vs WordPress' },
                { label: 'Maintenance Cost', value: '£0', subtext: 'No updates needed' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-orange-500 mb-1">{stat.value}</div>
                  <div className="text-sm text-white font-medium">{stat.label}</div>
                  <div className="text-xs text-gray-400">{stat.subtext}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why No WordPress */}
      <section id="why-no-wordpress" className="py-20 px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">Why WordPress is</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                Killing Your Business
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              WordPress might seem like the easy choice, but it's costing UK tradesmen thousands 
              in lost leads, maintenance fees, and security breaches.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Bug,
                title: 'Security Nightmare',
                description: 'WordPress powers 43% of websites, making it the #1 target for hackers.',
                problems: [
                  '90,000+ WordPress sites hacked daily',
                  '15,000+ known plugin vulnerabilities',
                  '£2,000+ average recovery cost',
                  'Customer data at constant risk'
                ],
                color: 'red'
              },
              {
                icon: Clock,
                title: 'Performance Disaster',
                description: 'WordPress is bloated, slow, and kills your Google rankings.',
                problems: [
                  'Average load time: 4.7 seconds',
                  '70% of users leave slow sites',
                  'Google penalizes slow websites',
                  'Lost leads every second'
                ],
                color: 'orange'
              },
              {
                icon: DollarSign,
                title: 'Hidden Costs',
                description: 'WordPress seems free but costs thousands in maintenance and plugins.',
                problems: [
                  '£500-2000/year in plugin costs',
                  '£100-300/month maintenance',
                  'Constant security updates',
                  'Developer dependency forever'
                ],
                color: 'yellow'
              }
            ].map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-red-500/50 transition-all"
              >
                <problem.icon className={`w-12 h-12 text-${problem.color}-500 mb-6`} />
                <h3 className="text-2xl font-bold text-white mb-4">{problem.title}</h3>
                <p className="text-gray-300 mb-6">{problem.description}</p>
                <ul className="space-y-3">
                  {problem.problems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Code Benefits */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">Why Custom Code</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Wins Every Time
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built Proper websites are hand-coded from scratch. No WordPress, no templates, 
              no compromises. Here's what that means for your business.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Fort Knox Security',
                description: 'Custom code means no known vulnerabilities, no plugin backdoors.',
                benefits: [
                  'Zero known vulnerabilities',
                  'No plugin attack vectors',
                  'Custom security measures',
                  'Your data stays safe'
                ],
                color: 'green'
              },
              {
                icon: Zap,
                title: 'Lightning Speed',
                description: 'Hand-optimized code loads 3x faster than WordPress sites.',
                benefits: [
                  'Sub-2 second load times',
                  '90+ Google PageSpeed scores',
                  'Better search rankings',
                  'More leads convert'
                ],
                color: 'blue'
              },
              {
                icon: Wrench,
                title: 'Zero Maintenance',
                description: 'No updates, no plugins, no breaking changes. Set and forget.',
                benefits: [
                  'No monthly maintenance',
                  'No plugin updates',
                  'No compatibility issues',
                  'Works forever'
                ],
                color: 'orange'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-green-500/50 transition-all"
              >
                <benefit.icon className={`w-12 h-12 text-${benefit.color}-500 mb-6`} />
                <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 mb-6">{benefit.description}</p>
                <ul className="space-y-3">
                  {benefit.benefits.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Comparison */}
      <section className="py-20 px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">WordPress vs</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Built Proper
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              The numbers don't lie. See why smart tradesmen choose custom code.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* WordPress Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-bold text-white">WordPress Websites</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { label: 'Initial Cost', value: '£500-1,500', bad: true },
                  { label: '3-Year Total Cost', value: '£5,000-15,000', bad: true },
                  { label: 'Load Time', value: '4.7 seconds', bad: true },
                  { label: 'PageSpeed Score', value: '45-65', bad: true },
                  { label: 'Security Vulnerabilities', value: '15,000+', bad: true },
                  { label: 'Monthly Maintenance', value: '£100-300', bad: true },
                  { label: 'Plugin Costs', value: '£500-2,000/year', bad: true },
                  { label: 'Hack Recovery Cost', value: '£2,000+', bad: true },
                  { label: 'Updates Required', value: 'Weekly', bad: true },
                  { label: 'Developer Dependency', value: 'Forever', bad: true }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-300">{item.label}</span>
                    <span className="text-red-400 font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Built Proper Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-8 h-8 text-green-500" />
                <h3 className="text-2xl font-bold text-white">Built Proper Websites</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { label: 'Initial Cost', value: '£2,500-6,500', good: true },
                  { label: '3-Year Total Cost', value: '£2,500-6,500', good: true },
                  { label: 'Load Time', value: '1.2 seconds', good: true },
                  { label: 'PageSpeed Score', value: '90-100', good: true },
                  { label: 'Security Vulnerabilities', value: '0', good: true },
                  { label: 'Monthly Maintenance', value: '£0', good: true },
                  { label: 'Plugin Costs', value: '£0', good: true },
                  { label: 'Hack Recovery Cost', value: '£0', good: true },
                  { label: 'Updates Required', value: 'Never', good: true },
                  { label: 'Developer Dependency', value: 'None', good: true }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-300">{item.label}</span>
                    <span className="text-green-400 font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">Tradesmen Who</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Ditched WordPress
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Real stories from tradesmen who switched from WordPress to custom code
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Thompson',
                business: 'Thompson Plumbing',
                trade: 'Plumber',
                before: 'WordPress site hacked 3 times, £5,000 in recovery costs',
                after: '18 months hack-free, 300% more leads, £0 maintenance',
                quote: 'Switching to Built Proper was the best business decision I ever made. No more sleepless nights worrying about security.'
              },
              {
                name: 'Mike Stevens',
                business: 'Stevens Electrical',
                trade: 'Electrician',
                before: 'WordPress site took 6 seconds to load, lost 70% of visitors',
                after: 'Now loads in 1.1 seconds, 400% increase in quote requests',
                quote: 'My old WordPress site was costing me thousands in lost business. Custom code changed everything.'
              },
              {
                name: 'David Wilson',
                business: 'Wilson Builders',
                trade: 'Builder',
                before: 'Paying £200/month for WordPress maintenance and plugins',
                after: 'Zero monthly costs, invested savings in business growth',
                quote: 'I was throwing money away on WordPress. Built Proper gave me a real asset I actually own.'
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-orange-500/50 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{story.name}</h3>
                    <p className="text-orange-400">{story.business}</p>
                    <p className="text-sm text-gray-400">{story.trade}</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                    <p className="text-sm text-gray-300"><strong className="text-red-400">Before:</strong> {story.before}</p>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                    <p className="text-sm text-gray-300"><strong className="text-green-400">After:</strong> {story.after}</p>
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

      {/* CTA Section */}
      <section id="get-quote" className="py-20 px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm border border-orange-500/30 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">Ready to Ditch</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                WordPress?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the growing movement of UK tradesmen choosing custom code over WordPress.
              <br />
              <span className="text-white font-semibold">No vulnerabilities. No maintenance. No bullshit.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all"
              >
                Get Your No-WordPress Quote
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="/case-studies"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                See More Success Stories
              </motion.a>
            </div>
            
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500 mb-1">100%</div>
                <div className="text-sm text-gray-400">Custom Code</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500 mb-1">0</div>
                <div className="text-sm text-gray-400">Monthly Fees</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500 mb-1">∞</div>
                <div className="text-sm text-gray-400">Years Secure</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <h2 className="text-3xl font-bold text-white mb-6">
            Why No WordPress for Tradesman Websites?
          </h2>
          <p className="text-gray-300 mb-6">
            Built Proper is the only UK agency that categorically refuses to build tradesman websites 
            on WordPress. This isn't stubbornness - it's based on hard data and real-world experience 
            with hundreds of trade businesses.
          </p>
          <p className="text-gray-300 mb-6">
            WordPress might power 43% of the internet, but that makes it the biggest target for 
            hackers. Every day, 90,000 WordPress sites are compromised. For a tradesman, a hacked 
            website means lost customer data, damaged reputation, and expensive recovery costs.
          </p>
          <h3 className="text-2xl font-bold text-white mb-4">
            The WordPress Security Problem
          </h3>
          <p className="text-gray-300 mb-6">
            WordPress relies on plugins for functionality. The average WordPress site uses 20+ plugins, 
            each one a potential security vulnerability. With over 15,000 known plugin vulnerabilities 
            and new ones discovered daily, your WordPress site is essentially a ticking time bomb.
          </p>
          <h3 className="text-2xl font-bold text-white mb-4">
            Performance Issues That Kill Conversions
          </h3>
          <p className="text-gray-300 mb-6">
            WordPress sites average 4.7-second load times. Research shows that 70% of users abandon 
            sites that take longer than 3 seconds to load. For tradesmen, this means lost leads and 
            lower Google rankings. Our custom-coded sites load in under 2 seconds consistently.
          </p>
          <h3 className="text-2xl font-bold text-white mb-4">
            The True Cost of WordPress
          </h3>
          <p className="text-gray-300">
            WordPress appears cheap initially, but hidden costs add up fast: plugin licenses, 
            premium themes, security services, maintenance contracts, and recovery costs when 
            things go wrong. Over 3 years, WordPress often costs more than custom development 
            while delivering inferior results.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NoWordPressPage;
