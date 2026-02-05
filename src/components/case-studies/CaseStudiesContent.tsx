'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';
import { RevealText } from '@/components/animations/RevealText';
import { Button } from '@/components/ui/Button';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { CASE_STUDIES } from '@/lib/constants';

function TimelineStep({
  month,
  event,
  index,
  total,
}: {
  month: string;
  event: string;
  index: number;
  total: number;
}) {
  return (
    <div className="relative flex gap-6">
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-accent border-2 border-accent/30 flex-shrink-0 z-10" />
        {index < total - 1 && (
          <div className="w-px flex-1 bg-gradient-to-b from-accent/30 to-border" />
        )}
      </div>
      {/* Content */}
      <div className="pb-10">
        <span className="text-xs font-mono text-accent uppercase tracking-wider">
          {month}
        </span>
        <p className="text-sm text-foreground/80 mt-1">{event}</p>
      </div>
    </div>
  );
}

export function CaseStudiesContent() {
  const study = CASE_STUDIES[0];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(20,184,166,0.06),transparent)]" />

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent mb-6">
              Case Studies
            </span>
            <h1 className="text-heading-1 max-w-4xl">
              Real operations.
              <span className="accent-gradient"> Real results.</span>
            </h1>
            <p className="text-body-lg mt-6 max-w-2xl">
              We don&apos;t sell promises — we show receipts. Every metric on this
              page comes from actual deployments.
            </p>
          </motion.div>
        </Container>
      </section>

      <div className="divider" />

      {/* Featured Case Study */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <FadeIn>
                <div className="sticky top-28">
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-accent">
                    {study.industry}
                  </span>
                  <h2 className="text-heading-2 mt-2">{study.title}</h2>
                  <p className="text-sm text-muted mt-4">{study.subtitle}</p>

                  {/* Results sidebar */}
                  <div className="mt-10 space-y-6">
                    {study.results.map((result) => (
                      <div key={result.label}>
                        <div className="text-2xl font-semibold text-accent">
                          {result.metric}
                        </div>
                        <div className="text-sm text-foreground font-medium mt-0.5">
                          {result.label}
                        </div>
                        <div className="text-xs text-muted">{result.sublabel}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Main content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Challenge */}
              <FadeIn>
                <div>
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-accent">
                    The Challenge
                  </span>
                  <RevealText className="text-heading-3 text-foreground/90 leading-relaxed mt-4">
                    {study.challenge}
                  </RevealText>
                </div>
              </FadeIn>

              {/* Solution */}
              <FadeIn delay={0.1}>
                <div>
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-accent">
                    What We Built
                  </span>
                  <p className="text-body-lg mt-4">{study.solution}</p>
                </div>
              </FadeIn>

              {/* Timeline */}
              <FadeIn delay={0.2}>
                <div>
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-accent mb-8 block">
                    The Timeline
                  </span>
                  <div className="mt-6">
                    {study.timeline.map((step, i) => (
                      <TimelineStep
                        key={step.month}
                        month={step.month}
                        event={step.event}
                        index={i}
                        total={study.timeline.length}
                      />
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Testimonial */}
              <FadeIn delay={0.3}>
                <blockquote className="p-8 md:p-10 rounded-2xl border border-accent/20 bg-accent/5">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    className="text-accent/30 mb-4"
                  >
                    <path
                      d="M10 16H6a4 4 0 01-4-4V8a4 4 0 014-4h4a4 4 0 014 4v12a8 8 0 01-8 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M26 16h-4a4 4 0 01-4-4V8a4 4 0 014-4h4a4 4 0 014 4v12a8 8 0 01-8 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-heading-3 text-foreground/90 italic leading-relaxed">
                    {study.testimonial.quote}
                  </p>
                  <cite className="mt-4 block text-sm text-muted not-italic">
                    — {study.testimonial.author}
                  </cite>
                </blockquote>
              </FadeIn>

              {/* Revenue trajectory visualization */}
              <FadeIn delay={0.4}>
                <div className="p-8 rounded-2xl border border-border bg-surface/30">
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-accent">
                    Revenue Trajectory
                  </span>
                  <div className="mt-6 grid grid-cols-6 gap-2 items-end h-40">
                    {[
                      { month: 'M3', height: '8%', value: '$15K' },
                      { month: 'M6', height: '18%', value: '$80K' },
                      { month: 'M9', height: '35%', value: '$180K' },
                      { month: 'M12', height: '55%', value: '$420K' },
                      { month: 'M15', height: '78%', value: '$850K' },
                      { month: 'M18', height: '100%', value: '$2.5M' },
                    ].map((bar) => (
                      <div key={bar.month} className="flex flex-col items-center gap-2">
                        <span className="text-[10px] text-accent font-mono">
                          {bar.value}
                        </span>
                        <div
                          className="w-full rounded-t-md bg-gradient-to-t from-accent/40 to-accent/80 transition-all duration-500"
                          style={{ height: bar.height }}
                        />
                        <span className="text-[10px] text-muted font-mono">
                          {bar.month}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted mt-4 text-center">
                    Monthly recurring revenue trajectory over 18 months
                  </p>
                </div>
              </FadeIn>

              {/* Team scaling visualization */}
              <FadeIn delay={0.5}>
                <div className="p-8 rounded-2xl border border-border bg-surface/30">
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-accent">
                    Team Scaling
                  </span>
                  <div className="mt-6 space-y-4">
                    {[
                      { label: 'Month 1', count: 5, max: 50 },
                      { label: 'Month 6', count: 15, max: 50 },
                      { label: 'Month 12', count: 28, max: 50 },
                      { label: 'Month 18', count: 38, max: 50 },
                      { label: 'Month 24', count: 50, max: 50 },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center gap-4">
                        <span className="text-xs text-muted font-mono w-20 flex-shrink-0">
                          {row.label}
                        </span>
                        <div className="flex-1 h-6 bg-surface rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-accent/60 to-accent rounded-full flex items-center justify-end pr-2"
                            style={{ width: `${(row.count / row.max) * 100}%` }}
                          >
                            <span className="text-[10px] font-mono text-[#0a0a0a] font-semibold">
                              {row.count}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted mt-4 text-center">
                    Operations team size over 24 months
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      <div className="divider" />

      {/* CTA */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(20,184,166,0.06),transparent)]" />
        <Container className="relative">
          <div className="text-center max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-heading-1">
                Want results like this?
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-body-lg mt-6 max-w-xl mx-auto">
                Every operation is different. Let&apos;s talk about yours and see
                what&apos;s possible.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-wrap justify-center gap-4 mt-10">
                <MagneticButton>
                  <Button href="/demo" size="lg">
                    Request a Demo
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
                      <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button href="/pricing" variant="secondary" size="lg">
                    View Pricing
                  </Button>
                </MagneticButton>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
