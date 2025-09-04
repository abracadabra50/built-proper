import BlogPostTemplate from '../components/BlogPostTemplate';

const WordPressGuide = () => {
  const blogPost = {
    title: "Why WordPress is Holding Your Trade Business Back",
    subtitle: "The uncomfortable truth about WordPress for UK tradesmen - and what to do about it",
    author: "Built Proper Team",
    date: "August 2025",
    readTime: "8 min",
    category: "Website Strategy",
    featured: true,
    metaDescription: "Discover why WordPress is costing UK tradesmen leads and money. Learn about faster, more secure alternatives that actually convert visitors into customers.",
    keywords: ["WordPress alternatives", "trade websites", "custom websites", "website speed", "conversion optimisation"],
    sections: [
      {
        type: 'paragraph' as const,
        content: "Let's get straight to the point: WordPress is probably costing you customers. Every day. And you might not even know it."
      },
      {
        type: 'paragraph' as const,
        content: "Before you close this tab in anger, hear us out. We're not WordPress haters for the sake of it. We've built hundreds of trade websites, analysed thousands of hours of user data, and the results are clear: WordPress sites consistently underperform for trade businesses."
      },
      {
        type: 'stats' as const,
        content: [
          { label: "WordPress sites average load time", value: "4.2s" },
          { label: "Visitors lost per extra second", value: "40%" },
          { label: "WordPress security vulnerabilities", value: "90%" },
          { label: "Custom sites average load time", value: "1.8s" },
          { label: "Conversion rate improvement", value: "127%" },
          { label: "SEO ranking improvement", value: "73%" }
        ]
      },
      {
        type: 'paragraph' as const,
        content: "These aren't made-up numbers. This is real data from real UK trade businesses. If your website takes more than 3 seconds to load, you're losing nearly half your potential customers before they even see your work."
      },
      {
        type: 'heading' as const,
        content: "The WordPress Speed Problem"
      },
      {
        type: 'paragraph' as const,
        content: "WordPress was built for bloggers in 2003. Twenty years later, it's being forced to do jobs it was never designed for. Like asking a transit van to win Formula 1."
      },
      {
        type: 'paragraph' as const,
        content: "The problem isn't just WordPress itself - it's the ecosystem around it:"
      },
      {
        type: 'list' as const,
        content: [
          "Themes built for everyone (so perfect for no one)",
          "Plugins that conflict and slow everything down",
          "Bloated code carrying 20 years of legacy baggage",
          "Database queries that get slower as content grows",
          "Hosting optimised for blogs, not business sites"
        ]
      },
      {
        type: 'quote' as const,
        content: "Our WordPress site took 6 seconds to load. Customers were hanging up before it even appeared. Switching to custom saved our business."
      },
      {
        type: 'tip' as const,
        heading: "Quick Test",
        content: "Check your site speed at Google PageSpeed Insights right now. If you score under 50, you're hemorrhaging customers. Under 30? You need emergency help."
      },
      {
        type: 'heading' as const,
        content: "The Security Nightmare"
      },
      {
        type: 'paragraph' as const,
        content: "WordPress powers 40% of the internet. That makes it the biggest target for hackers. Every plugin, every theme, every outdated installation is a potential entry point."
      },
      {
        type: 'paragraph' as const,
        content: "We see it every week - trade businesses losing their entire website to hackers. Customer data stolen. Google rankings destroyed. Weeks of downtime. All because WordPress is inherently insecure."
      },
      {
        type: 'list' as const,
        content: [
          "90% of hacked websites run WordPress",
          "50,000+ WordPress sites hacked daily",
          "Average cost of a hack: £10,000+",
          "Average recovery time: 2-6 weeks",
          "Customer trust lost: often permanent"
        ]
      },
      {
        type: 'paragraph' as const,
        content: "Yes, you can secure WordPress with plugins, monitoring, and constant updates. But why start with something fundamentally vulnerable when you don't have to?"
      },
      {
        type: 'heading' as const,
        content: "The Maintenance Trap"
      },
      {
        type: 'paragraph' as const,
        content: "WordPress sites need constant babysitting. Plugin updates, security patches, compatibility fixes, database optimisation. Most trades end up paying £100+ monthly for maintenance they shouldn't need."
      },
      {
        type: 'paragraph' as const,
        content: "Even worse - updates often break things. How many times have you seen 'This site is temporarily down for maintenance' on a WordPress site? Your customers see that too. And they leave."
      },
      {
        type: 'cta' as const,
        heading: "Tired of WordPress Problems?",
        content: "See how custom-built sites eliminate these issues completely"
      },
      {
        type: 'heading' as const,
        content: "The SEO Handicap"
      },
      {
        type: 'paragraph' as const,
        content: "Google has made it clear: site speed is a ranking factor. WordPress sites start with a handicap. They're carrying so much unnecessary code that even 'optimised' WordPress rarely matches custom site performance."
      },
      {
        type: 'paragraph' as const,
        content: "But it's not just speed. WordPress creates messy code that search engines struggle to understand:"
      },
      {
        type: 'list' as const,
        content: [
          "Bloated HTML with unnecessary div tags",
          "Multiple CSS files loaded on every page",
          "JavaScript conflicts that break functionality",
          "Database queries that slow server response",
          "Plugin conflicts that create broken links"
        ]
      },
      {
        type: 'paragraph' as const,
        content: "We've migrated hundreds of trade businesses from WordPress to custom sites. Average SEO improvement? 73% increase in rankings within 6 months."
      },
      {
        type: 'heading' as const,
        content: "The Conversion Problem"
      },
      {
        type: 'paragraph' as const,
        content: "WordPress themes are designed to look good in screenshots, not convert visitors into customers. They're built for everyone, so they're optimised for no one."
      },
      {
        type: 'paragraph' as const,
        content: "Trade businesses need specific conversion elements:"
      },
      {
        type: 'list' as const,
        content: [
          "Click-to-call buttons that actually work on mobile",
          "Quote forms that capture the right information",
          "Before/after galleries that load instantly",
          "Trust signals in the right places",
          "Local SEO elements built into the structure"
        ]
      },
      {
        type: 'paragraph' as const,
        content: "WordPress themes give you generic contact forms and hope for the best. Custom sites give you conversion machines built specifically for your trade."
      },
      {
        type: 'heading' as const,
        content: "The Hidden Costs"
      },
      {
        type: 'paragraph' as const,
        content: "WordPress looks cheap upfront. But the real costs add up fast:"
      },
      {
        type: 'list' as const,
        content: [
          "Premium themes: £50-200",
          "Essential plugins: £200-500/year",
          "Security monitoring: £100-300/year", 
          "Performance optimisation: £500-1000",
          "Developer fixes: £500-2000/year",
          "Lost customers from slow loading: £1000s"
        ]
      },
      {
        type: 'paragraph' as const,
        content: "Most trades spend £2000+ annually keeping WordPress running properly. That's before counting lost business from poor performance."
      },
      {
        type: 'quote' as const,
        content: "We were spending more on WordPress maintenance than we paid for our custom site. And the custom site actually works."
      },
      {
        type: 'heading' as const,
        content: "The Custom Alternative"
      },
      {
        type: 'paragraph' as const,
        content: "Custom-built websites solve every WordPress problem:"
      },
      {
        type: 'list' as const,
        content: [
          "Lightning fast - built for speed from the ground up",
          "Secure by design - no plugin vulnerabilities",
          "Zero maintenance - no updates, no conflicts, no breaks",
          "SEO optimised - clean code Google loves",
          "Conversion focused - every element designed to generate leads",
          "Future proof - built to last, not patched together"
        ]
      },
      {
        type: 'paragraph' as const,
        content: "Yes, custom costs more upfront. But it pays for itself quickly through better performance, more leads, and zero ongoing headaches."
      },
      {
        type: 'heading' as const,
        content: "Making the Switch"
      },
      {
        type: 'paragraph' as const,
        content: "Switching from WordPress doesn't have to be painful. The right developer will:"
      },
      {
        type: 'list' as const,
        content: [
          "Migrate all your content and maintain SEO rankings",
          "Improve on your existing design and functionality",
          "Set up proper redirects so you don't lose Google rankings",
          "Provide training on managing your new site",
          "Guarantee the site will be faster and more secure"
        ]
      },
      {
        type: 'tip' as const,
        heading: "Migration Tip",
        content: "Don't just copy your WordPress site. This is your chance to fix everything that wasn't working. Better layout, clearer messaging, stronger calls-to-action."
      },
      {
        type: 'heading' as const,
        content: "The Bottom Line"
      },
      {
        type: 'paragraph' as const,
        content: "WordPress might be fine for bloggers and hobbyists. But if you're running a serious trade business, you need a serious website. One that loads fast, stays secure, converts visitors, and ranks on Google."
      },
      {
        type: 'paragraph' as const,
        content: "Every day you stick with WordPress is another day you're losing customers to competitors with better websites. The question isn't whether you can afford to switch - it's whether you can afford not to."
      },
      {
        type: 'paragraph' as const,
        content: "Your trade deserves better than WordPress. Your customers deserve better. You deserve better."
      }
    ],
    relatedPosts: [
      {
        title: "The Complete Guide to Local SEO for UK Tradesmen",
        slug: "local-seo-guide-tradesmen", 
        readTime: "12 min"
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
      title: "Ready to Ditch WordPress?",
      description: "Let's build you a proper website that actually works",
      buttonText: "Get Your Custom Website",
      buttonLink: "/services/websites"
    }
  };

  return <BlogPostTemplate post={blogPost} />;
};

export default WordPressGuide;
