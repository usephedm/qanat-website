'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { EASE, DURATION } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function AboutHero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-24 relative" aria-labelledby="about-heading">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(20,184,166,0.06),transparent)]" aria-hidden="true" />

      <Container className="relative">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.slow, ease: EASE.enter }}
        >
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent mb-6">
            About QANAT
          </span>
          <h1 id="about-heading" className="text-heading-1 max-w-3xl">
            Named after the engineering that made
            <span className="accent-gradient"> civilizations </span>
            possible
          </h1>
          <p className="text-body-lg mt-6 max-w-2xl">
            Qanat systems — underground channels built thousands of years ago in the
            Middle East — moved water across entire civilizations without pumps or
            power. Just precision engineering. That&apos;s the kind of infrastructure
            we build for modern businesses.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
