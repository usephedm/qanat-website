import { Hero } from '@/components/home/Hero';
import { WhatWeDo } from '@/components/home/WhatWeDo';
import { StatsSection } from '@/components/home/StatsSection';
import { CaseStudyPreview } from '@/components/home/CaseStudyPreview';
import { ProcessSection } from '@/components/home/ProcessSection';
import { HowWereDifferent } from '@/components/home/HowWereDifferent';
import { FAQ } from '@/components/home/FAQ';
import { RecruitmentPreview } from '@/components/home/RecruitmentPreview';
import { CTA } from '@/components/home/CTA';
import { generateWebsiteSchema } from '@/lib/metadata';

const websiteSchema = generateWebsiteSchema();

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <Hero />
      <div className="divider" />
      <WhatWeDo />
      <div className="divider" />
      <StatsSection />
      <div className="divider" />
      <CaseStudyPreview />
      <div className="divider" />
      <ProcessSection />
      <div className="divider" />
      <HowWereDifferent />
      <div className="divider" />
      <FAQ />
      <div className="divider" />
      <RecruitmentPreview />
      <div className="divider" />
      <CTA />
    </>
  );
}
