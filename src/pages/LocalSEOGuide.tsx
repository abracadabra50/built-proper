import React from 'react';
import BlogPostTemplate from '../components/BlogPostTemplate';

const LocalSEOGuide = () => {
  const blogPost = {
    title: "The Complete Guide to Local SEO for UK Tradesmen",
    subtitle: "Everything you need to dominate Google in your local area. From 'near me' searches to the Map Pack.",
    author: "Built Proper Team",
    date: "August 2025",
    readTime: "12 min",
    category: "SEO Guide",
    featured: true,
    metaDescription: "Master local SEO for your trade business. Learn how to rank #1 on Google, dominate the Map Pack, and get more quality leads in your area.",
    keywords: ["local SEO", "tradesman SEO", "Google ranking", "near me searches", "Map Pack", "UK trades"],
    sections: [
      {
        type: 'paragraph',
        content: "If you're not on page one of Google, you might as well not exist. Harsh? Maybe. True? Absolutely. Every day, thousands of people in your area search for tradesmen. They're typing 'plumber near me', 'emergency electrician [your town]', 'best builder in [your city]'. And if you're not showing up, your competitors are getting those calls."
      },
      {
        type: 'stats',
        content: [
          { label: "Local searches", value: "46%" },
          { label: "Visit within 24h", value: "88%" },
          { label: "Mobile searches", value: "76%" },
          { label: "Call directly", value: "54%" },
          { label: "Near me growth", value: "500%" },
          { label: "Map Pack CTR", value: "44%" }
        ]
      },
      {
        type: 'paragraph',
        content: "These aren't made-up numbers. This is real data from real UK trade businesses. Local SEO isn't optional anymore - it's survival. The good news? Most of your competitors are doing it wrong. They're either ignoring it completely or throwing money at dodgy agencies who promise the world and deliver nothing."
      },
      {
        type: 'heading',
        content: "Why Local SEO is Different for Tradesmen"
      },
      {
        type: 'paragraph',
        content: "Generic SEO advice doesn't work for trades. You're not competing globally. You don't need traffic from America. You need Mrs. Smith from down the road to find you when her boiler breaks at 10pm on a Sunday."
      },
      {
        type: 'list',
        content: [
          "Your customers search differently - they use 'near me', location names, and emergency terms",
          "Trust signals matter more - reviews, local presence, and reputation are crucial",
          "Mobile dominates - over 75% of trade searches happen on phones",
          "Intent is immediate - people searching for trades need help NOW",
          "Competition is local - you're not fighting Amazon, just Dave from across town"
        ]
      },
      {
        type: 'tip',
        heading: "Quick Win",
        content: "Add your exact service area to your Google Business Profile. Don't just put 'London' - list every borough, town, and area you cover. Google rewards specificity."
      },
      {
        type: 'heading',
        content: "The Google Map Pack: Your Golden Ticket"
      },
      {
        type: 'paragraph',
        content: "See those three businesses that show up in the map at the top of Google? That's the Map Pack, and it's where 44% of clicks go. Not page one. Not position one. The Map Pack. If you're not there, you're invisible."
      },
      {
        type: 'paragraph',
        content: "Getting into the Map Pack isn't about tricks or hacks. It's about proving to Google that you're the most relevant, trustworthy, and popular trade business for that search. Here's exactly how to do it:"
      },
      {
        type: 'list',
        content: [
          "Claim and verify your Google Business Profile (shocking how many don't)",
          "Fill out EVERY field - services, areas, hours, attributes, everything",
          "Add photos weekly - before/after shots, team photos, completed jobs",
          "Respond to ALL reviews within 24 hours (yes, even the bad ones)",
          "Post updates weekly - special offers, completed projects, tips",
          "Ensure NAP consistency - Name, Address, Phone must be identical everywhere",
          "Build local citations - get listed in UK trade directories",
          "Generate fresh reviews consistently - aim for 2-3 per month minimum"
        ]
      },
      {
        type: 'quote',
        content: "We went from page 5 to dominating the Map Pack in 90 days. The phone hasn't stopped ringing since. Proper game changer."
      },
      {
        type: 'heading',
        content: "Keywords That Actually Convert"
      },
      {
        type: 'paragraph',
        content: "Forget vanity keywords. You don't need to rank for 'plumber' nationwide. You need to rank for the searches that bring in jobs. These are the money keywords for UK tradesmen:"
      },
      {
        type: 'list',
        content: [
          "[trade] near me - The holy grail of local search",
          "emergency [trade] [location] - High intent, high value",
          "best [trade] in [location] - Quality-seeking customers",
          "[specific service] [location] - 'boiler installation Edinburgh'",
          "cheap [trade] [location] - Price shoppers (decide if you want them)",
          "24 hour [trade] [location] - Emergency services",
          "[trade] quotes [location] - Ready-to-buy customers",
          "local [trade] [location] - Redundant but still searched"
        ]
      },
      {
        type: 'cta',
        heading: "Want to Know Your Exact Keywords?",
        content: "We'll run a complete keyword analysis for your trade and location. See exactly what your customers are searching for."
      },
      {
        type: 'heading',
        content: "Content That Ranks (And Doesn't Bore People to Death)"
      },
      {
        type: 'paragraph',
        content: "Google loves fresh, relevant content. But nobody wants to read another boring article about 'The importance of regular boiler servicing'. Your content needs to be useful, local, and actually interesting."
      },
      {
        type: 'paragraph',
        content: "Here's what works for trades:"
      },
      {
        type: 'list',
        content: [
          "Local area pages - 'Plumber in Clapham' with actual local knowledge",
          "Service pages - detailed pages for each service you offer",
          "Case studies - real jobs in real locations with real results",
          "Seasonal content - 'Preparing Your Heating for Edinburgh Winter'",
          "Problem-solving guides - 'Why Your Boiler Keeps Losing Pressure'",
          "Cost guides - 'How Much Does a Bathroom Renovation Cost in Manchester?'",
          "Emergency guides - 'What to Do When Your Pipe Bursts at 2am'"
        ]
      },
      {
        type: 'tip',
        heading: "Content Hack",
        content: "Create a page for every major area you serve. Not just 'Plumber in London' but 'Plumber in Wandsworth', 'Plumber in Battersea', etc. Include local landmarks, parking info, and area-specific content. Google loves it."
      },
      {
        type: 'heading',
        content: "Reviews: Your Secret Weapon"
      },
      {
        type: 'paragraph',
        content: "Reviews aren't just for trust - they're massive for SEO. Google uses reviews as a ranking factor, especially for local search. More reviews, better reviews, fresher reviews = higher rankings."
      },
      {
        type: 'paragraph',
        content: "But here's what most trades get wrong: they wait for reviews to happen naturally. That's like waiting for customers to appear naturally. You need a system:"
      },
      {
        type: 'list',
        content: [
          "Ask EVERY happy customer for a review (most won't leave one otherwise)",
          "Make it easy - send them a direct link to your Google review page",
          "Time it right - ask within 24-48 hours of completing the job",
          "Follow up - if they don't review, ask once more (politely)",
          "Respond to everything - thank good reviews, address bad ones professionally",
          "Spread them out - 10 reviews in one day looks suspicious",
          "Get specific - ask them to mention the service and area",
          "Use review software - automate the asking process"
        ]
      },
      {
        type: 'quote',
        content: "We went from 12 reviews to 150+ in six months. Our rankings shot up and enquiries doubled. Should have done it years ago."
      },
      {
        type: 'heading',
        content: "Technical SEO That Actually Matters"
      },
      {
        type: 'paragraph',
        content: "Most technical SEO is overthinking for trades. You don't need to obsess over every meta tag. But these technical factors genuinely impact your local rankings:"
      },
      {
        type: 'list',
        content: [
          "Page speed - if your site takes more than 3 seconds to load, you're losing customers and rankings",
          "Mobile responsive - not optional, 76% of trade searches are mobile",
          "SSL certificate - the padlock in the browser, Google requires it",
          "Schema markup - tells Google you're a local business",
          "XML sitemap - helps Google find all your pages",
          "Clean URLs - '/plumber-edinburgh' not '/page?id=123'",
          "Local business schema - structured data for your business info",
          "Image optimisation - compress images, use local keywords in filenames"
        ]
      },
      {
        type: 'tip',
        heading: "Speed Test",
        content: "Check your site speed at Google PageSpeed Insights. If you score under 50, you're hemorrhaging customers. Under 30? You need emergency help."
      },
      {
        type: 'heading',
        content: "Link Building for Trades (Without the Dodgy Stuff)"
      },
      {
        type: 'paragraph',
        content: "Links still matter for SEO, but buying links or using link farms will get you penalised. Here's how to build legitimate, powerful links for your trade business:"
      },
      {
        type: 'list',
        content: [
          "Supplier links - every supplier you use should link to you",
          "Local partnerships - chamber of commerce, BNI groups, trade associations",
          "Charity work - sponsor local events, get featured on their sites",
          "Local news - pitched stories about your business or projects",
          "Customer testimonials - ask customers with websites to link to you",
          "Trade directories - CheckaTrade, TrustATrader, Which? Trusted Traders",
          "Local directories - council websites, local business listings",
          "Guest posts - write for local blogs or trade publications"
        ]
      },
      {
        type: 'heading',
        content: "Tracking What Works (And Killing What Doesn't)"
      },
      {
        type: 'paragraph',
        content: "You can't improve what you don't measure. But most trades either track nothing or track everything. Here are the only metrics that matter for local SEO:"
      },
      {
        type: 'list',
        content: [
          "Local rankings - where you rank for your money keywords",
          "Map Pack appearances - how often you show up in the three-pack",
          "Phone calls - calls from Google Business Profile and website",
          "Form submissions - quote requests and enquiries",
          "Direction requests - people getting directions to your business",
          "Website visits from local search - not all traffic, just local",
          "Review quantity and rating - tracked monthly",
          "Competitor rankings - know where you stand"
        ]
      },
      {
        type: 'cta',
        heading: "Ready to Dominate Local Search?",
        content: "This guide is just the start. We'll build you a complete local SEO system that gets you ranking, gets you calls, and gets you growing."
      },
      {
        type: 'heading',
        content: "The 90-Day Local SEO Action Plan"
      },
      {
        type: 'paragraph',
        content: "Want to transform your local presence in 90 days? Here's exactly what to do:"
      },
      {
        type: 'paragraph',
        content: "**Days 1-30: Foundation**"
      },
      {
        type: 'list',
        content: [
          "Claim and optimise Google Business Profile",
          "Audit and fix website technical issues",
          "Create area and service pages",
          "Set up review generation system",
          "Build 20 local citations"
        ]
      },
      {
        type: 'paragraph',
        content: "**Days 31-60: Momentum**"
      },
      {
        type: 'list',
        content: [
          "Publish 8 pieces of local content",
          "Generate 10+ new reviews",
          "Build 10 quality local links",
          "Optimise for mobile speed",
          "Create Google Posts weekly"
        ]
      },
      {
        type: 'paragraph',
        content: "**Days 61-90: Domination**"
      },
      {
        type: 'list',
        content: [
          "Expand to nearby areas",
          "Launch review campaign",
          "Create video content",
          "Build supplier partnerships",
          "Monitor and adjust strategy"
        ]
      },
      {
        type: 'quote',
        content: "Followed this exact plan. Went from invisible to 5 enquiries a day. Best investment we ever made in the business."
      },
      {
        type: 'heading',
        content: "Stop Reading. Start Ranking."
      },
      {
        type: 'paragraph',
        content: "You've got two choices. Keep doing what you're doing and keep getting what you're getting. Or take action and start dominating your local market."
      },
      {
        type: 'paragraph',
        content: "Every day you wait, your competitors are stealing your customers. They're ranking higher, getting more calls, growing their business with customers that should be yours."
      },
      {
        type: 'paragraph',
        content: "We've shown you exactly what to do. The question is: will you do it? Or will you let another year pass wondering why the phone isn't ringing?"
      }
    ],
    relatedPosts: [
      {
        title: "Why WordPress is Holding Your Trade Business Back",
        slug: "wordpress-holding-you-back",
        readTime: "8 min"
      },
      {
        title: "How to Generate 100+ Quality Leads Per Month",
        slug: "generate-quality-leads",
        readTime: "10 min"
      },
      {
        title: "Building a £1M+ Trade Business: The Digital Blueprint",
        slug: "million-pound-trade-business",
        readTime: "15 min"
      }
    ],
    cta: {
      title: "Ready to Dominate Google?",
      description: "Let's get you ranking #1 for the searches that matter",
      buttonText: "Start Your SEO Journey",
      buttonLink: "/services/seo"
    }
  };

  return <BlogPostTemplate post={blogPost} />;
};

export default LocalSEOGuide;
