import { getMDXComponents } from '@/components/mdx-components';
import { appConfig } from '@/lib/appConfig';
import { legalSource } from '@/lib/source';
import { createFumaPage } from '@windrun-huaiin/third-ui/fuma/server';
import { SiteIcon } from '@/lib/site-config';
import { NotFoundPage } from '@windrun-huaiin/base-ui/components';

const { Page, generateStaticParams, generateMetadata } = createFumaPage({
  mdxContentSource: legalSource,
  getMDXComponents,
  mdxSourceDir: appConfig.mdxSourceDir.legal,
  githubBaseUrl: appConfig.githubBaseUrl,
  showCopy: false,
  siteIcon: <SiteIcon />,
  FallbackPage: NotFoundPage,
});

export default Page;
export { generateMetadata, generateStaticParams };
