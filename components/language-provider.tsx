'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { dictionaries, type Locale } from '@/lib/i18n'

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (typeof dictionaries)['es']
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('es')

  useEffect(() => {
    const stored = window.localStorage.getItem('solara-locale') as Locale | null
    if (stored && stored in dictionaries) {
      setLocale(stored)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('solara-locale', locale)
    document.documentElement.lang = locale
  }, [locale])

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: dictionaries[locale] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
