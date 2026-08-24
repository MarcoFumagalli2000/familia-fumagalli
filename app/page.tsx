'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden">
        <Image
          src="/images/hero.png"
          alt="Nuestros viñedos al atardecer"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative mx-auto max-w-3xl px-6 text-center text-background">
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-background/80">
            {t.home.heroKicker}
          </p>
          <h1 className="text-balance font-serif text-5xl leading-[1.05] md:text-7xl">
            {t.home.heroTitle}
          </h1>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/vinos"
              className="inline-flex h-12 items-center gap-2 bg-bordeaux px-8 text-xs uppercase tracking-[0.18em] text-bordeaux-foreground transition-opacity hover:opacity-90"
            >
              {t.cta.discover}
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/visitanos"
              className="inline-flex h-12 items-center border border-background/60 px-8 text-xs uppercase tracking-[0.18em] text-background transition-colors hover:bg-background hover:text-foreground"
            >
              {t.cta.visit}
            </Link>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="border-b border-border bg-background py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="font-serif text-6xl leading-none text-bordeaux">&ldquo;</span>
          <blockquote className="mt-2 text-balance font-serif text-2xl italic leading-snug md:text-3xl">
            {t.home.quote}
          </blockquote>
          <cite className="mt-6 block text-xs uppercase not-italic tracking-[0.3em] text-muted-foreground">
            {t.home.quoteAuthor}
          </cite>
        </div>
      </section>

      {/* Time & place */}
      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/vineyard-rows.png"
              alt="Hileras de viñas al amanecer"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-bordeaux">Terroir</p>
            <h2 className="text-balance font-serif text-4xl leading-tight md:text-5xl">
              {t.home.sectionTimeTitle}
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              {t.home.sectionTimeBody}
            </p>
            <Link
              href="/vinos"
              className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.16em] text-bordeaux transition-opacity hover:opacity-70"
            >
              {t.cta.explore}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Estate */}
      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-bordeaux">La Finca</p>
            <h2 className="text-balance font-serif text-4xl leading-tight md:text-5xl">
              {t.home.sectionEstateTitle}
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              {t.home.sectionEstateBody}
            </p>
          </div>
          <div className="relative order-1 aspect-[4/5] overflow-hidden md:order-2">
            <Image
              src="/images/estate.png"
              alt="Arquitectura de la bodega"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="border-t border-border bg-footer py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance font-serif text-4xl leading-tight md:text-5xl">
              {t.home.experiencesTitle}
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              {t.home.experiencesBody}
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {t.home.exp.map((exp, i) => (
              <article key={exp.name} className="border border-border bg-background p-8">
                <span className="font-serif text-2xl text-bordeaux">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-serif text-2xl">{exp.name}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{exp.desc}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/visitanos"
              className="inline-flex h-12 items-center gap-2 bg-bordeaux px-8 text-xs uppercase tracking-[0.18em] text-bordeaux-foreground transition-opacity hover:opacity-90"
            >
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
