'use client';

import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/animations/FadeIn';
import { MagneticButton } from '@/components/animations/MagneticButton';

export function CTA() {
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

          {/* Conversion Catalyst - Urgency + Social Proof */}
          <FadeIn delay={0.3}>
            <div className="mt-10 max-w-md mx-auto mb-6 p-4 rounded-xl bg-gradient-to-br from-accent/5 to-accent/10 border-l-4 border-accent">
              <div className="flex items-center gap-2 text-sm text-foreground mb-2">
                <svg width="8" height="8" className="text-accent animate-pulse">
                  <circle cx="4" cy="4" r="4" fill="currentColor" />
                </svg>
                <span>
                  <strong className="font-semibold">12 operations calls</strong> booked this week
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <svg width="16" height="16" viewBox="0 0 16 16" className="text-accent flex-shrink-0">
                  <path
                    d="M3 2h10a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1z"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="1.5"
                  />
                  <path d="M1 6h14M5 1v2M11 1v2" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <span>
                  <strong className="font-semibold">3 slots left</strong> this week — Next available: Thu 2PM EST
                </span>
              </div>
            </div>
          </FadeIn>

          {/* Dual CTAs */}
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6" role="group" aria-label="Call to action">
              <MagneticButton>
                <Button href="/contact" size="lg">
                  Book a 15-Minute Ops Call
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1" aria-hidden="true">
                    <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button href="/contact" variant="secondary" size="lg">
                  Get a Free Operations Assessment
                </Button>
              </MagneticButton>
            </div>
          </FadeIn>

          {/* Risk Reversal Guarantee */}
          <FadeIn delay={0.5}>
            <div className="mt-8 max-w-md mx-auto flex items-start gap-3 p-4 rounded-xl bg-surface/50 border border-border">
              <svg width="20" height="20" viewBox="0 0 20 20" className="flex-shrink-0 mt-0.5 text-accent">
                <path
                  d="M10 1L3 4v6c0 5 3 8 7 9 4-1 7-4 7-9V4l-7-3z"
                  fill="currentColor"
                  opacity="0.1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M7 10l2 2 4-4"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">Zero-Risk Guarantee</p>
                <p className="text-xs text-muted mt-1">
                  If we can&apos;t identify 3 actionable improvements in 15 minutes, we&apos;ll send you a $100 Amazon gift card. That&apos;s our promise.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Trust signal */}
          <FadeIn delay={0.6}>
            <p className="mt-8 text-xs text-muted/60">
              No pitch deck. No fluff. Just real operational infrastructure.
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
