'use client'

import LanguageSwitcher from "@/components/LanguageSwitcher"
import { useTranslations } from 'next-intl'
import { globalLucideIcons as icons} from '@/components/global-icon'

export function Header() {
  const t = useTranslations('home');

  return (
    <header className="container mx-auto py-6 px-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <icons.Zap className="h-6 w-6" />
        <span className="text-xl font-bold">{t('title')}</span>
      </div>
      <LanguageSwitcher />
    </header>
  )
}

