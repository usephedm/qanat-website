'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';
import { TextRevealByWord } from '@/components/animations/TextRevealByWord';
import { TiltCard } from '@/components/animations/TiltCard';
import { Button } from '@/components/ui/Button';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { OPEN_ROLES, QANAT_VALUES, SITE } from '@/lib/constants';
import { EASE, DURATION } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const BENEFITS = [
  {
    title: 'Work from Anywhere',
    description: 'Laptop, internet, done. We don\'t care where you are — just that you deliver.',
    icon: '🌍',
  },
  {
    title: 'Global Team',
    description: 'Work with people across 3 continents. Diverse perspectives, one mission.',
    icon: '🌐',
  },
  {
    title: 'Real Growth',
    description: 'Top performers get bonuses, promotions, and leadership opportunities.',
    icon: '📈',
  },
  {
    title: 'AI-Powered Tools',
    description: 'You\'re not doing grunt work. You\'re commanding AI systems that 10x your output.',
    icon: '🤖',
  },
  {
    title: 'Performance Bonuses',
    description: 'Hit your targets, earn extra. Simple. Meritocracy in action.',
    icon: '💰',
  },
  {
    title: 'Flexible Schedule',
    description: 'Work US hours, but on your terms. Results matter, not clock-watching.',
    icon: '⏰',
  },
];

const TESTIMONIALS = [
  {
    quote: 'I went from job hunting for months to landing a role where I actually matter. The team is real, the work is real, and the growth is real.',
    role: 'Dispatcher, 8 months',
    location: 'Philippines',
  },
  {
    quote: 'Best part? No micromanagement. They give you the tools, trust you to execute, and reward results. Refreshing after years of corporate BS.',
    role: 'Dispatcher, 1 year',
    location: 'Latin America',
  },
  {
    quote: 'Started as a dispatcher, now training new hires. If you\'re good, they notice. If you\'re great, they promote you.',
    role: 'Senior Dispatcher, 18 months',
    location: 'Eastern Europe',
  },
];

const FAQ_ITEMS = [
  {
    question: 'Do I need experience in facility management?',
    answer: 'No. We care about smart, organized people who communicate well. We\'ll teach you the rest. Experience helps, but capability matters more.',
  },
  {
    question: 'What are the working hours?',
    answer: 'US business hours (typically 9am-6pm EST/PST). We\'re flexible within that window — some dispatchers work mornings, some evenings. You pick what works.',
  },
  {
    question: 'Is this a stable long-term job?',
    answer: 'Yes. We\'re scaling operations, not running a gig economy. Top performers have been with us 18+ months and counting.',
  },
  {
    question: 'How does the application process work?',
    answer: 'Email your resume to hr@qn8.app. We review within 48 hours. If you\'re a fit, we\'ll send a quick assessment. Pass that, we do a video interview. Simple.',
  },
  {
    question: 'What\'s the pay progression?',
    answer: 'Start at $500-700/mo base depending on experience. Hit performance targets = bonuses. Consistently excellent = raises and promotions to senior roles ($800-1200/mo).',
  },
  {
    question: 'What equipment do I need?',
    answer: 'Reliable computer (doesn\'t need to be fancy), stable internet, headset for calls. That\'s it.',
  },
];

