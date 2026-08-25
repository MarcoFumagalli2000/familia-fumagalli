'use client'

import { createContext, useContext } from 'react'
import { dictionaries } from '@/lib/i18n'

type LanguageContextValue = {
  t: (typeof dictionaries)['es']
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  return <LanguageContext.Provider value={{ t: dictionaries.es }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
