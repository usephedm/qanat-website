'use client';

export function GrainOverlay() {
  return (
    <>
      {/* SVG Filter Definition */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <filter id="grain-filter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="discrete" tableValues="1 1" />
            </feComponentTransfer>
            <feBlend mode="overlay" in="SourceGraphic" />
          </filter>
        </defs>
      </svg>

      {/* Grain Overlay */}
      <div
        className="grain-overlay fixed inset-0 pointer-events-none z-[9999] opacity-[0.035]"
        style={{ filter: 'url(#grain-filter)' }}
        aria-hidden="true"
      />
    </>
  );
}
