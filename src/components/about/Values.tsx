'use client';

import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';
import { VALUES } from '@/lib/constants';

export function Values() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading
          label="Our Values"
          title="Principles that shape everything we build"
          description="These aren't words on a wall. They're the filters we use to make every decision."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16" stagger={0.12}>
          {VALUES.map((value, i) => (
            <StaggerItem key={value.title}>
              <div className="group relative p-8 md:p-10 rounded-2xl border border-border hover:border-border-hover bg-surface/30 hover:bg-surface/60 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-sm font-mono text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-heading-3 text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-body mt-3">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
