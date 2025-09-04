import React from 'react';
import LocationPageTemplate from '../components/LocationPageTemplate';

const BristolPage = () => {
  const bristolData = {
    city: 'Bristol',
    county: 'South West',
    stats: {
      projects: '60+',
      roi: '430%',
      ranking: 'Top 3',
      clients: '75+'
    },
    areas: [
      'Bristol City Centre', 'Clifton', 'Redland', 'Cotham',
      'Bishopston', 'Horfield', 'Henleaze', 'Westbury Park',
      'Stoke Bishop', 'Sneyd Park', 'Sea Mills', 'Shirehampton',
      'Avonmouth', 'Lawrence Weston', 'Henbury', 'Southmead',
      'Filton', 'Patchway', 'Bradley Stoke', 'Stoke Gifford',
      'Frenchay', 'Downend', 'Fishponds', 'Eastville',
      'St George', 'Redfield', 'Barton Hill', 'St Pauls',
      'Montpelier', 'Kingsdown', 'Harbourside', 'Hotwells',
      'Southville', 'Bedminster', 'Ashton', 'Long Ashton',
      'Leigh Woods', 'Abbots Leigh', 'Portishead', 'Clevedon'
    ],
    caseStudies: [
      {
        name: 'Bristol Electrical Excellence',
        location: 'Clifton',
        trade: 'Electrician',
        result: 'Booked solid for 6 weeks ahead',
        quote: 'The website Built Proper created gets us the high-end Clifton and Redland jobs we wanted.'
      },
      {
        name: 'Harbourside Plumbing',
        location: 'Hotwells',
        trade: 'Plumber',
        result: '£200k in bathroom renovations',
        quote: 'Professional website = professional clients. We now work exclusively on premium properties.'
      },
      {
        name: 'West Country Builders',
        location: 'Bishopston',
        trade: 'Builder',
        result: '18 loft conversions in 9 months',
        quote: 'Our website showcases our work perfectly. Customers choose us over bigger firms every time.'
      }
    ],
    seoContent: {
      intro: `Bristol's creative and tech-savvy population expects modern, professional services - including from 
        their tradesmen. With the city's property market booming and renovation projects everywhere, there's 
        plenty of work available. But you need to stand out online to get it. We build custom websites that 
        help Bristol trades dominate local searches, attract quality customers, and grow their business.`,
      
      whyCustom: `Bristol residents do their research. They're environmentally conscious, value quality, and choose 
        tradesmen who align with their values. A custom website helps you appeal to Bristol's unique market - 
        from eco-friendly solutions for Clifton to affordable services for students in Stoke Bishop. Our 
        bespoke development approach means fast loading times, perfect mobile experience, and conversion 
        optimisation that turns browsers into bookings.`,
      
      localSeo: `From "electrician BS1" to "emergency plumber Clifton", we'll ensure you top Bristol search results. 
        Our Bristol-specific SEO strategies understand the city's diverse neighbourhoods - from the harbourside 
        developments to the Victorian suburbs, student areas to family districts. We optimise for Bristol 
        postcodes (BS1-BS41), ensuring you appear when local customers search for your services.`
    }
  };

  return <LocationPageTemplate data={bristolData} />;
};

export default BristolPage;
