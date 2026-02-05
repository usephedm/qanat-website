'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/animations/FadeIn';
import { MagneticButton } from '@/components/animations/MagneticButton';

export function CTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleQuickCapture(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  }

  return (
    <section className="py-24 md:py-32 relative">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(20,184,166,0.06),transparent)]" />

      <Container className="relative">
        <div className="text-center max-w-3xl mx-auto">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border text-xs font-medium text-muted">
              Ready to build?
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-heading-1 mt-8">
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
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <MagneticButton>
                <Button href="/demo" size="lg">
                  Request a Demo
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
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
              {submitted ? (
                <div className="p-4 rounded-xl border border-accent/20 bg-accent/5">
                  <p className="text-sm text-accent font-medium">
                    ✓ We&apos;ll be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <p className="text-xs text-muted mb-3">
                    Or leave your email — we&apos;ll reach out with a custom operations assessment.
                  </p>
                  <form onSubmit={handleQuickCapture} className="flex gap-2">
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 px-4 py-3 rounded-full bg-surface border border-border text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-full bg-accent text-[#0a0a0a] text-sm font-medium hover:bg-accent-light transition-colors duration-200 flex-shrink-0"
                    >
                      Get Assessment
                    </button>
                  </form>
                </>
              )}
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
