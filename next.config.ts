import type { NextConfig } from 'next';
import withBundleAnalyzer from '@next/bundle-analyzer';
import dotenv from 'dotenv';
dotenv.config();

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = bundleAnalyzer({
  /* config options here */
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
    includePaths: ['./styles', 'node_modules'],
  },
  compress: true,
  swcMinify: true,
  optimizeFonts: true,
});

export default nextConfig;
