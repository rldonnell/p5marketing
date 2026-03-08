import './globals.css';
import Footer from './Footer';

export const metadata = {
  title: 'P5 Marketing - Intent Data Marketing for High-Trust Businesses',
  description: 'We find ready-to-buy customers with IntentID, identify website visitors with VisitorID, and convert them with InboxID. Full-cycle marketing for high-trust, high-value businesses.',
  metadataBase: new URL('https://p5marketing.com'),
  openGraph: {
    title: 'P5 Marketing - Turn Marketing Into a Pipeline You Can See, Track, and Close',
    description: 'Intent data marketing agency for high-trust, high-value businesses. IntentID + VisitorID + InboxID.',
    url: 'https://p5marketing.com',
    siteName: 'P5 Marketing',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'P5 Marketing',
    description: 'Intent data marketing for high-trust, high-value businesses.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "P5 Marketing",
              "alternateName": "P5 Marketing Agency",
              "url": "https://p5marketing.com",
              "logo": "https://p5marketing.com/wp-content/uploads/2026/02/cropped-P5-Logo-site-icon-2026-1-100x73.webp",
              "description": "Intent data marketing agency for high-trust, high-value businesses. We find ready-to-buy customers with IntentID, identify website visitors with VisitorID, and convert them with InboxID.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Colleyville",
                "addressRegion": "TX",
                "addressCountry": "US"
              },
              "areaServed": {
                "@type": "Country",
                "name": "United States"
              },
              "knowsAbout": [
                "Intent Data Marketing",
                "Visitor Identification",
                "Lead Generation",
                "Digital Marketing",
                "CRM Integration",
                "Retargeting",
                "Email Marketing",
                "Marketing Automation"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "P5 Marketing Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "IntentID Audience Building",
                      "description": "Custom audiences of people actively searching for your services, deployed across Meta, Google, X, TikTok, and LinkedIn."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "VisitorID Visitor Identification",
                      "description": "Website pixel that identifies up to 60% of visitors by name, email, phone, address, and household income."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "InboxID Conversion Engine",
                      "description": "Same-day follow-up system combining retargeting ads and email sequences for identified website visitors."
                    }
                  }
                ]
              },
              "sameAs": []
            })
          }}
        />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
