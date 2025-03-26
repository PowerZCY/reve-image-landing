import { Zap } from "lucide-react"
import LanguageSwitcher from "./LanguageSwitcher"

export function Header() {
  return (
    <header className="container mx-auto py-6 px-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Zap className="h-6 w-6 text-purple-500" />
        <span className="text-xl font-bold">Reve Image Directory</span>
      </div>
      <LanguageSwitcher />
    </header>
  )
}

