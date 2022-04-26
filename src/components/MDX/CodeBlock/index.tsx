import React from 'react';
const ReactSyntaxHighlighter = React.lazy(
  () => import('./ReactSyntaxHighlighter')
);

export default function CodeBlock(props: JSX.IntrinsicElements['code']) {
  return (
    <React.Suspense fallback={<pre>{props.children}</pre>}>
      <ReactSyntaxHighlighter
        className={props.className}
        value={props.children}
      />
    </React.Suspense>
  );
}
