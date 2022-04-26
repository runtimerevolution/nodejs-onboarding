import React from 'react';
import cn from 'classnames';

interface PageProps {
  variant: TagType;
  className?: string;
  children: React.ReactNode;
}

export type TagType = 'info' | 'success' | 'warning' | 'error';

const variantMap = {
  info: {
    name: 'Info',
    classes: 'bg-blue-400 text-white',
  },
  success: {
    name: 'Success',
    classes: 'bg-green-400 text-white',
  },
  warning: {
    name: 'Warning',
    classes: 'bg-orange-400 text-white',
  },
  error: {
    name: 'Error',
    classes: 'bg-red-400 text-white',
  },
};

export default function Tag({ variant, className, children }: PageProps) {
  const { classes } = variantMap[variant];
  return (
    <span
      className={cn(
        'inline rounded py-1 px-2 text-xs font-bold uppercase',
        classes,
        className
      )}>
      {children}
    </span>
  );
}
