'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/animations/FadeIn';

const DEMO_INTERESTS = [
  'Dispatch Automation',
  'AI Operations',
  'Team Scaling',
  'Full Operational Build',
  'ROI Assessment',
] as const;

const COMPANY_SIZES = [
  '1-10 employees',
  '11-50 employees',
  '51-200 employees',
  '200+ employees',
] as const;

export function DemoContent() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    companySize: '',
    interests: [] as string[],
    currentChallenge: '',
    timeline: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function toggleInterest(interest: string) {
    setFormState((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

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
            className="max-w-3xl"
          >
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent mb-6">
              Request a Demo
            </span>
            <h1 className="text-heading-1">
              See the machine
              <span className="accent-gradient"> in action</span>
            </h1>
            <p className="text-body-lg mt-6">
              No slide decks. No hypotheticals. We&apos;ll show you actual systems
              running in production — dispatch engines, AI agents, and operational
              dashboards handling real workloads.
            </p>
          </motion.div>
        </Container>
      </section>

      <div className="divider" />

      {/* Form */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <FadeIn>
                  <div className="p-12 rounded-2xl border border-accent/20 bg-accent/5 text-center">
                    <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-6">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
                        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3 className="text-heading-3 text-foreground">Demo request received</h3>
                    <p className="text-body mt-3">
                      We&apos;ll reach out within 24 hours to schedule your
                      personalized demo. In the meantime, check out our case
                      studies.
                    </p>
                  </div>
                </FadeIn>
              ) : (
                <FadeIn>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Your Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200 text-sm"
                          placeholder="Full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Work Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200 text-sm"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                          Company
                        </label>
                        <input
                          id="company"
                          type="text"
                          required
                          value={formState.company}
                          onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200 text-sm"
                          placeholder="Company name"
                        />
                      </div>
                      <div>
                        <label htmlFor="companySize" className="block text-sm font-medium text-foreground mb-2">
                          Company Size
                        </label>
                        <select
                          id="companySize"
                          required
                          value={formState.companySize}
                          onChange={(e) => setFormState({ ...formState, companySize: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200 text-sm appearance-none"
                        >
                          <option value="" disabled>Select size</option>
                          {COMPANY_SIZES.map((size) => (
                            <option key={size} value={size}>{size}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Interest selection */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-3">
                        What are you interested in?
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {DEMO_INTERESTS.map((interest) => (
                          <button
                            key={interest}
                            type="button"
                            onClick={() => toggleInterest(interest)}
                            className={`px-4 py-2 rounded-full text-sm transition-all duration-200 ${
                              formState.interests.includes(interest)
                                ? 'bg-accent text-[#0a0a0a] font-medium'
                                : 'border border-border text-muted hover:border-border-hover hover:text-foreground'
                            }`}
                          >
                            {interest}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="challenge" className="block text-sm font-medium text-foreground mb-2">
                        What&apos;s your biggest operational challenge?
                      </label>
                      <textarea
                        id="challenge"
                        rows={4}
                        value={formState.currentChallenge}
                        onChange={(e) => setFormState({ ...formState, currentChallenge: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200 text-sm resize-none"
                        placeholder="Tell us about the problem you're trying to solve..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-accent text-[#0a0a0a] font-medium text-sm hover:bg-accent-light active:bg-accent-dark transition-colors duration-200 w-full md:w-auto"
                    >
                      Request Demo
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </form>
                </FadeIn>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <FadeIn delay={0.2} direction="right">
                <div className="space-y-8">
                  <div className="p-6 rounded-xl border border-border bg-surface/30">
                    <h3 className="text-sm font-medium text-foreground mb-3">
                      What to expect
                    </h3>
                    <ul className="space-y-3">
                      {[
                        'Live walkthrough of production systems',
                        'Custom ROI analysis for your operation',
                        'Technical architecture overview',
                        'Timeline and pricing discussion',
                        'Q&A with our operations team',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-accent mt-0.5 flex-shrink-0">
                            <path d="M4 8l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span className="text-sm text-muted">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 rounded-xl border border-border bg-surface/30">
                    <h3 className="text-sm font-medium text-foreground mb-2">
                      Typical demo duration
                    </h3>
                    <p className="text-2xl font-semibold text-accent">30 minutes</p>
                    <p className="text-xs text-muted mt-1">
                      We respect your time. No hour-long sales pitches.
                    </p>
                  </div>

                  <div className="p-6 rounded-xl border border-accent/20 bg-accent/5">
                    <p className="text-sm text-foreground/80">
                      &ldquo;The demo alone gave us more operational insight than
                      6 months of consulting.&rdquo;
                    </p>
                    <p className="text-xs text-muted mt-2">
                      — Founder, Project Meridian
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
