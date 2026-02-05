'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { LogoIcon } from '@/components/ui/Logo';
import { AnimatedCounter } from '@/components/animations/AnimatedCounter';
import { useEffect, useRef } from 'react';
import { EASE, DURATION, SPRING } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';

function FlowingLines() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      // Underground flowing channels — qanat metaphor
      const lineCount = 7;
      for (let i = 0; i < lineCount; i++) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(20, 184, 166, ${0.025 + i * 0.01})`;
        ctx.lineWidth = 1 + (i % 3) * 0.5;

        const baseY = h * 0.2 + i * (h * 0.1);
        for (let x = 0; x <= w; x += 3) {
          const y =
            baseY +
            Math.sin(x * 0.002 + time + i * 0.6) * 25 +
            Math.sin(x * 0.005 + time * 0.5 + i * 1.2) * 12 +
            Math.cos(x * 0.001 + time * 0.3) * 8;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      time += 0.005;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none will-change-transform"
      style={{ opacity: 0.5 }}
      aria-hidden="true"
    />
  );
}

const stats = [
  { value: '$2.5M', label: 'ARR in 18 months' },
  { value: '50+', label: 'Team scaled from zero' },
  { value: '73%', label: 'Faster dispatch' },
  { value: '99.2%', label: 'SLA compliance' },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Parallax the background on scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background layers with parallax */}
      <motion.div
        className="absolute inset-0"
        style={prefersReducedMotion ? {} : { y: bgY }}
      >
        <div className="absolute inset-0 grid-pattern" />
        <FlowingLines />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(20,184,166,0.08),transparent)]" />
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" aria-hidden="true" />

      <motion.div
        className="relative z-10 w-full"
        style={prefersReducedMotion ? {} : { opacity: contentOpacity }}
      >
        <Container className="pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="max-w-5xl">
            {/* QN8 Brand Badge */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: DURATION.slow, delay: 0.2, ease: EASE.enter }}
              className="flex items-center gap-4"
            >
              <span className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-border text-xs font-medium text-muted tracking-wider uppercase">
                <LogoIcon size={16} />
                <span aria-label="QN8 dot app — AI Operations Infrastructure">QN8.app — AI Operations Infrastructure</span>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              id="hero-heading"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DURATION.slow, delay: 0.4, ease: EASE.enter }}
              className="text-display mt-8"
            >
              We build the machine
              <br />
              <span className="accent-gradient">behind the machine.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DURATION.slow, delay: 0.7, ease: EASE.enter }}
              className="text-body-lg mt-8 max-w-2xl"
            >
              Most companies have a strategy. Few have the operational infrastructure
              to execute it. We build AI-powered dispatch systems, scale teams from
              zero to fifty, and engineer the invisible systems that took one client
              from startup to <span className="text-foreground font-medium">$2.5M ARR in 18 months</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DURATION.slow, delay: 0.9, ease: EASE.enter }}
              className="flex flex-wrap gap-4 mt-10"
              role="group"
              aria-label="Get started"
            >
              <MagneticButton>
                <Button href="/demo" size="lg">
                  Request a Demo
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1" aria-hidden="true">
                    <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button href="/case-studies" variant="secondary" size="lg">
                  See the Results
                </Button>
              </MagneticButton>
            </motion.div>

            {/* Founder trust signal */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: DURATION.slow, delay: 1.1, ease: EASE.enter }}
              className="mt-12 flex items-center gap-4"
            >
              <motion.div
                className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-sm font-semibold"
                whileHover={prefersReducedMotion ? {} : { scale: 1.1, borderColor: 'rgba(20, 184, 166, 0.5)' }}
                transition={{ type: 'spring', ...SPRING.snappy }}
              >
                V
              </motion.div>
              <div>
                <p className="text-sm text-foreground font-medium">Built by V</p>
                <p className="text-xs text-muted">
                  7+ years building ops infrastructure across 3 continents
                </p>
              </div>
            </motion.div>

            {/* Social proof stats — animated counters */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12" role="list" aria-label="Key metrics">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: DURATION.normal,
                    delay: 1.2 + i * 0.15,
                    ease: EASE.enter,
                  }}
                  className="group"
                  role="listitem"
                >
                  <AnimatedCounter
                    value={stat.value}
                    delay={1.4 + i * 0.15}
                    className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight block"
                  />
                  <div className="text-xs text-muted mt-1 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
            aria-hidden="true"
          >
            <motion.div
              animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-5 h-8 border border-border/50 rounded-full flex items-start justify-center p-1"
            >
              <motion.div
                animate={prefersReducedMotion ? {} : { opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1 h-2 bg-accent/60 rounded-full"
              />
            </motion.div>
          </motion.div>
        </Container>
      </motion.div>
    </section>
  );
}
