import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Bodoni_Moda, Cormorant_Garamond } from 'next/font/google'
import { LanguageProvider } from '@/components/language-provider'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
})

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-bodoni',
})

export const metadata: Metadata = {
  title: 'Familia Fumagalli',
  description:
    'Familia Fumagalli. Transmitiendo nuestra historia, desde Catena Brianza a Cerro Leones.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`light bg-background ${cormorant.variable} ${bodoni.variable}`}
    >
      <body className="antialiased font-serif">
        <LanguageProvider>
          <div className="flex min-h-dvh flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
