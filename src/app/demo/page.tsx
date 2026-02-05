import type { Metadata } from 'next';
import { DemoContent } from '@/components/demo/DemoContent';

export const metadata: Metadata = {
  title: 'Request a Demo',
  description:
    'See QANAT\'s AI-powered operations infrastructure in action. Request a personalized demo of our dispatch automation, AI agents, and team scaling systems.',
};

export default function DemoPage() {
  return <DemoContent />;
}
