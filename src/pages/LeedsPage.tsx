import React from 'react';
import LocationPageTemplate from '../components/LocationPageTemplate';

const LeedsPage = () => {
  const leedsData = {
    city: 'Leeds',
    county: 'West Yorkshire',
    stats: {
      projects: '70+',
      roi: '410%',
      ranking: 'Top 3',
      clients: '85+'
    },
    areas: [
      'Leeds City Centre', 'Headingley', 'Chapel Allerton', 'Roundhay',
      'Horsforth', 'Meanwood', 'Oakwood', 'Moortown',
      'Alwoodley', 'Shadwell', 'Wetherby', 'Boston Spa',
      'Garforth', 'Cross Gates', 'Seacroft', 'Killingbeck',
      'Harehills', 'Chapeltown', 'Hyde Park', 'Woodhouse',
      'Armley', 'Bramley', 'Pudsey', 'Farsley',
      'Kirkstall', 'Burley', 'Beeston', 'Holbeck',
      'Hunslet', 'Middleton', 'Morley', 'Rothwell',
      'Oulton', 'Woodlesford', 'Methley', 'Kippax'
    ],
    caseStudies: [
      {
        name: 'Leeds Premier Electrical',
        location: 'Headingley',
        trade: 'Electrician',
        result: 'From 4 leads/month to 50 leads/month',
        quote: 'Built Proper gave us the online presence we needed to compete with the big companies.'
      },
      {
        name: 'Yorkshire Plumbing Solutions',
        location: 'Roundhay',
        trade: 'Plumber',
        result: '£180k increase in annual revenue',
        quote: 'Stopped paying Checkatrade fees and now get better quality leads directly through our website.'
      },
      {
        name: 'Leeds Building & Renovation',
        location: 'Chapel Allerton',
        trade: 'Builder',
        result: '22 extension projects in 8 months',
        quote: 'The website showcases our work brilliantly. Customers trust us before they even call.'
      }
    ],
    seoContent: {
      intro: `Leeds is Yorkshire's economic powerhouse, and its trade industry is booming. But with thousands of 
        tradesmen across West Yorkshire competing for the same work, you need more than just a Facebook page. 
        We build custom websites that help Leeds trades stand out, rank higher in local searches, and win more 
        profitable jobs. Every site is bespoke - no templates, no WordPress, just proper development.`,
      
      whyCustom: `Leeds customers are discerning. They research online, read reviews, and choose tradesmen who 
        present themselves professionally. A custom website positions you as the quality choice for Leeds' 
        affluent suburbs like Roundhay, Alwoodley, and Chapel Allerton. Our hand-coded approach means your 
        website loads fast, works perfectly on mobile, and is optimised to convert Leeds visitors into 
        paying customers. Stand out from the crowd and win the jobs you want.`,
      
      localSeo: `Whether targeting "plumber LS1" or "emergency electrician Leeds", we'll ensure you dominate 
        local searches. Our Leeds-specific SEO strategies understand the city's diverse areas - from the 
        student districts of Headingley and Hyde Park to the family suburbs of Horsforth and Pudsey. 
        We optimise for Leeds postcodes (LS1-LS29), ensuring you appear exactly when local customers need you.`
    }
  };

  return <LocationPageTemplate data={leedsData} />;
};

export default LeedsPage;
