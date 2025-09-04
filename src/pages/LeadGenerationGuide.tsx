import React from 'react';
import BlogPostTemplate from '../components/BlogPostTemplate';

const LeadGenerationGuide = () => {
  const blogPost = {
    title: "How to Generate 100+ Quality Leads Per Month",
    subtitle: "The exact system our clients use to flood their business with quality enquiries",
    author: "Built Proper Team", 
    date: "August 2025",
    readTime: "10 min",
    category: "Lead Generation",
    featured: true,
    metaDescription: "Learn the proven lead generation system that gets UK tradesmen 100+ quality leads monthly. Real tactics, real results, no theory.",
    keywords: ["lead generation", "trade leads", "customer acquisition", "digital marketing", "business growth"],
    sections: [
      {
        type: 'paragraph',
        content: "Most tradesmen are brilliant at their craft but terrible at generating leads. They rely on word-of-mouth, hope the phone rings, and wonder why their competitors are always busier."
      },
      {
        type: 'paragraph',
        content: "This guide changes that. We'll show you the exact system our most successful clients use to generate 100+ quality leads every month. Not tire-kickers. Not price shoppers. Quality customers who pay on time and refer others."
      },
      {
        type: 'stats',
        content: [
          { label: "Average leads per month", value: "127" },
          { label: "Lead-to-customer rate", value: "34%" },
          { label: "Average job value increase", value: "£2,400" },
          { label: "Time to implement", value: "30 days" },
          { label: "ROI within", value: "90 days" },
          { label: "Client satisfaction", value: "96%" }
        ]
      },
      {
        type: 'paragraph',
        content: "These numbers come from real UK trade businesses using this system. Plumbers in Manchester, electricians in Edinburgh, builders in Bristol. The system works across all trades and all locations."
      },
      {
        type: 'heading',
        content: "The Foundation: Your Lead Magnet Website"
      },
      {
        type: 'paragraph',
        content: "Your website isn't a brochure. It's a lead generation machine. Every element should be designed to capture enquiries, not just look pretty."
      },
      {
        type: 'list',
        content: [
          "Hero section with clear value proposition - what you do, who for, why choose you",
          "Multiple contact methods - phone, form, chat, all prominently displayed",
          "Social proof above the fold - reviews, certifications, years in business",
          "Clear service descriptions with pricing indicators (not exact prices)",
          "Before/after gallery showing your best work",
          "Local SEO optimisation for 'near me' searches",
          "Mobile-first design - 70% of searches happen on phones"
        ]
      },
      {
        type: 'tip',
        heading: "Quick Win",
        content: "Add a click-to-call button to your header that's visible on every page. Make it bright orange or green. This alone can increase leads by 20%."
      },
      {
        type: 'heading',
        content: "Channel 1: Google My Business Domination"
      },
      {
        type: 'paragraph',
        content: "Google My Business is the fastest way to generate local leads. Most trades set it up and forget it. Big mistake. GMB is a lead generation goldmine when used properly."
      },
      {
        type: 'paragraph',
        content: "The GMB Lead System:"
      },
      {
        type: 'list',
        content: [
          "Complete every field - services, areas, hours, attributes",
          "Upload 20+ photos - team, work, vehicles, before/after",
          "Post weekly updates - completed jobs, tips, offers",
          "Respond to all reviews within 24 hours",
          "Use Google messaging to answer enquiries instantly",
          "Create service-specific posts for different trades",
          "Add booking links directly in your GMB profile"
        ]
      },
      {
        type: 'paragraph',
        content: "Clients who follow this system appear in the Map Pack 3x more often and get 40% more clicks than basic profiles."
      },
      {
        type: 'heading',
        content: "Channel 2: Facebook Lead Generation"
      },
      {
        type: 'paragraph',
        content: "Facebook isn't just for cat videos. It's where your customers spend 2+ hours daily. The key is showing up where they are, not waiting for them to find you."
      },
      {
        type: 'paragraph',
        content: "The Facebook System:"
      },
      {
        type: 'list',
        content: [
          "Join local community groups - village groups, area forums, buy/sell groups",
          "Share before/after photos with helpful context",
          "Answer questions helpfully without being salesy",
          "Run targeted ads to homeowners in your area",
          "Use Facebook's lead forms to capture enquiries",
          "Retarget website visitors with special offers",
          "Create video content showing your expertise"
        ]
      },
      {
        type: 'quote',
        content: "Facebook groups generate 30% of our leads. People see our work, trust builds over time, then they call when they need us."
      },
      {
        type: 'heading',
        content: "Channel 3: Strategic Partnerships"
      },
      {
        type: 'paragraph',
        content: "The fastest way to scale is through other businesses. Find complementary trades and service providers who serve your ideal customers."
      },
      {
        type: 'list',
        content: [
          "Estate agents (for maintenance work)",
          "Architects and interior designers", 
          "Property management companies",
          "Insurance companies (for emergency work)",
          "Other trades who don't compete directly",
          "Local suppliers and trade counters",
          "Property developers and builders"
        ]
      },
      {
        type: 'paragraph',
        content: "Create formal referral agreements. Offer commission or reciprocal referrals. Track everything so you know which partnerships generate the best leads."
      },
      {
        type: 'heading',
        content: "Channel 4: Review-Driven Growth"
      },
      {
        type: 'paragraph',
        content: "Reviews are the new word-of-mouth. 88% of people trust online reviews as much as personal recommendations. More reviews = more leads."
      },
      {
        type: 'paragraph',
        content: "The Review Generation System:"
      },
      {
        type: 'list',
        content: [
          "Ask every happy customer for a review (most won't unless asked)",
          "Make it easy - send direct links to Google, Facebook, Checkatrade",
          "Time it right - ask 24-48 hours after job completion",
          "Follow up if they don't review (politely)",
          "Respond to all reviews - good and bad",
          "Share positive reviews on social media",
          "Use reviews as social proof on your website"
        ]
      },
      {
        type: 'tip',
        heading: "Review Hack",
        content: "Create a simple one-page website just for reviews. QR code on your van, business cards, invoices. Makes it super easy for customers to leave reviews."
      },
      {
        type: 'heading',
        content: "Channel 5: Email Marketing That Works"
      },
      {
        type: 'paragraph',
        content: "Email isn't dead for trades. It's just done wrong. Most tradesmen send boring newsletters nobody reads. Smart tradesmen use email to nurture leads and generate repeat business."
      },
      {
        type: 'paragraph',
        content: "The Trade Email System:"
      },
      {
        type: 'list',
        content: [
          "Capture emails on your website with valuable offers",
          "Send seasonal maintenance reminders",
          "Share before/after case studies",
          "Offer exclusive discounts to email subscribers",
          "Send annual service reminders",
          "Create automated follow-up sequences for quotes",
          "Segment lists by service type and location"
        ]
      },
      {
        type: 'heading',
        content: "The Lead Qualification System"
      },
      {
        type: 'paragraph',
        content: "Not all leads are equal. Spending time on tyre-kickers costs you real customers. You need a system to qualify leads quickly and focus on the best ones."
      },
      {
        type: 'paragraph',
        content: "The Qualification Framework:"
      },
      {
        type: 'list',
        content: [
          "Budget - can they afford your services?",
          "Authority - can they make the decision?",
          "Need - do they have a genuine problem to solve?",
          "Timeline - when do they need the work done?",
          "Fit - are they the type of customer you want?"
        ]
      },
      {
        type: 'paragraph',
        content: "Create a simple scoring system. High-scoring leads get immediate attention. Low-scoring leads get automated follow-up. Medium leads get scheduled callbacks."
      },
      {
        type: 'cta',
        heading: "Want Our Lead Qualification Template?",
        content: "Get the exact questions we use to qualify leads in under 2 minutes"
      },
      {
        type: 'heading',
        content: "Lead Nurturing: The Follow-Up System"
      },
      {
        type: 'paragraph',
        content: "80% of sales happen after the 5th contact. Most tradesmen give up after the first. The money is in the follow-up."
      },
      {
        type: 'paragraph',
        content: "The 7-Touch Follow-Up System:"
      },
      {
        type: 'list',
        content: [
          "Touch 1: Immediate response (within 5 minutes)",
          "Touch 2: Detailed quote within 24 hours",
          "Touch 3: Follow-up call 3 days later",
          "Touch 4: Email with case study 1 week later",
          "Touch 5: Special offer 2 weeks later",
          "Touch 6: Check-in call 1 month later",
          "Touch 7: Seasonal reminder 3 months later"
        ]
      },
      {
        type: 'paragraph',
        content: "Automate as much as possible. Use CRM software or even simple email templates. The key is consistency, not perfection."
      },
      {
        type: 'heading',
        content: "Measuring What Matters"
      },
      {
        type: 'paragraph',
        content: "You can't improve what you don't measure. Track these key metrics weekly:"
      },
      {
        type: 'list',
        content: [
          "Total leads generated",
          "Lead source breakdown",
          "Cost per lead by channel",
          "Lead-to-customer conversion rate",
          "Average job value",
          "Customer lifetime value",
          "Return on marketing investment"
        ]
      },
      {
        type: 'paragraph',
        content: "Focus on improving one metric at a time. Small improvements compound quickly."
      },
      {
        type: 'heading',
        content: "The 30-Day Implementation Plan"
      },
      {
        type: 'paragraph',
        content: "Don't try to do everything at once. Follow this 30-day plan:"
      },
      {
        type: 'paragraph',
        content: "**Week 1: Foundation**"
      },
      {
        type: 'list',
        content: [
          "Audit current website for lead generation",
          "Set up Google My Business properly",
          "Create review request system",
          "Join 5 local Facebook groups"
        ]
      },
      {
        type: 'paragraph',
        content: "**Week 2: Content & Social**"
      },
      {
        type: 'list',
        content: [
          "Take 50+ photos of your work",
          "Write 5 helpful social media posts",
          "Create before/after case studies",
          "Set up email capture on website"
        ]
      },
      {
        type: 'paragraph',
        content: "**Week 3: Partnerships & Systems**"
      },
      {
        type: 'list',
        content: [
          "Contact 10 potential referral partners",
          "Create lead qualification checklist",
          "Set up follow-up email templates",
          "Launch first Facebook ad campaign"
        ]
      },
      {
        type: 'paragraph',
        content: "**Week 4: Optimise & Scale**"
      },
      {
        type: 'list',
        content: [
          "Analyse first month's results",
          "Double down on best-performing channels",
          "Eliminate or improve poor performers",
          "Plan next month's lead generation activities"
        ]
      },
      {
        type: 'heading',
        content: "Common Mistakes to Avoid"
      },
      {
        type: 'list',
        content: [
          "Trying to do everything at once - focus on 2-3 channels maximum",
          "Competing on price - compete on value and service",
          "Ignoring follow-up - the money is in the follow-up",
          "Not tracking results - you can't improve what you don't measure",
          "Giving up too early - lead generation takes 3-6 months to optimise",
          "Focusing on quantity over quality - 10 good leads beat 100 bad ones"
        ]
      },
      {
        type: 'heading',
        content: "Your Lead Generation Action Plan"
      },
      {
        type: 'paragraph',
        content: "You now have the complete system. But knowledge without action is worthless. Here's what to do next:"
      },
      {
        type: 'list',
        content: [
          "Choose your top 3 lead generation channels",
          "Set up tracking for all leads",
          "Create your 7-touch follow-up system",
          "Block out 2 hours weekly for lead generation activities",
          "Commit to testing for 90 days minimum"
        ]
      },
      {
        type: 'paragraph',
        content: "Remember: consistency beats perfection. It's better to do a few things well than many things poorly."
      },
      {
        type: 'paragraph',
        content: "Your competitors are still waiting for the phone to ring. You're about to make it ring non-stop."
      }
    ],
    relatedPosts: [
      {
        title: "The Complete Guide to Local SEO for UK Tradesmen",
        slug: "local-seo-guide-tradesmen",
        readTime: "12 min"
      },
      {
        title: "Why WordPress is Holding Your Trade Business Back",
        slug: "wordpress-holding-you-back",
        readTime: "8 min"
      },
      {
        title: "Building a £1M+ Trade Business: The Digital Blueprint",
        slug: "million-pound-trade-business", 
        readTime: "15 min"
      }
    ],
    cta: {
      title: "Ready to Generate More Leads?",
      description: "Let's build you a lead generation system that actually works",
      buttonText: "Get Your Marketing Strategy",
      buttonLink: "/services/marketing"
    }
  };

  return <BlogPostTemplate post={blogPost} />;
};

export default LeadGenerationGuide;
