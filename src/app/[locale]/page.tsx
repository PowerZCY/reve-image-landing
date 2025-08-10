import { Hero } from "@/components/hero";
import {
  CTA,
  Features,
  Gallery,
  SeoContent,
  Tips,
} from "@windrun-huaiin/third-ui/main/server";
import { GradientButton } from "@windrun-huaiin/third-ui/fuma/mdx";
import { getTranslations } from "next-intl/server";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'gallery' });
  return (
    <>
      <Hero locale={locale} />
      <Gallery
        locale={locale}
        button={
          <GradientButton
            title={t("button.title")}
            href={t("button.href")}
            align={t("button.align") as "center" | "left" | "right"}
          />
      }
      />
      <Features locale={locale} />
      <Tips locale={locale} />
      <SeoContent locale={locale} />
      <CTA locale={locale} />
    </>
  );
}
