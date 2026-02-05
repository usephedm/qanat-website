'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/Button';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { EASE, DURATION } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const faqs = [
  {
    question: 'Who is this for?',
    answer:
      "Companies scaling from 5-50 people who need operational infrastructure but don't have the capital to hire a full ops team. If you're spending more time managing chaos than growing revenue, we're for you.",
  },
  {
    question: 'What exactly do you build?',
    answer:
      'Three interlocking systems: (1) AI-powered dispatch engines that route work intelligently, (2) operational team scaling (hiring, training, management), and (3) intelligence layers that make your operations smarter over time. Think of it as a CTO + COO + ops team in one.',
  },
  {
    question: 'How is this different from hiring an agency or consultants?',
    answer:
      "Agencies give you reports. Consultants give you advice. We build and manage the actual infrastructure. You get the systems, the team, and the ongoing management — not a PDF.",
  },
  {
    question: "What's the timeline? How fast can you move?",
    answer:
      "First operational improvements ship within 2 weeks. Full infrastructure buildout typically takes 8-12 weeks. We move fast because we own the entire stack — no waiting on third parties or approval chains.",
  },
  {
    question: 'Do I need technical infrastructure already in place?',
    answer:
      "No. We build from zero. If you have existing systems, we integrate. If you don't, we build them. Either way, you get operational infrastructure that works.",
  },
  {
    question: 'What does pricing look like?',
    answer:
      "Depends on scope. Small dispatch systems start around $15K. Full operational infrastructure (team + systems + management) typically runs $50-150K for the buildout, then ongoing management fees. Book a 15-minute call and we'll give you a custom estimate.",
  },
  {
    question: "What if it doesn't work?",
    answer:
      "We build in stages. You see results at every milestone. If something isn't working, we fix it or part ways — no long-term lock-in. Our reputation depends on delivering results, not contracts.",
  },
  {
    question: 'Can you work with my existing team?',
    answer:
      "Yes. We integrate with your current setup and train your team on the systems we build. You're not outsourcing ops — you're augmenting your team with infrastructure and expertise.",
  },
  {
    question: 'Do you only work with US companies?',
    answer:
      "No. We're remote-first and work globally. Most clients are US-based, but we've built ops infrastructure for companies in Europe, MENA, and Asia. If you speak English and have operational chaos, we can help.",
  },
  {
    question: 'What happens on the 15-minute call?',
    answer:
      "We ask about your current operations, identify the biggest bottleneck, and give you one clear next step — whether that's working with us or not. No pitch deck. No sales pressure. Just a surgical audit and honest advice.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-start justify-between gap-4 text-left group hover:opacity-80 transition-opacity"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-foreground group-hover:text-accent transition-colors">
          {question}
        </span>
        <motion.svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="flex-shrink-0 text-accent mt-0.5"
          animate={prefersReducedMotion ? {} : { rotate: isOpen ? 180 : 0 }}
          transition={{ duration: DURATION.fast, ease: EASE.snap }}
          aria-hidden="true"
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={prefersReducedMotion ? {} : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: DURATION.normal, ease: EASE.gentle }}
            className="overflow-hidden"
          >
            <p className="text-body text-muted pb-6 pr-12">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 relative" aria-labelledby="faq-heading">
      <Container className="relative">
        <SectionHeading
          label="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know before booking a call."
        />

        <div className="mt-16 max-w-3xl mx-auto">
          <StaggerContainer stagger={0.05}>
            {faqs.map((faq, index) => (
              <StaggerItem key={index}>
                <FAQItem
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* CTA after FAQ */}
          <FadeIn delay={0.5} className="mt-12 text-center p-8 rounded-2xl border border-border bg-surface/30">
            <p className="text-body-lg text-foreground mb-6">Still have questions?</p>
            <MagneticButton>
              <Button href="/contact" size="lg">
                Book a 15-Minute Ops Call
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="ml-1"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8h10m0 0L9 4m4 4L9 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </MagneticButton>
          </FadeIn>
        </div>
      </Container>

      {/* FAQ Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
