'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { useEffect, useRef } from 'react';

function WaterLines() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const lineCount = 5;
      for (let i = 0; i < lineCount; i++) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(20, 184, 166, ${0.04 + i * 0.015})`;
        ctx.lineWidth = 1;

        const baseY = h * 0.3 + i * (h * 0.12);
        for (let x = 0; x <= w; x += 2) {
          const y =
            baseY +
            Math.sin((x * 0.003) + time + i * 0.8) * 20 +
            Math.sin((x * 0.006) + time * 0.7 + i) * 10;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      time += 0.008;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern" />
      <WaterLines />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(20,184,166,0.08),transparent)]" />

      <Container className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border text-xs font-medium text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              AI-Powered Operations
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-display mt-8"
          >
            Invisible
            <br />
            infrastructure.
            <br />
            <span className="accent-gradient">Visible results.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-body-lg mt-8 max-w-xl"
          >
            We build the operational systems that power modern businesses — 
            AI-driven dispatch, facility management, and cross-border 
            service delivery that just works.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <MagneticButton>
              <Button href="/contact" size="lg">
                Start a Conversation
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="ml-1"
                >
                  <path
                    d="M3 8h10m0 0L9 4m4 4L9 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button href="/services" variant="secondary" size="lg">
                View Services
              </Button>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 border border-border/50 rounded-full flex items-start justify-center p-1"
          >
            <motion.div className="w-1 h-2 bg-muted/50 rounded-full" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
