'use client';

import { useEffect } from 'react';
import Head from 'next/head';

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
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "What is IntentID and how does it work?", "acceptedAnswer": { "@type": "Answer", "text": "We track what millions of Americans are searching for across the web and social media every day. When someone starts researching the kind of services you offer, we see that activity. We use it to build a custom audience of people who are actively looking for what you sell right now. That audience gets loaded into your ad platforms, like Meta, Google, X, TikTok, or LinkedIn, so your ads only show to people who are already looking." } },
                { "@type": "Question", "name": "What is VisitorID and what information do I get?", "acceptedAnswer": { "@type": "Answer", "text": "VisitorID is a pixel that sits on your website and identifies up to 60% of your visitors. For each identified visitor, you can receive their name, email address, phone number, home address, and household income, along with details about what pages they visited and how they behaved on your site." } },
                { "@type": "Question", "name": "What is InboxID and what happens after a visitor is identified?", "acceptedAnswer": { "@type": "Answer", "text": "InboxID is our conversion engine. Within minutes of identification, visitors enter our follow-up system. Depending on your setup, that can include retargeting ads to keep your brand visible, and automated email sequences tailored to the pages they viewed. Their contact information also feeds directly into your CRM so your team can follow up personally." } },
                { "@type": "Question", "name": "Does VisitorID only work on traffic you generate?", "acceptedAnswer": { "@type": "Answer", "text": "No. VisitorID identifies visitors regardless of how they got to your site. Your SEO traffic, your Google Ads, your Meta campaigns, referral traffic, direct visits, all of it. If someone lands on your website, we can identify them." } },
                { "@type": "Question", "name": "Do I need all three services?", "acceptedAnswer": { "@type": "Answer", "text": "No. Some clients already have strong traffic from SEO or their own ad campaigns and just need VisitorID to start identifying those visitors. Others want IntentID audiences for their ad platforms but handle follow-up themselves. And some want us to run the full cycle. We customize based on what you need and what you already have working." } },
                { "@type": "Question", "name": "What does up to 60% mean exactly?", "acceptedAnswer": { "@type": "Answer", "text": "It refers to unique website visitors we can resolve into identifiable profiles. We cap expectations so we can over-deliver. Performance varies based on traffic mix, geography, and volume." } },
                { "@type": "Question", "name": "How fast does visitor identification happen?", "acceptedAnswer": { "@type": "Answer", "text": "Typically in minutes, which means your team can follow up the same day a prospect visits your site." } },
                { "@type": "Question", "name": "Is this U.S. only?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our identification and audience data are designed for U.S. visitors and consumers." } },
                { "@type": "Question", "name": "What kinds of businesses does this work best for?", "acceptedAnswer": { "@type": "Answer", "text": "High-trust, high-ticket businesses where a booked call, tour, or consult is valuable. Wedding venues and plastic surgeons are our primary verticals, but the system works for legal, luxury services, and specialty medical practices." } },
                { "@type": "Question", "name": "Is this compliant?", "acceptedAnswer": { "@type": "Answer", "text": "We support opt-out and suppression handling and implement responsible segmentation so outreach is targeted and measurable. We will align implementation to your needs and applicable U.S. requirements during setup." } },
                { "@type": "Question", "name": "What do we need to get started?", "acceptedAnswer": { "@type": "Answer", "text": "Website access for pixel installation, plus ad account access and your CRM details. Once tracking is installed, most clients can go live quickly." } }
              ]
            })
          }}
        />
      </Head>

      {/* ===== HERO ===== */}
      <section className="p5-hero">
        <div className="p5-wrap">
          <div className="p5-hero-grid">
            <div className="p5-hero-copy p5-fade-up">
              <p className="p5-kicker">Colleyville, TX &middot; U.S. Only &middot; High-Trust, High-Value Businesses</p>
              <h1>Turn Marketing Into a Pipeline You Can See, Track, and Close</h1>
              <p className="p5-sub">We find people actively searching for what you sell. We drive them to your site. We identify them by name. And we follow up until they convert. One system. Full visibility. Built for high-trust, high-value businesses.</p>
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
                <text x="352" y="211" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="DM Sans, sans-serif">Ad Platforms</text>
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
                <text x="200" y="195" textAnchor="middle" fill="#e2e8f0" fontSize="15" fontFamily="DM Sans, sans-serif" fontWeight="700">YOUR</text>
                <text x="200" y="214" textAnchor="middle" fill="#e2e8f0" fontSize="15" fontFamily="DM Sans, sans-serif" fontWeight="700">PIPELINE</text>
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
            <span className="p5-stat-lbl">Building Lead Systems</span>
          </div>
        </div>
      </section>

      {/* ===== THREE PILLARS ===== */}
      <section className="p5-wrap" id="pillars">
        <p className="p5-section-label p5-fade-up">The System</p>
        <h2 className="p5-section-title p5-fade-up">Three engines that find, identify, and convert your next customers.</h2>
        <div className="p5-paradigm-grid">
          <div className="p5-p-card p5-fade-up">
            <span className="p5-num">01</span>
            <h3>IntentID&trade;: Find Them</h3>
            <p>We track what millions of Americans are searching for across the web and social media every day. We use that data to build a custom audience of people actively looking for exactly what you sell, right now. Then we deploy that audience into your ad platforms: Meta, Google, X, TikTok, LinkedIn. Your ads reach ready-to-buy people instead of anonymous visitors. Better leads. Lower costs. Less waste.</p>
          </div>
          <div className="p5-p-card p5-fade-up p5-delay-1">
            <span className="p5-num">02</span>
            <h3>VisitorID&trade;: Identify Them</h3>
            <p>Our pixel identifies up to 60% of the people who visit your site and gives you their name, email, phone number, home address, and household income. It works on all your traffic: your SEO, your ads, our audiences, referrals, everything. Minutes, not days. U.S. only.</p>
          </div>
          <div className="p5-p-card p5-fade-up p5-delay-2">
            <span className="p5-num">03</span>
            <h3>InboxID&trade;: Convert Them</h3>
            <p>Identification without follow-up is a wasted lead. Our post-visit system triggers same-day outreach: retargeting ads to stay visible and email sequences tailored to what they viewed. Their data flows into your CRM so your team knows exactly who to call and why.</p>
          </div>
        </div>
      </section>

      {/* ===== FOUR-STAGE CYCLE ===== */}
      <section className="p5-wrap" id="cycle">
        <p className="p5-section-label p5-fade-up">How It Works</p>
        <h2 className="p5-section-title p5-fade-up">Four stages. One cycle. A pipeline that gets smarter the longer it runs.</h2>
        <div className="p5-hiw-detail">
          <div className="p5-hiw-block p5-fade-up">
            <span className="p5-hiw-num">1</span>
            <div>
              <h3>Build Your Audience</h3>
              <p>IntentID&trade; finds people actively researching your services across the web. We build a custom audience and load it into your ad platforms. Your budget goes to ready-to-buy prospects instead of new, untargeted traffic.</p>
            </div>
          </div>
          <div className="p5-hiw-block p5-fade-up p5-delay-1">
            <span className="p5-hiw-num">2</span>
            <div>
              <h3>Drive Qualified Traffic</h3>
              <p>Your ads reach people who are already looking, not anonymous visitors. Meta, Google, LinkedIn, X, TikTok, wherever your buyers spend time. Every visitor who lands on your site enters the identification layer.</p>
            </div>
          </div>
          <div className="p5-hiw-block p5-fade-up p5-delay-2">
            <span className="p5-hiw-num">3</span>
            <div>
              <h3>Identify Your Visitors</h3>
              <p>Our pixel resolves up to 60% of your website visitors into full contact profiles. Name, email, phone, address, household income. Delivered in minutes, not days. Works on all your traffic regardless of the source.</p>
            </div>
          </div>
          <div className="p5-hiw-block p5-fade-up p5-delay-3">
            <span className="p5-hiw-num">4</span>
            <div>
              <h3>Convert with Follow-Up</h3>
              <p>Same-day retargeting ads and email sequences keep your business in front of identified visitors. Their information feeds your CRM. Your team closes warm leads instead of chasing prospects who are disengaged.</p>
            </div>
          </div>
        </div>
        <p className="p5-fade-up" style={{ textAlign: 'center', color: 'var(--p5-accent)', marginTop: '2rem', fontWeight: 500 }}>Stage 4 feeds Stage 1. Every conversion makes your audiences smarter. The system gets better the longer it runs.</p>
      </section>

      {/* ===== DELIVERABLES ===== */}
      <section className="p5-wrap">
        <p className="p5-section-label p5-fade-up">Deliverables</p>
        <h2 className="p5-section-title p5-fade-up">What you get</h2>
        <div className="p5-del-grid">
          <div className="p5-del-card p5-fade-up">
            <div className="p5-del-icon">&#127919;</div>
            <h3>IntentID&trade; Audience Building</h3>
            <p>Custom audiences of people actively searching for what you sell, built from real-time data and deployed into Meta, Google, X, TikTok, LinkedIn, and more. Better leads at lower cost.</p>
          </div>
          <div className="p5-del-card p5-fade-up p5-delay-1">
            <div className="p5-del-icon">&#128100;</div>
            <h3>VisitorID&trade; Visitor Identification</h3>
            <p>Know who visits your website. Name, email, phone, home address, household income, and more. Works on all your traffic regardless of the source. Delivered in minutes, not days.</p>
          </div>
          <div className="p5-del-card p5-fade-up p5-delay-2">
            <div className="p5-del-icon">&#128640;</div>
            <h3>InboxID&trade; Conversion Engine</h3>
            <p>Identified visitors receive same-day follow-up tailored to what they viewed on your site. Retargeting ads keep your brand visible. Email sequences build trust. Every touchpoint is tracked.</p>
          </div>
          <div className="p5-del-card p5-fade-up p5-delay-3">
            <div className="p5-del-icon">&#128202;</div>
            <h3>CRM Integration + Reporting</h3>
            <p>Identified visitor data feeds directly into the CRM of your choice. See who visited, what they looked at, how they engaged, and where they are in the follow-up cycle.</p>
          </div>
        </div>
      </section>

      {/* ===== MARKETS ===== */}
      <section className="p5-wrap">
        <p className="p5-section-label p5-fade-up">Markets Served</p>
        <h2 className="p5-section-title p5-fade-up">One system. Vertical-specific messaging.</h2>
        <p className="p5-fade-up" style={{ textAlign: 'center', color: 'var(--p5-text-dim)', maxWidth: '640px', margin: '0 auto 2.5rem' }}>The same engine powers every vertical. We tailor the segments, follow-up sequences, and landing pages to your buyer journey.</p>
        <div className="p5-market-grid">
          <a href="/wedding-venues/" className="p5-market-card p5-fade-up">
            <h3>Wedding Venues</h3>
            <p>Find couples actively searching for venues in your area. Identify the ones who visit your site. Follow up the same day so your team can book the tour.</p>
            <span className="p5-arrow">&rarr;</span>
          </a>
          <a href="/plastic-surgeons/" className="p5-market-card p5-fade-up p5-delay-1">
            <h3>Plastic Surgeons</h3>
            <p>Find people researching cosmetic procedures near you. Identify the ones who visit your site. Follow up the same day so your team can book the consult.</p>
            <span className="p5-arrow">&rarr;</span>
          </a>
          <a href="/high-trust-high-value/" className="p5-market-card p5-fade-up p5-delay-2">
            <h3>Other High-Trust Businesses</h3>
            <p>If a booked call is worth thousands, this system fits. Legal, luxury services, specialty medical. The cycle is the same. The messaging is yours.</p>
            <span className="p5-arrow">&rarr;</span>
          </a>
        </div>
      </section>

      {/* ===== DIFFERENTIATOR ===== */}
      <section className="p5-wrap">
        <p className="p5-section-label p5-fade-up">Why P5</p>
        <h2 className="p5-section-title p5-fade-up">Other agencies give you pieces. We give you the full cycle.</h2>
        <p className="p5-fade-up" style={{ textAlign: 'center', color: 'var(--p5-text-dim)', maxWidth: '680px', margin: '0 auto 2.5rem' }}>Most agencies will run your ads or manage your SEO, but they cannot tell you who actually visited your website. And nobody follows up the same day with the people who did. We built one system that does all of it.</p>
        <div className="p5-diff-box p5-fade-up">
          <div className="p5-diff-grid">
            <div className="p5-diff-card">
              <div className="p5-diff-icon">&#10060;</div>
              <h4>Typical Agency</h4>
              <p>Target broad or untargeted audiences</p>
              <p>Hope visitors convert on first visit</p>
              <p>Lose 95%+ of traffic forever</p>
              <p>Report on clicks and impressions</p>
              <p>No visibility into who actually visited</p>
            </div>
            <div className="p5-diff-card" style={{ borderColor: 'var(--p5-accent)' }}>
              <div className="p5-diff-icon">&#9989;</div>
              <h4>P5 Marketing</h4>
              <p>Build audiences of ready-to-buy prospects with IntentID&trade;</p>
              <p>Identify 60% of website visitors by name with VisitorID&trade;</p>
              <p>Follow up same day via email and retargeting with InboxID&trade;</p>
              <p>Deliver identified prospects to your CRM with full contact info</p>
              <p>Full-cycle system: find, drive, identify, convert</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="p5-wrap">
        <p className="p5-section-label p5-fade-up">Proof</p>
        <h2 className="p5-section-title p5-fade-up">What our clients say</h2>
        <div className="p5-test-grid">
          <div className="p5-test-card p5-fade-up">
            <div className="p5-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p>&ldquo;We worked with these folks for 4+ years and relied on them to help us guide our SEO strategy and implementation.&rdquo;</p>
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
        <h2 className="p5-section-title p5-fade-up">Frequently Asked Questions</h2>
        <div className="p5-faq-list">
          <div className="p5-faq-item p5-fade-up">
            <button className="p5-faq-q">What is IntentID&trade; and how does it work?</button>
            <div className="p5-faq-a"><p>We track what millions of Americans are searching for across the web and social media every day. When someone starts researching the kind of services you offer, we see that activity. We use it to build a custom audience of people who are actively looking for what you sell right now. That audience gets loaded into your ad platforms, like Meta, Google, X, TikTok, or LinkedIn, so your ads only show to people who are already looking. Think of it as a list of ready-to-buy prospects that updates continuously.</p></div>
          </div>
          <div className="p5-faq-item p5-fade-up">
            <button className="p5-faq-q">What is VisitorID&trade; and what information do I get?</button>
            <div className="p5-faq-a"><p>VisitorID&trade; is a pixel that sits on your website and identifies up to 60% of your visitors. For each identified visitor, you can receive their name, email address, phone number, home address, and household income, along with details about what pages they visited and how they behaved on your site.</p></div>
          </div>
          <div className="p5-faq-item p5-fade-up">
            <button className="p5-faq-q">What is InboxID&trade; and what happens after a visitor is identified?</button>
            <div className="p5-faq-a"><p>InboxID is our conversion engine. When a visitor is identified on your site, they enter a short follow-up sequence tailored to the pages they viewed. This can include retargeting ads to keep your brand visible, and targeted email outreach based on their browsing behavior. The goal is to re-engage them while your business is still top of mind. Contacts who engage are moved into an ongoing nurture program so your brand stays in front of them until they are ready to act.</p></div>
          </div>
          <div className="p5-faq-item p5-fade-up">
            <button className="p5-faq-q">Does VisitorID&trade; only work on traffic you generate?</button>
            <div className="p5-faq-a"><p>No. VisitorID&trade; identifies visitors regardless of how they got to your site. Your SEO traffic, your Google Ads, your Meta campaigns, referral traffic, direct visits, all of it. If someone lands on your website, we can identify them.</p></div>
          </div>
          <div className="p5-faq-item p5-fade-up">
            <button className="p5-faq-q">Do I need all three services?</button>
            <div className="p5-faq-a"><p>No. Some clients already have strong traffic from SEO or their own ad campaigns and just need VisitorID&trade; to start identifying those visitors. Others want IntentID&trade; audiences for their ad platforms but handle follow-up themselves. And some want us to run the full cycle. We customize based on what you need and what you already have working.</p></div>
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
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="p5-final-cta p5-fade-up">
        <div className="p5-wrap">
          <div className="p5-cta-card">
            <h2>See how the full cycle works for your business.</h2>
            <p>Book a 30-minute demo and we will show you what IntentID&trade;, VisitorID&trade;, and InboxID&trade; look like for your specific market.</p>
            <a href="/contact-us/" className="p5-btn p5-btn-primary">Book a Demo</a>
          </div>
        </div>
      </section>
    </>
  );
}
