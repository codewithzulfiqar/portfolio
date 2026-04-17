import type {Metadata} from 'next';
import { Syne, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

// Zulfiqar Ali Information
export const metadata: Metadata = {
  title: 'Zulfiqar Ali | Frontend Developer',
  description: 'Portfolio of Zulfiqar Ali, a Frontend Developer based in Shikarpur specializing in beautiful UI/UX, business, and portfolio websites.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${syne.variable} ${cormorant.variable}`}>
      <body className="bg-grid relative min-h-screen font-sans selection:bg-dark-surface selection:text-accent-teal" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
