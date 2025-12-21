import { i18n } from "@/i18n";
import { appConfig, generatedLocales } from "@/lib/appConfig";
import { showBanner } from '@/lib/appConfig';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import './globals.css';
import { SiteIcon } from "@/lib/site-config";
import { GoogleAnalyticsScript, MicrosoftClarityScript } from "@windrun-huaiin/base-ui/components";
import { NProgressBar } from "@windrun-huaiin/third-ui/main";
import { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { getFumaTranslations } from '@windrun-huaiin/third-ui/fuma/server';
import { RootProvider } from "fumadocs-ui/provider/next";
import { CustomHomeLayout } from '@windrun-huaiin/third-ui/fuma/base';
import { type HomeLayoutProps } from 'fumadocs-ui/layouts/home';
import { montserrat } from '@/lib/fonts';
import { cn as cnUtils } from '@windrun-huaiin/lib/utils';
import { HomeTitle } from '@windrun-huaiin/third-ui/fuma/base';

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
          <HomeTitle>
            {t('title')}
          </HomeTitle>
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
  const homeLayoutOptions: HomeLayoutProps = {
    ...customeOptions,
    searchToggle: {
      enabled: false,
    },
    themeSwitch: {
      enabled: true,
      mode: 'light-dark-system',
    },
  };
  const fumaTranslations = await getFumaTranslations(locale);
  return (
    <html lang={locale} suppressHydrationWarning>
      <NextIntlClientProvider messages={messages}>
        <body className={cnUtils(montserrat.className)}>
          <NProgressBar />
            <RootProvider
              i18n={{
                locale: locale,
                // available languages
                locales: generatedLocales,
                // translations for UI
                translations: fumaTranslations,
              }}
            >
              <CustomHomeLayout
                locale={locale}
                options={homeLayoutOptions}
                showBanner={showBanner}
                floatingNav={true}
                actionOrders={{
                  desktop: ['search', 'theme', 'github', 'i18n', 'secondary'],
                  mobileBar: ['search', 'pinned', 'menu'],
                  mobileMenu: ['theme', 'i18n', 'separator', 'secondary', 'github'],
                }}
              >
                {children}
              </CustomHomeLayout>
            </RootProvider>
        </body>
        <GoogleAnalyticsScript />
        <MicrosoftClarityScript />
      </NextIntlClientProvider>
    </html>
  )
}