export function CareersContent() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      {/* Hero — "Join the Machine" */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 relative" aria-labelledby="careers-heading">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(20,184,166,0.08),transparent)]" aria-hidden="true" />

        <Container className="relative">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, ease: EASE.enter }}
          >
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent mb-6">
              We&apos;re Hiring
            </span>
            <h1 id="careers-heading" className="text-heading-1 max-w-4xl">
              Join the
              <span className="accent-gradient"> machine</span>
            </h1>
            <p className="text-body-lg mt-6 max-w-2xl">
              We&apos;re building AI-powered operational infrastructure that moves millions of dollars.
              If you&apos;re sharp, organized, and ready to work with cutting-edge tools — this is your shot.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <MagneticButton>
                <Button
                  href={`mailto:${SITE.contact.hiring}`}
                  size="lg"
                >
                  Apply Now
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1" aria-hidden="true">
                    <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button
                  href="#open-roles"
                  variant="secondary"
                  size="lg"
                >
                  View Open Roles
                </Button>
              </MagneticButton>
            </div>
          </motion.div>
        </Container>
      </section>

      <div className="divider" aria-hidden="true" />

      {/* QANAT Values */}
      <section className="py-24 md:py-32" aria-labelledby="values-heading">
        <Container>
          <FadeIn className="max-w-3xl mb-16">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent mb-4">
              Our Values
            </span>
            <h2 id="values-heading" className="text-heading-2 text-foreground">
              What we stand for
            </h2>
            <p className="text-body mt-4">
              These aren&apos;t corporate buzzwords. This is how we operate, every single day.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.1}>
            {QANAT_VALUES.map((value) => (
              <StaggerItem key={value.title}>
                <TiltCard maxTilt={3} hoverScale={1.01}>
                  <div className="p-8 rounded-2xl border border-border bg-surface/30 h-full hover:border-accent/20 transition-all duration-300">
                    <span className="text-3xl mb-4 block" role="img" aria-label={value.title}>{value.icon}</span>
                    <h3 className="text-heading-3 text-foreground">{value.title}</h3>
                    <p className="text-body mt-3">{value.description}</p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      <div className="divider" aria-hidden="true" />

      {/* Benefits */}
      <section className="py-24 md:py-32" aria-labelledby="benefits-heading">
        <Container>
          <SectionHeading
            label="Why Join QANAT"
            title="Not just another remote job"
            description="We give you the tools, the trust, and the opportunity to build something real."
            id="benefits-heading"
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12" stagger={0.08}>
            {BENEFITS.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <motion.div
                  className="p-6 rounded-xl border border-border bg-surface/30 h-full hover:bg-surface-elevated hover:border-border-hover transition-all duration-300"
                  whileHover={prefersReducedMotion ? {} : { y: -3 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  <span className="text-2xl" role="img" aria-label={benefit.title}>{benefit.icon}</span>
                  <h3 className="text-sm font-medium text-foreground mt-3">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted mt-2">{benefit.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      <div className="divider" aria-hidden="true" />

      {/* Open Roles */}
      <section id="open-roles" className="py-24 md:py-32" aria-labelledby="open-roles-heading">
        <Container>
          <SectionHeading
            label="Open Positions"
            title="Join our team"
            description="We're actively hiring. If you see a role that fits, apply. If not but you think you'd be great anyway — still apply."
            id="open-roles-heading"
          />

          <StaggerContainer className="mt-12 space-y-4" stagger={0.1}>
            {OPEN_ROLES.map((role) => (
              <StaggerItem key={role.title}>
                <div className="group p-6 md:p-8 rounded-2xl border border-border bg-surface/30 hover:bg-surface-elevated hover:border-accent/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-heading-3 text-foreground group-hover:text-accent transition-colors">
                          {role.title}
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wider border border-accent/30 text-accent bg-accent/5">
                          {role.department}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 mt-2 flex-wrap">
                        <span className="text-xs text-accent font-medium">{role.type}</span>
                        <span className="text-xs text-muted" aria-hidden="true">·</span>
                        <span className="text-xs text-muted">{role.location}</span>
                        <span className="text-xs text-muted" aria-hidden="true">·</span>
                        <span className="text-xs text-foreground/80 font-medium">{role.compensation}</span>
                      </div>
                      <p className="text-body mt-4">{role.description}</p>

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
                        <Button
                          href={`mailto:${SITE.contact.hiring}?subject=Application: ${role.title}`}
                          variant="secondary"
                          size="sm"
                        >
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
                <a
                  href={`mailto:${SITE.contact.hiring}?subject=General Application`}
                  className="text-accent hover:text-accent-light transition-colors underline-offset-4 hover:underline"
                >
                  Email us anyway
                </a>
                . We hire for capability, not just open positions.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <div className="divider" aria-hidden="true" />

      {/* Team Testimonials */}
      <section className="py-24 md:py-32" aria-labelledby="testimonials-heading">
        <Container>
          <SectionHeading
            label="From the Team"
            title="Real people, real feedback"
            description="What it's actually like to work here (no corporate PR BS)."
            id="testimonials-heading"
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12" stagger={0.1}>
            {TESTIMONIALS.map((testimonial, i) => (
              <StaggerItem key={i}>
                <div className="p-6 rounded-xl border border-border bg-surface/30 h-full flex flex-col">
                  <p className="text-sm text-foreground/90 leading-relaxed flex-1">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-xs font-medium text-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted mt-1">{testimonial.location}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      <div className="divider" aria-hidden="true" />

      {/* FAQ for Applicants */}
      <section className="py-24 md:py-32" aria-labelledby="faq-heading">
        <Container>
          <SectionHeading
            label="FAQ"
            title="Questions? Answered."
            description="Everything you need to know before applying."
            id="faq-heading"
          />

          <FadeIn delay={0.2}>
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
              {FAQ_ITEMS.map((faq) => (
                <details
                  key={faq.question}
                  className="group p-6 rounded-xl border border-border bg-surface/30 hover:bg-surface-elevated transition-all duration-200"
                >
                  <summary className="flex items-start justify-between cursor-pointer list-none">
                    <span className="text-sm font-medium text-foreground pr-4">{faq.question}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="text-muted group-open:rotate-180 transition-transform flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 6l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </summary>
                  <p className="text-sm text-muted mt-3 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      <div className="divider" aria-hidden="true" />

      {/* Final CTA */}
      <section className="py-24 md:py-32 relative" aria-labelledby="final-cta-heading">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(20,184,166,0.08),transparent)]" aria-hidden="true" />
        <Container className="relative">
          <div className="text-center max-w-3xl mx-auto">
            <FadeIn>
              <h2 id="final-cta-heading" className="text-heading-2">
                Ready to build something real?
              </h2>
              <p className="text-body-lg mt-4">
                Send your resume to{' '}
                <a
                  href={`mailto:${SITE.contact.hiring}`}
                  className="text-accent hover:text-accent-light underline-offset-4 hover:underline font-medium"
                >
                  {SITE.contact.hiring}
                </a>
                <br />
                We review every application within 48 hours.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="mt-8">
                <MagneticButton>
                  <Button
                    href={`mailto:${SITE.contact.hiring}?subject=Job Application`}
                    size="lg"
                  >
                    Apply Now
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1" aria-hidden="true">
                      <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
