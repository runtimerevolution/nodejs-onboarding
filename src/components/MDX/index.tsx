import React from 'react';

// custom components
import { H1, H2, H3, H4, H5, H6 } from './Heading';
import CodeBlock from './CodeBlock';

const P = (props: JSX.IntrinsicElements['p']) => (
  <p className="my-4 whitespace-pre-wrap" {...props} />
);

const Strong = (props: JSX.IntrinsicElements['strong']) => (
  <strong className="font-bold" {...props} />
);

const OL = (props: JSX.IntrinsicElements['ol']) => (
  <ol className="my-3 ml-6 list-decimal" {...props} />
);
const LI = (props: JSX.IntrinsicElements['li']) => (
  <li className="mb-1 leading-relaxed" {...props} />
);

const UL = (props: JSX.IntrinsicElements['ul']) => (
  <ul className="my-3 ml-6 list-disc" {...props} />
);

const Divider = (props: JSX.IntrinsicElements['hr']) => (
  <hr
    className="border-border dark:border-border-dark my-6 block border-b"
    {...props}
  />
);

const Pre = (props: JSX.IntrinsicElements['pre']) => <pre {...props} />;

const Link = (props: JSX.IntrinsicElements['a']) => (
  <a className="text-blue-400 underline-offset-4 hover:underline" {...props} />
);

const BlockQuote = (props: JSX.IntrinsicElements['blockquote']) => (
  <blockquote className="my-3 ml-6" {...props} />
);

export const MDXComponents = {
  a: Link,
  p: P,
  strong: Strong,
  ol: OL,
  ul: UL,
  li: LI,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  hr: Divider,
  pre: Pre,
  code: CodeBlock,
  blockquote: BlockQuote,
};
