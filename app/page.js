'use client';

import { useEffect } from 'react';
export default function Home() {
  useEffect(() => {
    // FAQ Accordion
    function handleFaqClick(e) {
      var q = e.target.closest('.p5-faq-q');
      if (!q) return;
      var item = q.closest('.p5-faq-item');
      if (!item) return;
      var isOpen = item.classList.contains('p5-open');
      document.querySelectorAll('.p5-faq-item.p5-open').forEach(function (el) {
        el.classList.remove('p5-open');
      });
      if (!isOpen) item.classList.add('p5-open');
    }
    document.addEventListener('click', handleFaqClick);

    // Scroll Animations
    var targets = document.querySelectorAll('.p5-fade-up');
    var observer;
    if (targets.length && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('p5-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
      );
      targets.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      targets.forEach(function (el) {
        el.classList.add('p5-visible');
      });
    }

    // Smooth scroll
    function handleSmoothScroll(e) {
      var link = e.target.closest('a[href*="#"]');
      if (!link) return;
      var href = link.getAttribute('href');
      var hash = href.split('#')[1];
      if (!hash) return;
      var target = document.getElementById(hash);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    document.addEventListener('click', handleSmoothScroll);

    return () => {
      document.removeEventListener('click', handleFaqClick);
      document.removeEventListener('click', handleSmoothScroll);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "What is IntentID and how does it work?", "acceptedAnswer": { "@type": "Answer", "text": "We track what millions of Americans are searching for across the web and social media every day. When someone starts researching the kind of services you offer, we see that activity. We use it to build a custom audience of prospects who are actively looking for what you sell right now. That audience gets loaded into your ad platforms, like Meta, Google, X, TikTok, or LinkedIn, so your ads only show to people who are already looking." } },
                { "@type": "Question", "name": "What is VisitorID and what information do I get?", "acceptedAnswer": { "@type": "Answer", "text": "VisitorID is a pixel that sits on your website and identifies up to 60% of your visitors. For each identified visitor, you can receive their name, email address, phone number, home address, and household income, along with details about what pages they visited and how they behaved on your site." } },
                { "@type": "Question", "name": "What is InboxID and what happens after a visitor is identified?", "acceptedAnswer": { "@type": "Answer", "text": "InboxID is our conversion engine. Within minutes of identification, visitors enter our follow-up system. Depending on your setup, that can include retargeting ads to keep your brand visible, and automated email sequences tailored to the pages they viewed. Their contact information also feeds directly into your CRM so your team can follow up personally." } },
                { "@type": "Question", "name": "Does VisitorID only work on traffic you generate?", "acceptedAnswer": { "@type": "Answer", "text": "No. VisitorID identifies visitors regardless of how they got to your site. Your SEO traffic, your Google Ads, your Meta campaigns, referral traffic, direct visits, all of it. If someone lands on your website, we can identify them." } },
                { "@type": "Question", "name": "Do I need all four services?", "acceptedAnswer": { "@type": "Answer", "text": "The ID Suite is built as a system. IntentID finds your audience. The SEO Accelerator attracts them through organic content. Paid ads accelerate that reach. VisitorID tracks who is interested. InboxID converts them. You could start with one tool, but you will see the real ROI when they work together. Most of our clients use all four within 90 days." } },
                { "@type": "Question", "name": "What does up to 60% mean exactly?", "acceptedAnswer": { "@type": "Answer", "text": "It refers to unique website visitors we can resolve into identifiable profiles. We cap expectations so we can over-deliver. Performance varies based on traffic mix, geography, and volume." } },
                { "@type": "Question", "name": "How fast does visitor identification happen?", "acceptedAnswer": { "@type": "Answer", "text": "Typically in minutes, which means your team can follow up the same day a prospect visits your site." } },
                { "@type": "Question", "name": "Is this U.S. only?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our identification and audience data are designed for U.S. visitors and consumers." } },
                { "@type": "Question", "name": "What kinds of businesses does this work best for?", "acceptedAnswer": { "@type": "Answer", "text": "High-trust, high-ticket businesses where a booked call, tour, or consult is valuable. Wedding venues and plastic surgeons are our primary verticals, but the system works for legal, luxury services, and specialty medical practices." } },
                { "@type": "Question", "name": "Is this compliant?", "acceptedAnswer": { "@type": "Answer", "text": "We support opt-out and suppression handling and implement responsible segmentation so outreach is targeted and measurable. We will align implementation to your needs and applicable U.S. requirements during setup." } },
                { "@type": "Question", "name": "What do we need to get started?", "acceptedAnswer": { "@type": "Answer", "text": "Website access for pixel installation, plus ad account access and your CRM details. Once tracking is installed, most clients can go live quickly." } },
                { "@type": "Question", "name": "What is the SEO Accelerator?", "acceptedAnswer": { "@type": "Answer", "text": "The SEO Accelerator is your organic traffic engine covering SEO, GEO, and content repurposing powered by 25 years of P5 SEO expertise." } },
                { "@type": "Question", "name": "What is GEO?", "acceptedAnswer": { "@type": "Answer", "text": "Generative Engine Optimization (GEO) optimizes your content for AI search platforms like ChatGPT, Claude, and Perplexity." } }
              ]
            })
        }}
      />

      {/* ===== HERO ===== */}
      <section className="p5-hero">
        <div className="p5-wrap">
          <div className="p5-hero-grid">
            <div className="p5-hero-copy p5-fade-up">
              <img src="/images/p5-marketing-logo-mark.svg" alt="P5 Marketing agency logo mark" width="60" height="60" style={{ marginBottom: '1rem' }} />
              <p className="p5-kicker">Colleyville, TX &middot; U.S. Only &middot; High-Trust, High-Value Businesses</p>
              <h1>Plastic Surgery Marketing That Builds a Pipeline You Can See, Track, and Close</h1>
              <p className="p5-sub">We find people actively searching for your services. We drive them to your site. We identify them by name. And we follow up until they convert. <strong>One system. Full visibility.</strong> Built for <em>plastic surgeons</em> and high-trust businesses.</p>
              <div className="p5-cta-row">
                <a href="/contact-us/" className="p5-btn p5-btn-primary">Book a Demo</a>
                <a href="#cycle" className="p5-btn p5-btn-ghost">See the Full Cycle</a>
              </div>
            </div>
            <div className="p5-hero-illus p5-fade-up p5-delay-1">
              <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '580px', margin: '0 auto', display: 'block' }}>
                <circle cx="200" cy="200" r="160" stroke="#00e5c7" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.3" />
                <circle cx="200" cy="48" r="40" fill="#0d1420" stroke="#00e5c7" strokeWidth="2" />
                <text x="200" y="44" textAnchor="middle" fill="#00e5c7" fontSize="13" fontFamily="Space Mono, monospace" fontWeight="700">FIND</text>
                <text x="200" y="59" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="DM Sans, sans-serif">IntentID</text>
                <circle cx="352" cy="200" r="40" fill="#0d1420" stroke="#7b61ff" strokeWidth="2" />
                <text x="352" y="196" textAnchor="middle" fill="#7b61ff" fontSize="13" fontFamily="Space Mono, monospace" fontWeight="700">DRIVE</text>
                <text x="352" y="211" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="DM Sans, sans-serif">SEO Accelerator + Ads</text>
                <circle cx="200" cy="352" r="40" fill="#0d1420" stroke="#00e5c7" strokeWidth="2" />
                <text x="200" y="348" textAnchor="middle" fill="#00e5c7" fontSize="13" fontFamily="Space Mono, monospace" fontWeight="700">IDENTIFY</text>
                <text x="200" y="363" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="DM Sans, sans-serif">VisitorID</text>
                <circle cx="48" cy="200" r="40" fill="#0d1420" stroke="#7b61ff" strokeWidth="2" />
                <text x="48" y="196" textAnchor="middle" fill="#7b61ff" fontSize="13" fontFamily="Space Mono, monospace" fontWeight="700">CONVERT</text>
                <text x="48" y="211" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="DM Sans, sans-serif">InboxID</text>
                <path d="M230 55 L315 170" stroke="#00e5c7" strokeWidth="1.5" opacity="0.5" markerEnd="url(#arr)" />
                <path d="M345 235 L230 340" stroke="#7b61ff" strokeWidth="1.5" opacity="0.5" markerEnd="url(#arr2)" />
                <path d="M170 345 L85 230" stroke="#00e5c7" strokeWidth="1.5" opacity="0.5" markerEnd="url(#arr)" />
                <path d="M55 165 L170 60" stroke="#7b61ff" strokeWidth="1.5" opacity="0.5" markerEnd="url(#arr2)" />
                <defs>
                  <marker id="arr" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
                    <path d="M0 0 L8 4 L0 8" fill="none" stroke="#00e5c7" strokeWidth="1.5" />
                  </marker>
                  <marker id="arr2" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
                    <path d="M0 0 L8 4 L0 8" fill="none" stroke="#7b61ff" strokeWidth="1.5" />
                  </marker>
                </defs>
                <text x="200" y="181" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="DM Sans, sans-serif" fontWeight="400">Other agencies</text>
                <text x="200" y="196" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="DM Sans, sans-serif" fontWeight="400">give you pieces.</text>
                <text x="200" y="215" textAnchor="middle" fill="#00e5c7" fontSize="12" fontFamily="DM Sans, sans-serif" fontWeight="700">We give you</text>
                <text x="200" y="230" textAnchor="middle" fill="#00e5c7" fontSize="12" fontFamily="DM Sans, sans-serif" fontWeight="700">the full cycle.</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STAT BAR ===== */}
      <section className="p5-stat-bar p5-fade-up">
        <div className="p5-wrap" style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', textAlign: 'center' }}>
          <div className="p5-stat">
            <span className="p5-stat-num">60%</span>
            <span className="p5-stat-lbl">Website Visitors Identified</span>
          </div>
          <div className="p5-stat">
            <span className="p5-stat-num">Same Day</span>
            <span className="p5-stat-lbl">Follow-Up Speed</span>
          </div>
          <div className="p5-stat">
            <span className="p5-stat-num">4 Stages</span>
            <span className="p5-stat-lbl">Full-Cycle System</span>
          </div>
          <div className="p5-stat">
            <span className="p5-stat-num">25 Yrs</span>
            <span className="p5-stat-lbl">SEO Legacy</span>
          </div>
        </div>
      </section>


      {/* ===== TABLE OF CONTENTS ===== */}
      <nav className="p5-wrap p5-fade-up" id="toc" style={{ maxWidth: '680px', margin: '0 auto', padding: '2rem 1.5rem' }}>
        <h2 className="p5-section-title" style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>What You Will Find on This Page</h2>
        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '.5rem' }}>
          <li><a href="#pillars" style={{ color: 'var(--p5-accent)', textDecoration: 'none' }}>→ The Patient Acquisition System</a></li>
          <li><a href="#cycle" style={{ color: 'var(--p5-accent)', textDecoration: 'none' }}>→ How the Marketing Cycle Works</a></li>
          <li><a href="#strategies" style={{ color: 'var(--p5-accent)', textDecoration: 'none' }}>→ Plastic Surgery Marketing Strategies</a></li>
          <li><a href="#why-p5" style={{ color: 'var(--p5-accent)', textDecoration: 'none' }}>→ Why Plastic Surgeons Choose P5</a></li>
          <li><a href="#faq" style={{ color: 'var(--p5-accent)', textDecoration: 'none' }}>→ Frequently Asked Questions</a></li>
          <li><a href="#pipeline-audit" style={{ color: 'var(--p5-accent)', textDecoration: 'none' }}>→ Get a Free Pipeline Audit</a></li>
        </ul>
      </nav>

      {/* ===== THREE PILLARS ===== */}
      <section className="p5-wrap" id="pillars">
        <p className="p5-section-label p5-fade-up">The System</p>
        <h2 className="p5-section-title p5-fade-up">The Marketing System That Finds, Identifies, and Converts Your Next Patients</h2>
        <p className="p5-fade-up" style={{ textAlign: 'center', color: 'var(--p5-text-dim)', maxWidth: '640px', margin: '0 auto 2.5rem' }}>The SEO Accelerator pulls qualified traffic from organic search to your plastic surgery website. <em>The ID&nbsp;Suite</em> converts that traffic into real patients for your practice.</p>
        <div className="p5-paradigm-grid">
          <div className="p5-p-card p5-fade-up">
            <span className="p5-num">01</span>
            <h3>IntentID&trade;: Find Them</h3>
            <p>We track what millions of Americans are searching for across the web and social media every day. We use that data to build a <strong>custom audience of patients</strong> actively looking for plastic surgery procedures right now. Then we deploy that audience into your ad platforms: Meta, Google, X, TikTok, LinkedIn. Your ads reach <em>ready-to-buy patients</em> instead of anonymous visitors. Better leads. Lower costs. Less waste for your practice.</p>
          </div>
          <div className="p5-p-card p5-fade-up p5-delay-1">
            <span className="p5-num">02</span>
            <h3>VisitorID&trade;: Identify Them</h3>
            <p>Our pixel identifies up to 60% of the patients who visit your plastic surgery website and gives you their name, email, phone number, home address, and household income. It works on all your traffic: your SEO, your Google Ads, our intent audiences, referrals—everything. Minutes, not days. U.S. only.</p>
          </div>
          <div className="p5-p-card p5-fade-up p5-delay-2">
            <span className="p5-num">03</span>
            <h3>InboxID&trade;: Convert Them</h3>
            <p>Identification without follow-up is a wasted lead. Our post-visit system triggers same-day patient outreach: retargeting ads to stay visible and email sequences tailored to the procedures they viewed on your site. Their data flows into your CRM so your team knows exactly which patients to call and why.</p>
          </div>
        </div>
        <div className="p5-fade-up" style={{ maxWidth: '680px', margin: '2rem auto 0', textAlign: 'center' }}>
          <p style={{ color: 'var(--p5-text-dim)', marginBottom: '.75rem' }}>Key benefits for plastic surgery practices:</p>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '.5rem 1.5rem', color: 'var(--p5-text-dim)', fontSize: '.9rem' }}>
            <li>✓ More booked consultations</li>
            <li>✓ Lower patient acquisition cost</li>
            <li>✓ Full visibility into your marketing results</li>
            <li>✓ Same-day follow-up with identified visitors</li>
          </ul>
        </div>
      </section>

      {/* ===== FOUR-STAGE CYCLE ===== */}
      <section className="p5-wrap" id="cycle">
        <p className="p5-section-label p5-fade-up">How It Works</p>
        <h2 className="p5-section-title p5-fade-up">How Our Cosmetic Surgery Marketing Cycle Works</h2>
        <div className="p5-hiw-detail">
          <div className="p5-hiw-block p5-fade-up">
            <span className="p5-hiw-num">1</span>
            <div>
              <p style={{ fontWeight: 700, color: 'var(--p5-text)', fontSize: '1.1rem', marginBottom: '.5rem' }}>Build Your Audience</p>
              <p>IntentID&trade; finds prospects actively researching procedures across the web. We build a custom audience of potential patients and load it into your ad platforms. Your marketing budget goes to ready-to-buy patients instead of broad, untargeted traffic.</p>
            </div>
          </div>
          <div className="p5-hiw-block p5-fade-up p5-delay-1">
            <span className="p5-hiw-num">2</span>
            <div>
              <p style={{ fontWeight: 700, color: 'var(--p5-text)', fontSize: '1.1rem', marginBottom: '.5rem' }}>Drive Qualified Traffic</p>
              <p>Your IntentID audience is monetized through two parallel channels: organic content and paid advertising.</p>
              <div style={{ marginTop: '1.25rem', paddingLeft: '1.25rem', borderLeft: '3px solid var(--p5-accent)' }}>
                <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.05em', color: 'var(--p5-text)', marginBottom: '.5rem' }}>SEO Accelerator: Organic Traffic Foundation</p>
                <p style={{ color: 'var(--p5-text-dim)', lineHeight: 1.7, marginBottom: '1rem' }}>Attract the right buyers through search engines and AI&#8209;powered tools. The SEO Accelerator develops SEO&#8209;focused content pages, optimizes for Generative Engine Optimization&nbsp;(GEO), and builds social, promotional, and podcast content from your core messaging. This organic foundation reduces your paid acquisition cost and compounds over time.</p>
                <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.05em', color: 'var(--p5-text)', marginBottom: '.5rem' }}>Paid Advertising: Immediate Reach</p>
                <p style={{ color: 'var(--p5-text-dim)', lineHeight: 1.7, marginBottom: '1rem' }}>Run your IntentID audience directly into high&#8209;converting paid campaigns on Google, Meta, LinkedIn, and TikTok. Same&#8209;day placement, proven&nbsp;ROI, no organic wait time.</p>
                <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.05em', color: 'var(--p5-text)', marginBottom: '.5rem' }}>Together: The Complete Traffic Strategy</p>
                <p style={{ color: 'var(--p5-text-dim)', lineHeight: 1.7 }}>The <a href="/the-id-suite/seo-accelerator/" style={{ color: 'var(--p5-accent)' }}>SEO Accelerator</a> handles the long&#8209;term organic acquisition game. Paid&nbsp;ads handle the short&#8209;term wins. Your IntentID audience powers both&mdash;one unified data feed, two traffic channels, exponential reach.</p>
              </div>
            </div>
          </div>
          <div className="p5-hiw-block p5-fade-up p5-delay-2">
            <span className="p5-hiw-num">3</span>
            <div>
              <p style={{ fontWeight: 700, color: 'var(--p5-text)', fontSize: '1.1rem', marginBottom: '.5rem' }}>Identify Your Visitors</p>
              <p>Our pixel resolves up to 60% of your website visitors into full contact profiles—name, email, phone, address, household income. Delivered in minutes, not days. Works on all your traffic regardless of the source, giving your plastic surgery practice complete visibility into who is considering your services.</p>
            </div>
          </div>
          <div className="p5-hiw-block p5-fade-up p5-delay-3">
            <span className="p5-hiw-num">4</span>
            <div>
              <p style={{ fontWeight: 700, color: 'var(--p5-text)', fontSize: '1.1rem', marginBottom: '.5rem' }}>Convert with Follow-Up</p>
              <p>Same-day retargeting ads and email sequences keep your plastic surgery practice in front of identified patients. Their information feeds your CRM. Your team closes warm leads instead of chasing cold prospects who are disengaged—turning website visitors into booked consultations.</p>
            </div>
          </div>
        </div>
        <p className="p5-fade-up" style={{ textAlign: 'center', color: 'var(--p5-accent)', marginTop: '2rem', fontWeight: 500 }}>Stage 4 feeds Stage 1. Every conversion makes your plastic surgery marketing audiences smarter. The system gets better the longer it runs.</p>
      </section>

      {/* ===== DELIVERABLES ===== */}
      <section className="p5-wrap">
        <p className="p5-section-label p5-fade-up">Deliverables</p>
        <h2 className="p5-section-title p5-fade-up">What We Deliver for Your Practice</h2>
        <div className="p5-del-grid">
          <div className="p5-del-card p5-fade-up">
            <div className="p5-del-icon"><img src="/icons/intentid-audience.svg" alt="IntentID audience building for surgical practices" width="40" height="40" loading="lazy" /></div>
            <p style={{ fontWeight: 700, color: 'var(--p5-text)', fontSize: '1.05rem', marginBottom: '.5rem' }}>IntentID&trade; Audience Building</p>
            <p>Custom audiences of <strong>patients actively searching for plastic surgery procedures</strong>, built from real-time intent data and deployed into Meta, Google, X, TikTok, LinkedIn, and more. Better leads at lower cost.</p>
          </div>
          <div className="p5-del-card p5-fade-up p5-delay-1">
            <div className="p5-del-icon"><img src="/icons/seo-accelerator-content.svg" alt="SEO Accelerator content marketing for plastic surgeons" width="40" height="40" loading="lazy" /></div>
            <p style={{ fontWeight: 700, color: 'var(--p5-text)', fontSize: '1.05rem', marginBottom: '.5rem' }}>SEO Accelerator: Content &amp; SEO</p>
            <p><strong>SEO-focused landing pages</strong> and pillar content for plastic surgery practices. GEO optimization for AI search platforms. Social media calendars, promotional content, and podcast scripts. 25&nbsp;years of search optimization and content marketing expertise, reimagined for today&rsquo;s search landscape.</p>
          </div>
          <div className="p5-del-card p5-fade-up p5-delay-2">
            <div className="p5-del-icon"><img src="/icons/visitorid-identification.svg" alt="VisitorID website visitor identification tool" width="40" height="40" loading="lazy" /></div>
            <p style={{ fontWeight: 700, color: 'var(--p5-text)', fontSize: '1.05rem', marginBottom: '.5rem' }}>VisitorID&trade; Visitor Identification</p>
            <p>Know which patients visit your plastic surgery website. Name, email, phone, home address, household income, and more. Works on all your traffic regardless of the source—SEO, PPC, social media, or direct. Delivered in minutes, not days.</p>
          </div>
          <div className="p5-del-card p5-fade-up p5-delay-2">
            <div className="p5-del-icon"><img src="/icons/inboxid-conversion.svg" alt="InboxID same-day patient conversion engine" width="40" height="40" loading="lazy" /></div>
            <p style={{ fontWeight: 700, color: 'var(--p5-text)', fontSize: '1.05rem', marginBottom: '.5rem' }}>InboxID&trade; Conversion Engine</p>
            <p>Identified patients receive <em>same-day follow-up</em> tailored to the specific procedures they viewed on your site. Retargeting ads keep your practice visible. Email sequences build trust. Every touchpoint in the patient journey is tracked.</p>
          </div>
          <div className="p5-del-card p5-fade-up p5-delay-3">
            <div className="p5-del-icon"><img src="/icons/crm-reporting.svg" alt="CRM integration and practice management reporting" width="40" height="40" loading="lazy" /></div>
            <h3>CRM Integration + Reporting</h3>
            <p>Identified patient data feeds directly into the CRM of your choice for streamlined management. See who visited your site, what procedures they researched, how they engaged, and where they are in the follow-up cycle.</p>
          </div>
        </div>
      </section>


      {/* ===== PLASTIC SURGERY MARKETING STRATEGIES ===== */}
      <section className="p5-wrap" id="strategies">
        <p className="p5-section-label p5-fade-up">Strategy</p>
        <h2 className="p5-section-title p5-fade-up">Plastic Surgery Marketing Strategies That Actually Fill Your Schedule</h2>
        <p className="p5-fade-up" style={{ maxWidth: '740px', margin: '0 auto 2rem', color: 'var(--p5-text-dim)', textAlign: 'center' }}>Every plastic surgery practice needs a marketing strategy built around how patients actually search for cosmetic procedures. Here is what works in today&rsquo;s digital landscape—and how P5 handles each one.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', maxWidth: '960px', margin: '0 auto' }}>

          <div className="p5-fade-up" style={{ background: 'var(--p5-surface)', borderRadius: '12px', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.06)' }}>
            <img src="/icons/seo-icon.svg" alt="SEO strategy icon for medical marketing" width="48" height="48" style={{ marginBottom: '.5rem', opacity: 0.85 }} loading="lazy" />
            <h3 style={{ color: 'var(--p5-accent)', marginBottom: '.75rem' }}>SEO for Plastic Surgeons</h3>
            <p>Search engine optimization is the foundation of every successful marketing plan. Patients search Google for procedures like <em>rhinoplasty</em>, <em>breast augmentation</em>, and <em>mommy makeover</em> every day. Our <a href="/the-id-suite/seo-accelerator/" style={{ color: 'var(--p5-accent)' }}>SEO Accelerator</a> builds procedure-specific content, optimizes your page structure, and targets the <strong>high-intent keywords</strong> that drive consultations. We also optimize for <em>Generative Engine Optimization (GEO)</em> so your practice appears in AI search results from ChatGPT, Perplexity, and Claude.</p>
          </div>

          <div className="p5-fade-up p5-delay-1" style={{ background: 'var(--p5-surface)', borderRadius: '12px', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.06)' }}>
            <img src="/icons/ppc-icon.svg" alt="PPC advertising icon for practice marketing" width="48" height="48" style={{ marginBottom: '.5rem', opacity: 0.85 }} loading="lazy" />
            <h3 style={{ color: 'var(--p5-accent)', marginBottom: '.75rem' }}>PPC and Paid Advertising</h3>
            <p><strong>Pay-per-click advertising</strong> on Google and social media platforms puts your plastic surgery practice in front of patients the same day you launch. But most PPC campaigns waste budget on broad audiences. P5 uses <a href="/the-id-suite/intentid/" style={{ color: 'var(--p5-accent)' }}>IntentID™ audience data</a> to target only people who are <em>already researching procedures</em>. The result: lower cost per lead, higher consultation rates, and better return on your advertising spend.</p>
          </div>

          <div className="p5-fade-up p5-delay-2" style={{ background: 'var(--p5-surface)', borderRadius: '12px', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.06)' }}>
            <img src="/icons/social-media-icon.svg" alt="Social media marketing icon for plastic surgery practices" width="48" height="48" style={{ marginBottom: '.5rem', opacity: 0.85 }} loading="lazy" />
            <h3 style={{ color: 'var(--p5-accent)', marginBottom: '.75rem' }}>Social Media Marketing</h3>
            <p>Plastic surgery patients spend time on Instagram, Facebook, TikTok, and YouTube researching procedures and comparing results. Effective social media management for a cosmetic surgery clinic means posting before-and-after content, educational video, patient stories, and practice updates consistently. P5 builds your social media strategy and content calendar as part of the <a href="/the-id-suite/searchid/" style={{ color: 'var(--p5-accent)' }}>SearchID™</a> content engine, then uses intent data to make sure your paid social ads reach the right audience.</p>
          </div>

          <div className="p5-fade-up p5-delay-3" style={{ background: 'var(--p5-surface)', borderRadius: '12px', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.06)' }}>
            <img src="/icons/design-icon.svg" alt="Website design icon for plastic surgery clinic websites" width="48" height="48" style={{ marginBottom: '.5rem', opacity: 0.85 }} loading="lazy" />
            <h3 style={{ color: 'var(--p5-accent)', marginBottom: '.75rem' }}>Website Design and Patient Experience</h3>
            <p>Your website is the front door of your plastic surgery practice online. Good website design for a practice means fast load times, mobile-first layouts, prominent calls to action, and content organized around the procedures patients care about. Every page should make it easy to book a consultation. P5 audits and optimizes your site so it converts the traffic we send—not just the design, but the <em>full patient experience</em> from first click to booked appointment.</p>
          </div>

          <div className="p5-fade-up" style={{ background: 'var(--p5-surface)', borderRadius: '12px', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.06)' }}>
            <img src="/icons/content-icon.svg" alt="Content marketing and video production for plastic surgeons" width="48" height="48" style={{ marginBottom: '.5rem', opacity: 0.85 }} loading="lazy" />
            <h3 style={{ color: 'var(--p5-accent)', marginBottom: '.75rem' }}>Content Marketing and Video</h3>
            <p>Patients researching plastic surgery want <em>educational content</em> that answers their questions and builds trust. Content marketing for surgical practices includes blog posts about procedures, video walkthroughs, FAQ pages, and downloadable guides. Video content is especially powerful—plastic surgery patients want to see the surgeon, the clinic, and real results before they call. P5 creates and repurposes this content across channels so your practice stays visible online.</p>
          </div>

          <div className="p5-fade-up p5-delay-1" style={{ background: 'var(--p5-surface)', borderRadius: '12px', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.06)' }}>
            <img src="/icons/reputation-icon.svg" alt="Online reputation management for plastic surgery practices" width="48" height="48" style={{ marginBottom: '.5rem', opacity: 0.85 }} loading="lazy" />
            <h3 style={{ color: 'var(--p5-accent)', marginBottom: '.75rem' }}>Reputation and Review Management</h3>
            <p>Online reviews directly influence which plastic surgeon a patient chooses. Reputation management means monitoring Google reviews, responding to patient feedback, and building a steady flow of positive testimonials. For surgical practices, strong reviews are the difference between a consultation request and a bounce. P5 helps your practice build and maintain the kind of <em>online reputation</em> that patients trust when making high-stakes healthcare decisions.</p>
          </div>

        </div>

        <p className="p5-fade-up" style={{ textAlign: 'center', maxWidth: '680px', margin: '2rem auto 0', color: 'var(--p5-text-dim)' }}>Most marketing agencies offer these strategies as standalone services. <strong>P5 connects them through one unified data layer</strong>—so every marketing channel works harder because it is powered by real intent data and visitor identification. <a href="/how-it-works/" style={{ color: 'var(--p5-accent)' }}>Learn how the full system works →</a></p>
        
        <div className="p5-fade-up" style={{ maxWidth: '740px', margin: '2rem auto 0', padding: '1.5rem', background: 'var(--p5-surface)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
          <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.05em', color: 'var(--p5-text)', marginBottom: '.75rem' }}>Explore Our Marketing Tools</p>
          <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '.5rem' }}>
            <li><a href="/the-id-suite/" style={{ color: 'var(--p5-accent)', textDecoration: 'none' }}>The ID Suite Overview</a></li>
            <li><a href="/the-id-suite/intentid/" style={{ color: 'var(--p5-accent)', textDecoration: 'none' }}>IntentID™ Audience Building</a></li>
            <li><a href="/the-id-suite/visitorid/" style={{ color: 'var(--p5-accent)', textDecoration: 'none' }}>VisitorID™ Visitor Identification</a></li>
            <li><a href="/the-id-suite/inboxid/" style={{ color: 'var(--p5-accent)', textDecoration: 'none' }}>InboxID™ Conversion Engine</a></li>
            <li><a href="/the-id-suite/searchid/" style={{ color: 'var(--p5-accent)', textDecoration: 'none' }}>SearchID™ Content Engine</a></li>
            <li><a href="/the-id-suite/seo-accelerator/" style={{ color: 'var(--p5-accent)', textDecoration: 'none' }}>SEO Accelerator for Surgeons</a></li>
            <li><a href="/markets/plastic-surgeons/" style={{ color: 'var(--p5-accent)', textDecoration: 'none' }}>Marketing for Plastic Surgeons</a></li>
            <li><a href="/markets/wedding-venues/" style={{ color: 'var(--p5-accent)', textDecoration: 'none' }}>Marketing for Wedding Venues</a></li>
            <li><a href="/how-it-works/" style={{ color: 'var(--p5-accent)', textDecoration: 'none' }}>How Intent Data Marketing Works</a></li>
            <li><a href="/about/" style={{ color: 'var(--p5-accent)', textDecoration: 'none' }}>About the P5 Marketing Team</a></li>
            <li><a href="/blog/" style={{ color: 'var(--p5-accent)', textDecoration: 'none' }}>Marketing Blog</a></li>
            <li><a href="/contact/" style={{ color: 'var(--p5-accent)', textDecoration: 'none' }}>Get a Pipeline Audit</a></li>
          </ul>
        </div>
      </section>

      {/* ===== MARKETS ===== */}
      <section className="p5-wrap">
        <p className="p5-section-label p5-fade-up">Markets Served</p>
        <h2 className="p5-section-title p5-fade-up">Marketing for Plastic Surgeons, Wedding Venues, and High-Trust Practices</h2>
        <p className="p5-fade-up" style={{ textAlign: 'center', color: 'var(--p5-text-dim)', maxWidth: '640px', margin: '0 auto 2.5rem' }}>The same engine powers every vertical—from plastic surgery clinics to wedding venues. We tailor the segments, follow-up sequences, and landing pages to <em>your specific patient or client journey</em>—whether you run a surgical practice, a wedding venue, or a specialty medical clinic.</p>
        <div className="p5-market-grid">
          <a href="/plastic-surgeons/" className="p5-market-card p5-fade-up">
            <img src="/images/plastic-surgeon-marketing.svg" alt="Marketing for plastic surgeons and cosmetic surgery practices" width="48" height="48" style={{ marginBottom: '.5rem' }} loading="lazy" />
            <h3>Plastic Surgeons</h3>
            <p>Find patients researching cosmetic procedures near you. Identify the ones who visit your site. Follow up the same day so your team can <a href="/markets/plastic-surgeons/" style={{ color: 'var(--p5-accent)' }}>book the consult</a>.</p>
            <span className="p5-arrow">&rarr;</span>
          </a>
          <a href="/wedding-venues/" className="p5-market-card p5-fade-up p5-delay-1">
            <img src="/images/wedding-venue-marketing.svg" alt="Marketing for wedding venues and event spaces" width="48" height="48" style={{ marginBottom: '.5rem' }} loading="lazy" />
            <h3>Wedding Venues</h3>
            <p>Find couples actively searching for venues in your area. Identify the ones who visit your site. Follow up the same day so your team can book the tour.</p>
            <span className="p5-arrow">&rarr;</span>
          </a>
          <a href="/high-trust-high-value/" className="p5-market-card p5-fade-up p5-delay-2">
            <img src="/images/high-trust-business-marketing.svg" alt="Marketing for high-trust high-value businesses" width="48" height="48" style={{ marginBottom: '.5rem' }} loading="lazy" />
            <h3>Other High-Trust Businesses</h3>
            <p>If a booked call is worth thousands, this system fits. Legal, luxury services, specialty medical. The cycle is the same. The messaging is yours.</p>
            <span className="p5-arrow">&rarr;</span>
          </a>
        </div>
      </section>

      {/* ===== DIFFERENTIATOR ===== */}
      <section className="p5-wrap" id="why-p5">
        <p className="p5-section-label p5-fade-up">Why P5</p>
        <h2 className="p5-section-title p5-fade-up">Why Plastic Surgeons Switch to P5 Marketing</h2>
        <p className="p5-fade-up" style={{ textAlign: 'center', color: 'var(--p5-text-dim)', maxWidth: '680px', margin: '0 auto 2.5rem' }}>Most marketing agencies will run your ads or manage your SEO, but they <em>cannot tell you who actually visited your website</em>. And nobody follows up the same day with the patients who did. We built <strong>one system that does all of it</strong>—from search engine optimization to same-day patient outreach.</p>
        <div className="p5-diff-box p5-fade-up">
          <div className="p5-diff-grid">
            <div className="p5-diff-card">
              <div className="p5-diff-icon">&#10060;</div>
              <h4>Typical Agency</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '.5rem' }}>❌ Target broad or untargeted audiences online</li>
                <li style={{ marginBottom: '.5rem' }}>❌ Hope visitors convert on first visit</li>
                <li style={{ marginBottom: '.5rem' }}>❌ Lose 95%+ of traffic forever</li>
                <li style={{ marginBottom: '.5rem' }}>❌ Report on clicks and impressions</li>
                <li>❌ No visibility into which patients actually visited</li>
              </ul>
            </div>
            <div className="p5-diff-card" style={{ borderColor: 'var(--p5-accent)' }}>
              <div className="p5-diff-icon">&#9989;</div>
              <h4>P5 Marketing</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '.5rem' }}>✅ Attract organic traffic through SEO, GEO, and content</li>
                <li style={{ marginBottom: '.5rem' }}>✅ Build audiences of ready-to-buy patients with IntentID™</li>
                <li style={{ marginBottom: '.5rem' }}>✅ Identify 60% of visitors by name with VisitorID™</li>
                <li style={{ marginBottom: '.5rem' }}>✅ Follow up same day via retargeting with InboxID™</li>
                <li>✅ All channels powered by unified intent data</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="p5-wrap">
        <p className="p5-section-label p5-fade-up">Proof</p>
        <h2 className="p5-section-title p5-fade-up">Results From Plastic Surgery Practices We Work With</h2>
        <div className="p5-test-grid">
          <div className="p5-test-card p5-fade-up">
            <div className="p5-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p>&ldquo;We worked with <a href="/about/" style={{ color: 'var(--p5-accent)' }}>these folks</a> for 4+ years and relied on them to help us guide our SEO strategy and implementation.&rdquo;</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginTop: '1rem' }}>
              <div className="p5-avatar">TB</div>
              <div>
                <strong style={{ color: 'var(--p5-text)' }}>T.B.</strong><br />
                <span style={{ color: 'var(--p5-text-dim)', fontSize: '.85rem' }}>Marketing Management</span>
              </div>
            </div>
          </div>
          <div className="p5-test-card p5-fade-up p5-delay-1">
            <div className="p5-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p>&ldquo;If you&rsquo;re looking for talented, knowledgeable people to work with, I highly recommend these guys. They helped us grow our surgical practice from $1M to $3.5M in a single year.&rdquo;</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginTop: '1rem' }}>
              <div className="p5-avatar">AM</div>
              <div>
                <strong style={{ color: 'var(--p5-text)' }}>Dr. A.M.</strong><br />
                <span style={{ color: 'var(--p5-text-dim)', fontSize: '.85rem' }}>Plastic Surgeon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="p5-wrap" id="faq">
        <p className="p5-section-label p5-fade-up">FAQ</p>
        <h2 className="p5-section-title p5-fade-up">Cosmetic and Plastic Surgery FAQ</h2>
        <div className="p5-faq-list">
          <div className="p5-faq-item p5-fade-up">
            <button className="p5-faq-q">What is IntentID&trade; and how does it work?</button>
            <div className="p5-faq-a"><p>We track what millions of Americans are searching for across the web and social media every day. When someone starts researching the kind of services you offer, we see that activity. We use it to build a custom audience of prospects who are actively looking for what you sell right now. That audience gets loaded into your ad platforms, like Meta, Google, X, TikTok, or LinkedIn, so your ads only show to people who are already looking. Think of it as a list of ready-to-buy prospects that updates continuously.</p></div>
          </div>
          <div className="p5-faq-item p5-fade-up">
            <button className="p5-faq-q">What is VisitorID&trade; and what information do I get?</button>
            <div className="p5-faq-a"><p>VisitorID&trade; is a pixel that sits on your website and identifies up to 60% of your visitors. For each identified visitor, you can receive their name, email address, phone number, home address, and household income, along with details about what pages they visited and how they behaved on your site.</p></div>
          </div>
          <div className="p5-faq-item p5-fade-up">
            <button className="p5-faq-q">What is InboxID&trade; and what happens after a visitor is identified?</button>
            <div className="p5-faq-a"><p>InboxID is our conversion engine. When a visitor is identified on your site, they enter a short follow-up sequence tailored to the pages they viewed. This can include retargeting ads to keep your brand visible, and targeted outreach based on their browsing behavior. The goal is to re-engage them while your business is still top of mind. Contacts who engage are moved into an ongoing nurture program so your brand stays in front of them until they are ready to act.</p></div>
          </div>
          <div className="p5-faq-item p5-fade-up">
            <button className="p5-faq-q">Does VisitorID&trade; only work on traffic you generate?</button>
            <div className="p5-faq-a"><p>No. VisitorID&trade; identifies visitors regardless of how they got to your site. Your SEO traffic, your Google Ads, your Meta campaigns, referral traffic, direct visits, all of it. If someone lands on your website, we can identify them.</p></div>
          </div>
          <div className="p5-faq-item p5-fade-up">
            <button className="p5-faq-q">Do I need all four services?</button>
            <div className="p5-faq-a"><p>The ID&nbsp;Suite is built as a system. IntentID finds your audience. The SEO Accelerator attracts them through organic content. Paid ads accelerate that reach. VisitorID tracks who&rsquo;s interested. InboxID converts them. You could start with one tool, but you&rsquo;ll see the real ROI when they work together. Most of our clients use all four within 90&nbsp;days.</p></div>
          </div>
          <div className="p5-faq-item p5-fade-up">
            <button className="p5-faq-q">What does &ldquo;up to 60%&rdquo; mean exactly?</button>
            <div className="p5-faq-a"><p>It refers to unique website visitors we can resolve into identifiable profiles. We cap expectations so we can over-deliver. Performance varies based on traffic mix, geography, and volume.</p></div>
          </div>
          <div className="p5-faq-item p5-fade-up">
            <button className="p5-faq-q">How fast does visitor identification happen?</button>
            <div className="p5-faq-a"><p>Typically in minutes, which means your team can follow up the same day a prospect visits your site.</p></div>
          </div>
          <div className="p5-faq-item p5-fade-up">
            <button className="p5-faq-q">Is this U.S. only?</button>
            <div className="p5-faq-a"><p>Yes. Our identification and audience data are designed for U.S. visitors and consumers.</p></div>
          </div>
          <div className="p5-faq-item p5-fade-up">
            <button className="p5-faq-q">What kinds of businesses does this work best for?</button>
            <div className="p5-faq-a"><p>High-trust, high-ticket businesses where a booked call, tour, or consult is valuable. Wedding venues and plastic surgeons are our primary verticals, but the system works for legal, luxury services, and specialty medical practices.</p></div>
          </div>
          <div className="p5-faq-item p5-fade-up">
            <button className="p5-faq-q">Is this compliant?</button>
            <div className="p5-faq-a"><p>We support opt-out and suppression handling and implement responsible segmentation so outreach is targeted and measurable. We will align implementation to your needs and applicable U.S. requirements during setup.</p></div>
          </div>
          <div className="p5-faq-item p5-fade-up">
            <button className="p5-faq-q">What do we need to get started?</button>
            <div className="p5-faq-a"><p>Website access for pixel installation, plus ad account access and your CRM details. Once tracking is installed, most clients can go live quickly.</p></div>
          </div>
          <div className="p5-faq-item p5-fade-up">
            <button className="p5-faq-q">What is the SEO Accelerator?</button>
            <div className="p5-faq-a"><p>The SEO Accelerator is your organic traffic engine. It covers three areas: (1)&nbsp;SEO&mdash;building content that ranks in Google, (2)&nbsp;GEO&mdash;optimizing for AI search platforms like ChatGPT and Perplexity, and (3)&nbsp;Content repurposing&mdash;turning your core messaging into social posts, promotional content, and podcast episodes. It&rsquo;s powered by 25&nbsp;years of P5 SEO expertise.</p></div>
          </div>
          <div className="p5-faq-item p5-fade-up">
            <button className="p5-faq-q">What is GEO?</button>
            <div className="p5-faq-a"><p>Generative Engine Optimization&nbsp;(GEO) is the practice of optimizing your content for AI search results. As more people search using ChatGPT, Claude, Perplexity, and other generative&nbsp;AI, your visibility in those platforms matters. GEO uses the same foundation as SEO but optimizes for how generative AI indexes and recommends content. The SEO Accelerator handles both SEO and GEO so you rank everywhere your buyers are searching.</p></div>
          </div>
        </div>
      </section>

      {/* ===== PIPELINE AUDIT FORM ===== */}
      <section className="p5-final-cta p5-fade-up" id="pipeline-audit">
        <div className="p5-wrap">
          <div className="p5-cta-card" style={{ maxWidth: '720px', margin: '0 auto' }}>
            <h2>Get a Free Pipeline Audit for Your Practice</h2>
            <p>See how many patients your plastic surgery practice is losing to competitors—and how the full-cycle marketing system can help you grow. Tell us about your practice and we will build a custom pipeline analysis.</p>
            <form action="/contact/" method="GET" style={{ display: 'grid', gap: '1rem', marginTop: '1.5rem', maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto' }}>
              <input type="text" name="name" placeholder="Your name" aria-label="Your name" style={{ padding: '.75rem 1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)', color: 'var(--p5-text)', fontSize: '1rem' }} />
              <input type="email" name="email" placeholder="Practice email" aria-label="Practice email address" style={{ padding: '.75rem 1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)', color: 'var(--p5-text)', fontSize: '1rem' }} />
              <input type="url" name="website" placeholder="Practice website URL" aria-label="Practice website URL" style={{ padding: '.75rem 1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)', color: 'var(--p5-text)', fontSize: '1rem' }} />
              <a href="/contact/" className="p5-btn p5-btn-primary" style={{ textAlign: 'center' }}>Request My Free Audit</a>
            </form>
            <p style={{ fontSize: '.85rem', color: 'var(--p5-text-dim)', marginTop: '1rem' }}>Or <a href="/contact/" style={{ color: 'var(--p5-accent)' }}>book a 30-minute demo call</a> to see how it all works together.</p>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem', fontSize: '.85rem', color: 'var(--p5-text-dim)', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '.25rem 1rem' }}>
              <li>✓ No contracts required</li>
              <li>✓ Results in 30 days</li>
              <li>✓ U.S. practices only</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
