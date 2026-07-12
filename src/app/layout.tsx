// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond, Dancing_Script } from 'next/font/google';
import './globals.css';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant',
});

const Dancing = Dancing_Script({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-dancing',
});

export const metadata: Metadata = {
  title: 'Ânima Virtus - Conservatório de Dança',
  description: 'Conservatório de Ballet e Dança em São Paulo',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${cormorant.variable} ${Dancing.variable} font-sans antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
