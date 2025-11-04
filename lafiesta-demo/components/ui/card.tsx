import * as React from 'react';
import clsx from 'clsx';

export function Card({ className, children }: React.PropsWithChildren<{className?: string}>) {
  return <div className={clsx('rounded-2xl border bg-[#111113]', className)}>{children}</div>;
}
export function CardHeader({ className, children }: React.PropsWithChildren<{className?: string}>) {
  return <div className={clsx('p-4 border-b border-[#262626]', className)}>{children}</div>;
}
export function CardContent({ className, children }: React.PropsWithChildren<{className?: string}>) {
  return <div className={clsx('p-4', className)}>{children}</div>;
}
export function CardTitle({ className, children }: React.PropsWithChildren<{className?: string}>) {
  return <h3 className={clsx('text-lg font-semibold', className)}>{children}</h3>;
}
