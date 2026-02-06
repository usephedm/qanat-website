import type { Metadata } from 'next';
import { CareersContent } from '@/components/careers/CareersContent';
import { generateJobPostingData, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/metadata';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Careers — Join Our Team',
  description:
    'Join QANAT and build AI-powered operational infrastructure. We\'re hiring Remote Dispatchers for facility management operations. Work from anywhere, grow with a global team, earn performance bonuses.',
  keywords: [
    'remote dispatcher jobs',
    'facility management dispatcher',
    'work from home dispatcher',
    'remote dispatch coordinator',
    'international remote jobs',
    'dispatcher career',
    'facility management jobs remote',
    'AI operations jobs',
  ],
  alternates: {
    canonical: '/careers',
  },
};

const dispatcherJobPosting = generateJobPostingData({
  title: 'Remote Dispatcher — Facility Management',
  description:
    'Coordinate technicians for commercial facility maintenance across the US. Source techs, schedule work orders, follow up on completions. AI-powered tools make you 10x more effective. $500-700/month base plus performance bonuses. Remote work, flexible schedule within US business hours.',
  location: 'Remote (International)',
  compensation: '$500-700/month base + performance bonuses',
});

const careersFAQ = generateFAQSchema([
  {
    question: 'Do I need experience in facility management?',
    answer:
      'No. We care about smart, organized people who communicate well. We will teach you the rest. Experience helps, but capability matters more.',
  },
  {
    question: 'What are the working hours?',
    answer:
      'US business hours (typically 9am-6pm EST/PST). We are flexible within that window — some dispatchers work mornings, some evenings. You pick what works.',
  },
  {
    question: 'Is this a stable long-term job?',
    answer:
      'Yes. We are scaling operations, not running a gig economy. Top performers have been with us 18+ months and counting.',
  },
  {
    question: 'How does the application process work?',
    answer:
      'Email your resume to hr@qn8.app. We review within 48 hours. If you are a fit, we will send a quick assessment. Pass that, we do a video interview. Simple.',
  },
  {
    question: "What's the pay progression?",
    answer:
      'Start at $500-700/mo base depending on experience. Hit performance targets = bonuses. Consistently excellent = raises and promotions to senior roles ($800-1200/mo).',
  },
  {
    question: 'What equipment do I need?',
    answer:
      'Reliable computer (does not need to be fancy), stable internet, headset for calls. That is it.',
  },
]);

const breadcrumbs = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Careers', url: '/careers' },
]);

export default function CareersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(dispatcherJobPosting),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(careersFAQ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbs),
        }}
      />
      <CareersContent />
    </>
  );
}
