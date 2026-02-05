'use client';

import { useEffect, useRef } from 'react';

interface RevealTextProps {
  children: string;
  className?: string;
  delay?: number;
}

export function RevealText({ children, className = '', delay = 0 }: RevealTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let gsapInstance: typeof import('gsap') | null = null;
    let scrollInstance: typeof import('gsap/ScrollTrigger') | null = null;

    const initGSAP = async () => {
      const gsap = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.default.registerPlugin(ScrollTrigger);
      gsapInstance = gsap;
      scrollInstance = { ScrollTrigger } as typeof import('gsap/ScrollTrigger');

      const el = containerRef.current;
      if (!el) return;

      const words = el.querySelectorAll('.word');

      gsap.default.fromTo(
        words,
        { opacity: 0.15 },
        {
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          delay,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: 0.5,
          },
        }
      );
    };

    initGSAP();

    return () => {
      if (scrollInstance) {
        scrollInstance.ScrollTrigger.getAll().forEach((t) => t.kill());
      }
    };
  }, [delay]);

  const words = children.split(' ');

  return (
    <div ref={containerRef} className={className}>
      {words.map((word, i) => (
        <span key={i} className="word inline-block mr-[0.3em]">
          {word}
        </span>
      ))}
    </div>
  );
}
