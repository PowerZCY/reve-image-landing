import { Hero } from "@/components/hero";
import {
  CTA,
  Features,
  Gallery,
  SeoContent,
  Tips,
} from "@windrun-huaiin/third-ui";

export default function Home() {
  return (
    <div>
      <Hero />
      <Gallery />
      <Features />
      <Tips />
      <SeoContent />
      <CTA />
    </div>
  );
}
