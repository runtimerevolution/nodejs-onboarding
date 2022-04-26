/** @type {import('next').NextConfig} */
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: '@mdx-js/react',
  },
});

module.exports = withMDX({
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  assetPrefix: IS_PRODUCTION ? process.env.GH_PAGE_URL : '',
  env: {
    ALGOLIA_INDEX_NAME: process.env.ALGOLIA_INDEX_NAME,
    ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
    ALGOLIA_API_KEY: process.env.ALGOLIA_API_KEY,
    GH_PAGE_URL: process.env.GH_PAGE_URL,
  },
});
