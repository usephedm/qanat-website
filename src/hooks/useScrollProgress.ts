'use client';

import { useMotionValue, useScroll, useSpring } from 'framer-motion';

/**
 * Returns smooth scroll progress (0 → 1) for the page or a container
 */
export function useScrollProgress(containerRef?: React.RefObject<HTMLElement | null>) {
  const { scrollYProgress } = useScroll(
    containerRef ? { target: containerRef } : undefined
  );
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return { scrollYProgress, smoothProgress };
}
