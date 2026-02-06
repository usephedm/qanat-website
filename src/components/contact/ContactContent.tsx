'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/Button';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { SITE } from '@/lib/constants';

const CONTACT_PATHS = [
  {
    title: 'For Business',
    description: 'Operations consulting, dispatch automation, team scaling, AI systems.',
    email: SITE.contact.email,
    cta: 'Email for Business Inquiries',
    icon: '💼',
  },
  {
    title: 'Join Our Team',
    description: 'Dispatcher positions, operations roles, and career opportunities.',
    email: SITE.contact.hiring,
    cta: 'Email to Apply',
    icon: '🚀',
  },
];

export function ContactContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 relative" aria-labelledby="contact-heading">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(20,184,166,0.06),transparent)]" aria-hidden="true" />

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent mb-6">
              Contact
            </span>
            <h1 id="contact-heading" className="text-heading-1 max-w-3xl">
              Let&apos;s start a
              <span className="accent-gradient"> conversation</span>
            </h1>
            <p className="text-body-lg mt-6 max-w-2xl">
              Whether you&apos;re looking to build operational infrastructure or join our team —
              we&apos;re here to listen.
            </p>
          </motion.div>
        </Container>
      </section>

      <div className="divider" aria-hidden="true" />

      {/* Dual Contact Paths */}
      <section className="py-24 md:py-32" aria-labelledby="contact-paths-heading">
        <Container>
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="contact-paths-heading" className="text-heading-2">Choose your path</h2>
            <p className="text-body mt-4">Select the option that best fits what you&apos;re looking for.</p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto" stagger={0.15}>
            {CONTACT_PATHS.map((path) => (
              <StaggerItem key={path.title}>
                <div className="group p-8 md:p-10 rounded-2xl border border-border bg-surface/30 hover:bg-surface-elevated hover:border-accent/30 transition-all duration-300 h-full flex flex-col">
                  <span className="text-4xl mb-4 block" role="img" aria-label={path.title}>
                    {path.icon}
                  </span>
                  <h3 className="text-heading-3 text-foreground group-hover:text-accent transition-colors">
                    {path.title}
                  </h3>
                  <p className="text-body mt-3 flex-1">{path.description}</p>
                  <div className="mt-6 pt-6 border-t border-border">
                    <a
                      href={`mailto:${path.email}`}
                      className="block text-sm text-accent hover:text-accent-light transition-colors mb-4 font-medium"
                    >
                      {path.email}
                    </a>
                    <MagneticButton>
                      <Button
                        href={`mailto:${path.email}`}
                        variant="secondary"
                        size="sm"
                        className="w-full"
                      >
                        {path.cta}
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1" aria-hidden="true">
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
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      <div className="divider" aria-hidden="true" />

      {/* Additional Info */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="text-center">
                <h3 className="text-sm font-medium text-foreground mb-3">Based in</h3>
                <p className="text-body">{SITE.entity.state}, USA</p>
                <p className="text-body">Operating globally</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="text-center">
                <h3 className="text-sm font-medium text-foreground mb-3">Response Time</h3>
                <p className="text-body">Within 24-48 hours</p>
                <p className="text-body">on business days</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="text-center">
                <h3 className="text-sm font-medium text-foreground mb-3">Connect</h3>
                <div className="flex justify-center gap-4">
                  <a
                    href={SITE.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body hover:text-accent transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={SITE.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body hover:text-accent transition-colors"
                  >
                    X / Twitter
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <div className="divider" aria-hidden="true" />

      {/* Quick Links */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(20,184,166,0.06),transparent)]" aria-hidden="true" />
        <Container className="relative">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-heading-3 text-foreground">Not sure where to start?</h2>
              <p className="text-body mt-4">
                Check out our{' '}
                <a href="/services" className="text-accent hover:text-accent-light underline-offset-4 hover:underline">
                  services
                </a>
                ,{' '}
                <a href="/case-studies" className="text-accent hover:text-accent-light underline-offset-4 hover:underline">
                  case studies
                </a>
                , or{' '}
                <a href="/careers" className="text-accent hover:text-accent-light underline-offset-4 hover:underline">
                  open positions
                </a>
                .
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
