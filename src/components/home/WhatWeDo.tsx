'use client';

import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';
import { SERVICES } from '@/lib/constants';
import Link from 'next/link';

function ServiceIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    dispatch: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    ai: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    team: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  };

  return (
    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
      {icons[type] || icons.dispatch}
    </div>
  );
}

export function WhatWeDo() {
  return (
    <section className="py-24 md:py-32 relative">
      <Container>
        <SectionHeading
          label="What We Build"
          title="Three systems. One operational machine."
          description="Every successful company runs on invisible infrastructure. We build it, manage it, and make it intelligent."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16" stagger={0.15}>
          {SERVICES.map((service) => (
            <StaggerItem key={service.id}>
              <Link href={`/services#${service.id}`}>
                <div className="group relative p-8 rounded-2xl border border-border bg-surface/50 hover:bg-surface-elevated hover:border-border-hover transition-all duration-300 h-full">
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.04),transparent_70%)]" />

                  <div className="relative z-10">
                    <ServiceIcon type={service.icon} />

                    <h3 className="text-heading-3 text-foreground mt-6">
                      {service.title}
                    </h3>
                    <p className="text-xs font-medium uppercase tracking-[0.15em] text-accent mt-1">
                      {service.subtitle}
                    </p>
                    <p className="text-body mt-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Key outcome highlight */}
                    <div className="mt-6 p-3 rounded-lg bg-accent/5 border border-accent/10">
                      <p className="text-sm text-accent font-medium">
                        {service.outcomes[0]}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      See how it works
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
