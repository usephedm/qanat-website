'use client';

import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/animations/FadeIn';
import { MagneticButton } from '@/components/animations/MagneticButton';

export function CTA() {
  return (
    <section className="py-24 md:py-32 relative">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(20,184,166,0.06),transparent)]" />

      <Container className="relative">
        <div className="text-center max-w-3xl mx-auto">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border text-xs font-medium text-muted">
              Ready to start?
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-heading-1 mt-8">
              Let&apos;s build your
              <br />
              <span className="accent-gradient">invisible advantage</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-body-lg mt-6 max-w-xl mx-auto">
              Whether you need to optimize dispatch operations, build AI automation,
              or transform facility management — we should talk.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <MagneticButton>
                <Button href="/contact" size="lg">
                  Start a Conversation
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
                    <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button href="/careers" variant="secondary" size="lg">
                  Join the Team
                </Button>
              </MagneticButton>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
