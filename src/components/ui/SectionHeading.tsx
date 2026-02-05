'use client';

import { FadeIn } from '@/components/animations/FadeIn';

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  /** Heading level for semantic hierarchy */
  level?: 2 | 3;
  /** ID for aria-labelledby */
  id?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  align = 'left',
  className = '',
  level = 2,
  id,
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : '';
  const HeadingTag = `h${level}` as const;

  return (
    <div className={`max-w-3xl ${alignment} ${className}`}>
      {label && (
        <FadeIn>
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent mb-4" aria-hidden="true">
            {label}
          </span>
        </FadeIn>
      )}
      <FadeIn delay={0.1}>
        <HeadingTag id={id} className="text-heading-2 text-foreground">{title}</HeadingTag>
      </FadeIn>
      {description && (
        <FadeIn delay={0.2}>
          <p className="text-body-lg mt-5 max-w-2xl">{description}</p>
        </FadeIn>
      )}
    </div>
  );
}
