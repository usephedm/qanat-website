'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';
import { OPEN_ROLES } from '@/lib/constants';
import { EASE, DURATION } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const FEATURED_ROLES = OPEN_ROLES.slice(0, 3);

const TEAM_HIGHLIGHTS = [
  { icon: '🌍', label: 'Remote-First', detail: 'Work from anywhere' },
  { icon: '⚡', label: 'Ship Fast', detail: 'Your work matters day one' },
  { icon: '📈', label: 'Ground Floor', detail: 'Shape the company' },
  { icon: '💎', label: 'Equity', detail: 'Own what you build' },
];

export function RecruitmentPreview() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-24 md:py-32 relative" aria-labelledby="join-team-heading">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_50%,rgba(20,184,166,0.04),transparent)]" aria-hidden="true" />

      <Container className="relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeading
            label="Join the Team"
            title="We hire operators, not résumés."
            description="Small team. Real ownership. If you want craft, impact, and speed — let's talk."
          />
          <div className="flex-shrink-0">
            <MagneticButton>
              <Button href="/careers" variant="secondary" size="md">
                View All Openings
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="ml-1" aria-hidden="true">
                  <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Button>
            </MagneticButton>
          </div>
        </div>

        {/* Team culture highlights — quick visual hook */}
        <FadeIn className="mb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {TEAM_HIGHLIGHTS.map((h, i) => (
              <motion.div
                key={h.label}
                className="flex items-center gap-3 p-4 rounded-xl border border-border/50 bg-surface/20 hover:border-accent/20 hover:bg-accent/5 transition-all duration-300"
                whileHover={prefersReducedMotion ? {} : { y: -2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <span className="text-xl" role="img" aria-label={h.label}>{h.icon}</span>
                <div>
                  <div className="text-xs font-medium text-foreground">{h.label}</div>
                  <div className="text-[10px] text-muted">{h.detail}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* Role listings */}
        <StaggerContainer className="space-y-3" stagger={0.08}>
          {FEATURED_ROLES.map((role) => (
            <StaggerItem key={role.title}>
              <a href="/careers" className="group block" aria-label={`${role.title} — ${role.type}, ${role.location}`}>
                <motion.div
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 md:p-6 rounded-xl border border-border bg-surface/30 hover:bg-surface-elevated hover:border-border-hover transition-all duration-300"
                  whileHover={prefersReducedMotion ? {} : { x: 4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-sm font-medium text-foreground group-hover:text-accent transition-colors truncate">
                        {role.title}
                      </h3>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wider border border-accent/30 text-accent flex-shrink-0">
                        {role.department}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                      <span className="text-xs text-muted">{role.type}</span>
                      <span className="text-xs text-muted/50" aria-hidden="true">·</span>
                      <span className="text-xs text-muted">{role.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="text-xs text-accent font-medium hidden sm:block">{role.compensation}</span>
                    <motion.svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="text-muted group-hover:text-accent transition-colors"
                      animate={prefersReducedMotion ? {} : undefined}
                      aria-hidden="true"
                    >
                      <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </motion.svg>
                  </div>
                </motion.div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <div className="mt-6 p-5 rounded-xl border border-dashed border-border/60 text-center hover:border-accent/30 transition-colors duration-300">
            <p className="text-sm text-muted">
              Don&apos;t see your role?{' '}
              <a href="/contact" className="text-accent hover:text-accent-light transition-colors underline-offset-4 hover:underline">
                Reach out anyway
              </a>{' '}
              — we hire for capability, not credentials.
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
