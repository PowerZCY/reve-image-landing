import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Gallery } from "@/components/gallery"
import { Tips } from "@/components/tips"
import { SeoContent } from "@/components/seo-content"
import { CTA } from "@/components/cta"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Header />
      <Hero />
      <Features />
      <Gallery />
      <Tips />
      <SeoContent />
      <CTA />
    </div>
  )
}

