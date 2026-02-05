import type { Metadata } from 'next';
import { PlaybookContent } from '@/components/playbook/PlaybookContent';

export const metadata: Metadata = {
  title: 'AI Operations Playbook — Free Download',
  description:
    'The definitive guide to building AI-powered operations from scratch. Dispatch automation, team scaling, and revenue systems — 47 pages of real-world frameworks from the team that built it.',
};

export default function PlaybookPage() {
  return <PlaybookContent />;
}
