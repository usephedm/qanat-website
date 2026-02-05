'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';
import { TextRevealByWord } from '@/components/animations/TextRevealByWord';
import { AnimatedCounter } from '@/components/animations/AnimatedCounter';
import { TiltCard } from '@/components/animations/TiltCard';
import { Button } from '@/components/ui/Button';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { OPEN_ROLES } from '@/lib/constants';
import { EASE, DURATION } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const PERKS = [
  {
    title: 'Remote-First',
    description: 'Work from anywhere. We care about output, not office hours.',
    icon: '🌍',
  },
  {
    title: 'Real Impact',
    description: 'Small team = your work ships fast and matters immediately.',
    icon: '⚡',
  },
  {
    title: 'Growth Path',
    description: 'Ground floor of something real. Early team shapes everything.',
    icon: '📈',
  },
  {
    title: 'Cutting Edge',
    description: 'Build with the latest AI tools. Not catch up — lead.',
    icon: '🧠',
  },
  {
    title: 'No BS Culture',
    description: 'Direct communication, real feedback, mutual respect.',
    icon: '🎯',
  },
  {
    title: 'Equity Options',
    description: 'For senior roles — own what you build.',
    icon: '💎',
  },
];

// Growth trajectory data
const GROWTH_MILESTONES = [
  { month: 'Q1 2025', team: 3, label: 'Founding team' },
  { month: 'Q2 2025', team: 8, label: 'First operators' },
  { month: 'Q3 2025', team: 15, label: 'Engineering grows' },
  { month: 'Q4 2025', team: 25, label: 'Cross-border ops' },
  { month: 'Q1 2026', team: 40, label: 'Scale phase' },
  { month: 'Q2 2026', team: 60, label: 'Where you join' },
];

// Team values that make people want to join
const TEAM_DNA = [
  {
    title: 'Operators, Not Managers',
    description: 'Everyone ships. Everyone builds. Titles are for LinkedIn. Here, you\'re judged by what you create.',
  },
  {
    title: 'Async by Default',
    description: 'No meetings for meetings\' sake. Document decisions, share context, and let people do deep work.',
  },
  {
    title: 'Learning Budget',
    description: 'Courses, books, conferences — invest in yourself and we\'ll invest in you. Growth compounds.',
  },
];

