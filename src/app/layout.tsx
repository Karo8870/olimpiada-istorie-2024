import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import AppNavbar from '@/components/navbar';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

// const inter = Inter({ subsets: ['latin'] });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Olimpiada națională de istorie 2024',
  description: 'Olimpiada națională de istorie 2024'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ro'>
      <body className={jakarta.className}>
        <AppNavbar />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
