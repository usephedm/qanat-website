'use client';

import { motion, type Variants } from 'framer-motion';
import { EASE, DURATION } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface SplitTextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  /** Split by character or word */
  splitBy?: 'char' | 'word';
  /** Animation style */
  variant?: 'fade' | 'slide' | 'blur';
}

/**
 * Staggers individual characters or words into view with customizable effects.
 * Perfect for hero headlines.
 */
export function SplitTextReveal({
  text,
  className = '',
  delay = 0,
  splitBy = 'word',
  variant = 'slide',
}: SplitTextRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const items = splitBy === 'char' ? text.split('') : text.split(' ');

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: splitBy === 'char' ? 0.02 : 0.06,
        delayChildren: delay,
      },
    },
  };

  const itemVariants: Record<string, Variants> = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: DURATION.normal, ease: EASE.enter } },
    },
    slide: {
      hidden: { opacity: 0, y: 40, rotateX: -40 },
      visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: { duration: DURATION.slow, ease: EASE.enter },
      },
    },
    blur: {
      hidden: { opacity: 0, filter: 'blur(12px)', y: 10 },
      visible: {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        transition: { duration: DURATION.slow, ease: EASE.enter },
      },
    },
  };

  if (prefersReducedMotion) {
    return <div className={className}>{text}</div>;
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
      style={{ perspective: 400 }}
      aria-label={text}
    >
      {items.map((item, i) => (
        <motion.span
          key={`${item}-${i}`}
          variants={itemVariants[variant]}
          className="inline-block will-change-transform"
          style={{ marginRight: splitBy === 'word' ? '0.3em' : undefined }}
          aria-hidden="true"
        >
          {item === ' ' ? '\u00A0' : item}
        </motion.span>
      ))}
    </motion.div>
  );
}
