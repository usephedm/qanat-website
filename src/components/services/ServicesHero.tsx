'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';

export function ServicesHero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(20,184,166,0.06),transparent)]" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent mb-6">
            Services
          </span>
          <h1 className="text-heading-1 max-w-4xl">
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
