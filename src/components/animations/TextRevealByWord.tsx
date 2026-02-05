'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

/**
 * Each word reveals as user scrolls — creates a reading experience
 * that feels like the page is speaking directly to you.
 * GPU-accelerated opacity transitions only.
 */
export function TextRevealByWord({ text, className = '' }: TextRevealByWordProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const words = text.split(' ');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.4'],
  });

  if (prefersReducedMotion) {
    return (
      <div className={className} role="text">
        {text}
      </div>
    );
  }

  return (
    <div ref={containerRef} className={className} role="text">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;
        return <Word key={`${word}-${i}`} progress={scrollYProgress} range={[start, end]}>{word}</Word>;
      })}
    </div>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.12, 1]);

  return (
    <motion.span
      style={{ opacity }}
      className="inline-block mr-[0.3em] will-change-[opacity]"
    >
      {children}
    </motion.span>
  );
}
