'use client'

import Image from 'next/image'
import { useLanguage } from '@/components/language-provider'

const articleImages = ['/images/harvest.png', '/images/wine-pour.png', '/images/tasting.png']
const galleryImages = [
  { src: '/images/vineyard-rows.png', alt: 'Hileras de viñas' },
  { src: '/images/barrel-room.png', alt: 'Sala de barricas' },
  { src: '/images/estate.png', alt: 'La bodega' },
  { src: '/images/tasting.png', alt: 'Degustación en la terraza' },
  { src: '/images/harvest.png', alt: 'Vendimia' },
  { src: '/images/hero.png', alt: 'Viñedos al atardecer' },
]

export default function MediaPage() {
  const { t } = useLanguage()

  return (
    <>
      {/* Page header */}
      <section className="border-b border-border bg-footer py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-bordeaux">{t.media.kicker}</p>
          <h1 className="text-balance font-serif text-5xl leading-tight md:text-6xl">
            {t.media.title}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            {t.media.intro}
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-3">
            {t.media.articles.map((article, i) => (
              <article key={article.title} className="group flex flex-col">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={articleImages[i % articleImages.length] || '/placeholder.svg'}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 flex items-center gap-3 text-xs uppercase tracking-[0.2em]">
                  <span className="text-bordeaux">{article.tag}</span>
                  <span className="text-muted-foreground">{article.date}</span>
                </div>
                <h2 className="mt-3 text-balance font-serif text-2xl leading-snug">
                  {article.title}
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{article.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="border-t border-border bg-footer py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center font-serif text-4xl leading-tight md:text-5xl">
            {t.media.galleryTitle}
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {galleryImages.map((img) => (
              <div key={img.alt} className="relative aspect-square overflow-hidden">
                <Image
                  src={img.src || '/placeholder.svg'}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
