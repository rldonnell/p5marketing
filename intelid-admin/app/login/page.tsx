'use client';

import { useState, FormEvent } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const params = useSearchParams();
  const next = params.get('next') || '/';
  const [pass, setPass] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const r = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ passphrase: pass }),
    });
    if (!r.ok) {
      setError('Wrong passphrase.');
      setSubmitting(false);
      return;
    }
    router.replace(next);
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        background: 'var(--bg)',
      }}
    >
      <form
        onSubmit={onSubmit}
        style={{
          width: '100%',
          maxWidth: 380,
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: 12,
          padding: 32,
        }}
      >
        <div style={{ fontSize: 11, color: 'var(--hint)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 8 }}>
          IntelID Admin · P5 Marketing
        </div>
        <h1 style={{ margin: '0 0 8px 0', fontSize: 22, fontWeight: 700 }}>Internal access</h1>
        <p style={{ margin: '0 0 24px 0', color: 'var(--muted)', fontSize: 13, lineHeight: 1.5 }}>
          Enter the shared passphrase. Session lasts 30 days.
        </p>
        <input
          type="password"
          autoFocus
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Passphrase"
          style={{
            width: '100%',
            padding: '12px 14px',
            fontSize: 14,
            border: '1px solid var(--border)',
            borderRadius: 8,
            background: '#fff',
            marginBottom: 16,
          }}
        />
        {error && (
          <div style={{ fontSize: 13, color: 'var(--danger)', marginBottom: 16 }}>{error}</div>
        )}
        <button
          type="submit"
          disabled={submitting || !pass}
          style={{
            width: '100%',
            padding: '12px 16px',
            fontSize: 14,
            fontWeight: 600,
            background: 'var(--accent)',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            cursor: submitting ? 'wait' : 'pointer',
            opacity: submitting || !pass ? 0.6 : 1,
          }}
        >
          {submitting ? 'Checking…' : 'Sign in'}
        </button>
      </form>
    </main>
  );
}
