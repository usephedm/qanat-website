'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { SPRING } from '@/lib/animations';

interface AnimatedCounterProps {
  value: string | number; // Can be string like "$2.5M" or number
  prefix?: string; // Optional prefix (e.g., "$")
  suffix?: string; // Optional suffix (e.g., "%", "M", "+")
  className?: string;
  delay?: number;
  decimals?: number; // Number of decimal places (auto-detected if not provided)
}

/**
 * Animates numbers up from 0 with spring physics.
 * Handles prefixes ($), suffixes (%, M, +, K), and decimals.
 */
export function AnimatedCounter({ 
  value, 
  prefix: propsPrefix, 
  suffix: propsSuffix, 
  className = '', 
  delay = 0,
  decimals: propsDecimals,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  // Parse the value (support both string and number)
  let prefix = propsPrefix || '';
  let suffix = propsSuffix || '';
  let targetNum = 0;
  let decimals = propsDecimals ?? 0;

  if (typeof value === 'string') {
    // Parse string format like "$2.5M"
    prefix = prefix || value.match(/^[^0-9]*/)?.[0] || '';
    suffix = suffix || value.match(/[^0-9.]*$/)?.[0] || '';
    const numStr = value.replace(prefix, '').replace(suffix, '');
    targetNum = parseFloat(numStr) || 0;
    if (propsDecimals === undefined) {
      decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0;
    }
  } else {
    // Direct number
    targetNum = value;
    if (propsDecimals === undefined) {
      decimals = value % 1 !== 0 ? value.toString().split('.')[1]?.length || 1 : 0;
    }
  }

  const displayValue = typeof value === 'string' ? value : `${prefix}${value}${suffix}`;

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
    return <span ref={ref} className={className}>{displayValue}</span>;
  }

  return <motion.span ref={ref} className={className}>{display}</motion.span>;
}
