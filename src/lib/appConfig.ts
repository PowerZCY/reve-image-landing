import { createCommonAppConfig, createI18nHelpers } from "@windrun-huaiin/lib/common-app-config";

// 创建应用配置
export const appConfig = {
  ...createCommonAppConfig()
};

// 导出国际化辅助函数
export const { isSupportedLocale, getValidLocale, generatedLocales } = createI18nHelpers(appConfig.i18n);

// 便捷常量直接从 shortcuts 导出
export const { iconColor, placeHolderImage, showBanner } = appConfig.shortcuts;

