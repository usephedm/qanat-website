'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/Button';

const OPEN_ROLES = [
  {
    title: 'Dispatch Operations Lead',
    type: 'Full-time',
    location: 'Remote (US/Middle East)',
    description:
      'Lead and optimize our dispatch operations team. You\'ll build processes, train operators, and ensure flawless execution across time zones.',
  },
  {
    title: 'AI Operations Engineer',
    type: 'Full-time',
    location: 'Remote',
    description:
      'Build and deploy AI agents that power real-world operations. Not research — production systems that handle thousands of decisions daily.',
  },
  {
    title: 'Dispatch Operator',
    type: 'Full-time',
    location: 'Remote',
    description:
      'Be the human-in-the-loop for our AI-augmented dispatch system. Fast thinkers, clear communicators, calm under pressure.',
  },
];

const PERKS = [
  {
    title: 'Remote-First',
    description: 'Work from anywhere. We care about output, not office hours.',
  },
  {
    title: 'Real Impact',
    description: 'Small team means your work ships fast and matters immediately.',
  },
  {
    title: 'Growth Path',
    description: 'We\'re building something from the ground up. Early team gets to shape it.',
  },
  {
    title: 'Cutting Edge',
    description: 'Work with the latest AI tools and build systems that don\'t exist yet.',
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
              Careers
            </span>
            <h1 className="text-heading-1 max-w-3xl">
              Build something
              <span className="accent-gradient"> that matters</span>
            </h1>
            <p className="text-body-lg mt-6 max-w-2xl">
              We&apos;re a small, elite team building the operational infrastructure of the future.
              If you want to work on real problems with people who care about craft — let&apos;s talk.
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
            title="Not just another job"
            description="We're building something from scratch. That means you'll have real ownership, real impact, and real challenges."
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12" stagger={0.1}>
            {PERKS.map((perk) => (
              <StaggerItem key={perk.title}>
                <div className="p-6 rounded-xl border border-border bg-surface/30 h-full">
                  <h3 className="text-sm font-medium text-foreground">
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
            description="Don't see your role? Reach out anyway. We're always looking for exceptional people."
          />

          <StaggerContainer className="mt-12 space-y-4" stagger={0.1}>
            {OPEN_ROLES.map((role) => (
              <StaggerItem key={role.title}>
                <div className="group p-6 md:p-8 rounded-2xl border border-border bg-surface/30 hover:bg-surface-elevated hover:border-border-hover transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-heading-3 text-foreground group-hover:text-accent transition-colors">
                        {role.title}
                      </h3>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-xs text-accent font-medium">
                          {role.type}
                        </span>
                        <span className="text-xs text-muted">·</span>
                        <span className="text-xs text-muted">{role.location}</span>
                      </div>
                      <p className="text-body mt-3">{role.description}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <Button href="/contact" variant="secondary" size="sm">
                        Apply
                      </Button>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* General application */}
          <FadeIn delay={0.3}>
            <div className="mt-12 text-center p-8 rounded-2xl border border-dashed border-border">
              <p className="text-body">
                Don&apos;t see your role?{' '}
                <a href="/contact" className="text-accent hover:text-accent-light transition-colors">
                  Send us a message
                </a>{' '}
                and tell us why you&apos;d be a great fit.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
