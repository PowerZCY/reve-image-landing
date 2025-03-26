/* eslint-disable react/no-unescaped-entities */
'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
import Image from "next/image"
import { useTranslations } from 'next-intl'

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          {t('mainTitle')}<br />{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">{t('mainEyesOn')}</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl">
          {t('description')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
          >
            <Link href="https://preview.reve.art/" target="_blank" rel="noopener noreferrer">
              {t('button')} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Zap className="h-4 w-4 text-purple-500" />
          <span>{t('about')}</span>
        </div>
      </div>
      <div className="flex-1 rounded-lg overflow-hidden shadow-purple-500/20 group">
        <Image
          src="/0.webp"
          alt={t('heroImageAlt')}
          width={500}
          height={500}
          priority
          className="transition duration-300 group-hover:scale-105"
        />
      </div>
    </section>
  )
}

