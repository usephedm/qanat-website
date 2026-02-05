'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, type ReactNode } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  /** Parallax speed — negative = move up on scroll, positive = move down */
  speed?: number;
  /** Apply to background elements */
  asBackground?: boolean;
}

export function ParallaxSection({
  children,
  className = '',
  speed = -0.15,
  asBackground = false,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [speed * 100, -speed * 100]);
  const y = useSpring(rawY, { stiffness: 100, damping: 30, restDelta: 0.001 });

  if (prefersReducedMotion) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={asBackground ? 'relative overflow-hidden' : ''}>
      <motion.div
        style={{ y }}
        className={`will-change-transform ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
}
