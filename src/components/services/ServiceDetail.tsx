'use client';

import { Container } from '@/components/ui/Container';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/Button';
import type { SERVICES } from '@/lib/constants';

interface ServiceDetailProps {
  service: (typeof SERVICES)[number];
  index: number;
}

export function ServiceDetail({ service, index }: ServiceDetailProps) {
  const isEven = index % 2 === 0;

  return (
    <section id={service.id} className="py-24 md:py-32 scroll-mt-24">
      <Container>
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start ${
            isEven ? '' : 'lg:[direction:rtl]'
          }`}
        >
          {/* Content */}
          <div className={isEven ? '' : 'lg:[direction:ltr]'}>
            <FadeIn>
              <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent mb-4">
                {service.subtitle}
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="text-heading-2">{service.title}</h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-body-lg mt-6">{service.description}</p>
            </FadeIn>

            {/* Features */}
            <StaggerContainer className="mt-8 space-y-3" stagger={0.08} delay={0.3}>
              {service.features.map((feature) => (
                <StaggerItem key={feature}>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="text-accent">
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn delay={0.5}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/demo" variant="primary" size="sm">
                  Get a Demo
                </Button>
                <Button href="/case-studies" variant="secondary" size="sm">
                  See Results
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Outcomes & visual */}
          <div className={isEven ? '' : 'lg:[direction:ltr]'}>
            <FadeIn direction={isEven ? 'right' : 'left'} delay={0.3}>
              <div className="space-y-4">
                {/* Outcomes */}
                <div className="p-8 rounded-2xl border border-accent/20 bg-accent/5">
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-accent block mb-6">
                    Proven Outcomes
                  </span>
                  <div className="space-y-4">
                    {service.outcomes.map((outcome) => (
                      <div key={outcome} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-md bg-accent/20 flex items-center justify-center mt-0.5">
                          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="text-accent">
                            <path d="M4 8l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-foreground">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Abstract visual */}
                <div className="relative aspect-[4/3] rounded-2xl border border-border bg-surface/30 overflow-hidden">
                  <div className="absolute inset-0 grid-pattern opacity-50" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.08),transparent_70%)]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-32 h-32">
                      <div className="absolute inset-0 rounded-full border border-accent/20 animate-[spin_20s_linear_infinite]" />
                      <div className="absolute inset-4 rounded-full border border-accent/15 animate-[spin_15s_linear_infinite_reverse]" />
                      <div className="absolute inset-8 rounded-full border border-accent/10 animate-[spin_10s_linear_infinite]" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-accent/40" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-accent/20" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-accent/20" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
