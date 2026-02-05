import type { Metadata } from 'next';
import { AboutHero } from '@/components/about/AboutHero';
import { Story } from '@/components/about/Story';
import { Values } from '@/components/about/Values';
import { CTA } from '@/components/home/CTA';

export const metadata: Metadata = {
  title: 'About',
  description:
    'QANAT builds invisible operational infrastructure — AI-driven systems that power businesses across borders. Founded by Yousof Al-Ali.',
};

export default function AboutPage() {
  return (
    <>
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
