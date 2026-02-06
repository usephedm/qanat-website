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
    'dispatch automation',
    'AI dispatch',
    'team scaling',
    'operations infrastructure',
    'AI agents',
    'cross-border operations',
    'dispatch management',
    'operational excellence',
    'revenue operations',
    'remote dispatcher jobs',
    'facility management dispatcher',
    'remote dispatch coordinator',
    'work from home dispatcher',
    'facility management automation',
    'AI dispatch systems',
    'QANAT',
    'QN8',
  ],
  authors: [{ name: SITE.founder.fullName }],
  creator: SITE.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE.url,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    siteName: SITE.name,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${SITE.name} — ${SITE.tagline}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    creator: '@qanathq',
    images: ['/og-image.png'],
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
      name: SITE.founder.fullName,
      jobTitle: SITE.founder.title,
    },
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'WY',
      addressCountry: 'US',
    },
    sameAs: [SITE.social.linkedin, SITE.social.twitter, SITE.social.github],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: SITE.contact.email,
        contactType: 'customer service',
      },
      {
        '@type': 'ContactPoint',
        email: 'hr@qn8.app',
        contactType: 'HR',
      },
    ],
  };
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.url}`,
    })),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateJobPostingData(job: {
  title: string;
  description: string;
  location: string;
  compensation: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    hiringOrganization: {
      '@type': 'Organization',
      name: SITE.name,
      sameAs: SITE.url,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US',
      },
    },
    jobLocationType: 'TELECOMMUTE',
    employmentType: 'FULL_TIME',
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: {
        '@type': 'QuantitativeValue',
        unitText: 'YEAR',
      },
    },
  };
}
