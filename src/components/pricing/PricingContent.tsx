'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/Button';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { PRICING_TIERS } from '@/lib/constants';
import { ROISimulator } from '@/components/pricing/ROISimulator';
import { SocialProof } from '@/components/case-studies/SocialProof';

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

      {/* Value Proposition Banner */}
      <section className="py-16 bg-accent/5 border-y border-accent/20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-heading-3 text-foreground">
                What you&apos;d pay hiring in-house vs what we charge
              </h2>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="p-6 rounded-xl border border-border bg-surface/50">
                  <div className="text-xs font-mono text-muted uppercase tracking-wider mb-3">
                    Traditional Approach
                  </div>
                  <ul className="space-y-2 text-sm text-muted">
                    <li className="flex items-start gap-2">
                      <span className="text-foreground/40">•</span>
                      <span>Ops Manager: $120K-$180K/year</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-foreground/40">•</span>
                      <span>Engineering team: $500K+/year</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-foreground/40">•</span>
                      <span>Recruitment: $50K-$100K upfront</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-foreground/40">•</span>
                      <span>6-12 months to operational</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="text-lg font-semibold text-foreground/60">
                      $700K+ first year
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-xl border border-accent bg-accent/10">
                  <div className="text-xs font-mono text-accent uppercase tracking-wider mb-3">
                    QANAT Standard
                  </div>
                  <ul className="space-y-2 text-sm text-foreground/90">
                    <li className="flex items-start gap-2">
                      <span className="text-accent">✓</span>
                      <span>Full operations team included</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">✓</span>
                      <span>AI infrastructure deployed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">✓</span>
                      <span>No recruitment overhead</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">✓</span>
                      <span>Live in 2-4 weeks</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-accent/30">
                    <div className="text-lg font-semibold text-accent">
                      $300K first year
                    </div>
                    <div className="text-xs text-foreground/70 mt-1">
                      57% cost savings + faster deployment
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <div className="divider" />

      {/* Pricing tiers */}
      <section className="py-24 md:py-32">
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-heading-2">Choose your starting point</h2>
              <p className="text-sm text-muted mt-4">
                Start with validation, scale when ready. No surprises, no hidden fees.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.1}>
            {PRICING_TIERS.map((tier) => (
              <StaggerItem key={tier.name}>
                <div
                  className={`relative p-8 md:p-10 rounded-2xl border h-full flex flex-col ${
                    tier.popular
                      ? 'border-accent/40 bg-accent/5 shadow-lg shadow-accent/5'
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
                        <span className="text-sm text-muted">
                          {tier.period === 'one-time' ? '' : tier.period}
                        </span>
                      </div>
                    ) : (
                      <div className="text-4xl font-semibold text-foreground">Custom</div>
                    )}
                    {tier.period === 'one-time' && (
                      <p className="text-xs text-muted mt-1">One-time project fee</p>
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
                        href={tier.price && tier.period !== 'one-time' ? '/demo' : '/contact'}
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

          {/* Pricing notes */}
          <FadeIn delay={0.4}>
            <div className="mt-12 space-y-4 max-w-3xl mx-auto">
              <div className="p-6 rounded-xl border border-accent/20 bg-accent/5">
                <h4 className="text-sm font-semibold text-foreground mb-3">
                  💡 Not sure which tier is right?
                </h4>
                <p className="text-xs text-muted leading-relaxed">
                  Start with MVP to validate your model ($5K one-time). If it works,
                  upgrade to Standard for full operations ($25K/month). Hit $500K+ ARR?
                  Move to Enterprise for white-glove support ($50K/month). We&apos;ll
                  guide you through the transition.
                </p>
              </div>

              <div className="text-center">
                <p className="text-sm text-muted">
                  All plans include onboarding, training, and 30-day money-back
                  guarantee.
                  <br />
                  Need something custom?{' '}
                  <a
                    href="/contact"
                    className="text-accent hover:text-accent-light transition-colors"
                  >
                    Let&apos;s talk.
                  </a>
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <div className="divider" />

      {/* Social Proof */}
      <SocialProof />

      <div className="divider" />

      {/* ROI Simulator */}
      <ROISimulator />

      <div className="divider" />

      {/* FAQ */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-heading-2 text-center">Common questions</h2>
            </FadeIn>

            <div className="mt-12 space-y-6">
              {[
                {
                  q: 'What\'s the difference between MVP and Standard?',
                  a: 'MVP is a 2-week sprint to build your operational foundation — perfect for validating your model. Standard is ongoing operations management with a full team, custom AI, and continuous optimization. Start with MVP, upgrade when you\'re ready to scale.',
                },
                {
                  q: 'What\'s included in the onboarding?',
                  a: 'Full systems setup, team training, process documentation, and a dedicated onboarding manager for the first 30 days. We don\'t hand you a login and walk away — we stay until you\'re operational.',
                },
                {
                  q: 'Can I switch plans?',
                  a: 'Yes. Scale up or down at any time. We bill monthly (except MVP which is one-time) with no long-term contracts unless you choose an annual plan for the discount.',
                },
                {
                  q: 'Do you work with companies outside the US?',
                  a: 'Absolutely. We\'re built for cross-border operations. Our team operates across US, Middle East, and other timezones. Geographic flexibility is in our DNA.',
                },
                {
                  q: 'What if I need something not listed?',
                  a: 'Every operation is unique. Contact us for a custom scope. We\'ll build exactly what you need — nothing more, nothing less. Custom pricing available for Enterprise clients.',
                },
                {
                  q: 'How fast can you deploy?',
                  a: 'MVP launches in 2 weeks. Standard takes 2-4 weeks to go live. Enterprise deployments are typically 4-8 weeks depending on complexity. We move fast.',
                },
                {
                  q: 'What\'s your refund policy?',
                  a: '30-day money-back guarantee on all monthly plans. If we don\'t deliver operational improvement in the first month, we refund 100%. No questions asked. (MVP is non-refundable after delivery.)',
                },
                {
                  q: 'Do you sign NDAs?',
                  a: 'Yes. Standard NDA included with all engagements. We can work with your legal team on custom agreements for Enterprise clients.',
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
                    <p className="text-sm text-muted mt-4 leading-relaxed">{faq.a}</p>
                  </details>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <div className="divider" />

      {/* Final CTA */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(20,184,166,0.06),transparent)]" />
        <Container className="relative">
          <div className="text-center max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-heading-1">
                Ready to build your
                <br />
                operational infrastructure?
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-body-lg mt-6 max-w-xl mx-auto">
                No sales pressure. Just a real conversation about what you&apos;re
                building and how we can help you scale without chaos.
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
                  <Button href="/case-studies" variant="secondary" size="lg">
                    See Results
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
