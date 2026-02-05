'use client';

import Link from 'next/link';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { type ReactNode, useRef, useState, useCallback } from 'react';
import { EASE, DURATION, SPRING } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
  /** Show loading state */
  loading?: boolean;
  /** Icon-only button (applies different padding) */
  icon?: boolean;
  /** Accessible label */
  'aria-label'?: string;
}

const variants = {
  primary:
    'bg-accent text-[#0a0a0a] font-medium hover:bg-accent-light active:bg-accent-dark focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background',
  secondary:
    'border border-border text-foreground hover:border-border-hover hover:bg-surface-elevated focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background',
  ghost:
    'text-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

function RippleEffect({ x, y }: { x: number; y: number }) {
  return (
    <motion.span
      className="absolute rounded-full bg-white/20 pointer-events-none"
      initial={{ width: 0, height: 0, x, y, opacity: 0.5 }}
      animate={{ width: 200, height: 200, x: x - 100, y: y - 100, opacity: 0 }}
      transition={{ duration: 0.6, ease: EASE.exit }}
    />
  );
}

function LoadingSpinner() {
  return (
    <motion.svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      className="flex-shrink-0"
      aria-hidden="true"
    >
      <circle
        cx="8"
        cy="8"
        r="6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="28"
        strokeDashoffset="8"
      />
    </motion.svg>
  );
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  onClick,
  loading = false,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (disabled || loading) return;

      // Ripple effect
      if (!prefersReducedMotion && variant === 'primary') {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        const ripple = {
          id: Date.now(),
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        };
        setRipples((prev) => [...prev, ripple]);
        setTimeout(() => {
          setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
        }, 700);
      }

      onClick?.();
    },
    [disabled, loading, onClick, prefersReducedMotion, variant]
  );

  const base = `inline-flex items-center justify-center gap-2 rounded-full transition-colors duration-200 relative overflow-hidden outline-none ${variants[variant]} ${sizes[size]} ${
    disabled || loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
  } ${className}`;

  const motionProps: HTMLMotionProps<'a'> & HTMLMotionProps<'button'> = prefersReducedMotion
    ? {}
    : {
        whileTap: disabled || loading ? undefined : { scale: 0.97 },
        transition: { type: 'spring', ...SPRING.snappy },
      };

  if (href && !disabled) {
    return (
      <motion.span {...motionProps} className="inline-flex">
        <Link href={href} className={base} aria-label={ariaLabel}>
          {loading && <LoadingSpinner />}
          <span className={loading ? 'opacity-0' : ''}>{children}</span>
          {ripples.map((r) => (
            <RippleEffect key={r.id} x={r.x} y={r.y} />
          ))}
        </Link>
      </motion.span>
    );
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      className={base}
      disabled={disabled || loading}
      onClick={handleClick}
      aria-label={ariaLabel}
      aria-busy={loading}
    >
      {loading && <LoadingSpinner />}
      <span className={loading ? 'opacity-0' : ''}>{children}</span>
      {ripples.map((r) => (
        <RippleEffect key={r.id} x={r.x} y={r.y} />
      ))}
    </motion.button>
  );
}
