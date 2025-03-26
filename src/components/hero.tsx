/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Create Stunning Images with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Reve Image</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl">
          Transform your ideas into breathtaking visuals with Reve Image's AI-powered image generation. Unleash your
          creativity with our cutting-edge technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
          >
            <Link href="https://preview.reve.art/">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Zap className="h-4 w-4 text-purple-500" />
          <span>Enjoy 20 free images daily with Reve Image</span>
        </div>
      </div>
      <div className="flex-1 rounded-lg overflow-hidden shadow-2xl shadow-purple-500/20">
        <Image
          src="/placeholder.svg"
          alt="Reve Image AI-generated artwork showcasing the power of the platform"
          width={600}
          height={600}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  )
}

