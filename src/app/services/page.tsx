import type { Metadata } from 'next';
import { ServicesHero } from '@/components/services/ServicesHero';
import { ServiceDetail } from '@/components/services/ServiceDetail';
import { CTA } from '@/components/home/CTA';
import { SERVICES, SITE } from '@/lib/constants';
import { generateBreadcrumbSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Services — AI Dispatch Automation, Operations & Team Scaling',
  description:
    'AI-powered dispatch automation, intelligent operations infrastructure, and team scaling services. QANAT builds the operational systems that took one client from $0 to $2.5M ARR in 18 months.',
  keywords: [
    'AI dispatch automation',
    'dispatch automation services',
    'AI operations infrastructure',
    'team scaling services',
    'facility management automation',
    'AI dispatch systems',
    'operations consulting',
    'cross-border team scaling',
  ],
  alternates: {
    canonical: '/services',
  },
};

const breadcrumbs = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
]);

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'AI Operations Infrastructure',
  provider: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI Operations Services',
    itemListElement: SERVICES.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        description: service.description,
      },
    })),
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbs),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />
      <ServicesHero />
      {SERVICES.map((service, i) => (
        <div key={service.id}>
          <div className="divider" />
          <ServiceDetail service={service} index={i} />
        </div>
      ))}
      <div className="divider" />
      <CTA />
    </>
  );
}
