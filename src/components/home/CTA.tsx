'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/animations/FadeIn';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { EASE, DURATION, SPRING } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function CTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  function handleQuickCapture(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  }

  return (
    <section className="py-24 md:py-32 relative" aria-labelledby="cta-heading">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(20,184,166,0.06),transparent)]" aria-hidden="true" />

      <Container className="relative">
        <div className="text-center max-w-3xl mx-auto">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border text-xs font-medium text-muted">
              Ready to build?
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 id="cta-heading" className="text-heading-1 mt-8">
              Stop planning operations.
              <br />
              <span className="accent-gradient">Start building them.</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-body-lg mt-6 max-w-xl mx-auto">
              Whether you need to automate dispatch, scale a team, or build
              AI-powered operations from scratch — the conversation starts here.
            </p>
          </FadeIn>

          {/* Primary CTAs */}
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap justify-center gap-4 mt-10" role="group" aria-label="Call to action">
              <MagneticButton>
                <Button href="/demo" size="lg">
                  Request a Demo
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1" aria-hidden="true">
                    <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button href="/playbook" variant="secondary" size="lg">
                  Download AI Ops Playbook
                </Button>
              </MagneticButton>
            </div>
          </FadeIn>

          {/* Quick email capture */}
          <FadeIn delay={0.4}>
            <div className="mt-12 max-w-md mx-auto">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: DURATION.normal, ease: EASE.enter }}
                    className="p-4 rounded-xl border border-accent/20 bg-accent/5"
                    role="status"
                    aria-live="polite"
                  >
                    <p className="text-sm text-accent font-medium flex items-center justify-center gap-2">
                      <motion.svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.2, type: 'spring', ...SPRING.bouncy }}
                        aria-hidden="true"
                      >
                        <path d="M4 8l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </motion.svg>
                      We&apos;ll be in touch within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                  >
                    <p className="text-xs text-muted mb-3">
                      Or leave your email — we&apos;ll reach out with a custom operations assessment.
                    </p>
                    <form
                      onSubmit={handleQuickCapture}
                      className="flex gap-2"
                      aria-label="Quick email capture"
                    >
                      <div className="relative flex-1">
                        <input
                          type="email"
                          required
                          placeholder="you@company.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onFocus={() => setFocused(true)}
                          onBlur={() => setFocused(false)}
                          className="w-full px-4 py-3 rounded-full bg-surface border border-border text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200"
                          aria-label="Email address"
                        />
                        {/* Focus glow ring */}
                        {!prefersReducedMotion && (
                          <motion.div
                            className="absolute inset-0 rounded-full pointer-events-none"
                            animate={{
                              boxShadow: focused
                                ? '0 0 0 3px rgba(20, 184, 166, 0.1), 0 0 20px rgba(20, 184, 166, 0.05)'
                                : '0 0 0 0px transparent',
                            }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </div>
                      <motion.button
                        type="submit"
                        className="px-6 py-3 rounded-full bg-accent text-[#0a0a0a] text-sm font-medium hover:bg-accent-light transition-colors duration-200 flex-shrink-0 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background outline-none"
                        whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
                      >
                        Get Assessment
                      </motion.button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>

          {/* Trust signal */}
          <FadeIn delay={0.5}>
            <p className="mt-8 text-xs text-muted/60">
              No pitch deck. No fluff. Just real operational infrastructure.
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
