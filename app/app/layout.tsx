import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Vendor Risk Analyst',
  description: 'Independent risk assessment for AI tools, meeting bots, and SaaS applications',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
