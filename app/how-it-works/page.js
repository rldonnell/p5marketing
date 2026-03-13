export const metadata = {
  title: 'How Intent Data Marketing Works | P5 Marketing',
  description:
    'See how IntentID, VisitorID, InboxID, and SEO Accelerator work together in a four-stage intent data marketing pipeline for plastic surgeons.',
  openGraph: {
    title: 'How Intent Data Marketing Works | P5 Marketing',
    description:
      'See how IntentID, VisitorID, InboxID, and SEO Accelerator work together in a four-stage intent data marketing pipeline for plastic surgeons.',
  },
};

export default function HowItWorks() {
  const stages = [
    {
      number: 1,
      label: "FIND",
      tool: "IntentID",
      description: "We build a custom audience of people actively searching for your services. IntentID captures real search behavior from the last 48 to 72 hours and creates a list you can deploy across Meta, Google, X, TikTok, and LinkedIn."
    },
    {
      number: 2,
      label: "DRIVE",
      tool: "SEO Accelerator + Ads",
      description: "Your IntentID audience is deployed across two channels for maximum reach. The SEO Accelerator builds organic traffic through SEO-optimized content, GEO for AI search platforms, and content repurposing into social and podcast assets. Paid ads on Google, Meta, LinkedIn, and TikTok deliver immediate reach. Together, they reduce your cost-per-customer and compound over time."
    },
    {
      number: 3,
      label: "IDENTIFY",
      tool: "VisitorID",
      description: "When those prospects visit your website, VisitorID identifies up to 60% of them by name, email, phone, and home address. No form required. No guessing."
    },
    {
      number: 4,
      label: "CONVERT",
      tool: "InboxID",
      description: "Same-day follow-up through retargeting ads and personalized email sequences. Behavior-based sequences re-engage identified visitors while your brand is top of mind."
    }
  ];

  const deliverables = [
    {
      title: "IntentID Audience Segments",
      description: "Custom audiences of people actively researching your services, refreshed weekly and deployed across your ad platforms."
    },
    {
      title: "SEO Accelerator Content Strategy & Roadmap",
      description: "Keyword targets, content calendar, and monthly publishing cadence. SEO and GEO priorities mapped to your buyer\u2019s search behavior."
    },
    {
      title: "SEO Accelerator Social & Podcast Calendar",
      description: "12-month calendar of social posts, promotional content, and podcast episodes\u2014all derived from your core SEO Accelerator content."
    },
    {
      title: "VisitorID Reports",
      description: "Daily or weekly reports showing exactly who visited your website, which pages they viewed, and their full contact information."
    },
    {
      title: "InboxID Follow-Up System",
      description: "Automated retargeting and email sequences triggered by website visits, all running on isolated infrastructure."
    },
    {
      title: "Campaign Dashboard",
      description: "Real-time reporting on impressions, clicks, visitors identified, emails sent, and appointments booked."
    },
    {
      title: "CRM Integration",
      description: "All identified visitors and engaged contacts flow directly into your CRM with tags, segments, and activity history."
    },
    {
      title: "Monthly Strategy Reviews",
      description: "Regular calls to review performance, adjust targeting, and plan next moves."
    }
  ];

  return (
    <main style={{ color: "var(--p5-text)" }}>
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
            How Our Intent Data Marketing System Works
          </h1>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              color: "var(--p5-text-dim)",
              margin: "0"
            }}
          >
            Every campaign follows the same cycle: find the people searching for what you sell, drive them to your site, identify who shows up, and convert them before they disappear.
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
              The Cycle
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
              From Search Intent to Booked Appointment
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
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
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
              Everything That Ships with Your Campaign
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
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
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
            See the Full Cycle in Action
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
            Book a 30-minute demo and we'll walk you through how the SEO Accelerator, IntentID, VisitorID, and InboxID work together with your own data.
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
            Book a Demo
          </a>
        </div>
      </section>
    </main>
  );
}
