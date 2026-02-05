import type { Metadata } from 'next';
import { ContactContent } from '@/components/contact/ContactContent';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with QANAT. Whether you need operational infrastructure, AI automation, or want to join the team — we\'d love to hear from you.',
};

export default function ContactPage() {
  return <ContactContent />;
}
