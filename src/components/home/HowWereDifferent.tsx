'use client';

import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealText } from '@/components/animations/RevealText';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';
import { VALUES } from '@/lib/constants';

export function HowWereDifferent() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.02] rounded-full blur-3xl pointer-events-none" />

      <Container className="relative">
        <SectionHeading
          label="How We&apos;re Different"
          title="Built different. Not just different words."
        />

        {/* Philosophy Statement */}
        <FadeIn delay={0.2} className="mt-12">
          <RevealText className="text-heading-2 text-foreground/90 leading-relaxed max-w-4xl">
            The ancient qanat systems of the Middle East moved water across entire civilizations through invisible underground channels. No pumps. No power. Just precision engineering that worked for millennia. That&apos;s how we think about operations.
          </RevealText>
        </FadeIn>

        {/* Values Grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-px mt-20 border border-border rounded-2xl overflow-hidden bg-border"
          stagger={0.1}
          delay={0.3}
        >
          {VALUES.map((value, i) => (
            <StaggerItem key={value.title}>
              <div className="bg-[#0a0a0a] p-10 md:p-12 h-full">
                <span className="text-xs font-mono text-accent/60">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-heading-3 text-foreground mt-3">
                  {value.title}
                </h3>
                <p className="text-body mt-4">
                  {value.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
