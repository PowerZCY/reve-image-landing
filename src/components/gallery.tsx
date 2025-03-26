'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useTranslations } from 'next-intl'

export function Gallery() {
  const t = useTranslations('gallery');
  const galleryItems = t.raw('prompts') as string[];

  return (
    <section id="gallery" className="container mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
        {t('titleL')} <span className="text-purple-500">{t('eyesOn')}</span> {t('titleR')}
      </h2>
      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
        {t('description')}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((prompt, index) => (
          <div key={index} className="group relative overflow-hidden rounded-xl">
            <Image
              src={`/${index + 1}.webp`}
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
            {t('button')} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}

