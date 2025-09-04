import React from 'react';
import { TrendingUp, Target, Users, Share2, Mail, Phone, Megaphone, DollarSign } from 'lucide-react';
import ServicePageTemplate from '../components/ServicePageTemplate';

const DigitalMarketing = () => {
  const marketingService = {
    title: "Digital Marketing for Trades",
    tagline: "Get More Leads. Win More Jobs. Grow Your Business.",
    description: "Complete digital marketing that actually works for UK tradesmen. From Google Ads to social media, email campaigns to reputation management. Everything integrated, everything measured, everything profitable.",
    icon: TrendingUp,
    benefits: [
      "More Quality Leads",
      "Higher Conversion Rates",
      "Measurable ROI",
      "Complete Integration"
    ],
    features: [
      {
        title: "Google Ads Management",
        description: "Professional Google Ads campaigns that target customers ready to buy. Optimised for trades, focused on local markets.",
        icon: Target
      },
      {
        title: "Social Media Marketing",
        description: "Facebook, Instagram, LinkedIn campaigns that showcase your work and build trust. Before/after posts that convert.",
        icon: Share2
      },
      {
        title: "Email Marketing",
        description: "Automated email sequences that nurture leads, follow up on quotes, and generate repeat business from existing customers.",
        icon: Mail
      },
      {
        title: "Reputation Management",
        description: "Proactive review generation, response management, and reputation monitoring. Build trust online automatically.",
        icon: Users
      },
      {
        title: "Lead Generation Campaigns",
        description: "Multi-channel campaigns designed specifically for trades. Landing pages, forms, and follow-up sequences that convert.",
        icon: Phone
      },
      {
        title: "Content Marketing",
        description: "Regular content that positions you as the expert. Blog posts, social content, and videos that build authority.",
        icon: Megaphone
      }
    ],
    process: [
      {
        step: "1",
        title: "Marketing Audit & Strategy",
        description: "Analyse your current marketing, identify opportunities, and create a comprehensive strategy. Focus on channels that work for your trade and location."
      },
      {
        step: "2", 
        title: "Campaign Development",
        description: "Build campaigns across chosen channels. Create ads, landing pages, email sequences, and content. Everything tested before launch."
      },
      {
        step: "3",
        title: "Launch & Optimise",
        description: "Go live with full tracking and monitoring. Weekly optimisation based on performance data. Scale what works, kill what doesn't."
      }
    ],
    methodology: {
      title: "The Built Proper Marketing Framework",
      description: "How we create marketing campaigns that actually generate profitable leads for UK tradesmen",
      points: [
        "ROI-first approach - every campaign measured on profit generated, not vanity metrics",
        "Trade-specific messaging - we know what motivates homeowners to choose tradesmen",
        "Local market focus - campaigns optimised for your specific area and competition",
        "Multi-touch attribution - track customer journey from first click to final payment",
        "Seasonal campaign planning - heating in winter, garden services in spring",
        "Quality over quantity - focus on leads that convert, not just traffic",
        "Integration with sales process - marketing works with your existing workflow",
        "Compliance focus - all ads follow trade advertising regulations and standards",
        "Continuous testing - always improving performance through data-driven decisions"
      ]
    },
    tools: [
      {
        name: "BP Ads",
        description: "Google Ads management - campaigns optimised for trade businesses",
        icon: Target
      },
      {
        name: "BP Social",
        description: "Social media scheduling - consistent posting across all platforms",
        icon: Share2
      },
      {
        name: "BP Email",
        description: "Email automation - nurture sequences that convert leads to customers",
        icon: Mail
      },
      {
        name: "BP Reviews",
        description: "Review generation - automated requests for happy customers",
        icon: Users
      },
      {
        name: "BP Leads",
        description: "Lead tracking - see exactly where your best customers come from",
        icon: Phone
      },
      {
        name: "BP Content",
        description: "Content calendar - planned posts and blogs that build authority",
        icon: Megaphone
      },
      {
        name: "BP ROI",
        description: "Performance tracking - measure profit from every marketing channel",
        icon: DollarSign
      },
      {
        name: "BP Growth",
        description: "Growth analytics - identify opportunities for scaling successful campaigns",
        icon: TrendingUp
      }
    ],
    faqs: [
      {
        question: "How much should I spend on marketing?",
        answer: "Typically 5-10% of revenue for established trades, more for growth phases. We start with smaller budgets, prove ROI, then scale. Every pound spent should generate £3-5 in revenue."
      },
      {
        question: "Which marketing channels work best for trades?",
        answer: "Google Ads and local SEO typically perform best, followed by Facebook for visual trades (landscaping, kitchens). We test channels specific to your trade and area."
      },
      {
        question: "How do you measure marketing success?",
        answer: "Revenue generated, cost per lead, conversion rates, and lifetime customer value. We track from first click to final payment through BP ROI dashboard."
      },
      {
        question: "Can you work with our existing marketing?",
        answer: "Yes. We audit current campaigns, keep what works, improve what doesn't. Often we can boost existing campaign performance by 50%+ with better targeting and landing pages."
      },
      {
        question: "How long before we see results?",
        answer: "Google Ads can generate leads within days. SEO takes 3-6 months. Social media builds over time. We provide weekly reports so you see progress immediately."
      },
      {
        question: "Do you guarantee results?",
        answer: "We guarantee to follow best practices and provide transparent reporting. Most clients see positive ROI within 90 days, but we can't guarantee specific numbers due to market variables."
      }
    ],
    caseStudy: {
      client: "Yorkshire Heating Solutions",
      result: "From 2 leads/week to 25 leads/week in 6 months",
      metric: "1,150% Lead Increase"
    },
    cta: {
      primary: "Grow Your Business",
      secondary: "See Marketing Strategy"
    }
  };

  return <ServicePageTemplate service={marketingService} />;
};

export default DigitalMarketing;
