import React from 'react';
import { TrendingUp, MapPin, Award, Users, Shield, Clock, Star, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ProofSection = () => {


  const testimonials = [
    {
      quote: "Built Proper transformed our online presence completely. Website's brought in more work than we can handle. Paid for itself in two weeks flat.",
      author: 'David Richardson',
      trade: 'Builder',
      location: 'Manchester',
      rating: 5
    },
    {
      quote: "Finally, someone who understands our industry. No tech jargon, just a website that works and brings in quality jobs. Outstanding service.",
      author: 'Steve Matthews',
      trade: 'Plumber',
      location: 'Birmingham',
      rating: 5
    },
    {
      quote: "Was skeptical at first but they delivered exactly what they promised. Getting 3-4 new customers a week now through the website. Excellent work.",
      author: 'Tom Wilson',
      trade: 'Electrician',
      location: 'Leeds',
      rating: 5
    }
  ];

  const platforms = [
    'Checkatrade', 'MyBuilder', 'Rated People', 'TrustATrader', 'Local Heroes'
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Smooth transition overlay */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-950 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Testimonials */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h3 className="text-4xl font-bold text-white text-center mb-12">
            What Proper Tradesmen Say
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-orange-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.trade}</p>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {testimonial.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Platform Integration */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-400 mb-6">Works with all the major platforms</p>
          <div className="flex flex-wrap justify-center gap-6">
            {platforms.map((platform, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-400 font-medium hover:border-orange-500/50 hover:text-orange-400 transition-all duration-300"
              >
                {platform}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-wrap justify-center gap-8"
        >
          <div className="flex items-center space-x-2 text-gray-400">
            <Shield className="w-5 h-5 text-green-400" />
            <span className="font-medium">Proper Registered</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <Clock className="w-5 h-5 text-blue-400" />
            <span className="font-medium">Quick Response</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <Award className="w-5 h-5 text-orange-400" />
            <span className="font-medium">Quality Guaranteed</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProofSection;