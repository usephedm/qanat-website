'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';

const PLAYBOOK_CHAPTERS = [
  {
    number: '01',
    title: 'The Operations-First Framework',
    description: 'Why strategy without infrastructure is just a wish list. How to audit your operations gap.',
  },
  {
    number: '02',
    title: 'Dispatch Automation Architecture',
    description: 'The technical blueprint for AI-powered dispatch — routing, scheduling, escalation, and monitoring.',
  },
  {
    number: '03',
    title: 'Building AI Agents That Execute',
    description: 'From prompt engineering to production deployment. Real agent architectures for real operations.',
  },
  {
    number: '04',
    title: 'Scaling Teams Across Borders',
    description: 'The playbook for building high-performing remote teams across timezones, cultures, and regulatory environments.',
  },
  {
    number: '05',
    title: 'Revenue Operations Engineering',
    description: 'How to build revenue systems — not funnels. From lead to close to retention, engineered like infrastructure.',
  },
  {
    number: '06',
    title: 'The 18-Month Roadmap',
    description: 'A step-by-step timeline for going from zero to scaled operations, based on real deployments.',
  },
];

export function PlaybookContent() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(20,184,166,0.08),transparent)]" />

        <Container className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Copy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 text-xs font-medium text-accent mb-6">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-accent">
                  <path d="M2 2h12v12H2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M5 6h6M5 9h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                Free Download — 47 Pages
              </span>
              <h1 className="text-heading-1">
                The AI Operations
                <br />
                <span className="accent-gradient">Playbook</span>
              </h1>
              <p className="text-body-lg mt-6">
                The definitive guide to building AI-powered operational
                infrastructure from scratch. Not theory — frameworks extracted
                from real deployments that generated millions in revenue.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 text-sm text-muted">
                <span className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-accent">
                    <path d="M4 8l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  47 pages
                </span>
                <span className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-accent">
                    <path d="M4 8l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  6 chapters
                </span>
                <span className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-accent">
                    <path d="M4 8l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Real frameworks
                </span>
                <span className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-accent">
                    <path d="M4 8l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  No fluff
                </span>
              </div>
            </motion.div>

            {/* Right: Download form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            >
              {submitted ? (
                <div className="p-10 rounded-2xl border border-accent/20 bg-accent/5 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
                      <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-heading-3 text-foreground">Check your inbox</h3>
                  <p className="text-body mt-3">
                    The playbook is on its way to <span className="text-foreground">{email}</span>.
                    If you don&apos;t see it in a few minutes, check your spam folder.
                  </p>
                </div>
              ) : (
                <div className="p-8 md:p-10 rounded-2xl border border-border bg-surface/50">
                  <h3 className="text-heading-3 text-foreground">
                    Get the playbook — free
                  </h3>
                  <p className="text-sm text-muted mt-2">
                    Enter your email and we&apos;ll send you the full PDF immediately.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200 text-sm"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200 text-sm"
                        placeholder="Work email"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-accent text-[#0a0a0a] font-medium text-sm hover:bg-accent-light active:bg-accent-dark transition-colors duration-200"
                    >
                      Download the Playbook
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 3v10m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <p className="text-xs text-center text-muted/50">
                      No spam. No newsletter unless you opt in. Just the playbook.
                    </p>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </Container>
      </section>

      <div className="divider" />

      {/* Chapter previews */}
      <section className="py-24 md:py-32">
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-heading-2">What&apos;s inside</h2>
              <p className="text-body-lg mt-4">
                Six chapters of actionable frameworks — the exact systems we use
                to build AI-powered operations.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.08}>
            {PLAYBOOK_CHAPTERS.map((chapter) => (
              <StaggerItem key={chapter.number}>
                <div className="p-6 rounded-xl border border-border bg-surface/30 hover:bg-surface-elevated hover:border-border-hover transition-all duration-300 h-full">
                  <span className="text-xs font-mono text-accent">
                    Chapter {chapter.number}
                  </span>
                  <h3 className="text-sm font-medium text-foreground mt-3">
                    {chapter.title}
                  </h3>
                  <p className="text-sm text-muted mt-2">{chapter.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      <div className="divider" />

      {/* Who it's for */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-heading-2">Built for builders</h2>
              <p className="text-body-lg mt-4">
                This playbook is for founders, operations leaders, and engineers
                who are done reading about AI and ready to deploy it.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'Founders', desc: 'Who want to build ops infrastructure, not just hire more people' },
                  { title: 'Ops Leaders', desc: 'Who need to scale their team without proportionally scaling headcount' },
                  { title: 'Engineers', desc: 'Who want to deploy AI agents in real operational environments' },
                ].map((persona) => (
                  <div key={persona.title} className="p-6 rounded-xl border border-border bg-surface/30">
                    <h3 className="text-sm font-medium text-foreground">{persona.title}</h3>
                    <p className="text-xs text-muted mt-2">{persona.desc}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
