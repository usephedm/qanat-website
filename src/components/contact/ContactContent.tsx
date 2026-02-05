'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { SITE } from '@/lib/constants';

const INQUIRY_TYPES = [
  'General Inquiry',
  'Dispatch Operations',
  'AI Operations',
  'Facility Management',
  'Partnership',
  'Careers',
] as const;

export function ContactContent() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    type: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Connect to form backend (Formspree, Resend, etc.)
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
          >
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent mb-6">
              Contact
            </span>
            <h1 className="text-heading-1 max-w-3xl">
              Let&apos;s start a
              <span className="accent-gradient"> conversation</span>
            </h1>
            <p className="text-body-lg mt-6 max-w-2xl">
              Whether you have a specific project in mind or just want to explore
              what&apos;s possible — we&apos;re here to listen.
            </p>
          </motion.div>
        </Container>
      </section>

      <div className="divider" />

      {/* Form + Info */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <FadeIn>
                  <div className="p-12 rounded-2xl border border-accent/20 bg-accent/5 text-center">
                    <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-6">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-accent"
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="text-heading-3 text-foreground">
                      Message received
                    </h3>
                    <p className="text-body mt-3">
                      We&apos;ll get back to you within 24 hours. Looking forward to
                      the conversation.
                    </p>
                  </div>
                </FadeIn>
              ) : (
                <FadeIn>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) =>
                            setFormState({ ...formState, name: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200 text-sm"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) =>
                            setFormState({ ...formState, email: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200 text-sm"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Company{' '}
                        <span className="text-muted font-normal">(optional)</span>
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={formState.company}
                        onChange={(e) =>
                          setFormState({ ...formState, company: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200 text-sm"
                        placeholder="Company name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="type"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Inquiry Type
                      </label>
                      <select
                        id="type"
                        required
                        value={formState.type}
                        onChange={(e) =>
                          setFormState({ ...formState, type: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200 text-sm appearance-none"
                      >
                        <option value="" disabled>
                          Select a topic
                        </option>
                        {INQUIRY_TYPES.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({ ...formState, message: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200 text-sm resize-none"
                        placeholder="Tell us about your project, challenge, or idea..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-accent text-[#0a0a0a] font-medium text-sm hover:bg-accent-light active:bg-accent-dark transition-colors duration-200"
                    >
                      Send Message
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M3 8h10m0 0L9 4m4 4L9 12"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </form>
                </FadeIn>
              )}
            </div>

            {/* Info sidebar */}
            <div className="lg:col-span-2">
              <FadeIn delay={0.2} direction="right">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm font-medium text-foreground mb-3">
                      Email
                    </h3>
                    <a
                      href={`mailto:${SITE.contact.email}`}
                      className="text-body hover:text-accent transition-colors"
                    >
                      {SITE.contact.email}
                    </a>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-foreground mb-3">
                      Based in
                    </h3>
                    <p className="text-body">{SITE.entity.state}, USA</p>
                    <p className="text-body">Operating globally</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-foreground mb-3">
                      Connect
                    </h3>
                    <div className="space-y-2">
                      <a
                        href={SITE.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-body hover:text-accent transition-colors"
                      >
                        LinkedIn
                      </a>
                      <a
                        href={SITE.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-body hover:text-accent transition-colors"
                      >
                        X / Twitter
                      </a>
                    </div>
                  </div>

                  <div className="p-6 rounded-xl border border-border bg-surface/30">
                    <p className="text-sm text-foreground font-medium">
                      Response time
                    </p>
                    <p className="text-sm text-muted mt-1">
                      We typically respond within 24 hours on business days.
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
