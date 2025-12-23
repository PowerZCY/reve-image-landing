import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { appConfig } from "@/lib/appConfig";

const intlMiddleware = createMiddleware({
  locales: appConfig.i18n.locales,
  defaultLocale: appConfig.i18n.defaultLocale,
  localePrefix: appConfig.i18n.localPrefixAsNeeded ? "as-needed" : "always", 
  localeDetection: false
});

export default  function middleware(req: NextRequest) {
  const { defaultLocale, locales } = appConfig.i18n;
  const pathname = req.nextUrl.pathname;
  const hasLocalePrefix = locales.some(
    (loc) => pathname === `/${loc}` || pathname.startsWith(`/${loc}/`)
  );

  // 对于无语言前缀的页面请求，根据配置进行处理
  // 避免落不到 [locale] 路由。
  if (!hasLocalePrefix && !pathname.startsWith('/api/')) {
    const url = req.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;

    if (appConfig.i18n.localPrefixAsNeeded) {
      // as-needed: 内部rewrite，用户URL保持无前缀
      console.log('[middleware rewrite]', { from: pathname, to: url.pathname });
      return NextResponse.rewrite(url);
    } else {
      // always: 重定向给用户，让他们看到前缀URL
      console.log('[middleware redirect]', { from: pathname, to: url.pathname });
      return NextResponse.redirect(url);
    }
  }

  // 处理尾部斜杠的重定向
  if (req.nextUrl.pathname.length > 1 && req.nextUrl.pathname.endsWith('/')) {
    const newUrl = new URL(req.nextUrl.pathname.slice(0, -1), req.url);
    return NextResponse.redirect(newUrl, 301);
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: [
    // 修改 matcher 配置以确保正确匹配所有路由
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};