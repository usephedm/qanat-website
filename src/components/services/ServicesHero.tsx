'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { EASE, DURATION } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function ServicesHero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-24 relative" aria-labelledby="services-heading">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(20,184,166,0.06),transparent)]" aria-hidden="true" />

      <Container className="relative">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.slow, ease: EASE.enter }}
        >
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent mb-6">
            Services
          </span>
          <h1 id="services-heading" className="text-heading-1 max-w-4xl">
            Three systems that turn
            <span className="accent-gradient"> chaos into clockwork</span>
          </h1>
          <p className="text-body-lg mt-6 max-w-2xl">
            We don&apos;t sell advice. We build, deploy, and operate the AI-powered
            systems that let companies scale without proportionally scaling headcount.
            Each service is battle-tested in production.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
