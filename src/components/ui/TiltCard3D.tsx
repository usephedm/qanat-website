'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface TiltCard3DProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function TiltCard3D({
  children,
  className = '',
  glowColor = 'rgba(20, 184, 166, 0.4)',
}: TiltCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate rotation (max ±12 degrees for subtle effect)
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 12;
    const rotateX = -((e.clientY - centerY) / (rect.height / 2)) * 12;

    setRotation({ x: rotateX, y: rotateY });

    // Calculate glow position (0-100%)
    const glowX = ((e.clientX - rect.left) / rect.width) * 100;
    const glowY = ((e.clientY - rect.top) / rect.height) * 100;

    setGlowPosition({ x: glowX, y: glowY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setGlowPosition({ x: 50, y: 50 });
  };

  return (
    <div className="perspective-1000">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`relative rounded-2xl bg-surface border border-border transition-all duration-300 ease-out will-change-transform ${className}`}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1, 1, 1)`,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.02 }}
      >
        {/* Glow effect */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, ${glowColor}, transparent 60%)`,
          }}
        />

        {/* Shine effect */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, transparent 30%, rgba(255, 255, 255, 0.05) ${glowPosition.x}%, transparent 70%)`,
          }}
        />

        {/* Content */}
        <div
          className="relative z-10"
          style={{ transform: 'translateZ(40px)' }}
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}

// Add to globals.css if not already there:
// .perspective-1000 {
//   perspective: 1000px;
// }
