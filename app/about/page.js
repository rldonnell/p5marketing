export const metadata = {
  alternates: {
    canonical: '/about/',
  },
  title: 'About P5 Marketing | A Senior Team for Owner-Operators',
  description:
    'Meet the senior team behind P5 Marketing. We run the marketing function for owner-operators of $1M-$5M service businesses who would rather hand it off than manage it.',
  openGraph: {
    title: 'About P5 Marketing | A Senior Team for Owner-Operators',
    description:
      'Meet the senior team behind P5 Marketing. We run the marketing function for owner-operators of $1M-$5M service businesses who would rather hand it off than manage it.',
    url: 'https://p5marketing.com/about/',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'P5 Marketing' }],
  },
};

export default function About() {
  const teamMembers = [
    {
      name: "Robert Donnell",
      role: "Co-Founder, Strategy & Operations",
      bio: "Robert leads strategy, client relationships, and the overall direction of P5. 25 years building marketing engines for owner-operated service businesses. He architected the ID Suite (IntentID, VisitorID, InboxID, SearchID) and personally owns the senior strategic work for every client account.",
    },
    {
      name: "Irene Donnell",
      role: "Marketing — Social Media, SEO & AI Optimization",
      bio: "Irene leads P5 Marketing\u2019s digital growth strategy across social media, SEO, and AI optimization. Her work increases visibility, attracts qualified leads, and converts attention into measurable growth.",
    },
    {
      name: "Camilo Contreras",
      role: "Lead Developer",
      bio: "Camilo builds the technical infrastructure behind every campaign — landing pages, CRM integrations, tracking systems, and automation workflows. If it touches code, Camilo built it.",
    },
    {
      name: "Arlet Gutierrez",
      role: "Campaign Operations",
      bio: "Arlet manages day-to-day campaign execution — ad builds, audience uploads, reporting dashboards, and QA. She keeps every moving piece on schedule and on spec.",
    },
    {
      name: "Adrianne Panza",
      role: "Client Success & Onboarding",
      bio: "Adrianne is the first person new clients work with. She handles onboarding, CRM setup, and ongoing communication to make sure every client knows exactly what's happening and what's next.",
    },
    {
      name: "Stephie Althouse, PhD",
      role: "Strategic Advisor, Organizational Clarity & Growth",
      bio: "Dr. Stephie advises P5 and its clients on organizational clarity, strategic positioning, and scalable growth frameworks. She helps leadership teams align their messaging, structure, and go-to-market strategy so that every part of the business communicates with purpose and moves in the same direction.",
    },
    {
      name: "Joely Gardner, PhD",
      role: "Strategic Advisor, Healthcare Marketing",
      bio: "Dr. Joely brings deep expertise in web usability, and regulatory strategy, backed by prior experience at Microsoft, META, and Oracle. She advises on messaging frameworks for medical device, pharmaceutical, and aesthetic practices.",
    },
  ];

  return (
    <main className="p5-main">
      {/* BreadcrumbList structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: '{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://p5marketing.com/"}, {"@type": "ListItem", "position": 2, "name": "About", "item": "https://p5marketing.com/about/"}]}'
        }}
      />
      {/* Person schema — one node per named team member on this page.
          Each Person ties back to the Organization via worksFor, so Google
          treats the team page as a verified roster (E-E-A-T signal). */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": "https://p5marketing.com/about/#robert-donnell",
                "name": "Robert Donnell",
                "jobTitle": "Co-Founder, Strategy & Operations",
                "description": "Leads strategy, client relationships, and the overall direction of P5. 25 years building marketing engines for owner-operated service businesses. Architect of the ID Suite (IntentID, VisitorID, InboxID, SearchID).",
                "url": "https://p5marketing.com/about/",
                "image": "https://p5marketing.com/og-image.png",
                "sameAs": [
                  "https://www.linkedin.com/in/robertdonnell/",
                  "https://x.com/p5mark"
                ],
                "worksFor": { "@id": "https://p5marketing.com/#organization" },
                "knowsAbout": [
                  "Marketing strategy",
                  "Intent data",
                  "Visitor identification",
                  "Search engine optimization",
                  "Generative engine optimization"
                ]
              },
              {
                "@type": "Person",
                "@id": "https://p5marketing.com/about/#irene-donnell",
                "name": "Irene Donnell",
                "jobTitle": "Marketing — Social Media, SEO & AI Optimization",
                "description": "Leads P5 Marketing’s digital growth strategy across social media, SEO, and AI optimization. Her work increases visibility, attracts qualified leads, and converts attention into measurable growth.",
                "worksFor": { "@id": "https://p5marketing.com/#organization" },
                "knowsAbout": ["Social media marketing", "Search engine optimization", "Generative engine optimization"]
              },
              {
                "@type": "Person",
                "@id": "https://p5marketing.com/about/#camilo-contreras",
                "name": "Camilo Contreras",
                "jobTitle": "Lead Developer",
                "description": "Builds the technical infrastructure behind every campaign — landing pages, CRM integrations, tracking systems, and automation workflows.",
                "worksFor": { "@id": "https://p5marketing.com/#organization" },
                "knowsAbout": ["Web development", "CRM integration", "Marketing automation"]
              },
              {
                "@type": "Person",
                "@id": "https://p5marketing.com/about/#arlet-gutierrez",
                "name": "Arlet Gutierrez",
                "jobTitle": "Campaign Operations",
                "description": "Manages day-to-day campaign execution — ad builds, audience uploads, reporting dashboards, and QA.",
                "worksFor": { "@id": "https://p5marketing.com/#organization" },
                "knowsAbout": ["Campaign operations", "Paid media", "Reporting"]
              },
              {
                "@type": "Person",
                "@id": "https://p5marketing.com/about/#adrianne-panza",
                "name": "Adrianne Panza",
                "jobTitle": "Client Success & Onboarding",
                "description": "Handles onboarding, CRM setup, and ongoing communication for new and existing clients.",
                "worksFor": { "@id": "https://p5marketing.com/#organization" },
                "knowsAbout": ["Client success", "CRM onboarding"]
              },
              {
                "@type": "Person",
                "@id": "https://p5marketing.com/about/#stephie-althouse",
                "name": "Stephie Althouse",
                "honorificSuffix": "PhD",
                "jobTitle": "Strategic Advisor — Organizational Clarity & Growth",
                "description": "Advises P5 and its clients on organizational clarity, strategic positioning, and scalable growth frameworks.",
                "worksFor": { "@id": "https://p5marketing.com/#organization" },
                "knowsAbout": ["Organizational strategy", "Strategic positioning", "Growth frameworks"]
              },
              {
                "@type": "Person",
                "@id": "https://p5marketing.com/about/#joely-gardner",
                "name": "Joely Gardner",
                "honorificSuffix": "PhD",
                "jobTitle": "Strategic Advisor — Healthcare Marketing",
                "description": "Brings deep expertise in web usability and regulatory strategy, backed by prior experience at Microsoft, Meta, and Oracle. Advises on messaging frameworks for medical device, pharmaceutical, and aesthetic practices.",
                "worksFor": { "@id": "https://p5marketing.com/#organization" },
                "knowsAbout": ["Healthcare marketing", "Web usability", "Regulatory strategy"]
              }
            ]
          })
        }}
      />
      {/* HERO SECTION */}
      <section
        className="p5-hero"
        style={{
          background: `linear-gradient(135deg, var(--p5-bg-deep) 0%, var(--p5-bg-surface) 100%)`,
          borderBottom: "1px solid rgba(0, 229, 199, 0.1)",
        }}
      >
        <div className="p5-container">
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <span
              className="p5-kicker"
              style={{
                color: "var(--p5-accent)",
                fontSize: "14px",
                fontWeight: "600",
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "16px",
              }}
            >
              About P5 Marketing
            </span>
            <h1
              className="p5-heading"
              style={{
                fontSize: "52px",
                fontWeight: "700",
                lineHeight: "1.2",
                color: "var(--p5-text)",
                marginBottom: "24px",
              }}
            >
              A Senior Team. Twenty-Five Years. One Job: Run Your Marketing.
            </h1>
            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.6",
                color: "var(--p5-text-dim)",
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              P5 Marketing is a senior agency for owner-operators who would rather hand the marketing function to people who&rsquo;ve been doing this for a quarter-century than manage a junior team in-house. We run the strategy, we run the execution, and we built the ID Suite to give our clients visibility no other agency in their market has.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section
        style={{
          padding: "80px 24px",
          background: "var(--p5-bg-deep)",
        }}
      >
        <div className="p5-container">
          <div style={{ maxWidth: "800px", margin: "0 auto 64px" }}>
            <span
              style={{
                color: "var(--p5-accent)",
                fontSize: "14px",
                fontWeight: "600",
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "16px",
              }}
            >
              THE TEAM
            </span>
            <h2
              style={{
                fontSize: "42px",
                fontWeight: "700",
                lineHeight: "1.2",
                color: "var(--p5-text)",
                margin: "0",
              }}
            >
              The People Behind the Pipeline
            </h2>
          </div>

          {/* TEAM GRID */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "32px",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                style={{
                  padding: "32px",
                  background: "var(--p5-bg-surface)",
                  backdropFilter: "var(--p5-glass-blur)",
                  WebkitBackdropFilter: "var(--p5-glass-blur)",
                  border: "1px solid var(--p5-surface-border)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 20px rgba(0,0,0,0.1)",
                  borderRadius: "var(--p5-radius)",
                  transition: "all 0.3s ease",
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "var(--p5-text)",
                    margin: "0 0 4px 0",
                  }}
                >
                  {member.name}
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "var(--p5-accent)",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                    margin: "0 0 16px 0",
                  }}
                >
                  {member.role}
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.6",
                    color: "var(--p5-text-dim)",
                    margin: "0",
                  }}
                >
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        style={{
          padding: "80px 24px",
          background: `linear-gradient(135deg, var(--p5-bg-surface) 0%, var(--p5-bg-deep) 100%)`,
          borderTop: "1px solid rgba(0, 229, 199, 0.1)",
          textAlign: "center",
        }}
      >
        <div className="p5-container">
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "36px",
                fontWeight: "700",
                lineHeight: "1.2",
                color: "var(--p5-text)",
                marginBottom: "16px",
              }}
            >
              Think We Might Be a Fit?
            </h2>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.6",
                color: "var(--p5-text-dim)",
                marginBottom: "32px",
              }}
            >
              30 minutes with a senior strategist. No pitch. We&rsquo;ll ask honest questions about your business and tell you whether P5 is the right call.
            </p>
            <a
              href="https://p5marketing.com/contact/"
              className="p5-btn p5-btn-primary"
              style={{
                display: "inline-block",
                padding: "14px 32px",
                background: "var(--p5-accent)",
                color: "var(--p5-bg-deep)",
                textDecoration: "none",
                fontWeight: "600",
                borderRadius: "var(--p5-radius)",
                transition: "all 0.3s ease",
                fontSize: "15px",
                cursor: "pointer",
              }}
            >
              Start a Fit Conversation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
