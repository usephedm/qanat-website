import { Hero } from '@/components/home/Hero';
import { WhatWeDo } from '@/components/home/WhatWeDo';
import { HowWereDifferent } from '@/components/home/HowWereDifferent';
import { CTA } from '@/components/home/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="divider" />
      <WhatWeDo />
      <div className="divider" />
      <HowWereDifferent />
      <div className="divider" />
      <CTA />
    </>
  );
}
