'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/**
 * Thin progress bar at top of page showing scroll position.
 * GPU-accelerated, zero layout shift.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left will-change-transform"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #2dd4bf, #14b8a6, #0d9488)',
      }}
      aria-hidden="true"
    />
  );
}
