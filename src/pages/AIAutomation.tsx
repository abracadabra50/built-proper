import React from 'react';
import { Brain, Zap, MessageSquare, Calendar, BarChart3, Cog, Bot, Workflow } from 'lucide-react';
import ServicePageTemplate from '../components/ServicePageTemplate';

const AIAutomation = () => {
  const aiService = {
    title: "AI & Automation for Trades",
    tagline: "Work Smarter, Not Harder. Scale Without More Staff.",
    description: "AI systems that actually work for trade businesses. Automate quote requests, follow-ups, scheduling, and customer service. Free up time to focus on the work that pays, while AI handles the admin.",
    icon: Brain,
    benefits: [
      "24/7 AI Assistant",
      "Automated Workflows", 
      "Smart Lead Qualification",
      "No More Admin"
    ],
    features: [
      {
        title: "AI Chat Assistant",
        description: "24/7 AI chatbot that qualifies leads, books appointments, and answers common questions. Never miss an enquiry again.",
        icon: MessageSquare
      },
      {
        title: "Smart Scheduling",
        description: "AI-powered booking system that knows your availability, travel time, and job requirements. Optimises your diary automatically.",
        icon: Calendar
      },
      {
        title: "Lead Qualification",
        description: "AI asks the right questions to qualify leads before they reach you. Only serious customers get through.",
        icon: BarChart3
      },
      {
        title: "Follow-Up Automation",
        description: "Automatic follow-ups for quotes, completed jobs, and review requests. Nurtures leads while you focus on work.",
        icon: Zap
      },
      {
        title: "Quote Automation",
        description: "AI generates accurate quotes based on your pricing, materials, and labour costs. Consistent pricing every time.",
        icon: Cog
      },
      {
        title: "Workflow Integration",
        description: "Connects with your existing tools - CRM, accounting, project management. AI works with what you already use.",
        icon: Workflow
      }
    ],
    process: [
      {
        step: "1",
        title: "Business Analysis",
        description: "We map your current processes, identify bottlenecks, and design AI solutions that actually solve your problems. No generic AI - everything custom."
      },
      {
        step: "2", 
        title: "AI Development",
        description: "Build and train AI systems specific to your trade and business. Test everything in sandbox before going live. You control the rollout."
      },
      {
        step: "3",
        title: "Launch & Optimise",
        description: "Go live with full monitoring. AI learns from every interaction and gets smarter. Continuous optimisation for better results."
      }
    ],
    methodology: {
      title: "The Built Proper AI Method",
      description: "How we implement AI that actually helps trade businesses, not just tech for tech's sake",
      points: [
        "Problem-first approach - we solve real business problems, not implement flashy tech",
        "Trade-specific training - AI understands plumbing, electrical, building terminology",
        "Gradual rollout - start simple, add complexity as you get comfortable",
        "Human oversight always - AI assists, you decide. Never fully automated decisions",
        "ROI measurement - track time saved, leads converted, revenue generated",
        "Integration focus - works with your existing tools, doesn't replace everything",
        "Privacy compliant - all data stays secure, GDPR compliant, UK-based servers",
        "Continuous learning - AI gets smarter from every customer interaction",
        "Fallback systems - always have human backup when AI can't handle something"
      ]
    },
    tools: [
      {
        name: "BP Alex",
        description: "Your AI assistant - handles enquiries, books jobs, qualifies leads",
        icon: Bot
      },
      {
        name: "BP Flow",
        description: "Workflow automation - connect all your business processes",
        icon: Workflow
      },
      {
        name: "BP Schedule",
        description: "AI scheduling - optimises your calendar and travel routes",
        icon: Calendar
      },
      {
        name: "BP Qualify",
        description: "Lead scoring - AI rates prospects before you waste time",
        icon: BarChart3
      },
      {
        name: "BP Quote",
        description: "Intelligent quoting - AI generates accurate estimates",
        icon: Cog
      },
      {
        name: "BP Follow",
        description: "Automated follow-ups - nurtures leads while you work",
        icon: Zap
      },
      {
        name: "BP Learn",
        description: "AI training - continuously improves from your data",
        icon: Brain
      },
      {
        name: "BP Connect",
        description: "Integration hub - connects AI with your existing tools",
        icon: MessageSquare
      }
    ],
    faqs: [
      {
        question: "Will AI replace my staff?",
        answer: "No. AI handles repetitive admin tasks so your team can focus on skilled work. It's about working smarter, not replacing people. Most clients end up hiring more staff because they're busier."
      },
      {
        question: "How does AI understand my trade?",
        answer: "We train AI specifically on your industry - plumbing terminology, electrical codes, building regulations. It learns your processes, pricing, and way of working. Trade-specific, not generic."
      },
      {
        question: "What if customers prefer speaking to humans?",
        answer: "AI identifies when human intervention is needed and transfers seamlessly. Customers often don't realise they're talking to AI initially, but can always request human contact."
      },
      {
        question: "Is my data safe with AI systems?",
        answer: "Absolutely. All data stays on UK servers, fully GDPR compliant. We use enterprise-grade security. Your customer data never leaves our secure environment."
      },
      {
        question: "How long before I see results?",
        answer: "Most clients see immediate time savings once AI goes live. Lead qualification improves within days, scheduling optimisation within weeks. Full ROI typically within 3 months."
      },
      {
        question: "Can AI integrate with my existing tools?",
        answer: "Yes. BP Connect integrates with most CRMs, accounting software, and project management tools. We make AI work with your existing systems, not replace them."
      }
    ],
    caseStudy: {
      client: "Premier Plumbing Manchester",
      result: "From 60 hours/week to 40 hours/week with 50% more revenue",
      metric: "20 Hours Saved Weekly"
    },
    cta: {
      primary: "Automate Your Business",
      secondary: "See AI in Action"
    }
  };

  return <ServicePageTemplate service={aiService} />;
};

export default AIAutomation;
