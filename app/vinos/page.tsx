'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

export default function WinesPage() {
  const { t } = useLanguage()

  return (
    <>
      {/* Page header */}
      <section className="border-b border-border bg-footer py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-bordeaux">{t.wines.kicker}</p>
          <h1 className="text-balance font-serif text-5xl leading-tight md:text-6xl">
            {t.wines.title}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            {t.wines.intro}
          </p>
        </div>
      </section>

      {/* Terroir */}
      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/wine-pour.png"
              alt="Servicio de vino tinto en copa"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-bordeaux">
              {t.wines.terroirTitle}
            </p>
            <h2 className="text-balance font-serif text-4xl leading-tight md:text-5xl">
              {t.wines.tastingTitle}
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              {t.wines.terroirBody}
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {t.wines.tastingBody}
            </p>
          </div>
        </div>
      </section>

      {/* Wine list */}
      <section className="border-t border-border bg-footer py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {t.wines.list.map((wine) => (
              <article
                key={wine.name}
                className="flex flex-col border border-border bg-background"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <Image
                    src="/images/vintage-bottle.png"
                    alt={`Botella ${wine.name} ${wine.year}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-serif text-2xl">{wine.name}</h3>
                    <span className="text-sm tracking-[0.15em] text-bordeaux">{wine.year}</span>
                  </div>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{wine.desc}</p>
                  <p className="mt-4 border-t border-border pt-4 text-sm italic leading-relaxed text-foreground/70">
                    {wine.notes}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-28">
        <Image
          src="/images/barrel-room.png"
          alt="Sala de barricas de la bodega"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative mx-auto max-w-2xl px-6 text-center text-background">
          <h2 className="text-balance font-serif text-4xl leading-tight md:text-5xl">
            {t.home.experiencesTitle}
          </h2>
          <Link
            href="/visitanos"
            className="mt-8 inline-flex h-12 items-center gap-2 bg-bordeaux px-8 text-xs uppercase tracking-[0.18em] text-bordeaux-foreground transition-opacity hover:opacity-90"
          >
            {t.cta.plan}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
