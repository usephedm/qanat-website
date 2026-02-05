'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, type ReactNode, type MouseEvent } from 'react';
import { SPRING } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  /** Inner content moves opposite direction for depth */
  innerStrength?: number;
}

export function MagneticButton({
  children,
  className = '',
  strength = 0.3,
  innerStrength = 0.15,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, SPRING.magnetic);
  const springY = useSpring(y, SPRING.magnetic);

  // Inner content moves slightly opposite for a parallax depth effect
  const innerX = useTransform(springX, (v) => v * -innerStrength);
  const innerY = useTransform(springY, (v) => v * -innerStrength);

  // Subtle scale on hover
  const scale = useMotionValue(1);
  const springScale = useSpring(scale, SPRING.snappy);

  function handleMouse(e: MouseEvent) {
    if (prefersReducedMotion) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  }

  function handleEnter() {
    if (prefersReducedMotion) return;
    scale.set(1.02);
  }

  function reset() {
    x.set(0);
    y.set(0);
    scale.set(1);
  }

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY, scale: springScale }}
      onMouseMove={handleMouse}
      onMouseEnter={handleEnter}
      onMouseLeave={reset}
      className={className}
    >
      <motion.div style={{ x: innerX, y: innerY }}>
        {children}
      </motion.div>
    </motion.div>
  );
}
