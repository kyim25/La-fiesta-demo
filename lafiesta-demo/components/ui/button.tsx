import * as React from 'react';
import clsx from 'clsx';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'secondary' | 'ghost';
  size?: 'sm' | 'lg' | 'icon' | 'default';
  asChild?: boolean;
  className?: string;
};

export function Button({ variant='default', size='default', asChild, className, children, ...props }: ButtonProps){
  const base = 'inline-flex items-center justify-center rounded-2xl font-semibold transition px-4 py-2';
  const variants = {
    default: 'bg-primary text-white hover:opacity-90',
    secondary: 'bg-white/10 text-white hover:bg-white/15',
    ghost: 'bg-transparent text-white hover:bg-white/10'
  } as const;
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    lg: 'px-5 py-3 text-base',
    icon: 'p-2',
    default: ''
  } as const;

  if (asChild && React.isValidElement(children)){
    return React.cloneElement(children as any, {
      className: clsx(base, variants[variant], sizes[size], className, (children as any).props.className)
    });
  }
  return <button className={clsx(base, variants[variant], sizes[size], className)} {...props}>{children}</button>;
}
