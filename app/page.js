export const metadata = {
  alternates: { canonical: '/' },
  title: 'P5 Marketing | The Primary Marketing Agency for Owner-Operated High-Value Service Businesses',
  description:
    "P5 is the primary marketing agency for owner-operators of high-value service businesses, $1M–$5M in revenue, where one customer is worth $10K+ and the buying journey takes weeks. We hold the marketing plan, coordinate paid, ads, PR, and content, bridge to sales, and measure the whole program with anonymous visitor identification and traffic attribution.",
  openGraph: {
    title: 'P5 Marketing | One accountable primary agency, not another vendor',
    description:
      'For owner-operators of high-value service businesses where one new customer pays for the engagement many times over.',
    url: 'https://p5marketing.com/',
    type: 'website',
    siteName: 'P5 Marketing',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'P5 Marketing' }],
  },
};

const PRACTICE_ITEMS = [
  {
    number: '01',
    title: 'The ICP, defined.',
    body: "Who your best customers really are, defined with the rigor most owner-operators have never given it. Demographics, motivations, objections, and the language they use when they search. The foundation everything else is built against.",
  },
  {
    number: '02',
    title: 'Research-driven SEO and GEO content.',
    body: "Proprietary tooling, built in-house, finds what is actually trending in the business's market and worth writing for. The content that follows is built to rank in Google, surface in ChatGPT and Perplexity, and read as a credible voice. P5 hands it off or ships it, whichever serves the plan.",
  },
  {
    number: '03',
    title: 'Vendor coordination across the stack.',
    body: 'Paid media, Google Ads, public relations, and web all work against the same plan. P5 holds the document, runs the cadence, and keeps the priorities aligned. You have one accountable agency at the head of the table, not five disconnected ones.',
  },
  {
    number: '04',
    title: 'Measurement and the feedback loop from sales.',
    body: "Anonymous website visitor identification and traffic attribution, run continuously. P5 closes the loop with the business's front-line conversion process so the plan can see which prospects called, which booked, and which became revenue. That read feeds back in, and the plan changes because the sales data changed.",
  },
];

const VERTICALS = [
  { name: 'Cosmetic & Plastic Surgery', range: '$15K–$60K+ per patient', href: '/markets/plastic-surgeons/' },
  { name: 'Spine & Orthopedic Surgery', range: '$15K–$80K+ per case' },
  { name: 'Wedding Venues', range: '$10K–$40K per booking', href: '/markets/wedding-venues/' },
  { name: 'Roofing & Exterior Contractors', range: '$15K–$80K+ per project' },
  { name: 'HVAC & Mechanical Contractors', range: '$10K–$50K+ per install' },
  { name: 'Luxury Home Renovation', range: '$25K–$150K+ per project' },
  { name: 'Legal Practices', range: '$10K–$70K+ per matter' },
  { name: 'Specialty Medical & Dental', range: '$10K–$35K+ per case' },
  { name: 'Consultants & Professional Services', range: '$10K–$50K per engagement' },
];

