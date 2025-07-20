import { appConfig } from '@/lib/appConfig';
import { createCommonDocsSchema, createCommonMetaSchema } from '@windrun-huaiin/third-ui/lib/server';
import { remarkSteps } from 'fumadocs-core/mdx-plugins';
import { defineConfig, defineDocs } from 'fumadocs-mdx/config';

const mdxSourceDir = appConfig.mdxSourceDir

export const legal = defineDocs({
  dir: mdxSourceDir.legal,
  docs: {
    async: false,
    // @ts-ignore - Temporarily suppress deep instantiation error
    schema: createCommonDocsSchema(),
  },
  meta: {
    schema: createCommonMetaSchema(),
  },
});

export default defineConfig({
  lastModifiedTime: 'none',
  mdxOptions: {
    providerImportSource: '@/components/mdx-components',
    // 禁用 remark-image 的默认行为, 图片统一使用远程URL
    remarkImageOptions: false,
    remarkPlugins: [
      remarkSteps,
    ],
  },
});