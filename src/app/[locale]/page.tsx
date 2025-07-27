'use client'

import { Hero } from "@/components/hero";
import {
  CTA,
  Features,
  Gallery,
  SeoContent,
  Tips,
} from "@windrun-huaiin/third-ui/main";
import { GradientButton } from "@windrun-huaiin/third-ui/fuma/mdx";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations('gallery');
  return (
    <>
      <Hero />
      <Gallery
        button={
          <GradientButton
            title={t("button.title")}
            href={t("button.href")}
            align={t("button.align") as "center" | "left" | "right"}
          />
      }
      />
      <Features />
      <Tips />
      <SeoContent />
      <CTA />
    </>
  );
}
