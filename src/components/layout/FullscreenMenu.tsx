'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { LogoIcon } from '@/components/ui/Logo';

const menuItems = [
  { title: 'Home', href: '/' },
  { title: 'Services', href: '/services' },
  { title: 'Intelligence', href: '/intelligence' },
  { title: 'Case Studies', href: '/case-studies' },
  { title: 'Careers', href: '/careers' },
  { title: 'Contact', href: '/contact' },
];

const socialLinks = [
  { title: 'LinkedIn', href: '#', label: 'Connect on LinkedIn' },
  { title: 'Twitter', href: '#', label: 'Follow on Twitter' },
  { title: 'GitHub', href: '#', label: 'View code on GitHub' },
];

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FullscreenMenu({ isOpen, onClose }: FullscreenMenuProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-background z-[9990]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Menu Content */}
          <motion.div
            className="fixed inset-0 z-[9991] overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Container className="min-h-screen py-8 flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between mb-20">
                <Link href="/" onClick={onClose} className="flex items-center gap-2.5">
                  <LogoIcon size={32} className="text-accent" />
                  <span className="text-xl font-bold">
                    <span className="text-foreground">QN</span>
                    <span className="accent-gradient">8</span>
                  </span>
                </Link>

                <button
                  onClick={onClose}
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-border hover:border-border-hover transition-colors"
                  aria-label="Close menu"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  >
                    <path d="M5 5L15 15M5 15L15 5" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 flex flex-col justify-center">
                <ul className="space-y-2">
                  {menuItems.map((item, index) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.1 + index * 0.05,
                          duration: 0.4,
                          ease: [0.6, 0.05, 0.01, 0.9],
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className={`group block py-3 text-5xl md:text-7xl font-bold tracking-tight transition-colors ${
                            isActive ? 'text-accent' : 'text-foreground hover:text-accent'
                          }`}
                        >
                          <span className="inline-block transition-transform group-hover:translate-x-4">
                            {item.title}
                          </span>
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Footer */}
              <motion.div
                className="mt-auto pt-12 border-t border-border"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  {/* Social Links */}
                  <div className="flex flex-wrap gap-6">
                    {socialLinks.map((social) => (
                      <a
                        key={social.title}
                        href={social.href}
                        className="text-sm text-muted hover:text-foreground transition-colors"
                        aria-label={social.label}
                      >
                        {social.title}
                      </a>
                    ))}
                  </div>

                  {/* Contact */}
                  <div className="flex flex-col gap-2">
                    <a
                      href="mailto:hello@qn8.app"
                      className="text-sm text-muted hover:text-foreground transition-colors"
                    >
                      hello@qn8.app
                    </a>
                    <p className="text-xs text-muted">
                      © {new Date().getFullYear()} QANAT. All rights reserved.
                    </p>
                  </div>
                </div>
              </motion.div>
            </Container>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
