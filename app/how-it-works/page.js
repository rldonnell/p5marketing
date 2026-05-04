export const metadata = {
  alternates: {
    canonical: '/how-it-works/',
  },
  title: 'How a P5 Marketing Engagement Works',
  description:
    'How working with P5 actually runs: the senior team, the engagement model, what we own, what you approve, and what lands in your inbox each month.',
  openGraph: {
    title: 'How a P5 Marketing Engagement Works',
    description:
      'How working with P5 actually runs: the senior team, the engagement model, what we own, what you approve, and what lands in your inbox each month.',
    url: 'https://p5marketing.com/how-it-works/',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'P5 Marketing' }],
  },
};

export default function HowItWorks() {
  const stages = [
    {
      number: 1,
      label: "STRATEGY",
      tool: "First 30 Days",
      description: "We audit what's working, what's broken, and what's being wasted in your current marketing. We map your real buyers using intent data, identify the highest-leverage moves, and lay out a plan with priorities and timelines. You approve the direction in one meeting. Then we go."
    },
    {
      number: 2,
      label: "EXECUTION",
      tool: "Senior Team Running the Play",
      description: "SEO, paid ads, content, social, conversion optimization, email, CRM, reporting — built and run by the same senior team that did the strategy work. Not handed off to junior staff between us and you. The work ships, the numbers move, and you read the monthly summary instead of running the campaign."
    },
    {
      number: 3,
      label: "VISIBILITY",
      tool: "The ID Suite",
      description: "Built into your engagement: who's researching your services, who's on your website, what they engaged with, how serious they look. Most agencies guess at what's working. We can see it. That visibility shapes every decision we make for you."
    },
    {
      number: 4,
      label: "FOLLOW-UP",
      tool: "Hand-Offs to Your Team",
      description: "The hottest prospects flow into your CRM with context — what they viewed, how often, what they responded to. Your front desk or sales team picks up the phone with a real reason to call. Same-day retargeting and email keep your business in front of the rest until they're ready."
    }
  ];

  const deliverables = [
    {
      title: "Strategic Plan and Quarterly Roadmap",
      description: "A document you can read, approve, and share with your team. Priorities, timelines, what we're doing, what we're killing, and what success looks like at 30, 60, 90, and 365 days."
    },
    {
      title: "Intent Audiences for Your Ad Platforms",
      description: "Custom audiences of in-market buyers loaded into Facebook and LinkedIn — the two platforms where our clients' buyers actually convert. Refreshed weekly. Your ad budget stops chasing demographics and starts reaching real prospects."
    },
    {
      title: "SEO and GEO Content That Earns Its Traffic",
      description: "Service-specific landing pages, pillar content, and AI-search optimization (ChatGPT, Claude, Perplexity). 25 years of search expertise applied to your vertical and your terms."
    },
    {
      title: "Social and Podcast Calendar",
      description: "12-month plan of social posts, promotional content, and podcast episodes — all derived from your core messaging so nothing has to be reinvented for each platform."
    },
    {
      title: "Visitor Intelligence Dashboard",
      description: "Secure dashboard showing who's engaging with your site, what they're researching, and how serious they look. Configured for your vertical's compliance requirements."
    },
    {
      title: "Behavior-Triggered Follow-Up",
      description: "Same-day retargeting and email sequences tailored to what each prospect did on your site. Keeps you top of mind while interest is hot. Senior strategist reviews and tunes the sequences monthly."
    },
    {
      title: "CRM Integration",
      description: "Engaged prospects flow into your CRM with tags, segments, and behavior history. Your team picks up the phone with context, not cold lists."
    },
    {
      title: "Monthly Working Sessions",
      description: "One hour with a senior P5 strategist. Not a status update. We review what worked, what didn't, what we're changing, and what's next. You leave with clear direction, not more tasks."
    }
  ];

  return (
    <main style={{ color: "var(--p5-text)" }}>
      {/* BreadcrumbList structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: '{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://p5marketing.com/"}, {"@type": "ListItem", "position": 2, "name": "How It Works", "item": "https://p5marketing.com/how-it-works/"}]}'
        }}
      />
      {/* HERO SECTION */}
      <section
        style={{
          background: "var(--p5-bg-deep)",
          padding: "80px 24px",
          textAlign: "center",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)"
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "13px",
              fontFamily: "Space Mono",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--p5-accent)",
              marginBottom: "16px",
              margin: "0 0 16px 0"
            }}
          >
            How It Works
          </p>
          <h1
            style={{
              fontSize: "48px",
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: "24px",
              margin: "0 0 24px 0",
              fontFamily: "DM Sans"
            }}
          >
            How a P5 Engagement Actually Runs
          </h1>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              color: "var(--p5-text-dim)",
              margin: "0"
            }}
          >
            We own the marketing function. You approve direction, we run the play, and you read the monthly summary. No briefs you have to write. No weekly status calls. No junior account managers between you and the work.
          </p>
        </div>
      </section>

      {/* FOUR-STAGE CYCLE SECTION */}
      <section
        style={{
          background: "var(--p5-bg-surface)",
          padding: "80px 24px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)"
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "60px" }}>
            <p
              style={{
                fontSize: "13px",
                fontFamily: "Space Mono",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--p5-accent)",
                marginBottom: "8px",
                margin: "0 0 8px 0"
              }}
            >
              The Engagement
            </p>
            <h2
              style={{
                fontSize: "36px",
                fontWeight: 700,
                lineHeight: 1.2,
                margin: "0",
                fontFamily: "DM Sans"
              }}
            >
              Four Phases. One Senior Team. Your Marketing Function, Owned.
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "32px"
            }}
          >
            {stages.map((stage) => (
              <div
                key={stage.number}
                style={{
                  background: 'var(--p5-bg-surface)',
                  backdropFilter: 'var(--p5-glass-blur)',
                  WebkitBackdropFilter: 'var(--p5-glass-blur)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 20px rgba(0,0,0,0.1)',
                  border: '1px solid var(--p5-surface-border)',
                  borderRadius: "var(--p5-radius)",
                  padding: "40px 32px",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <div style={{ marginBottom: "24px" }}>
                  <p
                    style={{
                      fontSize: "13px",
                      fontFamily: "Space Mono",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--p5-text-dim)",
                      margin: "0 0 12px 0"
                    }}
                  >
                    Stage {stage.number}
                  </p>
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: 700,
                      margin: "0 0 4px 0",
                      fontFamily: "DM Sans"
                    }}
                  >
                    {stage.label}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "var(--p5-accent)",
                      fontWeight: 600,
                      margin: "0",
                      fontFamily: "DM Sans"
                    }}
                  >
                    {stage.tool}
                  </p>
                </div>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.6,
                    color: "var(--p5-text-dim)",
                    margin: "0"
                  }}
                >
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES SECTION */}
      <section
        style={{
          background: "var(--p5-bg-deep)",
          padding: "80px 24px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)"
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "60px" }}>
            <p
              style={{
                fontSize: "13px",
                fontFamily: "Space Mono",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--p5-accent)",
                marginBottom: "8px",
                margin: "0 0 8px 0"
              }}
            >
              What You Get
            </p>
            <h2
              style={{
                fontSize: "36px",
                fontWeight: 700,
                lineHeight: 1.2,
                margin: "0",
                fontFamily: "DM Sans"
              }}
            >
              What Lands in Your Inbox Every Month
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "32px"
            }}
          >
            {deliverables.map((item, index) => (
              <div
                key={index}
                style={{
                  background: 'var(--p5-bg-surface)',
                  backdropFilter: 'var(--p5-glass-blur)',
                  WebkitBackdropFilter: 'var(--p5-glass-blur)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 20px rgba(0,0,0,0.1)',
                  border: '1px solid var(--p5-surface-border)',
                  borderRadius: "var(--p5-radius)",
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    marginBottom: "12px",
                    margin: "0 0 12px 0",
                    fontFamily: "DM Sans"
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.6,
                    color: "var(--p5-text-dim)",
                    margin: "0"
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        style={{
          background: "var(--p5-bg-surface)",
          padding: "80px 24px",
          textAlign: "center"
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "32px",
              fontWeight: 700,
              marginBottom: "16px",
              margin: "0 0 16px 0",
              fontFamily: "DM Sans"
            }}
          >
            Want to See What This Looks Like for Your Business?
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.6,
              color: "var(--p5-text-dim)",
              marginBottom: "32px",
              margin: "0 0 32px 0"
            }}
          >
            30 minutes with a senior strategist. No pitch. We&rsquo;ll ask honest questions about your business and tell you whether P5 is the right call.
          </p>
          <a
            href="/contact/"
            style={{
              display: "inline-block",
              background: "var(--p5-accent)",
              color: "var(--p5-bg-deep)",
              padding: "14px 32px",
              borderRadius: "var(--p5-radius)",
              fontSize: "15px",
              fontWeight: 600,
              textDecoration: "none",
              fontFamily: "DM Sans",
              transition: "all 0.3s ease",
              border: "none",
              cursor: "pointer"
            }}
          >
            Start a Fit Conversation
          </a>
        </div>
      </section>
    </main>
  );
}
