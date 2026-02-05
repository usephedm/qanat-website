import { Hero } from '@/components/home/Hero';
import { WhatWeDo } from '@/components/home/WhatWeDo';
import { CaseStudyPreview } from '@/components/home/CaseStudyPreview';
import { HowWereDifferent } from '@/components/home/HowWereDifferent';
import { RecruitmentPreview } from '@/components/home/RecruitmentPreview';
import { CTA } from '@/components/home/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="divider" />
      <WhatWeDo />
      <div className="divider" />
      <CaseStudyPreview />
      <div className="divider" />
      <HowWereDifferent />
      <div className="divider" />
      <RecruitmentPreview />
      <div className="divider" />
      <CTA />
    </>
  );
}