export function CareersContent() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 relative" aria-labelledby="careers-heading">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(20,184,166,0.06),transparent)]" aria-hidden="true" />

        <Container className="relative">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, ease: EASE.enter }}
          >
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent mb-6">
              Careers at QANAT
            </span>
            <h1 id="careers-heading" className="text-heading-1 max-w-3xl">
              Build something that
              <span className="accent-gradient"> actually matters</span>
            </h1>
            <p className="text-body-lg mt-6 max-w-2xl">
              We&apos;re a small, elite team building AI-powered operational infrastructure.
              Not a startup playing startup — a company building real systems for real
              businesses. If you want craft, impact, and speed — let&apos;s talk.
            </p>
          </motion.div>
        </Container>
      </section>

      <div className="divider" aria-hidden="true" />

      {/* Team DNA — makes people WANT to join */}
      <section className="py-24 md:py-32" aria-labelledby="team-dna-heading">
        <Container>
          <FadeIn className="max-w-3xl mb-16">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent mb-4">
              Our DNA
            </span>
            <TextRevealByWord
              text="We don't hire for credentials. We hire for capability, curiosity, and the kind of obsession with craft that makes you lose track of time."
              className="text-heading-2 text-foreground/90 leading-relaxed"
            />
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.1}>
            {TEAM_DNA.map((item) => (
              <StaggerItem key={item.title}>
                <TiltCard maxTilt={3} hoverScale={1.01}>
                  <div className="p-8 rounded-2xl border border-border bg-surface/30 h-full hover:border-accent/20 transition-all duration-300">
                    <h3 className="text-heading-3 text-foreground">{item.title}</h3>
                    <p className="text-body mt-3">{item.description}</p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      <div className="divider" aria-hidden="true" />

      {/* Growth Trajectory — shows this isn't static */}
      <section className="py-24 md:py-32 relative" aria-labelledby="growth-heading">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(20,184,166,0.03),transparent)]" aria-hidden="true" />
        <Container className="relative">
          <SectionHeading
            label="Growth Trajectory"
            title="We're scaling. Fast."
            description="The team is growing and we're looking for exceptional people at every level."
            id="growth-heading"
          />

          <FadeIn delay={0.2} className="mt-12">
            <div className="p-8 rounded-2xl border border-border bg-surface/30">
              <div className="space-y-4">
                {GROWTH_MILESTONES.map((milestone, i) => {
                  const isLast = i === GROWTH_MILESTONES.length - 1;
                  return (
                    <motion.div
                      key={milestone.month}
                      className="flex items-center gap-4"
                      initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: DURATION.normal, ease: EASE.enter }}
                    >
                      <span className="text-xs text-muted font-mono w-20 flex-shrink-0">
                        {milestone.month}
                      </span>
                      <div className="flex-1 h-8 bg-surface rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full flex items-center justify-end pr-3 ${
                            isLast
                              ? 'bg-gradient-to-r from-accent/80 to-accent border border-accent/50'
                              : 'bg-gradient-to-r from-accent/40 to-accent/60'
                          }`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(milestone.team / 60) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{
                            delay: 0.3 + i * 0.1,
                            duration: DURATION.slow,
                            ease: EASE.enter,
                          }}
                        >
                          <span className={`text-[10px] font-mono font-semibold ${isLast ? 'text-[#0a0a0a]' : 'text-[#0a0a0a]/80'}`}>
                            {milestone.team}
                          </span>
                        </motion.div>
                      </div>
                      <span className={`text-xs flex-shrink-0 w-28 text-right ${isLast ? 'text-accent font-medium' : 'text-muted'}`}>
                        {milestone.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
              <p className="text-xs text-muted mt-4 text-center">
                Team size trajectory (projected)
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <div className="divider" aria-hidden="true" />

      {/* Why QANAT — Perks */}
      <section className="py-24 md:py-32" aria-labelledby="why-qanat-heading">
        <Container>
          <SectionHeading
            label="Why QANAT"
            title="Not just another remote job"
            description="We're building from scratch. Real ownership, real challenges, real impact."
            id="why-qanat-heading"
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12" stagger={0.08}>
            {PERKS.map((perk) => (
              <StaggerItem key={perk.title}>
                <motion.div
                  className="p-6 rounded-xl border border-border bg-surface/30 h-full hover:bg-surface-elevated hover:border-border-hover transition-all duration-300"
                  whileHover={prefersReducedMotion ? {} : { y: -3 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  <span className="text-2xl" role="img" aria-label={perk.title}>{perk.icon}</span>
                  <h3 className="text-sm font-medium text-foreground mt-3">
                    {perk.title}
                  </h3>
                  <p className="text-sm text-muted mt-2">{perk.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      <div className="divider" aria-hidden="true" />

      {/* Open Roles */}
      <section className="py-24 md:py-32" aria-labelledby="open-roles-heading">
        <Container>
          <SectionHeading
            label="Open Roles"
            title="Current openings"
            description="Don't see your role? Reach out anyway. Exceptional people always have a place."
            id="open-roles-heading"
          />

          <StaggerContainer className="mt-12 space-y-4" stagger={0.1}>
            {OPEN_ROLES.map((role) => (
              <StaggerItem key={role.title}>
                <div className="group p-6 md:p-8 rounded-2xl border border-border bg-surface/30 hover:bg-surface-elevated hover:border-border-hover transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-heading-3 text-foreground group-hover:text-accent transition-colors">
                          {role.title}
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wider border border-accent/30 text-accent">
                          {role.department}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 mt-2 flex-wrap">
                        <span className="text-xs text-accent font-medium">{role.type}</span>
                        <span className="text-xs text-muted" aria-hidden="true">·</span>
                        <span className="text-xs text-muted">{role.location}</span>
                        <span className="text-xs text-muted" aria-hidden="true">·</span>
                        <span className="text-xs text-muted">{role.compensation}</span>
                      </div>
                      <p className="text-body mt-3">{role.description}</p>

                      {/* Requirements */}
                      <ul className="mt-4 space-y-2" aria-label={`Requirements for ${role.title}`}>
                        {role.requirements.map((req) => (
                          <li key={req} className="flex items-start gap-2">
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-accent/60 mt-0.5 flex-shrink-0" aria-hidden="true">
                              <path d="M4 8l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-xs text-muted">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex-shrink-0">
                      <MagneticButton>
                        <Button href="/contact" variant="secondary" size="sm">
                          Apply Now
                        </Button>
                      </MagneticButton>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* General application */}
          <FadeIn delay={0.3}>
            <div className="mt-12 p-8 rounded-2xl border border-dashed border-border text-center hover:border-accent/30 transition-colors duration-300">
              <p className="text-body">
                Don&apos;t see your role?{' '}
                <a href="/contact" className="text-accent hover:text-accent-light transition-colors underline-offset-4 hover:underline">
                  Send us a message
                </a>{' '}
                and tell us why you&apos;d be a great fit. We hire for capability, not credentials.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <div className="divider" aria-hidden="true" />

      {/* Playbook CTA */}
      <section className="py-24 md:py-32 relative" aria-labelledby="playbook-cta-heading">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(20,184,166,0.06),transparent)]" aria-hidden="true" />
        <Container className="relative">
          <div className="text-center max-w-3xl mx-auto">
            <FadeIn>
              <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent mb-4">
                Free Resource
              </span>
              <h2 id="playbook-cta-heading" className="text-heading-2 mt-2">
                Want to understand how we think?
              </h2>
              <p className="text-body-lg mt-4">
                Download our AI Operations Playbook — 47 pages of frameworks
                for building operational infrastructure. Written by the team that built it.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="mt-8">
                <MagneticButton>
                  <Button href="/playbook" size="lg">
                    Download the Playbook
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1" aria-hidden="true">
                      <path d="M8 3v10m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
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
