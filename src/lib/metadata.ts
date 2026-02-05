import type { Metadata } from 'next';
import { SITE } from './constants';

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    'AI operations',
    'dispatch management',
    'facility management',
    'dispatch operations',
    'AI agents',
    'cross-border service delivery',
    'operations management',
    'facility intelligence',
    'automated dispatch',
    'QANAT',
  ],
  authors: [{ name: SITE.founder.name }],
  creator: SITE.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE.url,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    siteName: SITE.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    creator: '@qanathq',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export function generateStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    founder: {
      '@type': 'Person',
      name: SITE.founder.name,
      jobTitle: SITE.founder.title,
    },
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'WY',
      addressCountry: 'US',
    },
    sameAs: [SITE.social.linkedin, SITE.social.twitter, SITE.social.github],
  };
}
