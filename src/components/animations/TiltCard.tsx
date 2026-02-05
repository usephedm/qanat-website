'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, type ReactNode, type MouseEvent } from 'react';
import { SPRING } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Max rotation in degrees */
  maxTilt?: number;
  /** Scale on hover */
  hoverScale?: number;
  /** Show cursor-following glow */
  glowEffect?: boolean;
}

export function TiltCard({
  children,
  className = '',
  maxTilt = 6,
  hoverScale = 1.02,
  glowEffect = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(
    useTransform(mouseY, [0, 1], [maxTilt, -maxTilt]),
    SPRING.smooth
  );
  const rotateY = useSpring(
    useTransform(mouseX, [0, 1], [-maxTilt, maxTilt]),
    SPRING.smooth
  );

  const scale = useMotionValue(1);
  const springScale = useSpring(scale, SPRING.snappy);

  // Glow position
  const glowX = useTransform(mouseX, [0, 1], [0, 100]);
  const glowY = useTransform(mouseY, [0, 1], [0, 100]);

  function handleMouse(e: MouseEvent) {
    if (prefersReducedMotion) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  function handleEnter() {
    if (prefersReducedMotion) return;
    scale.set(hoverScale);
  }

  function handleLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
    scale.set(1);
  }

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        scale: springScale,
        transformStyle: 'preserve-3d',
        transformPerspective: 800,
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`relative ${className}`}
    >
      {/* Cursor-following glow */}
      {glowEffect && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: useTransform(
              [glowX, glowY],
              ([x, y]) =>
                `radial-gradient(circle at ${x}% ${y}%, rgba(20, 184, 166, 0.08), transparent 60%)`
            ),
          }}
        />
      )}
      {children}
    </motion.div>
  );
}
