import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  Shield, 
  Zap, 
  Phone, 
  Clock, 
  Star, 
  CheckCircle, 
  ArrowRight,
  MapPin,
  Users,
  TrendingUp,
  Award,
  AlertTriangle,
  DollarSign,
  Search,
  Smartphone
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PlumberWebsitePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-orange-500/10" />
        
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <Wrench className="w-4 h-4 text-blue-500" />
              <span className="text-sm text-blue-400">Plumbing Specialists</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
              <span className="text-white">PLUMBER WEBSITE</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
                DESIGN & DEVELOPMENT
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Custom-built websites that help UK plumbers dominate local search, win more jobs, 
              and grow their business. No WordPress, no templates - just proper plumber websites.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <motion.a
                href="#quote"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all"
              >
                Get Your Plumber Website Quote
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#examples"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                See Plumber Website Examples
              </motion.a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { label: 'Plumber Websites Built', value: '150+', subtext: 'Happy plumbers' },
                { label: 'Average Lead Increase', value: '340%', subtext: 'More jobs' },
                { label: 'Emergency Calls', value: '24/7', subtext: 'Features ready' },
                { label: 'Local Rankings', value: 'Top 3', subtext: 'Google results' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-blue-500 mb-1">{stat.value}</div>
                  <div className="text-sm text-white font-medium">{stat.label}</div>
                  <div className="text-xs text-gray-400">{stat.subtext}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Plumbers Choose Us */}
      <section className="py-20 px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">Why UK Plumbers</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
                Choose Built Proper
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We understand the plumbing trade inside out. Emergency calls, boiler repairs, 
              bathroom installations - your website needs to work as hard as you do.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Phone,
                title: 'Emergency Call Features',
                description: 'Built-in emergency callout systems that convert panicked customers into paying jobs.',
                features: [
                  '24/7 emergency contact forms',
                  'Click-to-call phone numbers',
                  'Emergency service badges',
                  'Urgent job prioritization'
                ],
                color: 'red'
              },
              {
                icon: MapPin,
                title: 'Local Area Domination',
                description: 'Rank #1 for "plumber near me" and emergency plumbing searches in your area.',
                features: [
                  'Google My Business optimization',
                  'Local citation building',
                  'Area-specific landing pages',
                  'Emergency plumber SEO'
                ],
                color: 'green'
              },
              {
                icon: Shield,
                title: 'Trust & Credibility',
                description: 'Professional design that makes customers choose you over the competition.',
                features: [
                  'Professional portfolio galleries',
                  'Customer review integration',
                  'Certification displays',
                  'Insurance & licensing info'
                ],
                color: 'blue'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all"
              >
                <feature.icon className={`w-12 h-12 text-${feature.color}-500 mb-6`} />
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 text-${feature.color}-500 mt-0.5 flex-shrink-0`} />
                      <span className="text-gray-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plumber-Specific Features */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">Features Built for</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
                Plumbing Businesses
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every feature designed specifically for how plumbers work and how customers find plumbers.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Emergency Response System</h3>
                  <p className="text-gray-300">Prominent emergency contact buttons, out-of-hours messaging, and urgent job forms that capture panicked customers when pipes burst at 2am.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Search className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Local SEO Optimization</h3>
                  <p className="text-gray-300">Rank for "emergency plumber [your area]", "boiler repair near me", and all the searches that bring you high-value emergency work.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Service Pricing Display</h3>
                  <p className="text-gray-300">Clear pricing for common jobs (boiler service, drain unblocking) so customers know what to expect and you get fewer time-wasters.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Mobile-First Design</h3>
                  <p className="text-gray-300">Most plumbing emergencies are searched on mobile. Your site loads instantly and makes it easy to call you with one tap.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">What's Included in Every Plumber Website</h3>
              <div className="space-y-4">
                {[
                  'Emergency callout contact forms',
                  'Service area maps and coverage',
                  'Before/after job photo galleries',
                  'Customer testimonials and reviews',
                  'Gas Safe/certification displays',
                  'Common plumbing problems blog',
                  'Boiler service booking system',
                  'Mobile-optimized design',
                  'Local SEO optimization',
                  'Google My Business integration',
                  'Fast loading (under 2 seconds)',
                  'No monthly fees - you own it'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Plumber Success Stories */}
      <section id="examples" className="py-20 px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">Plumber Website</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
                Success Stories
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Real UK plumbers getting real results with Built Proper websites
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Thompson',
                business: 'Thompson Plumbing',
                location: 'Manchester',
                before: 'Getting 2-3 calls per week, mostly from Checkatrade',
                after: '25+ calls per week, 80% from website, higher-value jobs',
                quote: 'My Built Proper website transformed my business. I went from competing on price to being the premium plumber in my area.',
                results: ['340% more leads', '£60k additional revenue', 'Ranking #1 for "plumber Manchester"']
              },
              {
                name: 'Mike Stevens',
                business: 'Stevens Emergency Plumbing',
                location: 'Birmingham',
                before: 'Struggling to get emergency callouts, low-paying jobs',
                after: 'Dominating emergency searches, premium pricing accepted',
                quote: 'The emergency features on my website are incredible. I get calls within minutes of people finding my site.',
                results: ['500% emergency call increase', '£80k first year revenue', 'Booked solid 6 weeks ahead']
              },
              {
                name: 'David Wilson',
                business: 'Wilson Plumbing & Heating',
                location: 'Leeds',
                before: 'Paying £200/month to directories, inconsistent work',
                after: 'Steady stream of boiler services and bathroom jobs',
                quote: 'Ditching Checkatrade and investing in my own website was the best decision I ever made.',
                results: ['Stopped directory dependence', '£120k annual revenue', 'Hired 2 additional plumbers']
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Wrench className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{story.name}</h3>
                    <p className="text-blue-400">{story.business}</p>
                    <p className="text-sm text-gray-400">{story.location}</p>
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
                
                <blockquote className="text-gray-300 italic border-l-4 border-blue-500 pl-4 mb-6">
                  "{story.quote}"
                </blockquote>

                <div className="space-y-2">
                  {story.results.map((result, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-green-400">{result}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">Plumber Website</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
                Investment
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Professional plumber websites that pay for themselves in the first month
            </p>
          </motion.div>

          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-3xl p-12">
            <div className="text-center mb-8">
              <div className="text-5xl font-black text-white mb-2">£3,500</div>
              <div className="text-blue-400 text-lg mb-4">Complete Plumber Website Package</div>
              <div className="text-gray-400">One-time payment • No monthly fees • You own everything</div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-bold text-white mb-4">What's Included:</h4>
                <ul className="space-y-2 text-left">
                  {[
                    '5-8 page custom website',
                    'Emergency contact systems',
                    'Service area optimization',
                    'Mobile-first design',
                    'Local SEO setup'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-4">Return on Investment:</h4>
                <ul className="space-y-2 text-left">
                  {[
                    'Average: 5-8 new jobs per month',
                    'Typical job value: £150-500',
                    'Monthly revenue increase: £2,000+',
                    'Payback period: 6-8 weeks',
                    'Annual ROI: 600%+'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-orange-500" />
                <span className="text-orange-400 font-semibold">Compare the True Cost:</span>
              </div>
              <p className="text-gray-300 text-sm">
                Checkatrade: £90/month = £3,240 over 3 years (and you own nothing)<br/>
                Built Proper: £3,500 one-time = You own a business asset worth £10,000+
              </p>
            </div>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all"
            >
              Get Your Plumber Website Quote
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="quote" className="py-20 px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">Ready to Dominate</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
                Local Plumbing?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 150+ UK plumbers who've transformed their business with a professional website.
              <br />
              <span className="text-white font-semibold">No WordPress. No monthly fees. Just more jobs.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all"
              >
                Get Your Free Plumber Quote
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="tel:02012345678"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                <Phone className="w-5 h-5" />
                Call: 020 1234 5678
              </motion.a>
            </div>
            
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500 mb-1">150+</div>
                <div className="text-sm text-gray-400">Plumbers Trust Us</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500 mb-1">340%</div>
                <div className="text-sm text-gray-400">Average Lead Increase</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500 mb-1">6-8</div>
                <div className="text-sm text-gray-400">Week Payback</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <h2 className="text-3xl font-bold text-white mb-6">
            Professional Plumber Website Design Services
          </h2>
          <p className="text-gray-300 mb-6">
            Built Proper specializes in creating custom websites specifically for UK plumbing businesses. 
            We understand that plumbers need websites that work as hard as they do - capturing emergency 
            calls, showcasing expertise, and dominating local search results.
          </p>
          <p className="text-gray-300 mb-6">
            Our plumber website design service goes beyond just creating a pretty website. We build 
            lead-generation machines that help you rank #1 for "plumber near me" searches, convert 
            emergency calls into paying customers, and establish your reputation as the go-to plumber 
            in your area.
          </p>
          <h3 className="text-2xl font-bold text-white mb-4">
            Why Plumbers Choose Custom Websites Over WordPress
          </h3>
          <p className="text-gray-300 mb-6">
            When someone's boiler breaks down at 2am, they need a website that loads instantly on their 
            phone and makes it easy to call you. WordPress sites are slow, vulnerable to hacking, and 
            often break at the worst possible moment. Our custom-built plumber websites are fast, 
            secure, and designed specifically for emergency conversions.
          </p>
          <h3 className="text-2xl font-bold text-white mb-4">
            Plumber SEO That Actually Works
          </h3>
          <p className="text-gray-300">
            We optimize every plumber website for the searches that matter: "emergency plumber [your area]", 
            "boiler repair near me", "blocked drain [your town]". Our local SEO strategies help you 
            dominate the Google Map Pack and appear at the top of search results when customers need 
            you most urgently.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PlumberWebsitePage;
