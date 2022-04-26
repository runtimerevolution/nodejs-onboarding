import React from 'react';
import cn from 'classnames';

interface PageProps {
  className: string;
  children: React.ReactNode;
}

export default function Indent({ className, children }: PageProps) {
  return <div className={cn('ml-0 sm:ml-6', className)}>{children}</div>;
}
