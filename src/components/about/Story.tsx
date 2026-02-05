'use client';

import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/animations/FadeIn';

export function Story() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Story */}
          <div>
            <FadeIn>
              <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent mb-4">
                The Founder
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="text-heading-2">
                From intelligence analysis to AI operations
              </h2>
            </FadeIn>

            <div className="mt-8 space-y-6">
              <FadeIn delay={0.2}>
                <p className="text-body-lg">
                  QANAT was founded by Yousof Al-Ali — known as V — who spent years 
                  at the intersection of intelligence analysis, technology, and 
                  cross-border operations.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p className="text-body">
                  The insight was simple but powerful: most businesses don&apos;t have a 
                  talent problem or a strategy problem. They have an 
                  <em className="text-foreground not-italic font-medium"> operations problem</em>. 
                  The gap between what a company wants to do and what it actually 
                  executes is almost always an infrastructure gap.
                </p>
              </FadeIn>

              <FadeIn delay={0.4}>
                <p className="text-body">
                  QANAT exists to close that gap. We build the invisible systems — 
                  AI agents, dispatch platforms, operational protocols — that let 
                  businesses execute at the speed of their ambition.
                </p>
              </FadeIn>
            </div>
          </div>

          {/* Right: Key facts */}
          <div className="lg:pt-16">
            <FadeIn delay={0.3} direction="right">
              <div className="space-y-px rounded-2xl overflow-hidden border border-border">
                {[
                  { label: 'Founded', value: '2025' },
                  { label: 'Headquarters', value: 'Wyoming, USA' },
                  { label: 'Operations', value: 'Cross-Border (US & Middle East)' },
                  { label: 'Focus', value: 'AI-Powered Operations' },
                  { label: 'Team', value: 'Small & Elite' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-center px-6 py-5 bg-surface/50 hover:bg-surface-elevated transition-colors duration-200"
                  >
                    <span className="text-sm text-muted">{item.label}</span>
                    <span className="text-sm font-medium text-foreground">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.5} direction="right">
              <blockquote className="mt-10 pl-6 border-l-2 border-accent/30">
                <p className="text-body-lg text-foreground/80 italic">
                  &ldquo;The best infrastructure is the kind you never think about. 
                  It just works.&rdquo;
                </p>
                <cite className="mt-3 block text-sm text-muted not-italic">
                  — V, Founder & CEO
                </cite>
              </blockquote>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
