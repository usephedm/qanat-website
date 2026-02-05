'use client';

import { useId } from 'react';

/**
 * QANAT Logo — The Geometric Q (Primary Brand Mark, Final v4)
 * 
 * Three qanat channels form the Q tail. Inline SVG for instant render.
 * Uses React useId() for unique gradient/mask IDs to prevent conflicts
 * when multiple logo instances render on the same page.
 */
export function LogoIcon({
  size = 32,
  className = '',
}: {
  size?: number;
  className?: string;
}) {
  const uid = useId();
  const gradId = `qn8-grad-${uid}`;
  const maskId = `qn8-mask-${uid}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      className={className}
      aria-label="QANAT logo"
      role="img"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2dd4bf" />
          <stop offset="100%" stopColor="#0d9488" />
        </linearGradient>
        <mask id={maskId}>
          <rect width="512" height="512" fill="white" />
          <rect
            x="224"
            y="226"
            width="256"
            height="64"
            fill="black"
            transform="rotate(42, 340, 300)"
            rx="4"
          />
        </mask>
      </defs>

      {/* Q Bowl — thick stroke circle with mask cut for tail passage */}
      <circle
        cx="232"
        cy="224"
        r="136"
        stroke={`url(#${gradId})`}
        strokeWidth="48"
        fill="none"
        mask={`url(#${maskId})`}
      />

      {/* Q Tail — Three qanat channels */}
      {/* Primary channel */}
      <line
        x1="192"
        y1="272"
        x2="424"
        y2="452"
        stroke="#14b8a6"
        strokeWidth="22"
        strokeLinecap="round"
      />
      {/* Secondary channel */}
      <line
        x1="212"
        y1="250"
        x2="440"
        y2="428"
        stroke="#14b8a6"
        strokeWidth="11"
        strokeLinecap="round"
        opacity="0.45"
      />
      {/* Tertiary channel */}
      <line
        x1="228"
        y1="232"
        x2="452"
        y2="408"
        stroke="#14b8a6"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.18"
      />
    </svg>
  );
}

/**
 * Simplified LogoIcon for very small sizes (< 48px)
 * Drops the tertiary channel for legibility
 */
export function LogoIconSmall({
  size = 20,
  className = '',
}: {
  size?: number;
  className?: string;
}) {
  const uid = useId();
  const gradId = `qn8-sm-grad-${uid}`;
  const maskId = `qn8-sm-mask-${uid}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      className={className}
      aria-label="QANAT logo"
      role="img"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2dd4bf" />
          <stop offset="100%" stopColor="#0d9488" />
        </linearGradient>
        <mask id={maskId}>
          <rect width="512" height="512" fill="white" />
          <rect
            x="224"
            y="226"
            width="256"
            height="64"
            fill="black"
            transform="rotate(42, 340, 300)"
            rx="4"
          />
        </mask>
      </defs>

      <circle
        cx="232"
        cy="224"
        r="136"
        stroke={`url(#${gradId})`}
        strokeWidth="48"
        fill="none"
        mask={`url(#${maskId})`}
      />
      <line
        x1="192"
        y1="272"
        x2="424"
        y2="452"
        stroke="#14b8a6"
        strokeWidth="22"
        strokeLinecap="round"
      />
      <line
        x1="212"
        y1="250"
        x2="440"
        y2="428"
        stroke="#14b8a6"
        strokeWidth="11"
        strokeLinecap="round"
        opacity="0.45"
      />
    </svg>
  );
}

/**
 * Full logo lockup — Mark + "QANAT" wordmark
 * Used in navbar, header, formal contexts
 */
export function LogoFull({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoIcon size={28} />
      <span className="text-lg font-semibold tracking-[0.15em] text-foreground">
        QANAT
      </span>
    </div>
  );
}

/**
 * QN8 badge — Mark + "QN8" shortname
 * Used in digital-first contexts, compact layouts
 */
export function LogoBadge({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <LogoIconSmall size={20} />
      <span className="text-sm font-semibold tracking-[0.12em] text-foreground">
        QN8
      </span>
    </div>
  );
}
