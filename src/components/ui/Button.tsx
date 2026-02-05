import Link from 'next/link';
import { type ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
}

const variants = {
  primary:
    'bg-accent text-[#0a0a0a] font-medium hover:bg-accent-light active:bg-accent-dark',
  secondary:
    'border border-border text-foreground hover:border-border-hover hover:bg-surface-elevated',
  ghost:
    'text-muted hover:text-foreground',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  onClick,
}: ButtonProps) {
  const base = `inline-flex items-center justify-center gap-2 rounded-full transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={base} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
