import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Olimpiada de Istorie 2024 - Etapa Națională',
  description: 'Olimpiada de Istorie 2024 - Etapa Națională'
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='ro'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
