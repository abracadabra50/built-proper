import React from 'react';
import LocationPageTemplate from '../components/LocationPageTemplate';

const GlasgowPage = () => {
  const glasgowData = {
    city: 'Glasgow',
    county: 'Lanarkshire',
    stats: {
      projects: '75+',
      roi: '390%',
      ranking: 'Top 3',
      clients: '90+'
    },
    areas: [
      'Glasgow City Centre', 'West End', 'Merchant City', 'Finnieston',
      'Partick', 'Hillhead', 'Kelvinside', 'Hyndland',
      'Shawlands', 'Pollokshields', 'Govanhill', 'Mount Florida',
      'Cathcart', 'Battlefield', 'Langside', 'Dennistoun',
      'Parkhead', 'Bridgeton', 'Calton', 'Gorbals',
      'Govan', 'Ibrox', 'Cessnock', 'Kinning Park',
      'Maryhill', 'Kelvindale', 'Anniesland', 'Jordanhill',
      'Scotstoun', 'Whiteinch', 'Yoker', 'Drumchapel',
      'Easterhouse', 'Baillieston', 'Mount Vernon', 'Carmyle'
    ],
    caseStudies: [
      {
        name: 'West End Electrical Services',
        location: 'Hillhead',
        trade: 'Electrician',
        result: 'Fully booked for 2 months ahead',
        quote: 'From struggling to find work to turning jobs away. The website changed everything for us.'
      },
      {
        name: 'Glasgow 24/7 Plumbing',
        location: 'Partick',
        trade: 'Plumber',
        result: '£300k revenue in first year',
        quote: 'Built Proper understood Glasgow\'s market perfectly. Now we\'re the top emergency plumbers in the city.'
      },
      {
        name: 'Clyde Construction',
        location: 'Merchant City',
        trade: 'Builder',
        result: '28 commercial contracts secured',
        quote: 'The professional website helped us break into Glasgow\'s commercial renovation market.'
      }
    ],
    seoContent: {
      intro: `Glasgow's trade industry is thriving, but standing out in Scotland's largest city requires more than 
        traditional advertising. With thousands of tradesmen competing for work across Greater Glasgow, a professional 
        online presence is essential. We build custom websites that help Glasgow trades dominate local searches, 
        attract better customers, and grow their business. No WordPress, no templates - just proper bespoke development.`,
      
      whyCustom: `Glasgow customers do their homework. They search online, compare options, and choose tradesmen who 
        look professional and trustworthy. A custom website sets you apart from the competition and helps you win 
        work in Glasgow's most profitable areas - from the affluent West End to the regenerating Merchant City. 
        Our hand-coded websites load lightning fast, work perfectly on mobile, and are optimised to convert 
        Glasgow visitors into paying customers.`,
      
      localSeo: `From "emergency electrician Glasgow" to "plumber near me G12", we'll make sure you dominate local 
        search results. Our Glasgow-specific SEO strategies understand the city's unique geography - from the 
        West End to the South Side, city centre to the suburbs. We optimise for Glasgow postcodes (G1-G78), 
        ensuring you appear when local customers search for your trade in their area.`
    }
  };

  return <LocationPageTemplate data={glasgowData} />;
};

export default GlasgowPage;
