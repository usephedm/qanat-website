import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { LogoFull } from '@/components/ui/Logo';
import { SITE } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 md:gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="inline-block">
              <LogoFull />
            </Link>
            <p className="mt-1 text-xs text-accent/60 font-medium tracking-wider">{SITE.domain}</p>
            <p className="mt-4 text-body max-w-sm">{SITE.description}</p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-medium text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {[
                { label: 'About', href: '/about' },
                { label: 'Case Studies', href: '/case-studies' },
                { label: 'Blog', href: '/blog' },
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
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-medium text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              {[
                { label: 'Dispatch Automation', href: '/services#dispatch-automation' },
                { label: 'AI Operations', href: '/services#ai-operations' },
                { label: 'Team Scaling', href: '/services#team-scaling' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Request Demo', href: '/demo' },
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
          </div>

          {/* Resources & Connect */}
          <div>
            <h3 className="text-sm font-medium text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/playbook"
                  className="text-sm text-accent hover:text-accent-light transition-colors duration-200"
                >
                  AI Ops Playbook ↗
                </Link>
              </li>
              <li>
                <a
                  href={SITE.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-foreground transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={SITE.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-foreground transition-colors duration-200"
                >
                  X / Twitter
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.contact.email}`}
                  className="text-sm text-muted hover:text-foreground transition-colors duration-200"
                >
                  {SITE.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="divider mt-12" />
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {currentYear} {SITE.entity.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted/50">{SITE.entity.state}, USA</p>
        </div>
      </Container>
    </footer>
  );
}
