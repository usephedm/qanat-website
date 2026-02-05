'use client';

/**
 * QANAT Logo — The Geometric Q (Primary Brand Mark)
 * Three qanat channels form the Q tail. Inline SVG for instant render.
 */
export function LogoIcon({
  size = 32,
  className = '',
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      className={className}
      aria-label="QANAT logo"
    >
      <defs>
        <linearGradient id="qb" x1="0.05" y1="0.05" x2="0.95" y2="0.95">
          <stop offset="0%" stopColor="#2dd4bf" />
          <stop offset="100%" stopColor="#0d9488" />
        </linearGradient>
        <mask id="bc">
          <rect width="512" height="512" fill="white" />
          <rect
            x="228"
            y="232"
            width="240"
            height="62"
            fill="black"
            transform="rotate(42, 340, 306)"
          />
        </mask>
      </defs>
      <circle
        cx="224"
        cy="216"
        r="138"
        stroke="url(#qb)"
        strokeWidth="48"
        fill="none"
        mask="url(#bc)"
      />
      <line
        x1="188"
        y1="274"
        x2="436"
        y2="460"
        stroke="#14b8a6"
        strokeWidth="22"
        strokeLinecap="round"
      />
      <line
        x1="208"
        y1="252"
        x2="452"
        y2="436"
        stroke="#14b8a6"
        strokeWidth="11"
        strokeLinecap="round"
        opacity="0.42"
      />
      <line
        x1="224"
        y1="234"
        x2="462"
        y2="414"
        stroke="#14b8a6"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.16"
      />
    </svg>
  );
}

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

export function LogoBadge({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <LogoIcon size={20} />
      <span className="text-sm font-semibold tracking-[0.12em] text-foreground">
        QN8
      </span>
    </div>
  );
}
