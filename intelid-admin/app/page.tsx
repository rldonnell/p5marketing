import Link from 'next/link';
import { listClients } from '@/lib/db';

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  let clients: Awaited<ReturnType<typeof listClients>> = [];
  let dbError: string | null = null;
  try {
    clients = await listClients();
  } catch (e: any) {
    dbError = e?.message ?? String(e);
  }

  return (
    <main style={{ maxWidth: 1000, margin: '0 auto', padding: '32px 16px 80px' }}>
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 24,
        }}
      >
        <div>
          <div style={{ fontSize: 11, color: 'var(--hint)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 4 }}>
            IntelID Admin · P5 Marketing
          </div>
          <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700 }}>Clients</h1>
        </div>
        <Link href="/clients/new" className="btn btn-primary">
          + New client
        </Link>
      </header>

      {dbError && (
        <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 8, padding: 16, marginBottom: 16, color: 'var(--danger)', fontSize: 13 }}>
          <strong>Database not reachable.</strong> Check <code>DATABASE_URL</code>. Detail: {dbError}
        </div>
      )}

      {!dbError && clients.length === 0 && (
        <div className="section">
          <div className="section-num">No clients yet</div>
          <h2>Onboard your first trial client</h2>
          <p className="section-desc">
            Click &quot;New client&quot; above. Fill out the form, hit &quot;Suggest 5 competitors&quot;
            if you draw a blank, and submit. The Python script reads from this database next.
          </p>
        </div>
      )}

      {clients.length > 0 && (
        <div className="section" style={{ padding: 0, overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr style={{ background: '#fafafa', borderBottom: '1px solid var(--border)' }}>
                <th style={cellHead}>Client</th>
                <th style={cellHead}>Industry</th>
                <th style={cellHead}>Trial</th>
                <th style={cellHead}>Briefs sent</th>
                <th style={cellHead}>Onboarded</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((c) => (
                <tr key={c.id} style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={cell}>
                    <Link href={`/clients/${c.slug}`} style={{ fontWeight: 600 }}>
                      {c.brand_name}
                    </Link>
                    <div style={{ fontSize: 12, color: 'var(--hint)' }}>{c.slug}</div>
                  </td>
                  <td style={cell}>{c.industry}</td>
                  <td style={cell}>
                    <Pill state={c.trial_status} />
                  </td>
                  <td style={cell}>{c.briefs_sent}</td>
                  <td style={cell}>{new Date(c.created_at).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}

const cellHead: React.CSSProperties = {
  textAlign: 'left',
  padding: '12px 16px',
  fontSize: 11,
  fontWeight: 700,
  color: 'var(--muted)',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
};
const cell: React.CSSProperties = { padding: '14px 16px', verticalAlign: 'top' };

function Pill({ state }: { state: string }) {
  const colors: Record<string, { bg: string; fg: string }> = {
    active: { bg: '#ecfdf5', fg: '#065f46' },
    converted: { bg: '#eff6ff', fg: '#1e40af' },
    paused: { bg: '#fef3c7', fg: '#92400e' },
    cancelled: { bg: '#fee2e2', fg: '#991b1b' },
  };
  const c = colors[state] || { bg: '#f3f4f6', fg: '#374151' };
  return (
    <span style={{ fontSize: 11, padding: '3px 8px', borderRadius: 4, background: c.bg, color: c.fg, fontWeight: 600 }}>
      {state}
    </span>
  );
}
