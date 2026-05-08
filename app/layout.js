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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'P5 Marketing | A Senior Marketing Team for Owner-Operators',
    template: '%s | P5 Marketing',
  },
  description: 'Senior marketing team for owner-operators of $1M–$5M service businesses. SEO, paid, content, and the ID Suite — one plan, one team, one number that matters.',
  metadataBase: new URL('https://p5marketing.com'),
  applicationName: 'P5 Marketing',
  authors: [{ name: 'P5 Marketing', url: 'https://p5marketing.com' }],
  creator: 'P5 Marketing',
  publisher: 'P5 Marketing',
  keywords: [
    'marketing agency for owner-operators',
    'marketing for high-trust businesses',
    'intent data marketing',
    'visitor identification',
    'wedding venue marketing',
    'plastic surgery marketing',
    'law firm marketing',
    'SEO and GEO',
    'ID Suite',
    'IntentID',
    'VisitorID',
    'InboxID',
  ],
  openGraph: {
    title: 'P5 Marketing | A Senior Marketing Team for Owner-Operators',
    description: 'You run your business. We run your marketing. Senior team for owner-operators of $1M–$5M service businesses, backed by the ID Suite — visibility no other agency has.',
    url: 'https://p5marketing.com',
    siteName: 'P5 Marketing',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'P5 Marketing — You Run Your Business. We Run Your Marketing.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'P5 Marketing | A Senior Marketing Team for Owner-Operators',
    description: 'You run your business. We run your marketing. Senior team for owner-operators of $1M–$5M service businesses.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${spaceMono.variable}`}>
      <head>
        {/* Resource hints — open the network handshake early for the third-party scripts that fire later */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" />
        <link rel="preconnect" href="https://cdn.idpixel.app" crossOrigin="" />
        <link rel="preconnect" href="https://analytics.ahrefs.com" crossOrigin="" />
        {/* Preload the header logo — it ships with fetchpriority="high" but a preload makes it discoverable before the body parser reaches it */}
        <link rel="preload" as="image" href="/p5-logo-sm.webp" type="image/webp" fetchPriority="high" />
        {/* Theme color so the browser chrome on Android tints to the brand */}
        <meta name="theme-color" content="#0a0e14" />
        <meta name="color-scheme" content="dark" />

        {/* Google Analytics — interaction-first lazy load.
            Loads gtag.js on the first user interaction (scroll, click, mousemove,
            touch, key) or after 10s idle as a fallback. Bouncers who leave without
            interacting (~30% of typical traffic) never download the ~172 KB GA4
            payload, removing it from the unused-JS Lighthouse opportunity entirely
            for those sessions. Engaged users still get tracked — pageview fires
            within milliseconds of their first interaction. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var loaded=false;function load(){if(loaded)return;loaded=true;var s=document.createElement('script');s.src='https://www.googletagmanager.com/gtag/js?id=G-6122QJKV15';s.async=true;document.head.appendChild(s);window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','G-6122QJKV15',{'send_page_view':true,'transport_type':'beacon'});}var events=['scroll','click','mousemove','touchstart','keydown'];function onFirst(){events.forEach(function(e){window.removeEventListener(e,onFirst,true);});load();}events.forEach(function(e){window.addEventListener(e,onFirst,{once:true,passive:true,capture:true});});setTimeout(load,10000);})();`,
          }}
        />

        {/* Organization schema — single canonical Organization node, used as the @id by all other schema across the site */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://p5marketing.com/#organization",
              "name": "P5 Marketing",
              "alternateName": ["P5 Marketing Agency", "P5"],
              "url": "https://p5marketing.com/",
              "logo": {
                "@type": "ImageObject",
                "url": "https://p5marketing.com/p5-logo.png",
                "width": 512,
                "height": 512
              },
              "image": "https://p5marketing.com/og-image.png",
              "slogan": "You Run Your Business. We Run Your Marketing.",
              "description": "Senior marketing team for owner-operators of $1M–$5M service businesses where one new customer is worth $10K or more. P5 owns strategy and execution end-to-end and brings the ID Suite — visibility no other agency has.",
              "foundingDate": "2001",
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
                "Marketing strategy for owner-operators",
                "Intent data marketing",
                "Visitor identification",
                "Search engine optimization",
                "Generative engine optimization",
                "Paid social advertising",
                "CRM integration and lead routing",
                "Retargeting and behavior-triggered email",
                "Marketing for wedding venues",
                "Marketing for surgical practices",
                "Marketing for legal practices"
              ],
              "sameAs": [
                "https://x.com/p5mark",
                "https://www.youtube.com/@p5mark",
                "https://www.linkedin.com/in/robertdonnell/"
              ]
            })
          }}
        />

        {/* WebSite schema — enables sitelinks search box and ties everything to the Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://p5marketing.com/#website",
              "url": "https://p5marketing.com/",
              "name": "P5 Marketing",
              "description": "A senior marketing team for owner-operators of $1M–$5M service businesses.",
              "publisher": { "@id": "https://p5marketing.com/#organization" },
              "inLanguage": "en-US",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://p5marketing.com/?s={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* ProfessionalService schema — service catalog for the agency itself */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": "https://p5marketing.com/#service",
              "name": "P5 Marketing",
              "url": "https://p5marketing.com/",
              "image": "https://p5marketing.com/og-image.png",
              "logo": "https://p5marketing.com/p5-logo.png",
              "parentOrganization": { "@id": "https://p5marketing.com/#organization" },
              "priceRange": "$$$",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Colleyville",
                "addressRegion": "TX",
                "addressCountry": "US"
              },
              "areaServed": { "@type": "Country", "name": "United States" },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "P5 Marketing Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Full-Function Marketing Engagement",
                      "description": "P5 owns the marketing function for owner-operators: strategy, SEO, paid ads, content, social, conversion, and follow-up — run by a senior team under one plan.",
                      "url": "https://p5marketing.com/how-it-works/"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "SearchID — SEO and GEO Content Engine",
                      "description": "25 years of SEO expertise plus Generative Engine Optimization for ChatGPT, Perplexity, and Claude, paired with content repurposing.",
                      "url": "https://p5marketing.com/the-id-suite/seo-accelerator/"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "IntentID — Intent-Based Audience Building",
                      "description": "Custom audiences of people actively searching for your services, deployed across Meta, Google, X, TikTok, and LinkedIn.",
                      "url": "https://p5marketing.com/the-id-suite/intentid/"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "VisitorID — Visitor Intelligence",
                      "description": "Identifies up to 60% of website visitors by name, email, phone, address, and household income, then scores intent and routes the serious ones to your CRM.",
                      "url": "https://p5marketing.com/the-id-suite/visitorid/"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "InboxID — Conversion Engine",
                      "description": "Same-day retargeting and behavior-triggered email sequences for identified website visitors.",
                      "url": "https://p5marketing.com/the-id-suite/inboxid/"
                    }
                  }
                ]
              },
              "sameAs": [
                "https://x.com/p5mark",
                "https://www.youtube.com/@p5mark",
                "https://www.linkedin.com/in/robertdonnell/"
              ]
            })
          }}
        />

        {/* Identity Pixel — visitor identification (deferred to keep main thread idle on first paint) */}
        <script
          src="https://cdn.idpixel.app/v1/idp-analytics-69bd7936699f22b3db5a92f5.min.js"
          defer
        />
        {/* Ahrefs Analytics */}
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="xXtCQMvwmmbQOYJ1MvaBTw"
          async
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
