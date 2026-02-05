'use client';

import { FadeIn } from '@/components/animations/FadeIn';

// Using text-based logos for now (can be replaced with SVG logos later)
const clients = [
  { name: 'Walmart', display: 'WALMART' },
  { name: 'Apple', display: 'APPLE' },
  { name: 'Wells Fargo', display: 'WELLS FARGO' },
];

export function SocialProofLogos() {
  return (
    <FadeIn delay={0.8} className="mt-12">
      <div className="flex flex-col items-center gap-4">
        <p className="text-xs text-muted uppercase tracking-wider">
          Trusted by operations teams at:
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {clients.map((client) => (
            <div
              key={client.name}
              className="text-muted/40 font-semibold text-sm tracking-wider hover:text-muted/60 transition-colors"
              aria-label={client.name}
            >
              {client.display}
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
