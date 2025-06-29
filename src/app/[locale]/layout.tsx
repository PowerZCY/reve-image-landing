import { Footer } from "@windrun-huaiin/third-ui/main";
import { i18n } from "@/i18n";
import { appConfig, generatedLocales, showBanner } from "@/lib/appConfig";
import { IconConfigProvider, SiteIcon } from "@windrun-huaiin/base-ui";
import { GoogleAnalyticsScript, MicrosoftClarityScript } from "@windrun-huaiin/base-ui/components/client";
import { FumaBannerSuit } from '@windrun-huaiin/third-ui/fuma/mdx';
import { fumaI18nCn } from '@windrun-huaiin/third-ui/lib';
import { GoToTop, NProgressBar } from '@windrun-huaiin/third-ui/main';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { RootProvider } from "fumadocs-ui/provider";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { Montserrat } from "next/font/google";
import './globals.css';

export const montserrat = Montserrat({
  weight: ['400'], // 400 是 Regular
  subsets: ['latin'],
  display: 'swap',
});

export const dynamic = 'force-dynamic'

// 网站元数据
export async function generateMetadata({
  params: paramsPromise
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await paramsPromise;
  const t = await getTranslations({ locale, namespace: 'home' });

  return {
    title: t('webTitle'),
    description: t('webDescription'),
    keywords: t('keywords'),
    metadataBase: new URL(appConfig.baseUrl),
    alternates: {
      canonical: `${appConfig.baseUrl}/${locale}`,
      languages: {
        "en": `${appConfig.baseUrl}/en`,
        "zh": `${appConfig.baseUrl}/zh`,
        "ja": `${appConfig.baseUrl}/ja`,
        "ko": `${appConfig.baseUrl}/ko`,
        "fr": `${appConfig.baseUrl}/fr`,
        "de": `${appConfig.baseUrl}/de`,
        "es": `${appConfig.baseUrl}/es`,
        "it": `${appConfig.baseUrl}/it`,
        "pt": `${appConfig.baseUrl}/pt`,
        "tr": `${appConfig.baseUrl}/tr`,
        "pl": `${appConfig.baseUrl}/pl`,
      }
    },
    icons: [
      { rel: "icon", type: 'image/png', sizes: "16x16", url: "/favicon-16x16.png" },
      { rel: "icon", type: 'image/png', sizes: "32x32", url: "/favicon-32x32.png" },
      { rel: "icon", type: 'image/ico', url: "/favicon.ico" },
      { rel: "apple-touch-icon", sizes: "180x180", url: "/favicon-180x180.png" },
      { rel: "android-chrome", sizes: "512x512", url: "/favicon-512x512.png" },
    ]
  }
}

async function baseOptions(locale: string): Promise<BaseLayoutProps> {
  const t = await getTranslations({ locale: locale, namespace: 'home' });
  return {
    // 导航Header配置
    nav: {
      url: `/${locale}`,
      title: (
        <>
          <SiteIcon />
          <span className="font-medium [.uwu_&]:hidden [header_&]:text-[15px]">
            {t('title')}
          </span>
        </>
      ),
      transparentMode: 'none',
    },
    // 导航Header, 语言切换
    i18n,
  };
}

export default async function RootLayout({
  children,
  params: paramsPromise  // 重命名参数
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await paramsPromise;  // 使用新名称
  setRequestLocale(locale);
  const messages = await getMessages();
  const customeOptions = await baseOptions(locale);
  return (
    <html lang={locale} suppressHydrationWarning>
      <NextIntlClientProvider messages={messages}>
        <body>
          <NProgressBar />
          <IconConfigProvider config={{ siteIcon: 'Zap' }}>
            <RootProvider
              i18n={{
                locale: locale,
                // available languages
                locales: generatedLocales,
                // translations for UI
                translations: { fumaI18nCn }[locale],
              }}
            >
              <HomeLayout
                {...customeOptions}
                searchToggle={{
                  enabled: false,
                }}
                themeSwitch={{
                  enabled: true,
                  mode: 'light-dark-system',
                }}
                className={`dark:bg-neutral-950 dark:[--color-fd-background:var(--color-neutral-950)] pt-25 ${showBanner ? 'has-banner' : 'no-banner'}`}
                >
                <FumaBannerSuit showText={showBanner}/>
                {children}
                <Footer />
                <GoToTop />
              </HomeLayout>
            </RootProvider>
          </IconConfigProvider>
        </body>
        <GoogleAnalyticsScript />
        <MicrosoftClarityScript />
      </NextIntlClientProvider>
    </html>
  )
}
