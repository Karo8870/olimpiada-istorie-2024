import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ReactNode } from 'react';
import AppNavbar from '@/components/navbar';
import '@/lib/fontawesome/css/fa.css';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Olimpiada națională de istorie 2024',
  description: 'Olimpiada națională de istorie 2024'
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='ro' className='overflow-hidden'>
      <body className={`${jakarta.className} flex h-screen w-screen flex-col`}>
        <AppNavbar />
        <main
          id='scrollable'
          className='flex h-0 flex-grow flex-col overflow-auto [scrollbar-gutter:both-edges]'
        >
          {children}
        </main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
