'use client';

import { motion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';
import { EASE, DURATION, VIEWPORT } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface FadeInProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  /** Blur in effect — adds a nice depth feel */
  blur?: boolean;
  /** Scale in effect */
  scale?: boolean;
  /** HTML element tag for semantic output */
  as?: keyof typeof motion;
}

const directionOffsets = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 40 },
  right: { x: -40 },
  none: {},
};

export function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  duration = DURATION.normal,
  className = '',
  once = true,
  blur = false,
  scale = false,
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();

  const variants: Variants = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: DURATION.fast } },
      }
    : {
        hidden: {
          opacity: 0,
          ...directionOffsets[direction],
          ...(blur ? { filter: 'blur(8px)' } : {}),
          ...(scale ? { scale: 0.95 } : {}),
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          transition: {
            duration,
            delay,
            ease: EASE.enter,
          },
        },
      };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: VIEWPORT.normal }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className = '',
  stagger = 0.08,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: VIEWPORT.normal }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  const variants: Variants = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: DURATION.fast } },
      }
    : {
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: DURATION.normal, ease: EASE.enter },
        },
      };

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}