export default function Home() {
  const containerStyle = { maxWidth: '1200px', margin: '0 auto', padding: '0 24px' };
  const eyebrow = { fontSize: '12px', fontWeight: '600', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--p5-text-dim)', marginBottom: '20px' };
  const sectionHead = { fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '700', lineHeight: '1.1', letterSpacing: '-0.5px', color: 'var(--p5-text)' };
  const body = { fontSize: '17px', lineHeight: '1.6', color: 'var(--p5-text)' };
  const divider = { borderTop: '1px solid var(--p5-surface-border)' };
  const primaryCta = {
    display: 'inline-block',
    backgroundColor: 'var(--p5-accent)',
    color: 'var(--p5-bg-deep)',
    padding: '16px 32px',
    fontSize: '14px',
    fontWeight: '700',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    borderRadius: '4px',
  };
  const ghostCta = {
    display: 'inline-block',
    color: 'var(--p5-text-dim)',
    fontSize: '13px',
    fontWeight: '600',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    paddingBottom: '2px',
    borderBottom: '1px solid transparent',
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--p5-bg-deep)', color: 'var(--p5-text)' }}>
      {/* Section 1: Hero */}
      <section style={{ ...containerStyle, padding: '64px 24px 48px' }}>
        <div style={eyebrow}>The primary marketing agency for owner-operated high-value service businesses</div>
        <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: '700', lineHeight: '1.05', letterSpacing: '-1px', marginBottom: '24px' }}>
          You&rsquo;re the owner.
          <br />
          Somehow you&rsquo;re also the marketing quarterback.
          <br />
          Is it time to own the team again?
        </h1>
        <p style={{ ...body, fontSize: '20px', maxWidth: '720px', marginBottom: '40px' }}>
          P5 is the primary marketing and sales agency for owner-operated high-value service businesses. We hold the plan across your full vendor stack so your team starts moving toward a single goal.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '28px', alignItems: 'center' }}>
          <a href="#plan-of-record" style={primaryCta}>
            Begin a Plan of Record
          </a>
          <a href="#how-we-work" style={ghostCta}>
            ↓ How we work
          </a>
        </div>
      </section>

      {/* Section 2: The problem named */}
      <section id="how-we-work" style={{ ...containerStyle, ...divider, padding: '64px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: '32px' }}>
          <div>
            <div style={{ width: '80px', height: '1px', backgroundColor: 'var(--p5-surface-border)', marginBottom: '24px' }} aria-hidden="true" />
            <div style={eyebrow}>01 &middot; The problem</div>
            <h2 style={{ ...sectionHead, maxWidth: '22ch' }}>
              The problem isn&rsquo;t your marketing. It&rsquo;s that nobody is holding the plan.
            </h2>
          </div>
          <div style={{ maxWidth: '64ch', marginTop: '16px' }}>
            <p style={{ ...body, fontSize: '18px', marginBottom: '20px' }}>
              Most owner-operators end up with five or six vendors. A PR firm. A paid media buyer. A web developer. A social agency. Maybe an SEO consultant. None of them talk to each other.
            </p>
            <p style={{ ...body, fontSize: '18px' }}>
              When no one is holding the plan, the owner becomes the strategist by default. Growth then ceilings out at the owner&rsquo;s personal bandwidth. That is the structural problem, and it doesn&rsquo;t have a tactical fix.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: The model */}
      <section style={{ ...containerStyle, ...divider, padding: '64px 24px' }}>
        <div style={{ maxWidth: '68ch' }}>
          <div style={{ width: '80px', height: '1px', backgroundColor: 'var(--p5-surface-border)', marginBottom: '24px' }} aria-hidden="true" />
          <div style={eyebrow}>02 &middot; The model</div>
          <h2 style={{ ...sectionHead, marginBottom: '32px' }}>
            We build the ICP. We write the plan. We measure the whole program.
          </h2>
          <div style={{ ...body, fontSize: '18px' }}>
            <p style={{ marginBottom: '20px' }}>
              The first work for every business is the ICP. Who your best customers actually are, where they are, and what they need to see before they call. Most owner-operators have never had this done with rigor.
            </p>
            <p style={{ marginBottom: '20px' }}>
              From the ICP we write the plan. A working document, not a deck. It ties together paid media, Google Ads, public relations, web, and the SEO and GEO content P5 ships. One plan that every vendor in the stack works against.
            </p>
            <p style={{ marginBottom: '20px' }}>
              Proprietary research tooling, built in-house, finds what is actually trending in the business&rsquo;s market and worth writing for. The content that follows is built for SEO and GEO. Sometimes P5 ships it. Sometimes your team does. The plan is the through line either way.
            </p>
            <p style={{ marginBottom: '20px' }}>
              Measurement is anonymous website visitor identification and traffic attribution, run continuously. The read tells us which channels are doing the work and which aren&rsquo;t, and when to change direction. Not a separate product. The layer underneath every decision.
            </p>
            <p>
              P5 also runs the bridge from marketing to sales. Visitor identification and attribution close the loop with the business&rsquo;s front-line conversion process. Which prospects called, which booked, which became revenue. That feedback rewrites the plan.
            </p>
          </div>
          <p style={{ ...body, color: 'var(--p5-text-dim)', fontSize: '15px', marginTop: '40px', maxWidth: '60ch' }}>
            What this isn&rsquo;t. P5 is not a fractional CMO. P5 is not an all-in-one agency. P5 is not another vendor for you to manage.
          </p>
          <a
            href="/the-id-suite/"
            style={{
              display: 'inline-block',
              marginTop: '24px',
              color: 'var(--p5-text-dim)',
              fontSize: '13px',
              fontWeight: '600',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              paddingBottom: '2px',
              borderBottom: '1px solid transparent',
            }}
          >
            See the toolkit →
          </a>
        </div>
      </section>

      {/* Section 4: In practice */}
      <section style={{ ...containerStyle, ...divider, padding: '64px 24px' }}>
        <div style={{ marginBottom: '48px' }}>
          <div style={{ width: '80px', height: '1px', backgroundColor: 'var(--p5-surface-border)', marginBottom: '24px' }} aria-hidden="true" />
          <div style={eyebrow}>03 &middot; In practice</div>
          <h2 style={{ ...sectionHead, maxWidth: '24ch' }}>What P5 actually does for an owner-operator.</h2>
        </div>
        <div style={{ borderTop: '1px solid var(--p5-surface-border)' }}>
          {PRACTICE_ITEMS.map(({ number, title, body: itemBody }) => (
            <div
              key={number}
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(80px, 140px) 1fr',
                gap: '24px',
                padding: '40px 0',
                borderBottom: '1px solid var(--p5-surface-border)',
                alignItems: 'baseline',
              }}
            >
              <div style={{ fontSize: 'clamp(56px, 8vw, 96px)', fontWeight: '700', color: 'var(--p5-accent)', lineHeight: '0.9', letterSpacing: '-1px' }}>
                {number}
              </div>
              <div style={{ maxWidth: '56ch' }}>
                <h3 style={{ fontSize: 'clamp(20px, 2vw, 26px)', fontWeight: '700', color: 'var(--p5-text)', marginBottom: '12px', lineHeight: '1.2' }}>
                  {title}
                </h3>
                <p style={{ ...body, fontSize: '16px' }}>{itemBody}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Markets we serve — economics wedge */}
      <section id="markets" style={{ ...divider, backgroundColor: 'var(--p5-bg-surface)' }}>
        <div style={{ ...containerStyle, padding: '64px 24px' }}>
          <div style={{ marginBottom: '40px', maxWidth: '760px' }}>
            <div style={{ width: '80px', height: '1px', backgroundColor: 'var(--p5-accent)', marginBottom: '24px' }} aria-hidden="true" />
            <div style={eyebrow}>04 &middot; Who we work with</div>
            <h2 style={{ ...sectionHead, fontSize: 'clamp(32px, 5vw, 48px)', maxWidth: '20ch', marginBottom: '24px' }}>
              Your industry doesn&rsquo;t matter. Your economics do.
            </h2>
            <p style={{ ...body, fontSize: '18px' }}>
              The buyer journey for a $20K wedding booking, a $35K cosmetic procedure, a $25K legal retainer, and a $60K roof replacement is structurally identical. Discovery. Due diligence. Multiple visits. Comparisons. Weeks of consideration before they call. Same engagement model across all of them.
            </p>
          </div>

          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '28px',
              borderTop: '1px solid var(--p5-surface-border)',
              paddingTop: '40px',
            }}
          >
            {VERTICALS.map(({ name, range, href }) => {
              const inner = (
                <div>
                  <p style={{ fontSize: '17px', fontWeight: '600', color: 'var(--p5-text)', marginBottom: '6px' }}>{name}</p>
                  <p style={{ fontSize: '14px', color: 'var(--p5-text-dim)' }}>{range}</p>
                </div>
              );
              return (
                <li key={name}>
                  {href ? (
                    <a href={href} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </li>
              );
            })}
          </ul>

          <p style={{ ...body, color: 'var(--p5-text-dim)', fontSize: '15px', marginTop: '40px', maxWidth: '60ch' }}>
            The vertical matters less than the economics. If your business fits the profile and you don&rsquo;t see your category above, we should still talk.{' '}
            <a href="/markets/" style={{ color: 'var(--p5-accent)', textDecoration: 'none' }}>
              Full fit profile →
            </a>
          </p>
        </div>
      </section>

      {/* Section 6: Proof / report */}
      <section style={{ ...containerStyle, ...divider, padding: '64px 24px' }}>
        <div style={{ maxWidth: '680px' }}>
          <div style={eyebrow}>05 &middot; Forthcoming</div>
          <h2 style={{ ...sectionHead, marginBottom: '24px' }}>
            The State of High-Ticket Service Marketing 2026
          </h2>
          <p style={{ fontStyle: 'italic', color: 'var(--p5-text-dim)', fontSize: '20px', marginBottom: '24px' }}>
            Our annual benchmark report. Publishing this fall.
          </p>
          <p style={{ ...body, fontSize: '17px', marginBottom: '28px' }}>
            An annual read on what is actually working for owner-operators of high-value service businesses. Pulled from search behavior, on-site identification, and measurement across the businesses P5 works with: wedding venues, luxury contractors, legal, specialty medical and dental, cosmetic surgery. Free to qualified owners.
          </p>
          <a href="/contact/" style={ghostCta}>
            Request the early read →
          </a>
        </div>
      </section>

      {/* Section 7: Plan of Record */}
      <section id="plan-of-record" style={{ ...containerStyle, ...divider, padding: '96px 24px' }}>
        <div style={{ maxWidth: '720px' }}>
          <div style={{ width: '56px', height: '2px', backgroundColor: 'var(--p5-accent)', marginBottom: '32px' }} aria-hidden="true" />
          <div style={eyebrow}>06 &middot; The first step</div>
          <h2 style={{ ...sectionHead, fontSize: 'clamp(32px, 5vw, 52px)', marginBottom: '28px' }}>
            Begin a Plan of Record.
          </h2>
          <div style={{ ...body, fontSize: '18px', marginBottom: '36px' }}>
            <p style={{ marginBottom: '20px' }}>
              A standalone paid diagnostic that produces your written marketing plan. Independent of any ongoing engagement. The plan is the deliverable, and you own it whether or not you continue with P5.
            </p>
            <p>
              What it includes. The ICP, defined for your business. A research read using P5&rsquo;s proprietary tooling. A 90-day priority order that ties paid media, Google Ads, public relations, web, and SEO and GEO content together. The measurement setup using anonymous visitor identification and traffic attribution, including the feedback loop from your front-line conversion process. The written plan, formatted for the owner and leadership team.
            </p>
          </div>
          <a href="mailto:rdonnell@p5marketing.com?subject=Plan%20of%20Record%20diagnostic" style={primaryCta}>
            Begin a Plan of Record
          </a>
        </div>
      </section>

      {/* Section 8: Quiet manifesto */}
      <section style={{ ...containerStyle, ...divider, padding: '64px 24px' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <div style={eyebrow}>07 &middot; Why P5</div>
          <p style={{ ...body, fontSize: '18px', marginBottom: '56px' }}>
            P5 was built because too many owner-operators were carrying their own marketing plan and calling that &ldquo;having an agency.&rdquo; That isn&rsquo;t an agency. That is a vendor list with a project manager who happens to also own the business. P5 is the primary marketing agency for owner-operators who want one accountable plan instead of six disconnected vendors.
          </p>
          <p
            style={{
              fontSize: 'clamp(26px, 4vw, 40px)',
              fontWeight: '700',
              lineHeight: '1.15',
              letterSpacing: '-0.5px',
              color: 'var(--p5-text)',
            }}
          >
            One plan. One agency. One accountable team.
          </p>
        </div>
      </section>
    </div>
  );
}
