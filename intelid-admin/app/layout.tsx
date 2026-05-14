import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'IntelID Admin',
  description: 'Internal P5 admin for IntelID client onboarding and brief management.',
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
