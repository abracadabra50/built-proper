import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import FAQSchema from './FAQSchema';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Why don't you use WordPress for tradesman websites?",
      answer: "WordPress is outdated, slow, and requires constant maintenance. Our 100% custom-coded websites are faster, more secure, and built specifically for your business. No bloat, no plugins breaking, no monthly update headaches - just a proper website that works."
    },
    {
      question: "How much does a tradesman website cost?",
      answer: "Our custom websites start from £2,500 for a basic package. While this seems more than template sites, there are NO monthly fees. Compare the 3-year cost: we're actually cheaper than most competitors who charge £30-50/month. Plus, you get custom code, not a template."
    },
    {
      question: "How long does it take to build a trade website?",
      answer: "We deliver most websites within 2-3 weeks from start to finish. This includes custom design, development, content creation, and SEO optimization. Rush delivery available for urgent projects."
    },
    {
      question: "Do I really need a website if I'm on Checkatrade?",
      answer: "Absolutely. Checkatrade charges you monthly fees and you're competing with dozens of other trades for the same jobs. With your own website, you own your leads, pay nothing monthly, and customers find YOU directly. It's the difference between renting and owning."
    },
    {
      question: "What makes Built Proper different from other web designers?",
      answer: "We're the ONLY UK company that refuses to use WordPress. Every site is 100% custom coded, includes AI features like our Alex chat agent, and comes with no monthly fees. We guarantee 90+ performance scores and focus exclusively on tradesmen."
    },
    {
      question: "Can you help me rank on Google?",
      answer: "Yes! Every website includes advanced local SEO to help you rank #1 in your area. We also offer ongoing SEO services to dominate your local market. Most clients see first page rankings within 3-6 months."
    },
    {
      question: "What's included in the website package?",
      answer: "Everything: custom design, mobile optimization, contact forms, gallery, testimonials, service pages, local SEO, performance optimization, SSL certificate, hosting setup, and our AI chat agent Alex. No hidden extras."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes, we offer flexible payment options including 50% deposit with 50% on completion, or monthly payment plans over 3-6 months. We want to make it easy for you to get online properly."
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950">
      <FAQSchema faqs={faqs} />
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">FREQUENTLY ASKED</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              QUESTIONS
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to know about getting Built Proper
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-800/70 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-orange-500 transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <motion.div
                id={`faq-answer-${index}`}
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 text-gray-300">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all"
          >
            Let's Talk About Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;

