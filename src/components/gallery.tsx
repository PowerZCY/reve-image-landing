import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function Gallery() {
  const galleryItems = [
    "A futuristic cityscape with flying vehicles and neon lights",
    "A serene mountain landscape at sunset with a lake reflection",
    "A magical forest with glowing plants and mystical creatures",
    "An underwater scene with colorful coral reefs and exotic fish",
    "A steampunk-inspired mechanical dragon with brass gears",
    "A cosmic scene with planets, nebulae, and a spaceship",
  ]

  return (
    <section id="gallery" className="container mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Gallery of <span className="text-purple-500">Reve Image</span> Creations
      </h2>
      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
        Explore the incredible possibilities with Reve Image. Each image below was generated using our AI technology
        with the accompanying prompt.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((prompt, index) => (
          <div key={index} className="group relative overflow-hidden rounded-xl">
            <Image
              src={`/placeholder.svg?height=400&width=400`}
              alt={`Reve Image AI-generated artwork: ${prompt}`}
              width={600}
              height={600}
              className="w-full h-80 object-cover transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6">
              <p className="text-sm text-gray-300">Prompt:</p>
              <p className="font-medium">{prompt}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button
          asChild
          size="lg"
          className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
        >
          <Link href="https://preview.reve.art/">
            Create Your Own Images <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}

