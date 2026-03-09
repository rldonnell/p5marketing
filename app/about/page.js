export const metadata = {
  title: 'About Us – P5 Marketing',
  description:
    'Meet the P5 Marketing team. We build full-cycle intent data campaigns for high-trust, high-value businesses — from audience building to visitor identification to conversion.',
  openGraph: {
    title: 'About P5 Marketing',
    description:
      'The team behind IntentID, VisitorID, and InboxID — intent data marketing built for businesses that close real deals.',
  },
};

export default function About() {
  const teamMembers = [
    {
      name: "Robert Donnell",
      role: "Co-Founder, Strategy & Operations",
      bio: "Robert leads the company's go-to-market strategy, product development, and client relationships. He built the IntentID™ and VisitorID™ systems from the ground up and oversees every campaign from architecture to execution.",
    },
    {
      name: "Irene Donnell",
      role: "Marketing — Social Media, SEO & AI Optimization",
      bio: "Irene leads P5 Marketing\u2019s digital growth strategy across social media, SEO, and AI optimization. Her work increases visibility, attracts qualified leads, and converts attention into measurable growth.",
    },
    {
      name: "Camilo Castañeda",
      role: "Lead Developer",
      bio: "Camilo builds the technical infrastructure behind every campaign — landing pages, CRM integrations, tracking systems, and automation workflows. If it touches code, Camilo built it.",
    },
    {
      name: "Arlet Castañeda",
      role: "Campaign Operations",
      bio: "Arlet manages day-to-day campaign execution — ad builds, audience uploads, reporting dashboards, and QA. She keeps every moving piece on schedule and on spec.",
    },
    {
      name: "Adrianne Gonzalez",
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
              We Find Your Next Customer Before They Find You
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
              P5 Marketing is an intent data marketing agency for high-trust, high-value
              businesses. We built IntentID™, VisitorID™, and InboxID™ to find, identify,
              and convert the people already searching for what you sell.
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
                  border: "1px solid rgba(0, 229, 199, 0.1)",
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
              Ready to See the System in Action?
            </h2>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.6",
                color: "var(--p5-text-dim)",
                marginBottom: "32px",
              }}
            >
              Book a 30-minute demo and see how IntentID™, VisitorID™, and InboxID™
              work for your business.
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
              Book a Demo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
