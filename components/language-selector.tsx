"use client"

import { useLanguage } from "@/contexts/language-context"

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-1 mr-2">
      <button
        onClick={() => setLanguage("en")}
        className={`px-2 py-1 text-sm rounded-md transition-colors ${
          language === "en" ? "bg-brand-blue text-white font-medium" : "text-slate-600 hover:bg-slate-100"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("es")}
        className={`px-2 py-1 text-sm rounded-md transition-colors ${
          language === "es" ? "bg-brand-blue text-white font-medium" : "text-slate-600 hover:bg-slate-100"
        }`}
        aria-label="Switch to Spanish"
      >
        ES
      </button>
    </div>
  )
}

