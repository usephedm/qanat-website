'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// Staircase transition variant (for dramatic pages)
export function StaircaseTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const stairs = Array.from({ length: 5 });

  return (
    <>
      <div className="fixed inset-0 z-[9000] flex pointer-events-none">
        {stairs.map((_, i) => (
          <motion.div
            key={`stair-${pathname}-${i}`}
            className="flex-1 bg-background"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{
              duration: 0.5,
              delay: i * 0.05,
              ease: [0.76, 0, 0.24, 1],
            }}
            style={{ originY: 1 }}
          />
        ))}
      </div>
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        {children}
      </motion.div>
    </>
  );
}
