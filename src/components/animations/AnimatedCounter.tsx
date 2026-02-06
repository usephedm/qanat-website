'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { SPRING } from '@/lib/animations';

interface AnimatedCounterProps {
  value: string; // e.g. "$2.5M", "73%", "99.2%", "50+"
  className?: string;
  delay?: number;
}

/**
 * Animates numbers up from 0 with spring physics.
 * Handles prefixes ($), suffixes (%, M, +, K), and decimals.
 */
export function AnimatedCounter({ value, className = '', delay = 0 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  // Parse the value
  const prefix = value.match(/^[^0-9]*/)?.[0] || '';
  const suffix = value.match(/[^0-9.]*$/)?.[0] || '';
  const numStr = value.replace(prefix, '').replace(suffix, '');
  const targetNum = parseFloat(numStr) || 0;
  const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0;

  const spring = useSpring(targetNum, {
    stiffness: 60,
    damping: 20,
    mass: 1,
  });

  const display = useTransform(spring, (current) => {
    return `${prefix}${current.toFixed(decimals)}${suffix}`;
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isInView && !prefersReducedMotion && mounted) {
      // Start from 0 only after mount
      spring.jump(0);
      const timer = setTimeout(() => {
        spring.set(targetNum);
      }, delay * 1000);
      return () => clearTimeout(timer);
    } else if (isInView && prefersReducedMotion) {
      spring.jump(targetNum);
    }
  }, [isInView, targetNum, delay, spring, prefersReducedMotion, mounted]);

  // Show actual value during SSR and initial render
  if (!mounted || prefersReducedMotion) {
    return <span ref={ref} className={className}>{value}</span>;
  }

  return <motion.span ref={ref} className={className}>{display}</motion.span>;
}
