import { getRequestConfig } from 'next-intl/server';
import { appConfig } from "./lib/appConfig";

// Can be imported from a shared config
const locales = appConfig.i18n.locales;

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  // Ensure that the incoming locale is valid
  if ( !locale || !locales.includes(locale as (typeof locales)[number])) {
    locale = appConfig.i18n.defaultLocale;
  }
  return {
    locale, // 明确返回 locale 参数
    messages: (await import(`../messages/${locale}.json`)).default
  };
});