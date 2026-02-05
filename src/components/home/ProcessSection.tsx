'use client';

import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/Button';
import { MagneticButton } from '@/components/animations/MagneticButton';

const steps = [
  {
    number: 1,
    title: 'Pick Your Time (30 seconds)',
    description:
      'Choose a slot from our live calendar. Instant confirmation. Calendar invite sent immediately.',
  },
  {
    number: 2,
    title: 'Pre-Call Questionnaire (2 minutes)',
    description:
      '5 quick questions about your business so we can hit the ground running. Revenue size, team size, main bottleneck.',
  },
  {
    number: 3,
    title: '15-Minute Ops Audit (Zoom)',
    description:
      "We ask 5-7 diagnostic questions. You walk us through what's breaking. We identify the top 3 bottlenecks.",
  },
  {
    number: 4,
    title: 'You Get a Clear Next Step',
    description:
      'We tell you exactly what to build, how long it takes, and what it costs. Then you decide. No follow-up pressure.',
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 md:py-32 relative bg-gradient-to-b from-background to-surface/30" aria-labelledby="process-heading">
      <Container className="relative">
        <SectionHeading
          label="The Process"
          title="What happens when you book"
          description="No surprises. No sales pitch. Just a structured 15-minute ops audit."
        />

        <div className="mt-16 max-w-3xl mx-auto">
          <StaggerContainer stagger={0.1}>
            {steps.map((step) => (
              <StaggerItem key={step.number}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent-dark text-[#0a0a0a] font-semibold text-xl flex items-center justify-center shadow-[0_4px_12px_rgba(20,184,166,0.3)]">
                      {step.number}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-heading-3 text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-body text-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* CTA after process */}
          <FadeIn delay={0.5} className="mt-12 pt-8 border-t border-border text-center">
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
            <p className="mt-4 text-sm text-muted">
              Average time from booking to call: <span className="text-foreground font-medium">48 hours</span>
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
