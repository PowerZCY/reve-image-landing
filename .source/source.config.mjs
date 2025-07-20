// src/lib/appConfig.ts
import { createCommonAppConfig, createI18nHelpers } from "@windrun-huaiin/lib";
var appConfig = {
  ...createCommonAppConfig()
};
var { isSupportedLocale, getValidLocale, generatedLocales } = createI18nHelpers(appConfig.i18n);
var { iconColor, placeHolderImage, showBanner } = appConfig.shortcuts;

// source.config.ts
import { createCommonDocsSchema, createCommonMetaSchema } from "@windrun-huaiin/third-ui/lib/server";
import { remarkSteps } from "fumadocs-core/mdx-plugins";
import { defineConfig, defineDocs } from "fumadocs-mdx/config";
var mdxSourceDir = appConfig.mdxSourceDir;
var legal = defineDocs({
  dir: mdxSourceDir.legal,
  docs: {
    async: false,
    // @ts-ignore - Temporarily suppress deep instantiation error
    schema: createCommonDocsSchema()
  },
  meta: {
    schema: createCommonMetaSchema()
  }
});
var source_config_default = defineConfig({
  lastModifiedTime: "none",
  mdxOptions: {
    providerImportSource: "@/components/mdx-components",
    // 禁用 remark-image 的默认行为, 图片统一使用远程URL
    remarkImageOptions: false,
    remarkPlugins: [
      remarkSteps
    ]
  }
});
export {
  source_config_default as default,
  legal
};
