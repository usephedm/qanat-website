'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';

export function AboutHero() {
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
            About QANAT
          </span>
          <h1 className="text-heading-1 max-w-3xl">
            Named after the ancient engineering that made
            <span className="accent-gradient"> civilizations </span>
            possible
          </h1>
          <p className="text-body-lg mt-6 max-w-2xl">
            Qanat systems — underground channels built thousands of years ago in the Middle East — 
            moved water across entire civilizations without pumps or power. Just precision engineering. 
            That&apos;s the kind of infrastructure we build for modern businesses.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
