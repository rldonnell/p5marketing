const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://p5marketing.com/the-id-suite/inboxid/#service',
  name: 'InboxID™',
  serviceType: 'Behavior-Triggered Follow-Up',
  provider: { '@id': 'https://p5marketing.com/#organization' },
  brand: { '@type': 'Organization', name: 'P5 Marketing' },
  description:
    'Same-day retargeting and behavior-triggered email sequences for identified website visitors, with warm hand-offs into your CRM with context — not cold lists. Built into every P5 engagement.',
  url: 'https://p5marketing.com/the-id-suite/inboxid/',
  category: 'Marketing Technology',
  areaServed: { '@type': 'Country', name: 'United States' },
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'USD',
    url: 'https://p5marketing.com/contact/',
  },
};

export default function InboxIDLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {children}
    </>
  );
}
