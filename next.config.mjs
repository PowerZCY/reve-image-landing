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
  webpack(config) {
    // 现有的插件
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

    // 优化 shiki 语言包 - 只加载常用语言
    config.resolve.alias = {
      ...config.resolve.alias,
      // 只加载最常用的几种语言，大幅减少包大小
      '@shikijs/langs': '@shikijs/langs/dist/json/typescript.json',
    };

    // 进一步优化：排除不需要的 shiki 主题
    config.module.rules.push({
      test: /node_modules\/@shikijs\/themes/,
      use: {
        loader: 'string-replace-loader',
        options: {
          multiple: [
            {
              search: /"name":"[^"]*"/g,
              replace: (match) => {
                // 只保留常用的主题
                const allowedThemes = ['github-dark', 'github-light', 'nord'];
                const themeName = match.match(/"name":"([^"]*)"/)?.[1];
                if (themeName && !allowedThemes.includes(themeName)) {
                  return '"name":"disabled"';
                }
                return match;
              },
            },
          ],
        },
      },
    });

    return config;
  },
};

export default withNextIntl(withMDX(nextConfig));