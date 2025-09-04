# Google Search Console Setup Guide

## 📊 Setting Up Google Search Console for Built Proper

### Step 1: Create GSC Account
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Sign in with Google account
3. Add property: `https://builtproper.com`

### Step 2: Verify Ownership
We've already added the meta tag verification in `index.html`:
```html
<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE_HERE" />
```

**To complete verification:**
1. In GSC, choose "HTML tag" verification method
2. Copy the verification code provided
3. Replace `YOUR_VERIFICATION_CODE_HERE` in index.html
4. Deploy the site
5. Click "Verify" in GSC

### Step 3: Submit Sitemap
1. In GSC, go to "Sitemaps" in the left menu
2. Enter: `sitemap.xml`
3. Click "Submit"

We have created:
- `/public/sitemap.xml` - Main sitemap with all URLs
- `/public/sitemap-index.xml` - Sitemap index (for future expansion)

### Step 4: Configure Settings
1. **International Targeting**: Set to United Kingdom
2. **Preferred Domain**: Set to `https://builtproper.com` (not www)
3. **Crawl Rate**: Leave as default (Google determines)

### Step 5: Monitor Performance

#### Key Metrics to Track:
- **Search Performance**: Clicks, impressions, CTR, position
- **Coverage**: Indexed pages, errors, warnings
- **Core Web Vitals**: LCP, FID, CLS scores
- **Mobile Usability**: Mobile-friendly pages

#### Important Keywords to Monitor:
- "tradesman websites uk"
- "custom websites for trades"
- "no wordpress tradesman sites"
- "wix alternative tradesmen"
- "checkatrade alternative"
- "plumber website design"
- "electrician website design"
- Location-based: "[city] tradesman websites"

### Step 6: Set Up Google Analytics 4

Add to `index.html` before closing `</head>`:
```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Step 7: Link GSC to GA4
1. In GA4, go to Admin > Search Console Links
2. Choose your GSC property
3. Select your GA4 data stream
4. Review and submit

## 🎯 Priority Actions After Setup

### Week 1:
- [ ] Submit all important pages via URL Inspection
- [ ] Check for crawl errors
- [ ] Review mobile usability issues
- [ ] Submit any missing pages

### Week 2:
- [ ] Analyze initial search queries
- [ ] Identify quick-win keywords
- [ ] Check page indexing status
- [ ] Review Core Web Vitals

### Month 1:
- [ ] Full performance review
- [ ] Identify top-performing pages
- [ ] Find keyword gaps
- [ ] Optimize underperforming pages

## 📈 Expected Timeline

- **Day 1-3**: Initial crawling and indexing
- **Week 1**: First impressions data
- **Week 2-4**: Position tracking begins
- **Month 1-2**: Meaningful traffic data
- **Month 3+**: Full performance insights

## 🔍 Search Console API Setup (Optional)

For automated reporting, set up API access:
1. Enable Search Console API in Google Cloud Console
2. Create service account
3. Add service account email to GSC property
4. Use credentials for automated reporting

## 📊 Custom Alerts to Set Up

1. **Coverage Issues**: Email when errors increase
2. **Performance Drops**: Alert if clicks drop 20%+ week-over-week
3. **Core Web Vitals**: Notify if scores drop below "Good"
4. **Security Issues**: Immediate alert for any security problems

## 🎯 Target Metrics (3-Month Goals)

- **Impressions**: 10,000+ per month
- **Clicks**: 500+ per month
- **Average Position**: Top 20 for main keywords
- **CTR**: 5%+ average
- **Indexed Pages**: 95%+ of submitted

## 📝 Notes

- Sitemap is automatically updated when new pages are added
- All pages include proper meta tags for SEO
- Schema markup is implemented on relevant pages
- Mobile-first indexing is already optimized
- Page speed is optimized for Core Web Vitals

---

**Last Updated**: 5 January 2025
**Next Review**: February 2025

