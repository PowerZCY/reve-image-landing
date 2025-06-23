'use client'

import { useTranslations } from 'next-intl'
import { GradientButton } from "./gradient-button"

export function CTA() {
  const t = useTranslations('cta');
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-3xl p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {t('title')} <span className="text-purple-400">{t('eyesOn')}</span>?
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          {t('description1')}
          <br />
          {t('description2')}
        </p>
        <GradientButton
          title={t('button')}
          href="https://preview.reve.art/"
          align="center"
        />
      </div>
    </section>
  )
}

