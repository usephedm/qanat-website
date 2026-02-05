'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';
import { RevealText } from '@/components/animations/RevealText';
import { Button } from '@/components/ui/Button';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { CASE_STUDIES } from '@/lib/constants';
import { SocialProof } from '@/components/case-studies/SocialProof';

function TimelineStep({
  month,
  event,
  metric,
  index,
  total,
}: {
  month: string;
  event: string;
  metric?: string;
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
        <div className="flex items-baseline gap-3">
          <span className="text-xs font-mono text-accent uppercase tracking-wider">
            {month}
          </span>
          {metric && (
            <span className="text-xs font-semibold text-foreground bg-accent/10 px-2 py-0.5 rounded">
              {metric}
            </span>
          )}
        </div>
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
              Case Study
            </span>
            <h1 className="text-heading-1 max-w-4xl">
              From $0 to $2.5M ARR in 18 months
              <br />
              <span className="accent-gradient">The Ops Playbook</span>
            </h1>
            <p className="text-body-lg mt-6 max-w-2xl">
              How we built the operational infrastructure that took a home services
              startup from garage to multi-state operation — without investor capital
              or a single US-based operations employee.
            </p>
          </motion.div>
        </Container>
      </section>

      <div className="divider" />

      {/* Key Metrics Banner */}
      <section className="py-16 bg-accent/5 border-y border-accent/20">
        <Container>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8" stagger={0.1}>
            {[
              { metric: '$2.5M', label: 'ARR Achieved', sublabel: 'in 18 months' },
              { metric: '50+', label: 'Team Scaled', sublabel: 'from 0 to 50' },
              { metric: '73%', label: 'Faster', sublabel: 'dispatch time' },
              { metric: '99.2%', label: 'SLA', sublabel: 'compliance rate' },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-accent">
                    {stat.metric}
                  </div>
                  <div className="text-sm font-medium text-foreground mt-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted">{stat.sublabel}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      <div className="divider" />

      {/* The Story */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <FadeIn>
                <div className="sticky top-28">
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-accent">
                    {study.industry}
                  </span>
                  <h2 className="text-heading-2 mt-2">Project Meridian</h2>
                  <p className="text-sm text-muted mt-4">
                    A US-based home services company that needed to scale without
                    traditional operational overhead.
                  </p>

                  {/* Company snapshot */}
                  <div className="mt-10 space-y-4 p-6 rounded-xl border border-border bg-surface/30">
                    <div>
                      <div className="text-xs text-muted">Industry</div>
                      <div className="text-sm text-foreground font-medium">
                        Home Services & Dispatch
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-muted">Timeline</div>
                      <div className="text-sm text-foreground font-medium">
                        Jan 2023 - Jun 2024 (18 months)
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-muted">Geography</div>
                      <div className="text-sm text-foreground font-medium">
                        US nationwide (12hr timezone offset)
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-muted">Starting State</div>
                      <div className="text-sm text-foreground font-medium">
                        5 contractors, garage operation
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Main content */}
            <div className="lg:col-span-2 space-y-16">
              {/* The Challenge */}
              <FadeIn>
                <div>
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-accent">
                    The Challenge
                  </span>
                  <RevealText className="text-heading-3 text-foreground/90 leading-relaxed mt-4">
                    A founder with 5 contractors needed to scale to multi-state
                    operations — but couldn&apos;t afford traditional ops infrastructure.
                    Manual dispatch via WhatsApp. No automation. No processes.
                    No team. Just hustle and a vision.
                  </RevealText>
                  <p className="text-body-lg mt-6 text-muted">
                    Traditional approach would require: hiring ops managers ($120K+),
                    building in-house dispatch tech ($500K+), and months of trial and
                    error. The founder had none of those resources. Enter QANAT.
                  </p>
                </div>
              </FadeIn>

              {/* The Playbook */}
              <FadeIn delay={0.1}>
                <div>
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-accent">
                    The Playbook
                  </span>
                  <h3 className="text-heading-3 mt-4">
                    What we built (and how we built it)
                  </h3>

                  <div className="mt-8 space-y-6">
                    {[
                      {
                        phase: 'Month 1-2: Foundation',
                        title: 'Operations Audit & System Architecture',
                        description:
                          'We didn\'t start by building. We started by mapping every workflow, bottleneck, and manual touch-point. Then we designed the AI-powered dispatch engine around those patterns.',
                      },
                      {
                        phase: 'Month 3-6: Automation',
                        title: 'AI Dispatch Engine Deployment',
                        description:
                          'Custom routing algorithms, real-time scheduling, automated notifications, and predictive demand modeling. All built to operate remotely from a 12-hour timezone offset.',
                      },
                      {
                        phase: 'Month 7-12: Team Scaling',
                        title: '5 → 35 Operators',
                        description:
                          'Recruited, trained, and deployed a cross-border operations team. Built training programs, performance frameworks, and quality control systems. All documented in operational playbooks.',
                      },
                      {
                        phase: 'Month 13-18: Revenue Optimization',
                        title: '35 → 50+ Team | $2.5M ARR',
                        description:
                          'Expanded to new markets, optimized pricing, automated upsells, and scaled support infrastructure. Revenue grew 5x while maintaining 99.2% SLA compliance.',
                      },
                    ].map((phase) => (
                      <div
                        key={phase.phase}
                        className="p-6 rounded-xl border border-border bg-surface/30"
                      >
                        <div className="text-xs font-mono text-accent uppercase tracking-wider">
                          {phase.phase}
                        </div>
                        <h4 className="text-lg font-semibold text-foreground mt-2">
                          {phase.title}
                        </h4>
                        <p className="text-sm text-muted mt-2 leading-relaxed">
                          {phase.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Timeline */}
              <FadeIn delay={0.2}>
                <div>
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-accent mb-8 block">
                    The Timeline (month-by-month)
                  </span>
                  <div className="mt-6">
                    {[
                      {
                        month: 'Month 1-2',
                        event: 'Operations audit & system architecture',
                        metric: undefined,
                      },
                      {
                        month: 'Month 3',
                        event: 'AI dispatch engine deployed, first automated bookings',
                        metric: '$15K MRR',
                      },
                      {
                        month: 'Month 6',
                        event: 'Team scaled to 15 operators, multi-state launch',
                        metric: '$80K MRR',
                      },
                      {
                        month: 'Month 9',
                        event: 'Advanced routing + predictive demand modeling live',
                        metric: '$180K MRR',
                      },
                      {
                        month: 'Month 12',
                        event: 'Team at 28 operators, automated upsell flows deployed',
                        metric: '$420K MRR',
                      },
                      {
                        month: 'Month 15',
                        event: 'New market expansion, premium tier launched',
                        metric: '$850K MRR',
                      },
                      {
                        month: 'Month 18',
                        event: '50+ operators, full operations playbook documented',
                        metric: '$2.5M ARR',
                      },
                    ].map((step, i, arr) => (
                      <TimelineStep
                        key={step.month}
                        month={step.month}
                        event={step.event}
                        metric={step.metric}
                        index={i}
                        total={arr.length}
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
                    They didn&apos;t just build our operations — they built a machine
                    that builds operations. We went from chaos to clockwork without
                    burning investor cash on trial and error.
                  </p>
                  <cite className="mt-6 block text-sm text-muted not-italic">
                    — Founder, Project Meridian
                  </cite>
                </blockquote>
              </FadeIn>

              {/* Revenue trajectory visualization */}
              <FadeIn delay={0.4}>
                <div className="p-8 rounded-2xl border border-border bg-surface/30">
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-accent">
                    Revenue Trajectory
                  </span>
                  <div className="mt-6 grid grid-cols-6 gap-2 items-end h-48">
                    {[
                      { month: 'M3', height: '8%', value: '$15K' },
                      { month: 'M6', height: '18%', value: '$80K' },
                      { month: 'M9', height: '35%', value: '$180K' },
                      { month: 'M12', height: '55%', value: '$420K' },
                      { month: 'M15', height: '78%', value: '$850K' },
                      { month: 'M18', height: '100%', value: '$2.5M' },
                    ].map((bar) => (
                      <div key={bar.month} className="flex flex-col items-center gap-2">
                        <span className="text-[10px] text-accent font-mono font-semibold">
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
                  <p className="text-xs text-muted mt-6 text-center">
                    Monthly recurring revenue trajectory over 18 months — from garage
                    to $2.5M ARR
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
                      { label: 'Month 1', count: 5, max: 50, role: 'Founders + contractors' },
                      { label: 'Month 6', count: 15, max: 50, role: 'First ops team hired' },
                      {
                        label: 'Month 12',
                        count: 28,
                        max: 50,
                        role: 'Multi-state operations',
                      },
                      { label: 'Month 18', count: 38, max: 50, role: 'Peak season scale' },
                      { label: 'Month 24', count: 50, max: 50, role: 'Full buildout' },
                    ].map((row) => (
                      <div key={row.label}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-muted font-mono">{row.label}</span>
                          <span className="text-xs text-foreground/60">{row.role}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex-1 h-7 bg-surface rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-accent/60 to-accent rounded-full flex items-center justify-end pr-3"
                              style={{ width: `${(row.count / row.max) * 100}%` }}
                            >
                              <span className="text-[11px] font-mono text-[#0a0a0a] font-semibold">
                                {row.count}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted mt-6 text-center">
                    Operations team size over 24 months — all remote, cross-border
                  </p>
                </div>
              </FadeIn>

              {/* Key Learnings */}
              <FadeIn delay={0.6}>
                <div>
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-accent">
                    Key Learnings
                  </span>
                  <h3 className="text-heading-3 mt-4">What made this work</h3>

                  <div className="mt-6 space-y-4">
                    {[
                      {
                        title: 'AI + Humans, not AI vs Humans',
                        description:
                          'Our AI handled routing, scheduling, and optimization. Humans handled exceptions, escalations, and relationships. Neither could do this alone.',
                      },
                      {
                        title: 'Process before automation',
                        description:
                          'We didn\'t automate chaos. We documented workflows first, then built automation around proven patterns.',
                      },
                      {
                        title: 'Cross-border from day one',
                        description:
                          'Operating from a 12-hour offset forced us to build async processes and documentation. It became our competitive advantage.',
                      },
                      {
                        title: 'Build to scale, not to launch',
                        description:
                          'Every system was designed to handle 10x growth. When it came, the infrastructure was ready.',
                      },
                    ].map((learning) => (
                      <div
                        key={learning.title}
                        className="p-5 rounded-lg border border-border bg-surface/20"
                      >
                        <h4 className="text-sm font-semibold text-foreground">
                          {learning.title}
                        </h4>
                        <p className="text-xs text-muted mt-1 leading-relaxed">
                          {learning.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      <div className="divider" />

      {/* Social Proof */}
      <SocialProof />

      <div className="divider" />

      {/* CTA */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(20,184,166,0.06),transparent)]" />
        <Container className="relative">
          <div className="text-center max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-heading-1">Want results like this?</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-body-lg mt-6 max-w-xl mx-auto">
                Every operation is different. Let&apos;s talk about yours and see
                what&apos;s possible. No sales pitch — just a real conversation about
                operational infrastructure.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-wrap justify-center gap-4 mt-10">
                <MagneticButton>
                  <Button href="/demo" size="lg">
                    Request a Demo
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="ml-1"
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
