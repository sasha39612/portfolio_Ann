import type { NextConfig } from 'next';
import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = bundleAnalyzer({
  /* config options here */
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
    includePaths: ['./styles'],
  },
  compress: true,
  swcMinify: true,
  optimizeFonts: true,
});

export default nextConfig;
