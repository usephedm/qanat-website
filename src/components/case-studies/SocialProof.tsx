'use client';

import { Container } from '@/components/ui/Container';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';
import { CLIENT_LOGOS } from '@/lib/constants';
import Image from 'next/image';

export function SocialProof() {
  return (
    <section className="py-24 md:py-32 bg-surface/20">
      <Container>
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Trusted By
            </span>
            <h2 className="text-heading-2 mt-4">
              Building operational infrastructure
              <br />
              for the next wave of category leaders
            </h2>
            <p className="text-sm text-muted mt-4">
              We don&apos;t chase logos. We build systems. These companies trusted us
              to engineer their operations from the ground up.
            </p>
          </div>
        </FadeIn>

        {/* Logo Grid */}
        <StaggerContainer
          className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto"
          stagger={0.08}
        >
          {CLIENT_LOGOS.map((client) => (
            <StaggerItem key={client.name}>
              <div className="flex items-center justify-center h-20 p-6 rounded-xl border border-border bg-surface/50 hover:bg-surface transition-colors group">
                <div className="relative w-full h-full opacity-50 group-hover:opacity-80 transition-opacity">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all"
                  />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Stats Grid */}
        <FadeIn delay={0.4}>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-xl border border-accent/20 bg-accent/5">
              <div className="text-3xl font-bold text-accent">$12M+</div>
              <div className="text-sm text-foreground/80 mt-1">
                Combined ARR Powered
              </div>
              <div className="text-xs text-muted mt-1">
                Across active deployments
              </div>
            </div>
            <div className="text-center p-6 rounded-xl border border-accent/20 bg-accent/5">
              <div className="text-3xl font-bold text-accent">200+</div>
              <div className="text-sm text-foreground/80 mt-1">
                Operators Managed
              </div>
              <div className="text-xs text-muted mt-1">
                Cross-border, multi-timezone teams
              </div>
            </div>
            <div className="text-center p-6 rounded-xl border border-accent/20 bg-accent/5">
              <div className="text-3xl font-bold text-accent">98.7%</div>
              <div className="text-sm text-foreground/80 mt-1">Average SLA</div>
              <div className="text-xs text-muted mt-1">
                Across all client operations
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Industries */}
        <FadeIn delay={0.5}>
          <div className="mt-16 text-center">
            <p className="text-xs text-muted uppercase tracking-wider mb-4">
              Industries We&apos;ve Scaled
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Home Services',
                'Field Dispatch',
                'Logistics & Supply Chain',
                'Healthcare Operations',
                'Property Management',
                'On-Demand Services',
              ].map((industry) => (
                <span
                  key={industry}
                  className="px-4 py-2 rounded-full text-xs font-medium border border-border bg-surface/50 text-foreground/70"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
