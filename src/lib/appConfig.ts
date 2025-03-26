// 菜单项类型定义
export type MenuItem = {
  key: string;        // 唯一标识，也用作国际化翻译键
  href: string;       // 链接地址
  children?: MenuItem[]; // 子菜单项
  external?: boolean; // 是否为外部链接
};

// 开发环境菜单配置
const devMenu: MenuItem[] = [
  {
    key: 'journey',
    href: '/blog',
  },
  // {
  //   key: 'docs',
  //   href: '/docs',
  //   children: [
  //     {
  //       key: 'gettingStarted',
  //       href: '/docs/getting-started',
  //     },
  //     {
  //       key: 'guides',
  //       href: '/docs/guides',
  //     },
  //     {
  //       key: 'apiReference',
  //       href: '/docs/api',
  //     },
  //   ],
  // }
];

// 生产环境菜单配置
const prodMenu: MenuItem[] = [
  // {
  //   key: 'journey',
  //   href: '/blog',
  // }
];

export const appConfig = {
  // 基础配置
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://reveimage.directory',

  // 国际化配置
  i18n: {
    locales: ["en", "zh"] as const,
    defaultLocale: "en" as const,
    localeLabels: {
      en: "English",
      zh: "简体中文",
    },
    detector: {
      storageKey: 'language-preference-status',
      autoCloseTimeout: 10000,
      expirationDays: 30,
      storagePrefix: 'REVE-IMAGE'
    },
    messageRoot: 'messages',
  },

  // 菜单配置
  menu: process.env.NODE_ENV !== 'production' ? devMenu : prodMenu,
};

// 辅助函数：检查是否为支持的语言
function isSupportedLocale(locale: string): locale is typeof appConfig.i18n.locales[number] {
  return (appConfig.i18n.locales as readonly string[]).includes(locale);
}

// 辅助函数：获取有效的语言设置
// 如果当前语言不支持，则返回默认语言
export function getValidLocale(locale: string): typeof appConfig.i18n.locales[number] {
  return isSupportedLocale(locale) ? locale : appConfig.i18n.defaultLocale;
}