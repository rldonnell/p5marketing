const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  '@id': 'https://p5marketing.com/how-it-works/#howto',
  name: 'How a P5 Marketing Engagement Works',
  description:
    'P5 owns the marketing function for owner-operators of $1M–$5M service businesses. Four stages: strategy, execution by a senior team, visibility through the ID Suite, and warm hand-offs into your CRM.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Strategy — First 30 Days',
      text: 'We audit what is working, what is broken, and what is being wasted. We map your real buyers using intent data, identify the highest-leverage moves, and lay out a plan with priorities and timelines. You approve the direction in one meeting. Then we go.',
      url: 'https://p5marketing.com/how-it-works/#strategy',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Execution — Senior Team Running the Play',
      text: 'SEO, paid ads, content, social, conversion optimization, email, CRM, and reporting — built and run by the same senior team that did the strategy work, not handed off to junior staff.',
      url: 'https://p5marketing.com/how-it-works/#execution',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Visibility — The ID Suite',
      text: 'Built into every engagement: who is researching your services, who is on your website, what they engaged with, and how serious they look. Most agencies guess at what is working. We can see it.',
      url: 'https://p5marketing.com/how-it-works/#visibility',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Follow-Up — Hand-Offs to Your Team',
      text: 'The hottest prospects flow into your CRM with context — what they viewed, how often, what they responded to. Same-day retargeting and email keep your business in front of the rest until they are ready.',
      url: 'https://p5marketing.com/how-it-works/#follow-up',
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://p5marketing.com/' },
    { '@type': 'ListItem', position: 2, name: 'How It Works', item: 'https://p5marketing.com/how-it-works/' },
  ],
};

export default function HowItWorksLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
