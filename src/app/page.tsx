import { Hero } from '@/components/home/Hero';
import { WhatWeDo } from '@/components/home/WhatWeDo';
import { StatsSection } from '@/components/home/StatsSection';
import { CaseStudyPreview } from '@/components/home/CaseStudyPreview';
import { ProcessSection } from '@/components/home/ProcessSection';
import { HowWereDifferent } from '@/components/home/HowWereDifferent';
import { FAQ } from '@/components/home/FAQ';
import { RecruitmentPreview } from '@/components/home/RecruitmentPreview';
import { CTA } from '@/components/home/CTA';
import { generateWebsiteSchema, generateFAQSchema } from '@/lib/metadata';

const websiteSchema = generateWebsiteSchema();

const faqData = [
  { question: 'Who is this for?', answer: 'Companies scaling from 5-50 people who need operational infrastructure but don\'t have the capital to hire a full ops team. If you\'re spending more time managing chaos than growing revenue, we\'re for you.' },
  { question: 'What exactly do you build?', answer: 'Three interlocking systems: (1) AI-powered dispatch engines that route work intelligently, (2) operational team scaling (hiring, training, management), and (3) intelligence layers that make your operations smarter over time.' },
  { question: 'How is this different from hiring an agency?', answer: 'Agencies give you reports. Consultants give you advice. We build and manage the actual infrastructure. You get the systems, the team, and the ongoing management — not a PDF.' },
  { question: 'What\'s the timeline?', answer: 'First operational improvements ship within 2 weeks. Full infrastructure buildout typically takes 8-12 weeks. We move fast because we own the entire stack.' },
  { question: 'Do I need technical infrastructure already?', answer: 'No. We build from zero. If you have existing systems, we integrate. If you don\'t, we build them.' },
  { question: 'What does pricing look like?', answer: 'Depends on scope. Small dispatch systems start around $15K. Full operational infrastructure typically runs $50-150K for the buildout, then ongoing management fees.' },
  { question: 'What if it doesn\'t work?', answer: 'We build in stages. You see results at every milestone. If something isn\'t working, we fix it or part ways — no long-term lock-in.' },
  { question: 'Can you work with my existing team?', answer: 'Yes. We integrate with your current setup and train your team on the systems we build. You\'re not outsourcing ops — you\'re augmenting your team.' },
  { question: 'Do you only work with US companies?', answer: 'No. We\'re remote-first and work globally. Most clients are US-based, but we\'ve built ops infrastructure for companies in Europe, MENA, and Asia.' },
  { question: 'What happens on the 15-minute call?', answer: 'We listen. You describe the operational pain, we tell you honestly if we can help and how. No pitch deck, no pressure. If there\'s a fit, we propose next steps.' },
];

const faqSchema = generateFAQSchema(faqData);

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
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
