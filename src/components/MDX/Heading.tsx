import React from 'react';
import cn from 'classnames';

export interface HeadingProps {
  className?: string;
  children: React.ReactNode;
  id?: string;
  as?: any; // Todo: Fix this shit later
}

const Heading = React.forwardRef(
  (
    { as: Comp = 'h1', className, children, id, ...props }: HeadingProps,
    ref
  ) => {
    return (
      <>
        <Comp id={id} {...props} ref={ref} className={className}>
          {children}
        </Comp>
      </>
    );
  }
);

Heading.displayName = 'Heading';

export const H1 = ({ className, ...props }: any) => (
  <Heading
    as="h1"
    className={cn(className, 'text-5xl font-bold leading-tight')}
    {...props}
  />
);

export const H2 = ({ className, ...props }: any) => (
  <Heading
    as="h2"
    className={cn(
      'text-primary dark:text-primary-dark my-6 text-3xl font-bold leading-10',
      className
    )}
    {...props}
  />
);
export const H3 = ({ className, ...props }: any) => (
  <Heading
    as="h3"
    className={cn(
      className,
      'text-primary dark:text-primary-dark my-6 text-2xl font-bold leading-9'
    )}
    {...props}
  />
);

export const H4 = ({ className, ...props }: any) => (
  <Heading
    as="h4"
    className={cn(className, 'my-4 text-xl font-bold leading-9')}
    {...props}
  />
);

export const H5 = ({ className, ...props }: any) => (
  <Heading
    as="h4"
    className={cn(className, 'my-4 text-lg font-bold leading-9')}
    {...props}
  />
);

export const H6 = ({ className, ...props }: any) => (
  <Heading
    as="h4"
    className={cn(className, 'text-md my-4 font-bold leading-9')}
    {...props}
  />
);
