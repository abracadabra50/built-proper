import React from 'react';
import { Search, MapPin, TrendingUp, Award, BarChart3, Target, Users, Zap, FileSearch, Link, PenTool, MessageSquare } from 'lucide-react';
import ServicePageTemplate from '../components/ServicePageTemplate';

const LocalSEO = () => {
  const seoService = {
    title: "Local SEO for Tradesmen",
    tagline: "Dominate Google. Get More Calls. Grow Your Business.",
    description: "Stop losing jobs to competitors who rank higher. Our proven SEO system gets UK tradesmen to #1 on Google. Full transparency through our client portal, weekly reports, and our proprietary Built Proper SEO framework.",
    icon: Search,
    benefits: [
      "Rank #1 Locally",
      "Weekly Reports",
      "Portal Access",
      "UK-Based Team"
    ],
    features: [
      {
        title: "Local Domination",
        description: "Own the 'near me' searches. We'll get you ranking for 'plumber near me', 'emergency electrician [your city]', and every profitable local search.",
        icon: MapPin
      },
      {
        title: "Google Business Profile",
        description: "Optimise your GBP to appear in the Map Pack. More visibility, more reviews, more calls. We manage everything.",
        icon: Award
      },
      {
        title: "Competitor Crushing",
        description: "We analyse what your competitors are doing, then do it better. Take their rankings, take their customers.",
        icon: Target
      },
      {
        title: "Content That Converts",
        description: "SEO-optimised content that actually sounds human. Blog posts, service pages, location pages - all designed to rank and convert.",
        icon: TrendingUp
      },
      {
        title: "Review Generation",
        description: "More 5-star reviews = higher rankings. Our system makes it easy for happy customers to leave glowing reviews.",
        icon: Users
      },
      {
        title: "Monthly Reporting",
        description: "See exactly where you rank, how many leads you're getting, and your ROI. Full transparency, no smoke and mirrors.",
        icon: BarChart3
      }
    ],
    process: [
      {
        step: "1",
        title: "SEO Audit & Strategy",
        description: "Complete analysis of your digital presence. We audit your site, analyse competitors, identify opportunities, and create your custom SEO roadmap. Everything visible in your portal."
      },
      {
        step: "2",
        title: "Implementation & Optimisation",
        description: "We execute the strategy. Technical SEO fixes, content creation, link building, citation campaigns. Watch progress in real-time through your dashboard."
      },
      {
        step: "3",
        title: "Monitor & Scale",
        description: "Rankings tracked daily, reports weekly, strategy adjusted monthly. We keep pushing until you dominate your market."
      }
    ],
    methodology: {
      title: "The Built Proper SEO Framework",
      description: "How we get UK tradesmen ranking #1 on Google, consistently",
      points: [
        "Local-first approach - we target 'near me' and location-based searches that convert",
        "Google Business Profile mastery - optimised listings that appear in the Map Pack",
        "Content that ranks AND converts - not just keywords, but copy that turns visitors into callers",
        "Citation building across 100+ UK directories - consistent NAP data everywhere",
        "Review generation systems - more 5-star reviews mean higher rankings",
        "Link building from relevant UK sites - quality over quantity, always",
        "Technical SEO that Google loves - fast loading, mobile-perfect, properly structured",
        "Competitor gap analysis - find what they're missing and exploit it",
        "Full transparency - every action logged in your portal, nothing hidden"
      ]
    },
    tools: [
      {
        name: "BP Rank",
        description: "Daily rank tracking for all your keywords - see movement instantly",
        icon: TrendingUp
      },
      {
        name: "BP Audit",
        description: "Weekly site audits - catch and fix issues before Google does",
        icon: FileSearch
      },
      {
        name: "BP Citations",
        description: "Directory management - keep your business info consistent everywhere",
        icon: MapPin
      },
      {
        name: "BP Links",
        description: "Link monitoring - track new backlinks and competitor strategies",
        icon: Link
      },
      {
        name: "BP Content",
        description: "AI-assisted content creation - blogs that rank and sound human",
        icon: PenTool
      },
      {
        name: "BP Reviews",
        description: "Review management - monitor and respond across all platforms",
        icon: MessageSquare
      },
      {
        name: "BP Reports",
        description: "Custom dashboards - see exactly what's working and your ROI",
        icon: BarChart3
      },
      {
        name: "BP Alerts",
        description: "Instant notifications - know when rankings change or issues arise",
        icon: Zap
      }
    ],
    faqs: [
      {
        question: "How do I track my SEO progress?",
        answer: "Through your BP Portal dashboard. See daily rank tracking, weekly reports, competitor movements, new backlinks, and lead data. Our BP Rank tool shows exactly where you stand for every keyword, updated every 24 hours."
      },
      {
        question: "What's your SEO process for tradesmen?",
        answer: "We start with a deep audit using BP Audit, then build your strategy. Implementation includes technical fixes, content creation through BP Content, citation building via BP Citations, and link acquisition. Everything's tracked in your portal - complete transparency."
      },
      {
        question: "How long until I see results?",
        answer: "Most clients see movement within 30 days - usually starting with long-tail keywords. By month 3, you'll see significant improvements in main keywords. Our BP Alerts system notifies you instantly when rankings improve."
      },
      {
        question: "What makes you different from other SEO agencies?",
        answer: "We only work with UK tradesmen - we know your market inside out. Plus, our Built Proper tools give you visibility other agencies hide. No outsourcing to overseas teams, no generic strategies, just proper UK-based SEO expertise."
      },
      {
        question: "Do you work with my existing website?",
        answer: "Yes, but results depend on your site's foundation. WordPress sites typically see 40-60% improvements. Sites Built Proper see 200-300% improvements because they're optimised from the ground up. We'll audit your site and be honest about potential."
      },
      {
        question: "How do you handle Google Business Profile?",
        answer: "It's central to local SEO. We optimise your listing, manage reviews through BP Reviews, ensure NAP consistency across 100+ directories, add posts weekly, and monitor insights. Most clients see Map Pack appearances within 60 days."
      }
    ],
    caseStudy: {
      client: "MacLeod Construction Glasgow",
      result: "From page 5 to position #1 for 'builders glasgow' in",
      metric: "90 Days"
    },
    cta: {
      primary: "Start Ranking Higher",
      secondary: "See Our Process"
    }
  };

  return <ServicePageTemplate service={seoService} />;
};

export default LocalSEO;
