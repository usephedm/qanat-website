'use client';

import { FadeIn } from '@/components/animations/FadeIn';

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : '';

  return (
    <div className={`max-w-3xl ${alignment} ${className}`}>
      {label && (
        <FadeIn>
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent mb-4">
            {label}
          </span>
        </FadeIn>
      )}
      <FadeIn delay={0.1}>
        <h2 className="text-heading-2 text-foreground">{title}</h2>
      </FadeIn>
      {description && (
        <FadeIn delay={0.2}>
          <p className="text-body-lg mt-5 max-w-2xl">{description}</p>
        </FadeIn>
      )}
    </div>
  );
}
