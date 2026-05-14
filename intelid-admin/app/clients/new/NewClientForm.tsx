'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

// ─── Types ──────────────────────────────────────────────────────────────────
type Competitor = { name: string; domain: string; linkedin: string; x: string; notes: string };
type SocialChannel = { platform: string; own_handle: string; competitor_handles: string };
type Recipient = { name: string; email: string; role: string };

const PLATFORMS = ['', 'linkedin', 'x', 'facebook', 'instagram', 'youtube', 'tiktok', 'reddit', 'threads'];
const TIMEZONES = [
  'America/New_York',
  'America/Chicago',
  'America/Denver',
  'America/Los_Angeles',
  'America/Phoenix',
  'Other',
];
const LEAD_SOURCES = [
  'Inbound (contact form)',
  'Inbound (referral)',
  'Outbound',
  'Existing P5 client',
];

const blankCompetitor: Competitor = { name: '', domain: '', linkedin: '', x: '', notes: '' };
const blankChannel: SocialChannel = { platform: '', own_handle: '', competitor_handles: '' };

export default function NewClientForm() {
  const router = useRouter();

  // Section 1
  const [slug, setSlug] = useState('');
  const [brandName, setBrandName] = useState('');
  const [primaryDomain, setPrimaryDomain] = useState('');
  const [industry, setIndustry] = useState('');
  const [timezone, setTimezone] = useState('America/New_York');

  // Section 2
  const [recipients, setRecipients] = useState<Recipient[]>([
    { name: '', email: '', role: '' },
    { name: '', email: '', role: '' },
  ]);

  // Section 3
  const [fromName, setFromName] = useState('');
  const [fromEmail, setFromEmail] = useState('');
  const [logoUrl, setLogoUrl] = useState('');
  const [footerHtml, setFooterHtml] = useState('');

  // Section 4
  const [competitors, setCompetitors] = useState<Competitor[]>([
    { ...blankCompetitor },
    { ...blankCompetitor },
    { ...blankCompetitor },
    { ...blankCompetitor },
    { ...blankCompetitor },
  ]);
  const [suggesting, setSuggesting] = useState(false);
  const [suggestError, setSuggestError] = useState<string | null>(null);

  // Section 5
  const [channels, setChannels] = useState<SocialChannel[]>([
    { ...blankChannel },
    { ...blankChannel },
    { ...blankChannel },
    { ...blankChannel },
    { ...blankChannel },
  ]);

  // Section 6 & 7
  const [keywords, setKeywords] = useState('');
  const [watchpoints, setWatchpoints] = useState('');

  // Section 8
  const [tone, setTone] = useState<'terse' | 'standard' | 'detailed'>('standard');
  const [sections, setSections] = useState({
    competitor_moves: true,
    social_activity: true,
    public_reputation: true,
    category_conversation: true,
    strategic_recommendations: true,
  });
  const [sendDay, setSendDay] = useState('monday');
  const [sendTime, setSendTime] = useState('09:00');

  // Section 9
  const [trialBriefCount, setTrialBriefCount] = useState<3 | 4 | 5>(4);
  const [convertAfter, setConvertAfter] = useState<2 | 3 | 4>(3);

  // Section 10
  const [p5Owner, setP5Owner] = useState('Robert Donnell');
  const [leadSource, setLeadSource] = useState('Inbound (contact form)');
  const [internalNotes, setInternalNotes] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // ── Auto-fill helpers ────────────────────────────────────────────────────
  function autoSlug(name: string) {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40);
  }
  function onBrandBlur() {
    if (!slug && brandName) setSlug(autoSlug(brandName));
    if (!fromName && brandName) setFromName(`${brandName} Intelligence`);
  }
  function onSlugBlur() {
    if (!fromEmail && slug) setFromEmail(`intel@${slug}.p5intel.com`);
  }

  // ── Competitor suggestion (Claude + web search) ──────────────────────────
  async function suggestCompetitors() {
    setSuggestError(null);
    if (!brandName || !primaryDomain || !industry) {
      setSuggestError('Fill in brand, domain, and industry first.');
      return;
    }
    setSuggesting(true);
    try {
      const r = await fetch('/api/recommend-competitors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ brand_name: brandName, primary_domain: primaryDomain, industry }),
      });
      if (!r.ok) {
        const body = await r.json().catch(() => ({}));
        throw new Error(body?.error || `Request failed: ${r.status}`);
      }
      const data = await r.json();
      const suggestions: Array<{ name: string; domain: string; rationale: string }> = data.competitors ?? [];
      // Fill empty competitor slots first; overwrite the rest only if user opts in.
      setCompetitors((prev) => {
        const next = [...prev];
        let i = 0;
        for (const s of suggestions.slice(0, 5)) {
          while (i < 5 && next[i].name) i++;
          if (i >= 5) break;
          next[i] = { name: s.name, domain: s.domain, linkedin: '', x: '', notes: s.rationale };
          i++;
        }
        return next;
      });
    } catch (e: any) {
      setSuggestError(e?.message ?? 'Could not get suggestions.');
    } finally {
      setSuggesting(false);
    }
  }

  // ── Submit ──────────────────────────────────────────────────────────────
  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitError(null);

    if (!slug || !brandName || !primaryDomain || !industry) {
      setSubmitError('Client basics are required.');
      return;
    }
    if (!recipients[0].name || !recipients[0].email) {
      setSubmitError('Recipient 1 is required.');
      return;
    }
    const cleanCompetitors = competitors.filter((c) => c.name && c.domain);
    if (cleanCompetitors.length < 3) {
      setSubmitError('At least 3 competitors required.');
      return;
    }
    const cleanChannels = channels.filter((c) => c.platform && c.own_handle);
    if (cleanChannels.length < 3) {
      setSubmitError('At least 3 social channels required.');
      return;
    }

    setSubmitting(true);

    const payload = {
      slug,
      brand_name: brandName,
      primary_domain: primaryDomain,
      industry,
      timezone,
      config: {
        client: { slug, name: brandName, brand_name: brandName, primary_domain: primaryDomain, industry, timezone },
        recipients: recipients.filter((r) => r.name && r.email),
        sender: {
          from_name: fromName || `${brandName} Intelligence`,
          from_email: fromEmail || `intel@${slug}.p5intel.com`,
          reply_to: 'rdonnell@p5marketing.com',
          logo_url: logoUrl || '',
          footer_html: footerHtml || '',
        },
        competitors: cleanCompetitors,
        social_channels: cleanChannels.map((c) => ({
          platform: c.platform,
          own_handle: c.own_handle,
          competitor_handles: c.competitor_handles
            .split(',')
            .map((s) => s.trim())
            .filter(Boolean),
        })),
        category_keywords: keywords.split('\n').map((s) => s.trim()).filter(Boolean),
        watchpoints: watchpoints.split('\n').map((s) => s.trim()).filter(Boolean),
        brief_settings: {
          tone,
          sections,
          send_day: sendDay,
          send_time_local: sendTime,
        },
        trial: {
          status: 'active',
          started: new Date().toISOString().slice(0, 10),
          briefs_remaining: trialBriefCount,
          convert_after_brief: convertAfter,
          card_on_file: false,
        },
        billing: { plan: 'standard', stripe_customer_id: null, next_invoice_date: null },
      },
      internal: {
        p5_owner: p5Owner,
        lead_source: leadSource,
        signed_up_at: new Date().toISOString().slice(0, 10),
        notes: internalNotes,
      },
    };

    try {
      const r = await fetch('/api/clients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!r.ok) {
        const body = await r.json().catch(() => ({}));
        throw new Error(body?.error || `Request failed: ${r.status}`);
      }
      router.push(`/clients/${slug}`);
    } catch (e: any) {
      setSubmitError(e?.message ?? 'Submission failed.');
      setSubmitting(false);
    }
  }

  // ── Render ──────────────────────────────────────────────────────────────
  return (
    <form onSubmit={onSubmit}>

      {/* 1. Client basics */}
      <div className="section">
        <div className="section-num">Section 1 of 10</div>
        <h2>Client basics</h2>
        <p className="section-desc">Identity + where they live.</p>
        <div className="field">
          <div className="q">Brand name<span className="req">*</span></div>
          <div className="help">As it should appear in the brief.</div>
          <input type="text" value={brandName} onChange={(e) => setBrandName(e.target.value)} onBlur={onBrandBlur} placeholder="Acme Co" required />
        </div>
        <div className="field">
          <div className="q">Client slug<span className="req">*</span></div>
          <div className="help">Lowercase letters, digits, hyphens. Becomes the folder name. Auto-derived from brand name.</div>
          <input type="text" value={slug} onChange={(e) => setSlug(e.target.value.toLowerCase())} onBlur={onSlugBlur} placeholder="acme-co" required pattern="[a-z0-9\-]+" />
        </div>
        <div className="row">
          <div className="field">
            <div className="q">Primary domain<span className="req">*</span></div>
            <input type="text" value={primaryDomain} onChange={(e) => setPrimaryDomain(e.target.value)} placeholder="acme.com" required />
          </div>
          <div className="field">
            <div className="q">Recipient timezone<span className="req">*</span></div>
            <select value={timezone} onChange={(e) => setTimezone(e.target.value)}>
              {TIMEZONES.map((tz) => <option key={tz}>{tz}</option>)}
            </select>
          </div>
        </div>
        <div className="field">
          <div className="q">Industry / vertical<span className="req">*</span></div>
          <div className="help">Free text. Fed to the AI for context. Example: Plastic surgery — Scottsdale, AZ</div>
          <input type="text" value={industry} onChange={(e) => setIndustry(e.target.value)} required />
        </div>
      </div>

      {/* 2. Recipients */}
      <div className="section">
        <div className="section-num">Section 2 of 10</div>
        <h2>Recipients</h2>
        <p className="section-desc">Up to two people get the Monday brief.</p>
        {recipients.map((r, i) => (
          <div key={i}>
            <div className="sub-label">Recipient {i + 1}{i === 1 ? ' (optional)' : ''}</div>
            <div className="row-3">
              <div className="field"><div className="q">Name{i === 0 && <span className="req">*</span>}</div><input type="text" value={r.name} onChange={(e) => setRecipients((p) => p.map((x, j) => j === i ? { ...x, name: e.target.value } : x))} required={i === 0} /></div>
              <div className="field"><div className="q">Email{i === 0 && <span className="req">*</span>}</div><input type="email" value={r.email} onChange={(e) => setRecipients((p) => p.map((x, j) => j === i ? { ...x, email: e.target.value } : x))} required={i === 0} /></div>
              <div className="field"><div className="q">Role{i === 0 && <span className="req">*</span>}</div><input type="text" value={r.role} onChange={(e) => setRecipients((p) => p.map((x, j) => j === i ? { ...x, role: e.target.value } : x))} placeholder="Founder / CEO" required={i === 0} /></div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. White-label / sender */}
      <div className="section">
        <div className="section-num">Section 3 of 10</div>
        <h2>White-label sender</h2>
        <p className="section-desc">Each client gets their own sender identity. P5-branded defaults if you leave fields blank.</p>
        <div className="row">
          <div className="field"><div className="q">From-name<span className="req">*</span></div><div className="help">Default: {`{Brand} Intelligence`}</div><input type="text" value={fromName} onChange={(e) => setFromName(e.target.value)} placeholder="Acme Co Intelligence" /></div>
          <div className="field"><div className="q">From-email<span className="req">*</span></div><div className="help">Default: intel@{`{slug}`}.p5intel.com</div><input type="text" value={fromEmail} onChange={(e) => setFromEmail(e.target.value)} placeholder="intel@acme-co.p5intel.com" /></div>
        </div>
        <div className="field"><div className="q">Logo URL</div><div className="help">Optional. P5 wordmark used if blank.</div><input type="text" value={logoUrl} onChange={(e) => setLogoUrl(e.target.value)} /></div>
        <div className="field"><div className="q">Custom footer HTML</div><div className="help">Optional. Default footer used if blank.</div><textarea value={footerHtml} onChange={(e) => setFooterHtml(e.target.value)} /></div>
      </div>

      {/* 4. Competitors */}
      <div className="section">
        <div className="section-num">Section 4 of 10</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
          <div>
            <h2>Competitors</h2>
            <p className="section-desc">Three required for a credible brief. Up to five total. Draw a blank? Let Claude suggest.</p>
          </div>
          <button type="button" className="btn" onClick={suggestCompetitors} disabled={suggesting || !brandName || !primaryDomain || !industry}>
            {suggesting ? 'Researching…' : '✨ Suggest 5 competitors'}
          </button>
        </div>
        {suggestError && (
          <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 6, padding: '8px 12px', marginBottom: 16, color: 'var(--danger)', fontSize: 13 }}>
            {suggestError}
          </div>
        )}
        {competitors.map((c, i) => (
          <div key={i}>
            <div className="sub-label">Competitor {i + 1}{i < 3 ? ' (required)' : ' (optional)'}</div>
            <div className="row">
              <div className="field"><div className="q">Name{i < 3 && <span className="req">*</span>}</div><input type="text" value={c.name} onChange={(e) => setCompetitors((p) => p.map((x, j) => j === i ? { ...x, name: e.target.value } : x))} required={i < 3} /></div>
              <div className="field"><div className="q">Domain{i < 3 && <span className="req">*</span>}</div><input type="text" value={c.domain} onChange={(e) => setCompetitors((p) => p.map((x, j) => j === i ? { ...x, domain: e.target.value } : x))} required={i < 3} /></div>
            </div>
            <div className="row-3">
              <div className="field"><div className="q">LinkedIn</div><input type="text" value={c.linkedin} onChange={(e) => setCompetitors((p) => p.map((x, j) => j === i ? { ...x, linkedin: e.target.value } : x))} /></div>
              <div className="field"><div className="q">X handle</div><input type="text" value={c.x} onChange={(e) => setCompetitors((p) => p.map((x, j) => j === i ? { ...x, x: e.target.value } : x))} /></div>
              <div className="field"><div className="q">Notes</div><input type="text" value={c.notes} onChange={(e) => setCompetitors((p) => p.map((x, j) => j === i ? { ...x, notes: e.target.value } : x))} /></div>
            </div>
          </div>
        ))}
      </div>

      {/* 5. Social channels */}
      <div className="section">
        <div className="section-num">Section 5 of 10</div>
        <h2>Social channels to follow</h2>
        <p className="section-desc">Pick up to 5. At least 3 required.</p>
        {channels.map((c, i) => (
          <div key={i}>
            <div className="sub-label">Channel {i + 1}{i < 3 ? ' (required)' : ' (optional)'}</div>
            <div className="row-3">
              <div className="field">
                <div className="q">Platform{i < 3 && <span className="req">*</span>}</div>
                <select value={c.platform} onChange={(e) => setChannels((p) => p.map((x, j) => j === i ? { ...x, platform: e.target.value } : x))} required={i < 3}>
                  {PLATFORMS.map((p) => <option key={p} value={p}>{p || '(select)'}</option>)}
                </select>
              </div>
              <div className="field"><div className="q">Client&apos;s handle{i < 3 && <span className="req">*</span>}</div><input type="text" value={c.own_handle} onChange={(e) => setChannels((p) => p.map((x, j) => j === i ? { ...x, own_handle: e.target.value } : x))} required={i < 3} /></div>
              <div className="field"><div className="q">Competitor handles</div><input type="text" value={c.competitor_handles} onChange={(e) => setChannels((p) => p.map((x, j) => j === i ? { ...x, competitor_handles: e.target.value } : x))} placeholder="comma-separated" /></div>
            </div>
          </div>
        ))}
      </div>

      {/* 6. Category keywords */}
      <div className="section">
        <div className="section-num">Section 6 of 10</div>
        <h2>Category keywords</h2>
        <p className="section-desc">5 to 10 keywords. What the client&apos;s prospects are actually searching.</p>
        <div className="field">
          <div className="q">Keywords<span className="req">*</span></div>
          <div className="help">One per line.</div>
          <textarea value={keywords} onChange={(e) => setKeywords(e.target.value)} required style={{ minHeight: 100 }} />
        </div>
      </div>

      {/* 7. Watchpoints */}
      <div className="section">
        <div className="section-num">Section 7 of 10</div>
        <h2>Watchpoints</h2>
        <p className="section-desc">Things to always flag if seen. Fed directly to the AI prompt.</p>
        <div className="field">
          <div className="q">Watchpoints</div>
          <div className="help">One per line. Optional but useful.</div>
          <textarea value={watchpoints} onChange={(e) => setWatchpoints(e.target.value)} style={{ minHeight: 100 }} />
        </div>
      </div>

      {/* 8. Brief settings */}
      <div className="section">
        <div className="section-num">Section 8 of 10</div>
        <h2>Brief settings</h2>
        <p className="section-desc">Tone, included sections, when to send.</p>
        <div className="field">
          <div className="q">Tone<span className="req">*</span></div>
          <div className="choice-group">
            {(['terse', 'standard', 'detailed'] as const).map((t) => (
              <label key={t} className="choice"><input type="radio" name="tone" checked={tone === t} onChange={() => setTone(t)} /> {t}{t === 'standard' && ' (default)'}</label>
            ))}
          </div>
        </div>
        <div className="field">
          <div className="q">Sections to include</div>
          <div className="help">All default to on. Uncheck to skip a section in the brief.</div>
          <div className="checkbox-group">
            {([
              ['competitor_moves', 'Competitor moves'],
              ['social_activity', 'Social activity'],
              ['public_reputation', 'Public reputation'],
              ['category_conversation', 'Category conversation'],
              ['strategic_recommendations', 'Strategic recommendations'],
            ] as const).map(([k, label]) => (
              <label key={k} className="choice">
                <input type="checkbox" checked={(sections as any)[k]} onChange={(e) => setSections((s) => ({ ...s, [k]: e.target.checked }))} /> {label}
              </label>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="field">
            <div className="q">Send day<span className="req">*</span></div>
            <select value={sendDay} onChange={(e) => setSendDay(e.target.value)}>
              {['monday', 'tuesday', 'wednesday', 'thursday', 'friday'].map((d) => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>
          <div className="field">
            <div className="q">Send time (local)<span className="req">*</span></div>
            <input type="text" value={sendTime} onChange={(e) => setSendTime(e.target.value)} placeholder="09:00" />
          </div>
        </div>
      </div>

      {/* 9. Trial */}
      <div className="section">
        <div className="section-num">Section 9 of 10</div>
        <h2>Trial settings</h2>
        <p className="section-desc">How many free briefs, and when the conversion ask appears.</p>
        <div className="row">
          <div className="field">
            <div className="q">Trial brief count<span className="req">*</span></div>
            <div className="choice-group">
              {[3, 4, 5].map((n) => (
                <label key={n} className="choice"><input type="radio" name="tc" checked={trialBriefCount === (n as any)} onChange={() => setTrialBriefCount(n as 3 | 4 | 5)} /> {n}{n === 4 && ' (default)'}</label>
              ))}
            </div>
          </div>
          <div className="field">
            <div className="q">Convert-after brief #<span className="req">*</span></div>
            <div className="choice-group">
              {[2, 3, 4].map((n) => (
                <label key={n} className="choice"><input type="radio" name="ca" checked={convertAfter === (n as any)} onChange={() => setConvertAfter(n as 2 | 3 | 4)} /> {n}{n === 3 && ' (default)'}</label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 10. Internal */}
      <div className="section">
        <div className="section-num">Section 10 of 10</div>
        <h2>Internal</h2>
        <p className="section-desc">For P5 tracking. Not shown to the client.</p>
        <div className="row">
          <div className="field"><div className="q">P5 owner<span className="req">*</span></div><input type="text" value={p5Owner} onChange={(e) => setP5Owner(e.target.value)} required /></div>
          <div className="field">
            <div className="q">Source of lead<span className="req">*</span></div>
            <select value={leadSource} onChange={(e) => setLeadSource(e.target.value)}>
              {LEAD_SOURCES.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
        </div>
        <div className="field">
          <div className="q">Internal notes</div>
          <div className="help">Anything you want to remember about this client.</div>
          <textarea value={internalNotes} onChange={(e) => setInternalNotes(e.target.value)} />
        </div>
      </div>

      {submitError && (
        <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 8, padding: 12, marginBottom: 16, color: 'var(--danger)', fontSize: 13 }}>
          {submitError}
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
        <a href="/" style={{ fontSize: 13, color: 'var(--muted)', textDecoration: 'none' }}>← Cancel</a>
        <button type="submit" className="btn btn-primary" disabled={submitting}>
          {submitting ? 'Saving…' : 'Create client'}
        </button>
      </div>
    </form>
  );
}
