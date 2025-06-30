'use client'

import { Hero } from "@/components/hero";
import {
  CTA,
  Features,
  Gallery,
  SeoContent,
  Tips,
} from "@windrun-huaiin/third-ui/main";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Gallery />
      <Features />
      <Tips />
      <SeoContent />
      <CTA />
    </main>
  );
}
