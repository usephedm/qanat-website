'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isCTA, setIsCTA] = useState(false);

  // Smooth spring animation for cursor position
  const cursorX = useSpring(0, { stiffness: 500, damping: 28, mass: 0.5 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28, mass: 0.5 });

  // Slower trailing cursor
  const trailX = useSpring(0, { stiffness: 150, damping: 15, mass: 0.8 });
  const trailY = useSpring(0, { stiffness: 150, damping: 15, mass: 0.8 });

  useEffect(() => {
    setMounted(true);

    // Check if device supports hover (not touch)
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (isTouch) return;

    const onMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      trailX.set(e.clientX);
      trailY.set(e.clientY);
    };

    const checkHoverTarget = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if hovering over interactive elements
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-hover');

      const isCTAButton = 
        target.closest('a[href="/contact"]') ||
        target.closest('button.cta-button');

      setIsHovering(!!isInteractive);
      setIsCTA(!!isCTAButton);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', checkHoverTarget);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', checkHoverTarget);
    };
  }, [cursorX, cursorY, trailX, trailY]);

  // Don't render on server or on touch devices
  if (!mounted) return null;

  const isTouch = typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches;
  if (isTouch) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? (isCTA ? 0.3 : 0.5) : 1,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      />

      {/* Trailing circle */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-accent rounded-full pointer-events-none z-[9998] mix-blend-difference"
        style={{
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? (isCTA ? 2 : 1.5) : 1,
          opacity: isHovering ? 1 : 0.6,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      />

      {/* CTA hover text */}
      {isCTA && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9997] text-xs font-medium text-accent mix-blend-difference whitespace-nowrap"
          style={{
            x: trailX,
            y: trailY,
            translateX: '-50%',
            translateY: 'calc(-50% - 32px)',
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          View
        </motion.div>
      )}
    </>
  );
}
