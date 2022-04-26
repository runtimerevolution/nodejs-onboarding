import React from 'react';
import cn from 'classnames';
import { Chat } from 'components/Icon';

export type AlertType = 'disclaimer';

interface PageProps {
  variant: AlertType;
  className?: string;
  title: string;
  children: React.ReactNode;
}

const variantMap = {
  disclaimer: {
    title: 'Disclaimer',
    classes: 'bg-amber-200 text-black',
    Icon: Chat,
  },
};

export default function Alert({
  variant,
  className,
  title,
  children,
}: PageProps) {
  const { Icon, classes } = variantMap[variant];
  return (
    <div className={cn('w-full rounded p-6 md:p-8', classes, className)}>
      <div className="flex items-center">
        <div className="h-6 w-6">
          <Icon />
        </div>
        <span className="ml-2 font-semibold"> {title}</span>
      </div>
      {children}
    </div>
  );
}
