import bundeAnalyzer from '@next/bundle-analyzer';
import nextMDX from '@next/mdx';
import rehypePlugins from 'rehype-plugins';
import remarkPlugins from 'remark-plugins';
import nextI18NextConfig from './next-i18next.config.js';
const isExport = process.env.NEXT_PUBLIC_VERCEL_ENV === 'export';

/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: '/work',
      destination: '/work/skills-and-tools',
      permanent: false,
    },
    {
      source: '/docs',
      destination: '/docs/tailwindcss-accent',
      permanent: false,
    },
  ],
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,

  images: {
    domains: [
      'avatars.githubusercontent.com',
      'github.com',
      'uploadthing.com',
      'firebasestorage.googleapis.com',
      'images.unsplash.com',
    ],
  },
  trailingSlash: true,
  ...(isExport ? {} : { i18n: nextI18NextConfig.i18n }),
};

const withBundleAnalyzer = bundeAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins,
    rehypePlugins,
    providerImportSource: '@mdx-js/react',
  },
});

export default withBundleAnalyzer(withMDX(nextConfig));
