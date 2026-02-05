import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SITE, NAV_LINKS } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-lg font-semibold tracking-[0.15em] text-foreground">
                {SITE.name}
              </span>
            </Link>
            <p className="mt-4 text-body max-w-sm">
              {SITE.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-medium text-foreground mb-4">Navigate</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
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

          {/* Connect */}
          <div>
            <h3 className="text-sm font-medium text-foreground mb-4">Connect</h3>
            <ul className="space-y-3">
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
                  href={SITE.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-foreground transition-colors duration-200"
                >
                  GitHub
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
          <p className="text-xs text-muted/50">
            {SITE.entity.state}, USA
          </p>
        </div>
      </Container>
    </footer>
  );
}
