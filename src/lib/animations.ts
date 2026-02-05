/**
 * Animation constants & custom easing curves
 * Every animation in the app uses these — consistency + performance
 */

// ─── Custom Easing Curves ───
// Named after purpose, not math
export const EASE = {
  // Smooth deceleration — for elements entering view
  enter: [0.25, 0.4, 0.25, 1] as const,
  // Snappy — for interactions (buttons, toggles)
  snap: [0.34, 1.56, 0.64, 1] as const,
  // Gentle — for subtle movements (parallax, hover)
  gentle: [0.23, 1, 0.32, 1] as const,
  // Elastic — for playful micro-interactions
  elastic: [0.68, -0.55, 0.27, 1.55] as const,
  // Power — for dramatic reveals
  power: [0.76, 0, 0.24, 1] as const,
  // Out-expo — for exits
  exit: [0.19, 1, 0.22, 1] as const,
} as const;

// ─── Duration Scale ───
export const DURATION = {
  instant: 0.15,
  fast: 0.25,
  normal: 0.5,
  slow: 0.7,
  dramatic: 1.0,
  reveal: 1.2,
} as const;

// ─── Stagger Presets ───
export const STAGGER = {
  tight: 0.04,
  normal: 0.08,
  relaxed: 0.12,
  dramatic: 0.2,
} as const;

// ─── Spring Configs ───
export const SPRING = {
  // Tight and responsive — for buttons, small UI
  snappy: { stiffness: 400, damping: 30, mass: 0.8 },
  // Smooth — for cards, panels
  smooth: { stiffness: 200, damping: 25, mass: 1 },
  // Bouncy — for attention-grabbing elements
  bouncy: { stiffness: 300, damping: 15, mass: 1 },
  // Gentle — for background elements
  gentle: { stiffness: 100, damping: 20, mass: 1.5 },
  // Magnetic — for cursor-following elements
  magnetic: { stiffness: 150, damping: 15, mass: 0.5 },
} as const;

// ─── Viewport Margins for ScrollTrigger ───
export const VIEWPORT = {
  eager: '-20px',    // Trigger early
  normal: '-80px',   // Standard
  lazy: '-150px',    // Trigger late (for below-fold elements)
} as const;

// ─── Framer Motion Variant Presets ───
export const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
  blurIn: {
    hidden: { opacity: 0, filter: 'blur(10px)' },
    visible: { opacity: 1, filter: 'blur(0px)' },
  },
  slideUp: {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  },
  clipReveal: {
    hidden: { clipPath: 'inset(100% 0% 0% 0%)' },
    visible: { clipPath: 'inset(0% 0% 0% 0%)' },
  },
} as const;
