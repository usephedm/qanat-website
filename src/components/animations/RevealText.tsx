'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface RevealTextProps {
  children: string;
  className?: string;
  delay?: number;
}

export function RevealText({ children, className = '', delay = 0 }: RevealTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    let ctx: { revert: () => void } | null = null;

    const initGSAP = async () => {
      const gsap = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.default.registerPlugin(ScrollTrigger);

      const el = containerRef.current;
      if (!el) return;

      const words = el.querySelectorAll('.word');

      // Create GSAP context for cleanup
      ctx = gsap.default.context(() => {
        gsap.default.fromTo(
          words,
          { opacity: 0.12, y: 4 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.03,
            delay,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              end: 'bottom 55%',
              scrub: 0.3,
            },
          }
        );
      }, el);
    };

    initGSAP();

    return () => {
      if (ctx) ctx.revert();
    };
  }, [delay, prefersReducedMotion]);

  const words = children.split(' ');

  return (
    <div ref={containerRef} className={className} role="text">
      {words.map((word, i) => (
        <span
          key={i}
          className="word inline-block mr-[0.3em]"
          style={prefersReducedMotion ? { opacity: 1 } : undefined}
        >
          {word}
        </span>
      ))}
    </div>
  );
}
