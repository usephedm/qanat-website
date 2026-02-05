'use client';

import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/Button';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { CASE_STUDIES } from '@/lib/constants';

export function CaseStudyPreview() {
  const study = CASE_STUDIES[0];

  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(20,184,166,0.03),transparent)]" />

      <Container className="relative">
        <SectionHeading
          label="Case Study"
          title="From zero to $2.5M ARR in 18 months"
          description="A US home services company needed to scale from 5 contractors to a full dispatch operation. Here's what happened."
        />

        {/* Results grid */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16" stagger={0.1}>
          {study.results.map((result) => (
            <StaggerItem key={result.label}>
              <div className="text-center p-6 rounded-2xl border border-border bg-surface/30">
                <div className="text-3xl md:text-4xl font-semibold text-accent tracking-tight">
                  {result.metric}
                </div>
                <div className="text-sm text-foreground mt-2 font-medium">
                  {result.label}
                </div>
                <div className="text-xs text-muted mt-1">
                  {result.sublabel}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Timeline preview */}
        <FadeIn delay={0.3} className="mt-16">
          <div className="relative p-8 md:p-12 rounded-2xl border border-border bg-surface/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-accent">
                  {study.industry}
                </span>
                <h3 className="text-heading-3 text-foreground mt-2">
                  {study.title}
                </h3>
                <p className="text-body mt-4">
                  {study.challenge}
                </p>
              </div>
              <div className="flex flex-col justify-between">
                <blockquote className="border-l-2 border-accent/30 pl-6">
                  <p className="text-body-lg text-foreground/80 italic">
                    &ldquo;{study.testimonial.quote}&rdquo;
                  </p>
                  <cite className="mt-3 block text-sm text-muted not-italic">
                    — {study.testimonial.author}
                  </cite>
                </blockquote>
                <div className="mt-8">
                  <MagneticButton>
                    <Button href="/case-studies" variant="secondary">
                      Read Full Case Study
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="ml-1">
                        <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Button>
                  </MagneticButton>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
