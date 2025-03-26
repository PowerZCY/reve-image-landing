/**
 * @license
 * MIT License
 * Copyright (c) 2025 D8ger
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'
import { Globe } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { LanguageButton } from '@/components/ui/language-button'
import { appConfig } from '@/lib/appConfig'

export default function LanguageSwitcher() {
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()

    const handleLocaleChange = (newLocale: string) => {
        const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`)
        router.push(newPathname)
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <LanguageButton
                    variant="ghost"
                    size="icon"
                    className="bg-gradient-to-r from-purple-400 to-pink-600 hover:from-purple-500 hover:to-pink-700 text-white transform hover:scale-110 transition-all duration-300"
                >
                    <Globe className="h-5 w-5" />
                </LanguageButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="end"
                sideOffset={5}
                className="bg-white/90 dark:bg-gray-800/90 border-purple-100 dark:border-purple-800 w-[200px] p-2 backdrop-blur-sm translate-x-[50px]"
            >
                <div className="grid grid-cols-2 gap-1">
                    {appConfig.i18n.locales.map((loc) => (
                        <DropdownMenuItem
                            key={loc}
                            className={`
                                px-2 py-2 text-sm cursor-pointer text-center justify-center
                                transition-all duration-300 ease-in-out
                                hover:scale-105 hover:shadow-md
                                rounded-md whitespace-nowrap
                                ${locale === loc
                                    ? 'bg-gradient-to-r from-purple-400 to-pink-600 text-white font-medium shadow-lg scale-105'
                                    : 'hover:bg-gradient-to-r hover:from-purple-400/10 hover:to-pink-600/10 hover:text-transparent hover:bg-clip-text'
                                }
                            `}
                            onClick={() => handleLocaleChange(loc)}
                        >
                            {appConfig.i18n.localeLabels[loc]}
                        </DropdownMenuItem>
                    ))}
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}