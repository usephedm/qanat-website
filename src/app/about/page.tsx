import type { Metadata } from 'next';
import { AboutHero } from '@/components/about/AboutHero';
import { Story } from '@/components/about/Story';
import { Values } from '@/components/about/Values';
import { CTA } from '@/components/home/CTA';
import { generateBreadcrumbSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'About — AI Operations Infrastructure Built by V',
  description:
    'QANAT builds invisible operational infrastructure — AI-driven dispatch systems, team scaling, and revenue operations. Founded by Yousof Al-Ali (V), who scaled operations from zero to $2.5M ARR in 18 months.',
  keywords: [
    'QANAT company',
    'AI operations company',
    'Yousof Al-Ali',
    'operations infrastructure',
    'dispatch automation company',
    'cross-border operations',
    'team scaling',
  ],
  alternates: {
    canonical: '/about',
  },
};

const breadcrumbs = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
]);

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbs),
        }}
      />
      <AboutHero />
      <div className="divider" />
      <Story />
      <div className="divider" />
      <Values />
      <div className="divider" />
      <CTA />
    </>
  );
}
