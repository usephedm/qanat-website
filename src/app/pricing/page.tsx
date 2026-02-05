import type { Metadata } from 'next';
import { PricingContent } from '@/components/pricing/PricingContent';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Transparent pricing for QANAT\'s AI-powered operations infrastructure. From startup launches to enterprise deployments.',
};

export default function PricingPage() {
  return <PricingContent />;
}
