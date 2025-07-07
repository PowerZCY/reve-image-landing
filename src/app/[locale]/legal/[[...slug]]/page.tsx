import { getMDXComponents } from '@/components/mdx-components';
import { appConfig } from '@/lib/appConfig';
import { SiteIcon } from '@/lib/site-config';
import { mdxSourceMap } from '@/lib/source';
import { NotFoundPage } from '@windrun-huaiin/base-ui/components';
import { createFumaPage } from '@windrun-huaiin/third-ui/fuma/server';
const sourceKey = 'legal';
const { Page, generateStaticParams, generateMetadata } = createFumaPage({
  sourceKey: sourceKey,
  mdxContentSource: mdxSourceMap[sourceKey],
  getMDXComponents,
  mdxSourceDir: appConfig.mdxSourceDir[sourceKey],
  githubBaseUrl: appConfig.githubBaseUrl,
  siteIcon: <SiteIcon />,
  FallbackPage: NotFoundPage,
});

export default Page;
export { generateMetadata, generateStaticParams };
