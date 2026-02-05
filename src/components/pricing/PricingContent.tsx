'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/Button';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { PRICING_TIERS } from '@/lib/constants';
import { ROISimulator } from '@/components/pricing/ROISimulator';

export function PricingContent() {
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
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent mb-6">
              Pricing
            </span>
            <h1 className="text-heading-1">
              Invest in infrastructure,
              <br />
              <span className="accent-gradient">not overhead</span>
            </h1>
            <p className="text-body-lg mt-6">
              No hidden fees. No long-term lock-in. Scale up or down based on what
              your operations actually need.
            </p>
          </motion.div>
        </Container>
      </section>

      <div className="divider" />

      {/* Pricing tiers */}
      <section className="py-24 md:py-32">
        <Container>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.1}>
            {PRICING_TIERS.map((tier) => (
              <StaggerItem key={tier.name}>
                <div
                  className={`relative p-8 md:p-10 rounded-2xl border h-full flex flex-col ${
                    tier.popular
                      ? 'border-accent/40 bg-accent/5'
                      : 'border-border bg-surface/30'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 rounded-full text-xs font-medium bg-accent text-[#0a0a0a]">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div>
                    <h3 className="text-heading-3 text-foreground">{tier.name}</h3>
                    <p className="text-sm text-muted mt-2">{tier.description}</p>
                  </div>

                  <div className="mt-6">
                    {tier.price ? (
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-semibold text-foreground">
                          ${tier.price.toLocaleString()}
                        </span>
                        <span className="text-sm text-muted">{tier.period}</span>
                      </div>
                    ) : (
                      <div className="text-4xl font-semibold text-foreground">
                        Custom
                      </div>
                    )}
                  </div>

                  <ul className="mt-8 space-y-3 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          className="text-accent mt-0.5 flex-shrink-0"
                        >
                          <path
                            d="M4 8l3 3 5-5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-sm text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <MagneticButton className="w-full">
                      <Button
                        href={tier.price ? '/demo' : '/contact'}
                        variant={tier.popular ? 'primary' : 'secondary'}
                        className="w-full justify-center"
                      >
                        {tier.cta}
                      </Button>
                    </MagneticButton>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Enterprise note */}
          <FadeIn delay={0.4}>
            <div className="mt-12 text-center">
              <p className="text-sm text-muted">
                All plans include onboarding, training, and 30-day money-back guarantee.
                <br />
                Need something custom?{' '}
                <a href="/contact" className="text-accent hover:text-accent-light transition-colors">
                  Let&apos;s talk.
                </a>
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <div className="divider" />

      {/* ROI Simulator */}
      <ROISimulator />

      <div className="divider" />

      {/* FAQ */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-heading-2 text-center">
                Common questions
              </h2>
            </FadeIn>

            <div className="mt-12 space-y-6">
              {[
                {
                  q: 'What\'s included in the onboarding?',
                  a: 'Full systems setup, team training, process documentation, and a dedicated onboarding manager for the first 30 days. We don\'t hand you a login and walk away.',
                },
                {
                  q: 'Can I switch plans?',
                  a: 'Yes. Scale up or down at any time. We bill monthly with no long-term contracts unless you choose an annual plan for the discount.',
                },
                {
                  q: 'Do you work with companies outside the US?',
                  a: 'Absolutely. We\'re built for cross-border operations. Our team operates across US, Middle East, and other timezones.',
                },
                {
                  q: 'What if I need something not listed?',
                  a: 'Every operation is unique. Contact us for a custom scope. We\'ll build exactly what you need — nothing more, nothing less.',
                },
                {
                  q: 'How fast can you deploy?',
                  a: 'Initial systems can be live within 2-4 weeks. Full operational buildout typically takes 2-3 months depending on complexity.',
                },
              ].map((faq, i) => (
                <FadeIn key={faq.q} delay={i * 0.08}>
                  <details className="group p-6 rounded-xl border border-border bg-surface/30 hover:bg-surface-elevated transition-colors">
                    <summary className="flex items-center justify-between cursor-pointer text-sm font-medium text-foreground list-none">
                      {faq.q}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="text-muted group-open:rotate-180 transition-transform duration-200 flex-shrink-0 ml-4"
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
                    <p className="text-sm text-muted mt-4 leading-relaxed">
                      {faq.a}
                    </p>
                  </details>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
