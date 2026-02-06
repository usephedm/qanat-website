'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { LogoFull } from '@/components/ui/Logo';
import { SITE } from '@/lib/constants';
import { getAllArticles, ARTICLE_CATEGORIES } from '@/data/articles';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const latestArticles = getAllArticles().slice(0, 3);

  return (
    <footer className="border-t border-border" role="contentinfo">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 md:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block" aria-label="QANAT — Home">
              <LogoFull />
            </Link>
            <p className="mt-1 text-xs text-accent/60 font-medium tracking-wider">{SITE.domain}</p>
            <p className="mt-4 text-body max-w-sm text-sm">{SITE.description}</p>

            {/* Newsletter */}
            <div className="mt-6 p-4 rounded-xl border border-border bg-surface/20">
              <p className="text-xs font-medium text-foreground mb-2">Stay Updated</p>
              <p className="text-xs text-muted mb-3">Get AI operations insights delivered.</p>
              <a
                href="mailto:hello@qn8.app?subject=Newsletter Subscription"
                className="inline-flex items-center gap-1 text-xs text-accent hover:text-accent-light transition-colors"
              >
                Subscribe to Newsletter
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10m0 0L9 4m4 4L9 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Intelligence */}
          <nav aria-label="Intelligence links" className="lg:col-span-2">
            <h3 className="text-sm font-medium text-foreground mb-4">Intelligence</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <Link
                  href="/intelligence"
                  className="text-sm text-accent hover:text-accent-light transition-colors duration-200 font-medium"
                >
                  All Articles
                </Link>
              </li>
              {ARTICLE_CATEGORIES.slice(0, 4).map((category) => (
                <li key={category}>
                  <Link
                    href={`/intelligence/category/${category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                    className="text-sm text-muted hover:text-foreground transition-colors duration-200"
                  >
                    {category}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/feed.xml"
                  className="text-sm text-muted hover:text-foreground transition-colors duration-200"
                >
                  RSS Feed
                </a>
              </li>
            </ul>

            <div className="text-xs text-muted">
              <p className="font-medium text-foreground mb-2">Latest Articles:</p>
              <ul className="space-y-2">
                {latestArticles.map((article) => (
                  <li key={article.slug}>
                    <Link
                      href={`/intelligence/${article.slug}`}
                      className="hover:text-accent transition-colors line-clamp-1"
                    >
                      {article.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Company */}
          <nav aria-label="Company links">
            <h3 className="text-sm font-medium text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {[
                { label: 'About', href: '/about' },
                { label: 'Case Studies', href: '/case-studies' },
                { label: 'Careers', href: '/careers' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/careers"
                  className="text-sm text-accent hover:text-accent-light transition-colors duration-200 font-medium"
                >
                  We&apos;re Hiring 🚀
                </Link>
              </li>
            </ul>
          </nav>

          {/* Services & Resources */}
          <nav aria-label="Services and Resources">
            <h3 className="text-sm font-medium text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              {[
                { label: 'Dispatch Automation', href: '/services#dispatch-automation' },
                { label: 'AI Operations', href: '/services#ai-operations' },
                { label: 'Team Scaling', href: '/services#team-scaling' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Request Demo', href: '/demo' },
                { label: 'AI Ops Playbook', href: '/playbook' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-2">
              <a
                href={SITE.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs text-muted hover:text-foreground transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href={SITE.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs text-muted hover:text-foreground transition-colors duration-200"
              >
                X / Twitter
              </a>
            </div>
          </nav>
        </div>

        {/* Built by V section */}
        <div className="divider mt-12" aria-hidden="true" />
        <div className="mt-8 flex items-start gap-4 max-w-md">
          <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-sm font-semibold flex-shrink-0">
            V
          </div>
          <div>
            <p className="text-sm text-foreground font-medium">Built by Yousof Al-Ali (V)</p>
            <p className="text-xs text-muted mt-1 leading-relaxed">
              Founder & CEO of QANAT. 7+ years building AI-powered ops infrastructure across 3 continents. Scaled operations from $0 to $2.5M ARR.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="divider mt-12" aria-hidden="true" />
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-wrap text-xs text-muted">
            <p>&copy; {currentYear} {SITE.entity.name}. All rights reserved.</p>
            <span className="hidden md:inline">·</span>
            <a href={`mailto:${SITE.contact.email}`} className="hover:text-accent transition-colors">
              {SITE.contact.email}
            </a>
            <span className="hidden md:inline">·</span>
            <a href={`mailto:${SITE.contact.hiring}`} className="hover:text-accent transition-colors">
              {SITE.contact.hiring}
            </a>
          </div>
          <p className="text-xs text-muted/50">{SITE.entity.state}, USA</p>
        </div>
      </Container>
    </footer>
  );
}
