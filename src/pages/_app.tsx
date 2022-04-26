import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { MDXProvider } from '@mdx-js/react';
import Layout from 'components/Layout';
import { MDXComponents } from 'components/MDX';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;
