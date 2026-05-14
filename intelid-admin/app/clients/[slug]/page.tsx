import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getClientBySlug } from '@/lib/db';

export const dynamic = 'force-dynamic';

export default async function ClientDetailPage({ params }: { params: { slug: string } }) {
  const client = await getClientBySlug(params.slug);
  if (!client) notFound();

  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '32px 16px 80px' }}>
      <div style={{ marginBottom: 24 }}>
        <Link href="/" style={{ fontSize: 13, color: 'var(--muted)', textDecoration: 'none' }}>← All clients</Link>
        <h1 style={{ margin: '8px 0 0 0', fontSize: 26, fontWeight: 700 }}>{client.brand_name}</h1>
        <div style={{ fontSize: 13, color: 'var(--hint)', marginTop: 4 }}>
          {client.slug} · {client.industry} · {client.timezone}
        </div>
      </div>

      <div className="section">
        <h2 style={{ marginBottom: 16 }}>What happens next</h2>
        <ol style={{ paddingLeft: 20, lineHeight: 1.8, fontSize: 14, color: 'var(--text)' }}>
          <li>
            On your Mac, run the Python brief drafter:
            <pre style={pre}>cd intelid-phase1 &amp;&amp; python3 draft_brief.py {client.slug}</pre>
            The script will read this client&apos;s config from Neon and pull signals.
          </li>
          <li>Review the draft markdown the script writes to <code>clients/{client.slug}/drafts/&lt;today&gt;.md</code>.</li>
          <li>When you&apos;re happy with it, save the final to <code>briefs/</code> and run <code>send_brief.py {client.slug} &lt;today&gt; --send</code>.</li>
        </ol>
      </div>

      <div className="section">
        <h2 style={{ marginBottom: 16 }}>Config (JSON)</h2>
        <p className="section-desc">This is what the Python script reads. To edit, hit the API directly or build an edit page later.</p>
        <pre style={pre}>{JSON.stringify(client.config, null, 2)}</pre>
      </div>
    </main>
  );
}

const pre: React.CSSProperties = {
  background: '#f9fafb',
  border: '1px solid var(--border)',
  borderRadius: 6,
  padding: 12,
  fontSize: 12,
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
  overflowX: 'auto',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
};
