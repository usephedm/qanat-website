'use client';

import { Container } from '@/components/ui/Container';
import { AnimatedCounter } from '@/components/animations/AnimatedCounter';
import { ScrollReveal, StaggerGroup, staggerItem } from '@/components/animations/ScrollReveal';
import { motion } from 'framer-motion';

const stats = [
  {
    value: 2500000,
    prefix: '$',
    suffix: 'M',
    label: 'ARR Generated',
    description: 'From zero to $2.5M in 18 months',
  },
  {
    value: 50,
    suffix: '+',
    label: 'Team Members',
    description: 'Hired and trained from scratch',
  },
  {
    value: 73,
    suffix: '%',
    label: 'Faster Dispatch',
    description: 'AI-powered automation impact',
  },
  {
    value: 99.2,
    suffix: '%',
    label: 'SLA Compliance',
    description: 'Industry-leading performance',
  },
];

export function StatsSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(20,184,166,0.05),transparent)]" aria-hidden="true" />
      <div className="absolute inset-0 grid-pattern opacity-50" aria-hidden="true" />

      <Container>
        <ScrollReveal className="text-center mb-20">
          <h2 className="text-heading-2 mb-6">
            Results that speak
            <br />
            <span className="accent-gradient">louder than promises</span>
          </h2>
          <p className="text-body-lg max-w-2xl mx-auto">
            We don't just build systems — we build machines that scale your
            business exponentially.
          </p>
        </ScrollReveal>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="relative group"
            >
              <div className="relative p-8 rounded-2xl bg-surface border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(20,184,166,0.15)]">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  {/* Animated Number */}
                  <div className="text-5xl font-bold mb-3">
                    <AnimatedCounter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      delay={0.2 + index * 0.1}
                      className="accent-gradient"
                    />
                  </div>

                  {/* Label */}
                  <div className="text-lg font-semibold text-foreground mb-2">
                    {stat.label}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted">{stat.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
