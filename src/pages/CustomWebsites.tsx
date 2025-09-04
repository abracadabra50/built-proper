import { Globe, Zap, Shield, Code2, Smartphone, Gauge, Palette, Database, Terminal, Users, Lock, Wrench } from 'lucide-react';
import ServicePageTemplate from '../components/ServicePageTemplate';

const CustomWebsites = () => {
  const websiteService = {
    title: "Custom Tradesman Websites",
    tagline: "No WordPress. No Templates. Built Proper.",
    description: "Get a website that actually works. 100% custom-coded from scratch, designed to dominate Google and bring in quality leads. Full client portal access, real-time updates, and our proprietary Built Proper development process.",
    icon: Globe,
    benefits: [
      "100% Custom Code",
      "Client Portal Access",
      "Real-Time Updates",
      "UK-Based Team"
    ],
    features: [
      {
        title: "Built From Scratch",
        description: "Every line of code written specifically for your business. No templates, no page builders, no bloated plugins. Just clean, fast, custom code.",
        icon: Code2
      },
      {
        title: "Lightning Fast",
        description: "Sub-2 second load times guaranteed. Our custom sites score 95+ on Google PageSpeed, leaving WordPress sites in the dust.",
        icon: Zap
      },
      {
        title: "Mobile Perfect",
        description: "Designed mobile-first because that's where your customers are. Looks brilliant on every device, every time.",
        icon: Smartphone
      },
      {
        title: "SEO Ready",
        description: "Built to rank from day one. Clean code, proper structure, fast loading - everything Google loves.",
        icon: Gauge
      },
      {
        title: "Your Brand",
        description: "Custom design that matches your business perfectly. Stand out from the template crowd with a site that's uniquely yours.",
        icon: Palette
      },
      {
        title: "Lead Generation",
        description: "Smart forms, click-to-call, quote calculators - everything optimised to turn visitors into customers.",
        icon: Database
      }
    ],
    process: [
      {
        step: "1",
        title: "Discovery & Strategy",
        description: "Deep dive into your business. We analyse your market, competitors, and create a custom digital strategy. You get full access to our client portal from day one."
      },
      {
        step: "2",
        title: "Design & Development",
        description: "Watch your site come to life in real-time. Daily updates through the portal, weekly video calls, and our Built Proper development tracker shows every line of code."
      },
      {
        step: "3",
        title: "Launch & Growth",
        description: "Go live with confidence. Full SEO optimisation, speed testing, and our 90-day launch support ensures you start ranking and converting immediately."
      }
    ],
    methodology: {
      title: "The Built Proper Method",
      description: "How we build websites that actually generate business for UK tradesmen",
      points: [
        "Every site starts with competitor analysis - we find what works in your market and do it better",
        "Mobile-first development because 70% of your customers search on phones",
        "Local SEO built into the foundation - not bolted on as an afterthought",
        "Speed optimisation that makes WordPress look prehistoric - sub-2 second load times",
        "Conversion-focused design - every element designed to turn visitors into enquiries",
        "Full transparency through our client portal - see progress, chat with developers, track everything",
        "No outsourcing - everything built by our UK team who understand UK trades",
        "Accessibility compliant - reach every potential customer, avoid legal issues",
        "Future-proof architecture - easily add features as your business grows"
      ]
    },
    tools: [
      {
        name: "BP Portal",
        description: "Your command centre - track progress, chat with team, manage content",
        icon: Terminal
      },
      {
        name: "BP Speed",
        description: "Performance monitoring - ensures your site stays lightning fast",
        icon: Zap
      },
      {
        name: "BP Shield",
        description: "Security scanning - protects against threats 24/7",
        icon: Shield
      },
      {
        name: "BP Analytics",
        description: "Real visitor data - see exactly how customers find and use your site",
        icon: Gauge
      },
      {
        name: "BP Forms",
        description: "Smart lead capture - qualify enquiries automatically",
        icon: Database
      },
      {
        name: "BP Connect",
        description: "CRM integration - sync leads with your existing tools",
        icon: Users
      },
      {
        name: "BP Deploy",
        description: "One-click updates - make changes without breaking anything",
        icon: Wrench
      },
      {
        name: "BP Vault",
        description: "Secure backups - your site is always safe and recoverable",
        icon: Lock
      }
    ],
    faqs: [
      {
        question: "Why no WordPress?",
        answer: "WordPress is bloated, slow, and vulnerable. Our custom sites load 3x faster, rank better on Google, and never get hacked. Plus, through your BP Portal, you can see exactly how we build - no mysterious plugins or hidden code."
      },
      {
        question: "How does the client portal work?",
        answer: "From day one, you get login access to BP Portal. See real-time progress, chat with developers, approve designs, track milestones, and manage your content. It's your project command centre - complete transparency, no surprises."
      },
      {
        question: "How long does it take?",
        answer: "Most sites are live within 2-3 weeks. You'll see progress daily through the portal - wireframes by day 3, designs by week 1, development updates every 48 hours. We work fast but proper."
      },
      {
        question: "What Built Proper tools do I get access to?",
        answer: "Every client gets BP Portal (project management), BP Analytics (visitor tracking), BP Forms (lead management), and BP Speed (performance monitoring). After launch, you can add BP Shield (security), BP Connect (CRM integration), and more."
      },
      {
        question: "Do I own the website?",
        answer: "100% yes. Every line of code is yours. We even provide the source code through BP Deploy if you ever want to move it. No licensing, no subscriptions, complete ownership."
      },
      {
        question: "How do you ensure it ranks on Google?",
        answer: "SEO is built into our process, not bolted on. Clean code structure, proper meta tags, schema markup, fast loading, mobile-first design. Plus, our BP Rank tool monitors your positions daily. We build for Google from line one."
      }
    ],
    caseStudy: {
      client: "Hallmark Driveways Edinburgh",
      result: "From struggling to find leads to",
      metric: "£2M+ Pipeline"
    },
    cta: {
      primary: "Get Your Custom Website",
      secondary: "See Our Process"
    }
  };

  return <ServicePageTemplate service={websiteService} />;
};

export default CustomWebsites;
