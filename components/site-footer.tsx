'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Check } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { BrandMark } from '@/components/brand-mark'
import { FacebookIcon, InstagramIcon, WhatsappIcon } from '@/components/social-icons'

export function SiteFooter() {
  const { t } = useLanguage()
  const [subscribed, setSubscribed] = useState(false)

  const links = [
    { href: '/', label: t.nav.home },
    { href: '/vinos', label: t.nav.wines },
    { href: '/contenido', label: t.nav.media },
    { href: '/visitanos', label: t.nav.contact },
  ]

  const socials = [
    { href: 'https://facebook.com', label: 'Facebook', Icon: FacebookIcon },
    { href: 'https://www.instagram.com/familiafumagalli/', label: 'Instagram', Icon: InstagramIcon },
    { href: 'https://wa.me/5492494672736', label: 'WhatsApp', Icon: WhatsappIcon },
  ]

  function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubscribed(true)
    e.currentTarget.reset()
  }

  return (
    <footer className="mt-auto">
      {/* Main footer — slightly darker white than the body */}
      <div className="border-t border-border bg-footer text-footer-foreground">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 md:grid-cols-12">
          {/* Brand + navigation */}
          <div className="md:col-span-6">
            <BrandMark />
            <p className="mt-6 max-w-sm text-pretty leading-relaxed text-muted-foreground">
              {t.footer.tagline}
            </p>
            <nav className="mt-8" aria-label="Navegación de pie de página">
              <h3 className="mb-4 text-xs uppercase tracking-[0.24em] text-bordeaux">
                {t.footer.navTitle}
              </h3>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-base text-foreground/80 transition-colors hover:text-bordeaux"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Subscribe form */}
          <div className="md:col-span-6">
            <h3 className="mb-4 text-xs uppercase tracking-[0.24em] text-bordeaux">
              {t.footer.subscribeTitle}
            </h3>
            <p className="mb-5 text-base leading-relaxed text-muted-foreground">
              {t.footer.subscribeBody}
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  type="text"
                  required
                  aria-label={t.footer.firstName}
                  placeholder={t.footer.firstName}
                  className="h-11 border border-border bg-background px-3 text-base outline-none transition-colors focus:border-bordeaux"
                />
                <input
                  type="text"
                  required
                  aria-label={t.footer.lastName}
                  placeholder={t.footer.lastName}
                  className="h-11 border border-border bg-background px-3 text-base outline-none transition-colors focus:border-bordeaux"
                />
              </div>
              <input
                type="email"
                required
                aria-label={t.footer.email}
                placeholder={t.footer.email}
                className="h-11 border border-border bg-background px-3 text-base outline-none transition-colors focus:border-bordeaux"
              />
              <button
                type="submit"
                className="mt-1 inline-flex h-11 items-center justify-center bg-bordeaux px-6 text-sm uppercase tracking-[0.18em] text-bordeaux-foreground transition-opacity hover:opacity-90"
              >
                {t.footer.subscribe}
              </button>
              {subscribed && (
                <p className="flex items-center gap-2 text-base text-bordeaux">
                  <Check className="size-4" /> {t.footer.subscribed}
                </p>
              )}
            </form>
          </div>

        </div>
      </div>

      {/* Copyright row — same white as the main content */}
      <div className="border-t border-border bg-background">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
          <p className="text-sm tracking-wide text-muted-foreground">
            © {new Date().getFullYear()} Familia Fumagalli. {t.footer.rights}
          </p>
          <div className="flex items-center gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex size-9 items-center justify-center border border-border text-foreground/70 transition-colors hover:border-bordeaux hover:text-bordeaux"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
