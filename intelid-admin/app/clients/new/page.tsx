import NewClientForm from './NewClientForm';

export const dynamic = 'force-dynamic';

export default function NewClientPage() {
  return (
    <main style={{ maxWidth: 760, margin: '0 auto', padding: '32px 16px 80px' }}>
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <div style={{ fontSize: 11, color: 'var(--hint)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 8 }}>
          P5 internal use only
        </div>
        <h1 style={{ margin: '0 0 8px 0', fontSize: 26, fontWeight: 700 }}>IntelID — new client</h1>
        <p style={{ margin: 0, color: 'var(--muted)', fontSize: 14 }}>
          Fill out once per new trial client. Writes to Neon, then the Python script generates the first brief.
        </p>
      </div>
      <NewClientForm />
    </main>
  );
}
