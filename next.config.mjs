import { createMDX } from 'fumadocs-mdx/next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');
const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  // typescript: {
  //   ignoreBuildErrors: true,
  // },

  // mdx config
  reactStrictMode: true,

  images: {
    unoptimized: true,
    // 允许加载图片的host
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'favicon.im',
      },
      {
        protocol: 'https',
        hostname: 'preview.reve.art',
      }
    ],
    // 允许加载svg图片
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    webpackBuildWorker: false,
    parallelServerBuildTraces: false,
    parallelServerCompiles: false,
  },
  webpack(config, { isServer }) {
    config.plugins.push(
      new (class {
        apply(compiler) {
          compiler.hooks.emit.tap('BigStringDetectPlugin', (compilation) => {
            for (const filename in compilation.assets) {
              const source = compilation.assets[filename].source();
              if (typeof source === 'string' && source.length > 3000 * 1024) {
                console.log('[Warning Big String]', filename, 'SIZE:', (source.length / 1024 / 1024).toFixed(1), 'MB');
              }
            }
          });
        }
      })()
    );
    return config;
  },
};

export default withNextIntl(withMDX(nextConfig));