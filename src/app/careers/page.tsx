import type { Metadata } from 'next';
import { CareersContent } from '@/components/careers/CareersContent';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join QANAT — we\'re building the operational infrastructure of the future. We hire elite operators, engineers, and thinkers who want to build something real.',
};

export default function CareersPage() {
  return <CareersContent />;
}
