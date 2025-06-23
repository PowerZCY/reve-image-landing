import { CTA } from "@/components/cta"
import { Features } from "@/components/features"
import { Gallery } from "@/components/gallery"
import { Hero } from "@/components/hero"
import { SeoContent } from "@/components/seo-content"
import { Tips } from "@/components/tips"
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
  )
}

