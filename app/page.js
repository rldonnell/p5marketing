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
                { "@type": "Question", "name": "Who is P5 a fit for?", "acceptedAnswer": { "@type": "Answer", "text": "Owner-operators of $1M to $5M service businesses where one new customer is worth $10K or more, who don't have a senior in-house marketer, who've worked with agencies before, and who'd rather hand the marketing function to a senior team than manage it themselves." } },
                { "@type": "Question", "name": "Who is P5 not a fit for?", "acceptedAnswer": { "@type": "Answer", "text": "Businesses with a senior in-house marketing manager already in place, businesses with monthly marketing budgets below $10K total, owners who want to approve every asset and run the campaign themselves, and businesses where one new customer is worth less than a few thousand dollars. We're honest about fit because misfit engagements waste everyone's time." } },
                { "@type": "Question", "name": "What does P5 actually do?", "acceptedAnswer": { "@type": "Answer", "text": "We own your marketing function. Strategy, SEO, paid ads, content, social, conversion, and follow-up — all run by the same senior team under one plan. You approve direction, we run the play, and you read the monthly summary. Most engagements include the ID Suite as a built-in visibility layer." } },
                { "@type": "Question", "name": "What is the ID Suite?", "acceptedAnswer": { "@type": "Answer", "text": "The ID Suite is the visibility layer P5 built in-house: IntentID for intent-based audiences, VisitorID for visitor intelligence, InboxID for behavior-triggered follow-up, and SearchID for content. It's how we see what other agencies can't, and it's included with every P5 engagement at the appropriate tier." } },
                { "@type": "Question", "name": "How does P5 differ from the agency I'm already using?", "acceptedAnswer": { "@type": "Answer", "text": "Most agencies put a junior account manager between you and the work. We don't. A senior strategist owns your account end-to-end. Most agencies report on impressions and clicks. We report on customers booked. Most agencies have no idea who actually visited your website. The ID Suite tells us." } },
                { "@type": "Question", "name": "What does an engagement cost?", "acceptedAnswer": { "@type": "Answer", "text": "Typical P5 engagements run starting around $2,500 per month for the senior team plus a separate ad spend budget. Total marketing investment for a fit client is usually around $10K per month. We're not the cheapest option in the market and we're transparent about that — we deliver senior work at a fair price for businesses where one new customer pays for the engagement many times over." } },
                { "@type": "Question", "name": "What kind of visitor data does the ID Suite provide?", "acceptedAnswer": { "@type": "Answer", "text": "Visitor intelligence is sourced through a consented identity graph and tailored to your vertical's compliance requirements. We deliver enough information for your team to follow up appropriately, with consent and disclosure handled correctly. We do not sell or share the data, and the configuration is set up during onboarding to match your business and applicable U.S. requirements." } },
                { "@type": "Question", "name": "How fast can we get started?", "acceptedAnswer": { "@type": "Answer", "text": "First call is a 30-minute fit conversation, not a sales pitch. If we're a fit, we move into onboarding within a week. Strategy phase runs the first 30 days. Active campaigns are usually live by day 30 to 45." } },
                { "@type": "Question", "name": "Is this U.S. only?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. P5 works with U.S. businesses and U.S. buyer audiences. Our identity graph and intent data are designed for U.S. consumers." } },
                { "@type": "Question", "name": "Is the visibility data compliant?", "acceptedAnswer": { "@type": "Answer", "text": "Visitor intelligence is sourced through a consented identity graph with opt-out and suppression handling. P5 configures the consent and disclosure layer for your website during onboarding to match U.S. privacy laws including CCPA/CPRA, the Texas Data Privacy Act, and Washington's My Health My Data Act. Healthcare-adjacent verticals get extra care." } },
                { "@type": "Question", "name": "What is GEO and why does it matter?", "acceptedAnswer": { "@type": "Answer", "text": "Generative Engine Optimization (GEO) is content optimized for AI search results in ChatGPT, Claude, and Perplexity. As more buyers ask AI for recommendations, GEO becomes as important as traditional SEO. P5 handles both as part of every engagement." } },
                { "@type": "Question", "name": "What's the time commitment from me?", "acceptedAnswer": { "@type": "Answer", "text": "One monthly review call with a senior strategist (about an hour). Direction approvals as needed. That's it. If you want to be more involved, we can do that. If you want to be less involved, we can do that too. The point is that you choose, not us." } }
              ]
            })
        }}
      />

      {/* ===== HERO ===== */}
      <section className="p5-hero">
        <div className="p5-wrap">
          <div className="p5-hero-grid">
            <div className="p5-hero-copy p5-fade-up">
              <p className="p5-kicker">Colleyville, TX &middot; 25 Years &middot; For Owner-Operators Done Managing Their Agency</p>
              <h1>You Run Your Business. We Run Your Marketing.</h1>
              <p className="p5-sub">P5 is a senior marketing team for owner-operators of $1M to $5M service businesses where one new customer is worth $10K or more. If you&rsquo;ve worked with agencies before and you&rsquo;re quietly unhappy with what you&rsquo;re getting, you&rsquo;re probably the reason we built this. <strong>We run the strategy. We run the execution. You run the business you actually want to run.</strong> Backed by <a href="/the-id-suite/" style={{ color: 'var(--p5-accent)' }}>the ID Suite</a>, the visibility layer no other agency in your market has.</p>
              <div className="p5-cta-row">
                <a href="/contact/" className="p5-btn p5-btn-primary">Start a Fit Conversation</a>
                <a href="#cycle" className="p5-btn p5-btn-ghost">How We Work</a>
              </div>
            </div>
            <div className="p5-hero-illus p5-fade-up p5-delay-1" style={{ position: 'relative' }}>
              <img src="/images/marketing-pipeline.png" alt="ID Suite Data Pipeline" width="580" height="580" style={{ width: '100%', height: 'auto', maxWidth: '580px', margin: '0 auto', display: 'block', filter: 'drop-shadow(0 0 40px rgba(0, 229, 199, 0.4))' }} priority="true" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== STAT BAR ===== */}
      <section className="p5-stat-bar p5-fade-up">
        <div className="p5-wrap" style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', textAlign: 'center' }}>
          <div className="p5-stat">
            <span className="p5-stat-num">25 Yrs</span>
            <span className="p5-stat-lbl">Building Pipelines That Work</span>
          </div>
          <div className="p5-stat">
            <span className="p5-stat-num">$1M&ndash;$5M</span>
            <span className="p5-stat-lbl">Our Sweet Spot</span>
          </div>
          <div className="p5-stat">
            <span className="p5-stat-num">$10K+</span>
            <span className="p5-stat-lbl">What One New Customer Is Worth</span>
          </div>
          <div className="p5-stat">
            <span className="p5-stat-num">ID Suite</span>
            <span className="p5-stat-lbl">Visibility Other Agencies Don&rsquo;t Have</span>
          </div>
        </div>
      </section>


      {/* ===== TABLE OF CONTENTS ===== */}
      <nav className="p5-wrap p5-fade-up" id="table-of-contents" role="navigation" aria-label="Table of contents" style={{ maxWidth: '680px', margin: '0 auto', padding: '2rem 1.5rem' }}>
        <h2 className="p5-section-title" style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Table of Contents</h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
          <li style={{ paddingLeft: '1.25rem', textIndent: '-1.25rem' }}><a href="#pillars" style={{ color: 'var(--p5-accent)', textDecoration: 'none' }}>→ How We Work With You</a></li>
          <li style={{ paddingLeft: '1.25rem', textIndent: '-1.25rem' }}><a href="#cycle" style={{ color: 'var(--p5-accent)', textDecoration: 'none' }}>→ What a P5 Engagement Looks Like</a></li>
          <li style={{ paddingLeft: '1.25rem', textIndent: '-1.25rem' }}><a href="#markets" style={{ color: 'var(--p5-accent)', textDecoration: 'none' }}>→ Who We Work With</a></li>
          <li style={{ paddingLeft: '1.25rem', textIndent: '-1.25rem' }}><a href="#strategies" style={{ color: 'var(--p5-accent)', textDecoration: 'none' }}>→ What We Actually Do</a></li>
          <li style={{ paddingLeft: '1.25rem', textIndent: '-1.25rem' }}><a href="#how-buyers-search" style={{ color: 'var(--p5-accent)', textDecoration: 'none' }}>→ How Your Buyers Actually Decide</a></li>
          <li style={{ paddingLeft: '1.25rem', textIndent: '-1.25rem' }}><a href="#why-p5" style={{ color: 'var(--p5-accent)', textDecoration: 'none' }}>→ Why Owner-Operators Choose P5</a></li>
          <li style={{ paddingLeft: '1.25rem', textIndent: '-1.25rem' }}><a href="#faq" style={{ color: 'var(--p5-accent)', textDecoration: 'none' }}>→ Frequently Asked Questions</a></li>
          <li style={{ paddingLeft: '1.25rem', textIndent: '-1.25rem' }}><a href="#pipeline-audit" style={{ color: 'var(--p5-accent)', textDecoration: 'none' }}>→ Start a Fit Conversation</a></li>
        </ul>
      </nav>

      {/* ===== THREE PILLARS ===== */}
      <section className="p5-wrap" id="pillars">
        <p className="p5-section-label p5-fade-up">How We Work With You</p>
        <h2 className="p5-section-title p5-fade-up">A Senior Team Running the Strategy, the Execution, and a Visibility Layer No One Else Has</h2>
        <p className="p5-fade-up" style={{ textAlign: 'center', color: 'var(--p5-text-dim)', maxWidth: '640px', margin: '0 auto 2.5rem' }}>Most agencies sell you tactics and ask you to be the strategist. We don&rsquo;t. P5 owns the marketing function for owner-operators who&rsquo;d rather hand it off to people who&rsquo;ve been doing this for 25 years.</p>
        <div className="p5-paradigm-grid">
          <div className="p5-p-card p5-fade-up">
            <span className="p5-num">01</span>
            <h3>Strategy You Don&rsquo;t Have to Manage</h3>
            <p>We figure out who your buyers are, where they research, what they need to see, and how to reach them. You approve the direction. We run the play. No weekly calls asking you what color the button should be. No briefs you have to write. <strong>If trusting experts to do their job sounds like a relief, you&rsquo;re who we built this for.</strong></p>
          </div>
          <div className="p5-p-card p5-fade-up p5-delay-1">
            <span className="p5-num">02</span>
            <h3>Execution by People Who&rsquo;ve Done It</h3>
            <p>SEO, paid ads, content, landing pages, email, CRM, reporting &mdash; built and run by the same senior team, not handed off to junior staff between us and you. 25 years of moving qualified traffic to high-ticket service businesses. The work shows up. The numbers move. You read the monthly summary instead of running the campaign.</p>
          </div>
          <div className="p5-p-card p5-fade-up p5-delay-2">
            <span className="p5-num">03</span>
            <h3>Visibility No Other Agency Has</h3>
            <p>P5 clients get the <a href="/the-id-suite/" style={{ color: 'var(--p5-accent)' }}>ID Suite</a> built into their engagement: tools we developed in-house that show us who&rsquo;s researching your services, who&rsquo;s on your website, and who&rsquo;s ready to be called. Most agencies guess at what&rsquo;s working. We can see it. <strong>That&rsquo;s the moat.</strong></p>
          </div>
        </div>
        <div className="p5-fade-up" style={{ maxWidth: '680px', margin: '2rem auto 0', textAlign: 'center' }}>
          <p style={{ color: 'var(--p5-text-dim)', marginBottom: '.75rem' }}>What this looks like in practice:</p>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '.5rem 1.5rem', color: 'var(--p5-text-dim)', fontSize: '.9rem' }}>
            <li>✓ One senior point of contact &mdash; not an account manager filtering between us and the work</li>
            <li>✓ Monthly results reviews, not weekly status calls</li>
            <li>✓ Visibility into traffic and intent your team would never see otherwise</li>
            <li>✓ Strategy and execution under one roof, on one team, on one timeline</li>
          </ul>
        </div>
      </section>

      {/* ===== FOUR-STAGE CYCLE ===== */}
      <section className="p5-wrap" id="cycle">
        <p className="p5-section-label p5-fade-up">What an Engagement Looks Like</p>
        <h2 className="p5-section-title p5-fade-up">What You Actually Get When You Hire P5</h2>
        <div className="p5-hiw-detail">
          <div className="p5-hiw-block p5-fade-up">
            <span className="p5-hiw-num">1</span>
            <div>
              <p style={{ fontWeight: 700, color: 'var(--p5-text)', fontSize: '1.1rem', marginBottom: '.5rem' }}>We Take the Strategy Off Your Plate</p>
              <p>First 30 days: we audit what&rsquo;s working, what&rsquo;s broken, and what&rsquo;s being wasted. We map your real buyers (using <a href="/the-id-suite/intentid/" style={{ color: 'var(--p5-accent)' }}>IntentID</a> data, not guesses) and lay out a plan with priorities, timelines, and what we&rsquo;re going to stop doing. You approve the direction in one meeting. Then we move.</p>
            </div>
          </div>
          <div className="p5-hiw-block p5-fade-up p5-delay-1">
            <span className="p5-hiw-num">2</span>
            <div>
              <p style={{ fontWeight: 700, color: 'var(--p5-text)', fontSize: '1.1rem', marginBottom: '.5rem' }}>We Build and Run the Engine</p>
              <p>Both sides of acquisition handled by the same team:</p>
              <div style={{ marginTop: '1.25rem', paddingLeft: '1.25rem', borderLeft: '3px solid var(--p5-accent)' }}>
                <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.05em', color: 'var(--p5-text)', marginBottom: '.5rem' }}>Organic: SEO, GEO, and Content</p>
                <p style={{ color: 'var(--p5-text-dim)', lineHeight: 1.7, marginBottom: '1rem' }}>25 years of search expertise applied to your vertical. Service-specific landing pages, pillar content, GEO optimization for ChatGPT/Perplexity/Claude, social and podcast assets repurposed from your core messaging. The compounding base that lowers your acquisition cost over time.</p>
                <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.05em', color: 'var(--p5-text)', marginBottom: '.5rem' }}>Paid: Ads That Don&rsquo;t Waste Your Budget</p>
                <p style={{ color: 'var(--p5-text-dim)', lineHeight: 1.7, marginBottom: '1rem' }}>Paid ads on Facebook and LinkedIn &mdash; the two platforms where our clients&rsquo; buyers actually convert. Running on intent audiences instead of demographic guesses. Same&#8209;day placement, daily monitoring, weekly optimization. We run the campaigns. You see the results.</p>
                <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.05em', color: 'var(--p5-text)', marginBottom: '.5rem' }}>Together: One Team, One Plan, One Number</p>
                <p style={{ color: 'var(--p5-text-dim)', lineHeight: 1.7 }}>Most agencies pick a lane &mdash; SEO shop, paid shop, content shop &mdash; and force you to coordinate. P5 runs all of it under one roof. One senior point of contact. One monthly review. One number that matters: customers booked.</p>
              </div>
            </div>
          </div>
          <div className="p5-hiw-block p5-fade-up p5-delay-2">
            <span className="p5-hiw-num">3</span>
            <div>
              <p style={{ fontWeight: 700, color: 'var(--p5-text)', fontSize: '1.1rem', marginBottom: '.5rem' }}>We See What No Other Agency Can</p>
              <p>The <a href="/the-id-suite/visitorid/" style={{ color: 'var(--p5-accent)' }}>ID Suite</a> is built into your engagement. We see who&rsquo;s researching your services, who&rsquo;s on your website, what they looked at, and how engaged they are. That visibility tells us what&rsquo;s actually working &mdash; not what looks good in a dashboard. Most agencies report on impressions and clicks. We can tell you whether the people clicking are real prospects.</p>
            </div>
          </div>
          <div className="p5-hiw-block p5-fade-up p5-delay-3">
            <span className="p5-hiw-num">4</span>
            <div>
              <p style={{ fontWeight: 700, color: 'var(--p5-text)', fontSize: '1.1rem', marginBottom: '.5rem' }}>Your Team Closes the Warm Ones</p>
              <p>Engaged prospects get same-day retargeting and behavior-triggered <a href="/the-id-suite/inboxid/" style={{ color: 'var(--p5-accent)' }}>email follow-up</a> while they&rsquo;re still in the buying mindset. The hottest ones flow into your CRM with context: which pages they viewed, how many times, what they engaged with. Your front desk or sales team picks up the phone with a real reason to call. That&rsquo;s where bookings come from.</p>
            </div>
          </div>
        </div>
        <p className="p5-fade-up" style={{ textAlign: 'center', color: 'var(--p5-accent)', marginTop: '2rem', fontWeight: 500 }}>The longer we work together, the better it gets. Every booking teaches the system who your real buyers are.</p>
      </section>

      {/* ===== DELIVERABLES ===== */}
      <section className="p5-wrap">
        <p className="p5-section-label p5-fade-up">What Ships</p>
        <h2 className="p5-section-title p5-fade-up">What Lands in Your Inbox Every Month</h2>
        <div className="p5-del-grid">
          <div className="p5-del-card p5-fade-up">
            <div className="p5-del-icon"><img src="/icons/intentid-audience.svg" alt="Intent audiences for paid campaigns" width="40" height="40" loading="lazy" /></div>
            <p style={{ fontWeight: 700, color: 'var(--p5-text)', fontSize: '1.05rem', marginBottom: '.5rem' }}>Intent Audiences for Your Ads</p>
            <p>Custom audiences of in-market buyers, deployed into Facebook and LinkedIn &mdash; the two platforms where our clients&rsquo; buyers actually convert. Built and refreshed by us. Your ad budget stops chasing demographics and starts reaching people already researching what you sell.</p>
          </div>
          <div className="p5-del-card p5-fade-up p5-delay-1">
            <div className="p5-del-icon"><img src="/icons/seo-accelerator-content.svg" alt="SEO and content engine" width="40" height="40" loading="lazy" /></div>
            <p style={{ fontWeight: 700, color: 'var(--p5-text)', fontSize: '1.05rem', marginBottom: '.5rem' }}>Content That Earns Its Traffic</p>
            <p>Service-specific landing pages and pillar content tuned to your vertical. GEO optimization for AI search platforms. Social, promotional, and podcast assets built from your core messaging. 25 years of search expertise, applied to your business.</p>
          </div>
          <div className="p5-del-card p5-fade-up p5-delay-2">
            <div className="p5-del-icon"><img src="/icons/visitorid-identification.svg" alt="Visitor identification reporting" width="40" height="40" loading="lazy" /></div>
            <p style={{ fontWeight: 700, color: 'var(--p5-text)', fontSize: '1.05rem', marginBottom: '.5rem' }}>Visitor Intelligence Reports</p>
            <p>Know which prospects are engaging with your site, what they&rsquo;re researching, and how serious they look. Delivered via secure dashboard with consent-graph-based identification, configured for your vertical&rsquo;s compliance requirements.</p>
          </div>
          <div className="p5-del-card p5-fade-up p5-delay-2">
            <div className="p5-del-icon"><img src="/icons/inboxid-conversion.svg" alt="Behavior-triggered follow-up" width="40" height="40" loading="lazy" /></div>
            <p style={{ fontWeight: 700, color: 'var(--p5-text)', fontSize: '1.05rem', marginBottom: '.5rem' }}>Behavior-Triggered Follow-Up</p>
            <p>Same-day outreach tailored to what each prospect actually engaged with on your site. Retargeting ads keep your brand visible. Email sequences keep the conversation going. Your sales or front-desk team gets warm hand-offs, not cold lists.</p>
          </div>
          <div className="p5-del-card p5-fade-up p5-delay-3">
            <div className="p5-del-icon"><img src="/icons/crm-reporting.svg" alt="CRM integration and monthly reporting" width="40" height="40" loading="lazy" /></div>
            <h3>CRM Integration and Monthly Reviews</h3>
            <p>Engaged prospect data flows into the CRM you already use. One monthly review with a senior P5 strategist covering what we did, what worked, what didn&rsquo;t, and what&rsquo;s next. Not a status update. A working session.</p>
          </div>
        </div>
      </section>


      {/* ===== WHAT WE ACTUALLY DO ===== */}
      <section className="p5-wrap" id="strategies">
        <p className="p5-section-label p5-fade-up">What We Actually Do</p>
        <h2 className="p5-section-title p5-fade-up">The Six Things We Run for You, Under One Roof</h2>
        <p className="p5-fade-up" style={{ maxWidth: '740px', margin: '0 auto 2rem', color: 'var(--p5-text-dim)', textAlign: 'center' }}>Most agencies sell you one of these and expect you to coordinate the rest. P5 owns all six. One team. One plan. One number that matters at the end of the month: customers booked.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', maxWidth: '960px', margin: '0 auto' }}>

          <div className="p5-fade-up" style={{ background: 'var(--p5-surface)', borderRadius: '12px', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.06)' }}>
            <img src="/icons/seo-icon.svg" alt="SEO strategy icon" width="48" height="48" style={{ marginBottom: '.5rem', opacity: 0.85 }} loading="lazy" />
            <h3 style={{ color: 'var(--p5-accent)', marginBottom: '.75rem' }}>Search and AI Visibility</h3>
            <p>SEO is still the foundation. Buyers search Google every day for what you sell. We build service-specific content, optimize page structure, and target the high-intent keywords that drive booked consults, tours, and calls. We also handle <em>Generative Engine Optimization (GEO)</em> so you show up in ChatGPT, Perplexity, and Claude. Powered by 25 years of <a href="/the-id-suite/seo-accelerator/" style={{ color: 'var(--p5-accent)' }}>search expertise</a>.</p>
          </div>

          <div className="p5-fade-up p5-delay-1" style={{ background: 'var(--p5-surface)', borderRadius: '12px', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.06)' }}>
            <img src="/icons/ppc-icon.svg" alt="PPC advertising icon" width="48" height="48" style={{ marginBottom: '.5rem', opacity: 0.85 }} loading="lazy" />
            <h3 style={{ color: 'var(--p5-accent)', marginBottom: '.75rem' }}>Paid Ads That Stop Wasting Your Budget</h3>
            <p>Most PPC burns money on broad audiences. We use <a href="/the-id-suite/intentid/" style={{ color: 'var(--p5-accent)' }}>intent data</a> to target only the people actively researching what you sell. Lower cost per lead, higher conversion rate, and a number you can actually defend in a board meeting. Paid ads on Facebook and LinkedIn &mdash; the two platforms where our clients&rsquo; buyers actually convert. Built and run by senior strategists, not handed off to a junior buyer.</p>
          </div>

          <div className="p5-fade-up p5-delay-2" style={{ background: 'var(--p5-surface)', borderRadius: '12px', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.06)' }}>
            <img src="/icons/social-media-icon.svg" alt="Social media icon" width="48" height="48" style={{ marginBottom: '.5rem', opacity: 0.85 }} loading="lazy" />
            <h3 style={{ color: 'var(--p5-accent)', marginBottom: '.75rem' }}>Social and Video Content</h3>
            <p>Your buyers spend real time on Instagram, Facebook, TikTok, and YouTube before they reach out. They&rsquo;re comparing, judging, building confidence. We build the content calendar and produce the assets &mdash; explainer video, behind-the-scenes, before-and-afters, founder voice &mdash; so your social presence does work for you while you&rsquo;re running the business.</p>
          </div>

          <div className="p5-fade-up p5-delay-3" style={{ background: 'var(--p5-surface)', borderRadius: '12px', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.06)' }}>
            <img src="/icons/design-icon.svg" alt="Website design icon" width="48" height="48" style={{ marginBottom: '.5rem', opacity: 0.85 }} loading="lazy" />
            <h3 style={{ color: 'var(--p5-accent)', marginBottom: '.75rem' }}>Website and Conversion Experience</h3>
            <p>If your site doesn&rsquo;t convert, all the traffic in the world doesn&rsquo;t matter. We audit and rebuild the pages buyers actually land on &mdash; service pages, gallery pages, contact flows, mobile experience &mdash; so the traffic we send actually books. We touch the <a href="/the-id-suite/seo-accelerator/" style={{ color: 'var(--p5-accent)' }}>front door of your business</a> until it works.</p>
          </div>

          <div className="p5-fade-up" style={{ background: 'var(--p5-surface)', borderRadius: '12px', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.06)' }}>
            <img src="/icons/content-icon.svg" alt="Content and video production icon" width="48" height="48" style={{ marginBottom: '.5rem', opacity: 0.85 }} loading="lazy" />
            <h3 style={{ color: 'var(--p5-accent)', marginBottom: '.75rem' }}>Content That Builds Trust</h3>
            <p>For high-ticket decisions, buyers want to feel confident before they call. Educational content, FAQ pages, case stories, downloadable guides, and <a href="/blog/" style={{ color: 'var(--p5-accent)' }}>video walkthroughs</a> let them do the homework that gets them to yes. We write, produce, and repurpose this across every channel so your team isn&rsquo;t starting from scratch on each platform.</p>
          </div>

          <div className="p5-fade-up p5-delay-1" style={{ background: 'var(--p5-surface)', borderRadius: '12px', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.06)' }}>
            <img src="/icons/reputation-icon.svg" alt="Reputation management icon" width="48" height="48" style={{ marginBottom: '.5rem', opacity: 0.85 }} loading="lazy" />
            <h3 style={{ color: 'var(--p5-accent)', marginBottom: '.75rem' }}>Reputation and Reviews</h3>
            <p>Online reviews directly determine which provider a buyer chooses. <a href="/how-it-works/" style={{ color: 'var(--p5-accent)' }}>Reputation management</a> means monitoring Google reviews, responding to feedback in your voice, and building a steady flow of testimonials from real outcomes. For owner-operators, strong reviews are the difference between a booked consult and a bounce. We run the program.</p>
          </div>

        </div>

        <p className="p5-fade-up" style={{ textAlign: 'center', maxWidth: '680px', margin: '2rem auto 0', color: 'var(--p5-text-dim)' }}>Most agencies offer these as standalone services and force you to be the conductor. <strong>P5 connects them through the ID Suite</strong> so every channel works harder because we can see what&rsquo;s actually working. <a href="/how-it-works/" style={{ color: 'var(--p5-accent)' }}>How a P5 engagement actually runs &rarr;</a></p>

        <div className="p5-fade-up" style={{ maxWidth: '740px', margin: '2rem auto 0', padding: '1.5rem', background: 'var(--p5-surface)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
          <h2 style={{ fontFamily: 'Space Mono, monospace', fontSize: '.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.05em', color: 'var(--p5-text)', marginBottom: '.75rem' }}>More on How P5 Works</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '.5rem' }}>
            <li><a href="/the-id-suite/" style={{ color: 'var(--p5-accent)', textDecoration: 'none' }}>The ID Suite Overview</a></li>
            <li><a href="/the-id-suite/intentid/" style={{ color: 'var(--p5-accent)', textDecoration: 'none' }}>IntentID&trade; &mdash; Intent Audiences</a></li>
            <li><a href="/the-id-suite/visitorid/" style={{ color: 'var(--p5-accent)', textDecoration: 'none' }}>VisitorID&trade; &mdash; Visitor Intelligence</a></li>
            <li><a href="/the-id-suite/inboxid/" style={{ color: 'var(--p5-accent)', textDecoration: 'none' }}>InboxID&trade; &mdash; Behavior-Triggered Follow-Up</a></li>
            <li><a href="/the-id-suite/seo-accelerator/" style={{ color: 'var(--p5-accent)', textDecoration: 'none' }}>SearchID&trade; &mdash; Content Engine</a></li>
            <li><a href="/markets/" style={{ color: 'var(--p5-accent)', textDecoration: 'none' }}>Who We Work With</a></li>
            <li><a href="/markets/wedding-venues/" style={{ color: 'var(--p5-accent)', textDecoration: 'none' }}>Wedding Venues</a></li>
            <li><a href="/markets/plastic-surgeons/" style={{ color: 'var(--p5-accent)', textDecoration: 'none' }}>Plastic and Cosmetic Surgery</a></li>
            <li><a href="/how-it-works/" style={{ color: 'var(--p5-accent)', textDecoration: 'none' }}>How an Engagement Runs</a></li>
            <li><a href="/about/" style={{ color: 'var(--p5-accent)', textDecoration: 'none' }}>About the Team</a></li>
            <li><a href="/blog/" style={{ color: 'var(--p5-accent)', textDecoration: 'none' }}>Blog</a></li>
            <li><a href="/contact/" style={{ color: 'var(--p5-accent)', textDecoration: 'none' }}>Start a Fit Conversation</a></li>
          </ul>
        </div>
      </section>

      {/* ===== MARKETS ===== */}
      <section className="p5-wrap" id="markets">
        <p className="p5-section-label p5-fade-up">Who We Work With</p>
        <h2 className="p5-section-title p5-fade-up">Owner-Operators of $1M&ndash;$5M Service Businesses</h2>
        <p className="p5-fade-up" style={{ textAlign: 'center', color: 'var(--p5-text-dim)', maxWidth: '680px', margin: '0 auto 2.5rem' }}>P5 fits one specific kind of client. Not everyone, and we&rsquo;re honest about that. Here&rsquo;s what a P5 fit looks like &mdash; and what doesn&rsquo;t. <a href="/markets/" style={{ color: 'var(--p5-accent)' }}>Full fit profile &rarr;</a></p>
        <div className="p5-market-grid">
          <a href="/markets/wedding-venues/" className="p5-market-card p5-fade-up">
            <img src="/images/wedding-venue-marketing.svg" alt="Marketing for wedding venues" width="48" height="48" style={{ marginBottom: '.5rem' }} loading="lazy" />
            <h3>Wedding Venues</h3>
            <p>Owner-operated venues where one booking is worth $10K+ and the season is decided in the months when couples are searching. We&rsquo;ve filled calendars before. We can do it again.</p>
            <span className="p5-arrow">&rarr;</span>
          </a>
          <a href="/markets/" className="p5-market-card p5-fade-up p5-delay-1">
            <img src="/images/high-trust-business-marketing.svg" alt="Marketing for legal practices" width="48" height="48" style={{ marginBottom: '.5rem' }} loading="lazy" />
            <h3>Legal Practices</h3>
            <p>Owner-led firms where the partner&rsquo;s name is on the door and one new client is worth real money. Personal injury, estate, family, business law. The buyer journey is the same; the messaging is yours.</p>
            <span className="p5-arrow">&rarr;</span>
          </a>
          <a href="/markets/plastic-surgeons/" className="p5-market-card p5-fade-up p5-delay-2">
            <img src="/images/plastic-surgeon-marketing.svg" alt="Marketing for cosmetic and spine surgery practices" width="48" height="48" style={{ marginBottom: '.5rem' }} loading="lazy" />
            <h3>Surgical Practices</h3>
            <p>Cosmetic, spine, and specialty surgical practices where the surgeon owns the practice and one consult is worth $10K&ndash;$100K. We&rsquo;ve grown a single practice from $1M to $4M. Track record on file.</p>
            <span className="p5-arrow">&rarr;</span>
          </a>
          <a href="/markets/" className="p5-market-card p5-fade-up p5-delay-3">
            <img src="/images/high-trust-business-marketing.svg" alt="Marketing for other owner-operated service businesses" width="48" height="48" style={{ marginBottom: '.5rem' }} loading="lazy" />
            <h3>If You&rsquo;re Not on This List</h3>
            <p>The fit profile is what matters: $1M&ndash;$5M revenue, owner-operated, customer worth $10K+, no senior in-house marketer, ready to hand the marketing function to people who&rsquo;ll run it. If that&rsquo;s you, we should talk.</p>
            <span className="p5-arrow">&rarr;</span>
          </a>
        </div>
      </section>

      {/* ===== DIFFERENTIATOR ===== */}
      <section className="p5-wrap" id="why-p5">
        <p className="p5-section-label p5-fade-up">Why P5</p>
        <h2 className="p5-section-title p5-fade-up">Why Owner-Operators Choose P5 Over Their Last Agency</h2>
        <p className="p5-fade-up" style={{ textAlign: 'center', color: 'var(--p5-text-dim)', maxWidth: '680px', margin: '0 auto 2.5rem' }}>Most agencies hand you a junior account manager, ask you to sign off on tactics you don&rsquo;t have time to evaluate, and report on impressions. We don&rsquo;t. <strong>Senior team. Owned strategy. Visibility no one else has.</strong></p>
        <div className="p5-diff-box p5-fade-up">
          <div className="p5-diff-grid">
            <div className="p5-diff-card">
              <div className="p5-diff-icon">&#10060;</div>
              <p style={{ fontWeight: 700, color: 'var(--p5-text)', fontSize: '1.05rem', marginBottom: '.75rem' }}>The Last Agency You Hired</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '.5rem' }}>❌ Junior account manager between you and the work</li>
                <li style={{ marginBottom: '.5rem' }}>❌ You write the brief, approve every asset, run the meetings</li>
                <li style={{ marginBottom: '.5rem' }}>❌ Reports on impressions and clicks, not bookings</li>
                <li style={{ marginBottom: '.5rem' }}>❌ Specializes in one channel, leaves the rest to you</li>
                <li>❌ No idea who actually visited your site</li>
              </ul>
            </div>
            <div className="p5-diff-card" style={{ borderColor: 'var(--p5-accent)' }}>
              <div className="p5-diff-icon">&#9989;</div>
              <p style={{ fontWeight: 700, color: 'var(--p5-text)', fontSize: '1.05rem', marginBottom: '.75rem' }}>P5 Marketing</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '.5rem' }}>✅ Senior strategist owns your account end-to-end</li>
                <li style={{ marginBottom: '.5rem' }}>✅ We write the brief, run the play, send you the summary</li>
                <li style={{ marginBottom: '.5rem' }}>✅ Reports on customers booked, not vanity metrics</li>
                <li style={{ marginBottom: '.5rem' }}>✅ One team running SEO, paid, content, conversion, follow-up</li>
                <li>✅ The ID Suite shows us what no other agency can see</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="p5-wrap">
        <p className="p5-section-label p5-fade-up">Proof</p>
        <h2 className="p5-section-title p5-fade-up">What Our Clients Say</h2>
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

      {/* ===== HOW BUYERS DECIDE ===== */}
      <section className="p5-wrap" id="how-buyers-search">
        <p className="p5-section-label p5-fade-up">The Buyer Journey</p>
        <h2 className="p5-section-title p5-fade-up">How Your Buyers Actually Decide</h2>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <p className="p5-fade-up" style={{ color: 'var(--p5-text-dim)', lineHeight: 1.8, marginBottom: '1.25rem' }}>The way people buy from owner-operated service businesses has changed. More buyers begin online than any other way, and the journey from first search to booked appointment can take weeks or months. Whether the end goal is a venue tour, a legal consult, a surgical evaluation, or a first meeting with a financial advisor, understanding how this works is the foundation of every marketing decision we make for you. It&rsquo;s also why one channel never gets the job done by itself.</p>

          <p className="p5-fade-up" style={{ color: 'var(--p5-text-dim)', lineHeight: 1.8, marginBottom: '1.25rem' }}>Most start by searching Google for the specific thing they need &mdash; <em>wedding venue near me</em>, estate planning attorney, scoliosis specialist, fee-only financial advisor. The results determine which businesses they discover first. Increasingly, they&rsquo;re also asking ChatGPT, Perplexity, and Claude to compare options. That shift means content and <em>generative engine optimization</em> matter more every quarter. We handle both.</p>

          <p className="p5-fade-up" style={{ color: 'var(--p5-text-dim)', lineHeight: 1.8, marginBottom: '1.25rem' }}>After the search, buyers spend real time reading reviews, watching video, scanning social, comparing examples. Couples scan venue galleries. Clients watch attorney explainer videos. Patients study before-and-afters. Investors listen to advisor podcasts. People want to feel confident before they call you. A business with a strong content presence, video library, and reputation has a clear advantage over one that only runs ads.</p>

          <p className="p5-fade-up" style={{ color: 'var(--p5-text-dim)', lineHeight: 1.8, marginBottom: '1.25rem' }}>Then buyers narrow their options. They visit your website to learn more, read testimonials, check the services, and look for cues that signal trust and professionalism. Site quality matters more than most owners realize &mdash; people judge you by your online presence, and a poorly built site costs you bookings. The window between first visit and booked consult is the single most critical part of your funnel. Most businesses have no idea who&rsquo;s in that window or what they&rsquo;re doing while they&rsquo;re there.</p>

          <p className="p5-fade-up" style={{ color: 'var(--p5-text-dim)', lineHeight: 1.8, marginBottom: '1.25rem' }}>This is where most marketing falls down. Most businesses have no idea who visited their website, no system for following up while interest is hot, and no way to connect their ad spend to actual buyer behavior. People visit, browse, and leave &mdash; and the business never knows they were there. That&rsquo;s the gap the <a href="/the-id-suite/" style={{ color: 'var(--p5-accent)' }}>ID Suite</a> closes. We give P5 clients visibility into the buyer journey that no other agency can match.</p>

          <p className="p5-fade-up" style={{ color: 'var(--p5-text-dim)', lineHeight: 1.8, marginBottom: '1.25rem' }}>The owner-operators who win in this category run all of it together &mdash; SEO, paid, social, content, reputation, follow-up &mdash; under one team that can see what&rsquo;s actually working. That&rsquo;s the work. P5 does it for you so you can run the business you actually wanted to run when you started. <a href="/contact/" style={{ color: 'var(--p5-accent)' }}>Start a fit conversation &rarr;</a></p>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="p5-wrap" id="faq">
        <p className="p5-section-label p5-fade-up">FAQ</p>
        <h2 className="p5-section-title p5-fade-up">Frequently Asked Questions</h2>
        <div className="p5-faq-list">
          <div className="p5-faq-item p5-fade-up">
            <button className="p5-faq-q">Who is P5 a fit for?</button>
            <div className="p5-faq-a"><p>Owner-operators of $1M to $5M service businesses where one new customer is worth $10K or more. No senior in-house marketer. Have worked with agencies before. Want to hand the marketing function to a senior team rather than manage it themselves. Trust experts to do the job. If that&rsquo;s you, we should talk.</p></div>
          </div>
          <div className="p5-faq-item p5-fade-up">
            <button className="p5-faq-q">Who is P5 not a fit for?</button>
            <div className="p5-faq-a"><p>We&rsquo;re honest about misfit because misfit engagements waste everyone&rsquo;s time. P5 is not a fit if: you have a senior in-house marketing manager already (we don&rsquo;t do well in that dynamic), your monthly marketing budget is below $10K total (the math just doesn&rsquo;t work), you want to approve every asset and run weekly status calls (we don&rsquo;t work that way), or your average customer is worth less than a few thousand dollars (different business model entirely).</p></div>
          </div>
          <div className="p5-faq-item p5-fade-up">
            <button className="p5-faq-q">What does P5 actually do for me?</button>
            <div className="p5-faq-a"><p>We own your marketing function. Strategy, SEO, paid ads, content, social, conversion optimization, and follow-up &mdash; all run by the same senior team under one plan. You approve direction, we run the play, you read the monthly summary. Most engagements include the <a href="/the-id-suite/" style={{ color: 'var(--p5-accent)' }}>ID Suite</a> as a built-in visibility layer the rest of your competitors don&rsquo;t have.</p></div>
          </div>
          <div className="p5-faq-item p5-fade-up">
            <button className="p5-faq-q">What is the ID Suite?</button>
            <div className="p5-faq-a"><p>The ID Suite is the visibility layer P5 built in-house: <strong>IntentID</strong> for intent-based audiences, <strong>VisitorID</strong> for visitor intelligence, <strong>InboxID</strong> for behavior-triggered follow-up, and <strong>SearchID</strong> for content. It&rsquo;s how we see what other agencies can&rsquo;t, and it&rsquo;s included with every P5 engagement at the appropriate tier.</p></div>
          </div>
          <div className="p5-faq-item p5-fade-up">
            <button className="p5-faq-q">How does this differ from the agency I&rsquo;m already using?</button>
            <div className="p5-faq-a"><p>Most agencies put a junior account manager between you and the work. We don&rsquo;t. Most agencies report on impressions and clicks. We report on customers booked. Most agencies handle one channel and force you to coordinate the rest. We run all of it. Most agencies have no idea who actually visited your website. The ID Suite tells us. If any of that resonates with what&rsquo;s frustrating you about your current setup, we&rsquo;re probably worth a conversation.</p></div>
          </div>
          <div className="p5-faq-item p5-fade-up">
            <button className="p5-faq-q">What does an engagement cost?</button>
            <div className="p5-faq-a"><p>Typical P5 retainers start around $2,500 per month for the senior team plus a separate ad spend budget. Total marketing investment for a fit client is usually around $10K per month. We&rsquo;re not the cheapest option in the market and we&rsquo;re transparent about that. We deliver senior work at a fair price for businesses where one new customer pays for the engagement many times over. If your numbers don&rsquo;t support that math, we&rsquo;re not the right agency for you.</p></div>
          </div>
          <div className="p5-faq-item p5-fade-up">
            <button className="p5-faq-q">What kind of visitor data does the ID Suite provide?</button>
            <div className="p5-faq-a"><p>Visitor intelligence is sourced through a consented identity graph, configured for your vertical&rsquo;s compliance requirements. We deliver enough information for your team to follow up appropriately, with consent and disclosure handled correctly on the website side. The exact data points provided depend on your industry and applicable U.S. privacy law &mdash; healthcare-adjacent verticals get extra care. We do not sell or share data, and configuration is set up during onboarding.</p></div>
          </div>
          <div className="p5-faq-item p5-fade-up">
            <button className="p5-faq-q">Is the visitor intelligence compliant with privacy laws?</button>
            <div className="p5-faq-a"><p>Yes. The identity layer is built on a consented data graph with opt-out and suppression handling. P5 configures the consent and disclosure layer on your website during onboarding to align with U.S. privacy laws including CCPA/CPRA, the Texas Data Privacy Act, and Washington&rsquo;s My Health My Data Act. For healthcare-adjacent businesses, we apply additional caution and reduce the data footprint.</p></div>
          </div>
          <div className="p5-faq-item p5-fade-up">
            <button className="p5-faq-q">How fast can we get started?</button>
            <div className="p5-faq-a"><p>First call is a 30-minute fit conversation, not a sales pitch. If we&rsquo;re a fit, we move into onboarding within a week. Strategy phase runs the first 30 days. Active campaigns are usually live by day 30 to 45.</p></div>
          </div>
          <div className="p5-faq-item p5-fade-up">
            <button className="p5-faq-q">Is this U.S. only?</button>
            <div className="p5-faq-a"><p>Yes. P5 works with U.S. businesses and U.S. buyer audiences. The identity graph and intent data are designed for U.S. consumers.</p></div>
          </div>
          <div className="p5-faq-item p5-fade-up">
            <button className="p5-faq-q">What&rsquo;s the time commitment from me?</button>
            <div className="p5-faq-a"><p>One monthly review call with a senior strategist. About an hour. Direction approvals as needed in between. That&rsquo;s it. If you want to be more involved, we can do that. If you want to be less involved, we can do that too. The point is that you choose the cadence, not us.</p></div>
          </div>
          <div className="p5-faq-item p5-fade-up">
            <button className="p5-faq-q">What is GEO and why does it matter?</button>
            <div className="p5-faq-a"><p>Generative Engine Optimization (GEO) means content optimized to surface in ChatGPT, Claude, and Perplexity search results. As more buyers ask AI for recommendations instead of typing into Google, GEO becomes as important as traditional SEO. We handle both as part of every engagement.</p></div>
          </div>
        </div>
      </section>

      {/* ===== PIPELINE AUDIT FORM ===== */}
      <section className="p5-final-cta p5-fade-up" id="pipeline-audit">
        <div className="p5-wrap">
          <div className="p5-cta-card" style={{ maxWidth: '720px', margin: '0 auto' }}>
            <h2>Start a Fit Conversation</h2>
            <p>30 minutes. No pitch. We&rsquo;ll ask honest questions about your business, your last agency, and what you&rsquo;re trying to fix. If P5 is a fit, we&rsquo;ll tell you what we&rsquo;d do. If we&rsquo;re not, we&rsquo;ll tell you that too &mdash; and point you somewhere better.</p>
            <form action="/contact/" method="GET" style={{ display: 'grid', gap: '1rem', marginTop: '1.5rem', maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto' }}>
              <input type="text" name="name" placeholder="Your name" aria-label="Your name" style={{ padding: '.75rem 1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)', color: 'var(--p5-text)', fontSize: '1rem' }} />
              <input type="email" name="email" placeholder="Business email" aria-label="Business email address" style={{ padding: '.75rem 1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)', color: 'var(--p5-text)', fontSize: '1rem' }} />
              <input type="url" name="website" placeholder="Website URL" aria-label="Business website URL" style={{ padding: '.75rem 1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)', color: 'var(--p5-text)', fontSize: '1rem' }} />
              <a href="/contact/" className="p5-btn p5-btn-primary" style={{ textAlign: 'center' }}>Schedule the Conversation</a>
            </form>
            <p style={{ fontSize: '.85rem', color: 'var(--p5-text-dim)', marginTop: '1rem' }}>Or <a href="/contact/" style={{ color: 'var(--p5-accent)' }}>send us a note</a> if you&rsquo;d rather start by email.</p>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem', fontSize: '.85rem', color: 'var(--p5-text-dim)', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '.25rem 1rem' }}>
              <li>✓ Honest fit assessment, not a sales pitch</li>
              <li>✓ Senior strategist on the call, not a junior rep</li>
              <li>✓ U.S. businesses only</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
