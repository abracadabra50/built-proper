import React from 'react';
import { TrendingUp, DollarSign, Users, Target, Phone, Star, Globe, Search } from 'lucide-react';
import CaseStudyTemplate from '../components/CaseStudyTemplate';

const HallmarkDrivewaysCaseStudy = () => {
  const caseStudyData = {
    client: "Hallmark Driveways Edinburgh",
    industry: "Driveway & Paving Specialists",
    location: "Edinburgh, Scotland",
    timeline: "6 months",
    projectType: "Complete Digital Transformation",
    overview: {
      challenge: "Hallmark Driveways was a quality driveway company struggling with inconsistent lead flow. They relied heavily on word-of-mouth and expensive local advertising with poor results. Their outdated website generated maybe 1-2 enquiries per month, and they were losing jobs to competitors with better online presence.",
      solution: "We implemented a complete digital transformation including a custom-built website optimised for conversions, comprehensive local SEO strategy, Google Ads campaigns, review generation system, and ongoing digital marketing. Everything integrated through our Built Proper portal for complete transparency.",
      outcome: "Transformed from a struggling local business to the dominant driveway company in Edinburgh with a £2M+ pipeline and consistent 45+ leads per month. Now booked solid 6 months in advance and able to charge premium prices."
    },
    metrics: [
      {
        label: "Monthly Leads",
        before: "5-8",
        after: "45+",
        improvement: "500%",
        icon: Phone
      },
      {
        label: "Pipeline Value", 
        before: "£50k",
        after: "£2M+",
        improvement: "4000%",
        icon: DollarSign
      },
      {
        label: "Average Job Value",
        before: "£2,500",
        after: "£8,500", 
        improvement: "240%",
        icon: Target
      },
      {
        label: "Google Ranking",
        before: "Page 5",
        after: "#1",
        improvement: "Top 3",
        icon: Search
      },
      {
        label: "Website Conversion",
        before: "1.2%",
        after: "8.7%",
        improvement: "625%",
        icon: TrendingUp
      },
      {
        label: "Customer Reviews",
        before: "12 reviews",
        after: "150+ reviews",
        improvement: "1150%",
        icon: Star
      }
    ],
    testimonial: {
      quote: "Built Proper didn't just build us a website - they transformed our entire business. We went from struggling to find work to having a £2M+ pipeline and being booked solid for months. The phone hasn't stopped ringing since. Best investment we ever made.",
      author: "Mark Thompson",
      position: "Owner & Managing Director"
    },
    services: [
      "Custom Website Development",
      "Local SEO Optimisation", 
      "Google Ads Management",
      "Review Generation System",
      "Content Marketing",
      "Google Business Profile",
      "Conversion Optimisation",
      "Analytics & Reporting"
    ],
    process: [
      {
        phase: "1",
        title: "Discovery & Strategy",
        description: "Deep dive into Hallmark's business, target customers, and competitive landscape. Identified key opportunities in local search and developed comprehensive digital strategy.",
        duration: "2 weeks",
        deliverables: ["Competitive Analysis", "Keyword Research", "Customer Journey Mapping", "Digital Strategy Document"]
      },
      {
        phase: "2", 
        title: "Website Development",
        description: "Built custom website from scratch with focus on lead generation. Mobile-first design, fast loading, optimised for conversions with clear calls-to-action throughout.",
        duration: "4 weeks",
        deliverables: ["Custom Website", "Content Management System", "Lead Capture Forms", "Mobile Optimisation"]
      },
      {
        phase: "3",
        title: "SEO Implementation", 
        description: "Comprehensive local SEO including on-page optimisation, local citations, Google Business Profile setup, and content strategy targeting 'driveway' keywords.",
        duration: "6 weeks",
        deliverables: ["Technical SEO", "Local Citations", "Content Creation", "Google Business Profile"]
      },
      {
        phase: "4",
        title: "Marketing Launch",
        description: "Launched Google Ads campaigns, review generation system, and ongoing content marketing. Set up tracking and reporting through Built Proper portal.",
        duration: "2 weeks", 
        deliverables: ["Google Ads Campaigns", "Review System", "Analytics Setup", "Portal Training"]
      },
      {
        phase: "5",
        title: "Optimisation & Growth",
        description: "Continuous optimisation based on performance data. A/B tested landing pages, refined ad campaigns, expanded keyword targeting, and scaled successful strategies.",
        duration: "Ongoing",
        deliverables: ["Performance Reports", "Campaign Optimisation", "Content Updates", "Strategy Refinement"]
      }
    ],
    challenges: [
      {
        title: "Seasonal Business Fluctuations",
        description: "Driveway work is heavily seasonal with winter being particularly slow for new installations.",
        solution: "Developed year-round content strategy focusing on maintenance, repairs, and planning services during off-peak months. Created seasonal campaigns to maintain consistent lead flow."
      },
      {
        title: "High Competition Keywords",
        description: "Keywords like 'driveway Edinburgh' were dominated by established competitors with strong domain authority.",
        solution: "Targeted long-tail keywords initially ('resin driveway installation Edinburgh') while building authority, then gradually moved up to more competitive terms."
      },
      {
        title: "Converting Price-Conscious Customers",
        description: "Many enquiries were from price shoppers looking for the cheapest option, not quality work.",
        solution: "Repositioned messaging to focus on quality, longevity, and value. Added premium project showcases and customer testimonials emphasising quality over price."
      },
      {
        title: "Managing Increased Demand",
        description: "Success created new problems - too many leads to handle effectively with existing processes.",
        solution: "Implemented lead scoring system to prioritise high-value enquiries, created automated follow-up sequences, and helped streamline their quote process."
      }
    ],
    results: [
      {
        title: "Market Domination",
        description: "Achieved #1 rankings for primary keywords and consistent Map Pack appearances",
        impact: "Now the first choice for quality driveways in Edinburgh"
      },
      {
        title: "Premium Positioning", 
        description: "Shifted from competing on price to being seen as the quality premium option",
        impact: "Average job value increased by 240% while maintaining high demand"
      },
      {
        title: "Operational Efficiency",
        description: "Streamlined lead management and quote processes through digital systems",
        impact: "Handle 500% more leads with same team size"
      },
      {
        title: "Future-Proof Growth",
        description: "Built scalable digital infrastructure that continues generating results",
        impact: "Self-sustaining growth engine that requires minimal ongoing intervention"
      }
    ],
    tools: [
      "BP Portal", "BP Analytics", "BP Forms", "BP Reviews", "BP Rank", "BP Ads", "BP Content", "BP Connect"
    ],
    nextSteps: "Hallmark continues to grow with ongoing optimisation and is exploring expansion into commercial projects and additional service areas.",
    relatedCases: [
      {
        title: "From £45/hour to £75/hour Premium Positioning",
        client: "Elite Electrical Edinburgh",
        industry: "Electrical Services", 
        slug: "elite-electrical-edinburgh"
      },
      {
        title: "1000% Lead Increase Through Multi-Channel Marketing",
        client: "Yorkshire Heating Solutions",
        industry: "Heating & Gas",
        slug: "yorkshire-heating-solutions"
      },
      {
        title: "200% Project Value Increase with Luxury Positioning", 
        client: "London Luxury Kitchens",
        industry: "Kitchen Fitting",
        slug: "london-luxury-kitchens"
      }
    ]
  };

  return <CaseStudyTemplate caseStudy={caseStudyData} />;
};

export default HallmarkDrivewaysCaseStudy;
