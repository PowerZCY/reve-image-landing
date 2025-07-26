import { Footer, GoToTop, NProgressBar } from "@windrun-huaiin/third-ui/main";
import { i18n } from "@/i18n";
import { appConfig, generatedLocales, showBanner } from "@/lib/appConfig";
import { GoogleAnalyticsScript, MicrosoftClarityScript } from "@windrun-huaiin/base-ui/components";
import { FumaBannerSuit } from '@windrun-huaiin/third-ui/fuma/mdx';
import { fumaI18nCn } from '@windrun-huaiin/third-ui/lib/server';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { RootProvider } from "fumadocs-ui/provider";
import { NextIntlClientProvider } from 'next-intl';
import { SiteIcon } from "@/lib/site-config";
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { Montserrat } from "next/font/google";
import './globals.css';

const _montserrat = Montserrat({
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
              className={`min-h-screen flex flex-col bg-neutral-100 dark:bg-neutral-900 transition-colors duration-300 ${showBanner ? 'pt-25 has-banner' : 'pt-15 no-banner'}`}
              >
              <FumaBannerSuit showBanner={showBanner}/>
              {children}
              <Footer />
              <GoToTop />
            </HomeLayout>
          </RootProvider>
        </body>
        <GoogleAnalyticsScript />
        <MicrosoftClarityScript />
      </NextIntlClientProvider>
    </html>
  )
}
