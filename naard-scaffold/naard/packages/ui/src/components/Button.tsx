import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  ...props
}: ButtonProps) {
  return (
    <button data-variant={variant} data-size={size} {...props}>
      {children}
    </button>
  );
}
