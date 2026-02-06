import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { MassiveFooter } from '@/components/layout/MassiveFooter';
import { SmoothScroll } from '@/components/global/SmoothScroll';
import { CustomCursor } from '@/components/global/CustomCursor';
import { LoadingScreen } from '@/components/global/LoadingScreen';
import { GrainOverlay } from '@/components/global/GrainOverlay';
import { siteMetadata, generateStructuredData } from '@/lib/metadata';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  ...siteMetadata,
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'icon', url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateStructuredData()),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased bg-background text-foreground cursor-none-desktop`}>
        <LoadingScreen />
        <SmoothScroll />
        <CustomCursor />
        <GrainOverlay />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <MassiveFooter />
      </body>
    </html>
  );
}
