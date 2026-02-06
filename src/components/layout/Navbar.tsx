'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { LogoFull } from '@/components/ui/Logo';
import { NAV_LINKS } from '@/lib/constants';
import { EASE, DURATION, SPRING } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { FullscreenMenu } from './FullscreenMenu';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={prefersReducedMotion ? undefined : { y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: DURATION.normal, ease: EASE.enter }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-border'
            : 'bg-transparent'
        }`}
        role="banner"
      >
        <Container>
          <nav className="flex items-center justify-between h-16 md:h-20" aria-label="Main navigation">
            {/* Logo */}
            <Link href="/" className="relative z-50 group" aria-label="QANAT — Home">
              <LogoFull className="group-hover:[&_span]:text-accent transition-colors duration-200" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-sm transition-colors duration-200 ${
                      isActive ? 'text-accent' : 'text-muted hover:text-foreground'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                    {/* Active indicator dot */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
                        transition={{ type: 'spring', ...SPRING.snappy }}
                      />
                    )}
                  </Link>
                );
              })}
              <Link
                href="/demo"
                className="ml-2 px-5 py-2.5 text-sm font-medium text-[#0a0a0a] bg-accent rounded-full hover:bg-accent-light active:bg-accent-dark transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background outline-none"
              >
                Request Demo
              </Link>
            </div>

            {/* Menu Button (Desktop & Mobile) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative z-50 flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span className="hidden md:inline">Menu</span>
              <div className="flex flex-col gap-1.5">
                <motion.span
                  animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: DURATION.fast, ease: EASE.enter }}
                  className="block w-6 h-[2px] bg-currentColor origin-center"
                />
                <motion.span
                  animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: DURATION.fast }}
                  className="block w-6 h-[2px] bg-currentColor"
                />
                <motion.span
                  animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: DURATION.fast, ease: EASE.enter }}
                  className="block w-6 h-[2px] bg-currentColor origin-center"
                />
              </div>
            </button>
          </nav>
        </Container>
      </motion.header>

      {/* Fullscreen Menu */}
      <FullscreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
