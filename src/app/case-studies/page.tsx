import type { Metadata } from 'next';
import { CaseStudiesContent } from '@/components/case-studies/CaseStudiesContent';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Real results from real operations. See how QANAT built AI-powered infrastructure that scaled a startup from zero to $2.5M ARR in 18 months.',
};

export default function CaseStudiesPage() {
  return <CaseStudiesContent />;
}
