'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Wine = { name: string; year: string; image: string; desc: string; notes: string }

export function WineCarousel({ wines }: { wines: Wine[] }) {
  const trackRef = useRef<HTMLDivElement>(null)

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('article')
    const step = card ? card.getBoundingClientRect().width + 32 : track.clientWidth
    track.scrollBy({ left: step * direction, behavior: 'smooth' })
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Vino anterior"
          className="flex size-11 items-center justify-center border border-border text-foreground transition-colors hover:border-bordeaux hover:text-bordeaux"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Vino siguiente"
          className="flex size-11 items-center justify-center border border-border text-foreground transition-colors hover:border-bordeaux hover:text-bordeaux"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>

      <div
        ref={trackRef}
        role="region"
        aria-roledescription="carrusel"
        aria-label="Nuestras variedades"
        className="flex snap-x snap-mandatory gap-8 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {wines.map((wine) => (
          <article
            key={`${wine.name}-${wine.year}`}
            className="flex w-[80%] shrink-0 snap-start flex-col border border-border bg-background sm:w-[calc(50%-1rem)] lg:w-[calc((100%-4rem)/3)]"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-muted">
              <Image
                src={wine.image || '/placeholder.svg'}
                alt={`Botella ${wine.name} ${wine.year}`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 80vw"
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
  )
}
