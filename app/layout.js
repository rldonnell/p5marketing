import './globals.css';
import { DM_Sans, Space_Mono } from 'next/font/google';
import Header from './Header';
import Footer from './Footer';

/* ââ Self-hosted Google Fonts (eliminates render-blocking request) ââ */
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-space-mono',
});

export const metadata = {
  title: 'Plastic Surgery Marketing Agency | P5 Marketing',
  description: 'Plastic surgery marketing agency specializing in SEO, intent data, and visitor identification. We helped one practice grow from $1M to $3.5M in 18 months.',
  metadataBase: new URL('https://p5marketing.com'),
  openGraph: {
    title: 'Plastic Surgery Marketing Agency | P5 Marketing',
    description: 'Plastic surgery marketing agency specializing in SEO, intent data, and visitor identification. We helped one practice grow from $1M to $3.5M in 18 months.',
    url: 'https://p5marketing.com',
    siteName: 'P5 Marketing',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'P5 Marketing | Plastic Surgery Marketing Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plastic Surgery Marketing Agency | P5 Marketing',
    description: 'Plastic surgery marketing agency specializing in SEO, intent data, and visitor identification. We helped one practice grow from $1M to $3.5M in 18 months.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${spaceMono.variable}`}>
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6122QJKV15" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-6122QJKV15');`,
          }}
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
              "description": "Plastic surgery marketing agency specializing in SEO, intent data, and visitor identification. Full-cycle digital marketing for plastic surgeons, wedding venues, and high-trust businesses.",
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
                "Plastic Surgery Marketing",
                "SEO for Plastic Surgeons",
                "Intent Data Marketing",
                "Visitor Identification",
                "Search Engine Optimization",
                "Generative Engine Optimization",
                "Digital Marketing",
                "Lead Generation",
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
                      "name": "SEO Accelerator",
                      "description": "Organic growth engine combining SEO, GEO, and content repurposing to build compounding organic traffic for high-trust businesses."
                    }
                  },
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
