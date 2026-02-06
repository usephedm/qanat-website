import type { Metadata } from 'next';
import { ContactContent } from '@/components/contact/ContactContent';
import { generateBreadcrumbSchema } from '@/lib/metadata';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Us — Business Inquiries & Job Applications',
  description:
    'Contact QANAT for operations consulting, AI dispatch systems, and team scaling. Business inquiries: hello@qn8.app. Job applications: hr@qn8.app. We respond within 24-48 hours.',
  keywords: [
    'contact QANAT',
    'AI operations consulting',
    'dispatch automation contact',
    'job application QANAT',
    'remote dispatcher application',
    'business inquiry',
  ],
  alternates: {
    canonical: '/contact',
  },
};

const breadcrumbs = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Contact', url: '/contact' },
]);

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact QANAT',
  description:
    'Contact QANAT for business inquiries (hello@qn8.app) or job applications (hr@qn8.app)',
  url: `${SITE.url}/contact`,
};

export default function ContactPage() {
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
          __html: JSON.stringify(contactSchema),
        }}
      />
      <ContactContent />
    </>
  );
}
