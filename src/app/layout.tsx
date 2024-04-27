import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ReactNode } from 'react';
import AppNavbar from '@/components/navbar';
import Script from 'next/script';
import Link from 'next/link';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Olimpiada de Istorie - Etapa Națională 2024',
  description: 'Olimpiada de Istorie - Etapa Națională 2024',
  other: {
    'google-site-verification': 'OSBUv2oehwIv0pCcPoXph3dRY-7nXTR-IPtIuA6aBJ0'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='ro' className='overflow-hidden'>
      <head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css'
        />
        <Script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-CKEDXTQRD7'
        ></Script>
        <Script id='google-analytics'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
    
            gtag('config', 'G-CKEDXTQRD7');
          `}
        </Script>
      </head>
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
