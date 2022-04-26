import * as React from 'react';

export const Logo = React.memo<JSX.IntrinsicElements['svg']>(function Logo(
  props
) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 183" {...props}>
      <path
        fill="currentColor"
        d="M82.5 18.5c39.832-3.841 68.332 12.159 85.5 48 11.668 36.841 2.501 67.341-27.5 91.5a72.496 72.496 0 0 1-10 5.5 558.367 558.367 0 0 1-30-26c28.291-7.121 40.458-25.121 36.5-54-9.423-23.967-26.923-33.8-52.5-29.5C66.131 60.366 55.964 73.2 54 92.5a2180.15 2180.15 0 0 1-1.5 66c-29.977-22.88-39.81-52.546-29.5-89 11.133-27.31 30.966-44.31 59.5-51Z"
      />
    </svg>
  );
});

export default Logo;
