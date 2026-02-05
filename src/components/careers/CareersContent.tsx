'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/Button';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { OPEN_ROLES } from '@/lib/constants';

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

export function CareersContent() {
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
              Careers at QANAT
            </span>
            <h1 className="text-heading-1 max-w-3xl">
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

      <div className="divider" />

      {/* Why QANAT */}
      <section className="py-24 md:py-32">
        <Container>
          <SectionHeading
            label="Why QANAT"
            title="Not just another remote job"
            description="We're building from scratch. Real ownership, real challenges, real impact."
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12" stagger={0.08}>
            {PERKS.map((perk) => (
              <StaggerItem key={perk.title}>
                <div className="p-6 rounded-xl border border-border bg-surface/30 h-full hover:bg-surface-elevated hover:border-border-hover transition-all duration-300">
                  <span className="text-2xl">{perk.icon}</span>
                  <h3 className="text-sm font-medium text-foreground mt-3">
                    {perk.title}
                  </h3>
                  <p className="text-sm text-muted mt-2">{perk.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      <div className="divider" />

      {/* Open Roles */}
      <section className="py-24 md:py-32">
        <Container>
          <SectionHeading
            label="Open Roles"
            title="Current openings"
            description="Don't see your role? Reach out anyway. Exceptional people always have a place."
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
                        <span className="text-xs text-muted">·</span>
                        <span className="text-xs text-muted">{role.location}</span>
                        <span className="text-xs text-muted">·</span>
                        <span className="text-xs text-muted">{role.compensation}</span>
                      </div>
                      <p className="text-body mt-3">{role.description}</p>

                      {/* Requirements */}
                      <div className="mt-4 space-y-2">
                        {role.requirements.map((req) => (
                          <div key={req} className="flex items-start gap-2">
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-accent/60 mt-0.5 flex-shrink-0">
                              <path d="M4 8l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-xs text-muted">{req}</span>
                          </div>
                        ))}
                      </div>
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
            <div className="mt-12 p-8 rounded-2xl border border-dashed border-border text-center">
              <p className="text-body">
                Don&apos;t see your role?{' '}
                <a href="/contact" className="text-accent hover:text-accent-light transition-colors">
                  Send us a message
                </a>{' '}
                and tell us why you&apos;d be a great fit. We hire for capability, not credentials.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <div className="divider" />

      {/* Playbook CTA */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(20,184,166,0.06),transparent)]" />
        <Container className="relative">
          <div className="text-center max-w-3xl mx-auto">
            <FadeIn>
              <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent mb-4">
                Free Resource
              </span>
              <h2 className="text-heading-2 mt-2">
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
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
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
