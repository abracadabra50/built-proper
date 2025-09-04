# Google Search Console & Analytics Credentials

## ✅ Google Search Console Verification

**Verification Code:** `auMMuroFXzeUqsXrncFsdHL_kbXrw71k5kizBtVjtKQ`

- **Status:** ✅ Added to `index.html`
- **Location:** `<meta name="google-site-verification" content="...">`
- **Purpose:** Verifies domain ownership for builtproper.com

## 🔑 OAuth Client ID

**Client ID:** `947985992378-bnmcg8anatqod7s37ijj7s9jr78ldm8q.apps.googleusercontent.com`

- **Status:** ✅ Configured in MCP
- **Location:** `/Users/zishan/.cursor/mcp.json`
- **Purpose:** OAuth authentication for GSC API access

## 📋 Next Steps

### 1. Deploy Website with Verification Tag
```bash
# The verification meta tag is already in index.html
# Deploy to see it live
npm run build
# Deploy via Netlify
```

### 2. Verify Domain in GSC
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://builtproper.com`
3. Choose "HTML tag" verification method
4. Click "Verify" - should auto-verify with our meta tag

### 3. Submit Sitemap
Once verified:
1. Go to Sitemaps section
2. Submit: `https://builtproper.com/sitemap.xml`

### 4. Test MCP Connection
After restarting Cursor:
- The GSC MCP should now authenticate using OAuth
- Test with: "List my GSC properties"

## 🔐 Security Notes

- ✅ OAuth Client ID is safe to expose (it's public)
- ⚠️ Never commit Client Secret if you have one
- ✅ Verification code is safe in HTML (it's meant to be public)

## 📊 What We Can Monitor

Once connected, we'll track:
- **Search Rankings** - Real positions for all keywords
- **Click-Through Rates** - Which titles/descriptions work
- **Impressions** - How often we appear in search
- **Index Coverage** - Which pages Google has indexed
- **Mobile Usability** - Mobile-specific issues
- **Core Web Vitals** - Performance metrics

## 🚀 Testing Commands

Once MCP is connected:
```
"Show me Built Proper's top search queries"
"What's our average position for 'tradesman websites'?"
"Check indexing status for all location pages"
"Find pages with high impressions but low CTR"
"Show search performance trend for last 30 days"
```

---

**Status:** Ready for deployment and GSC verification! 🎉
