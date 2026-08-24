'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Clock, MapPin, Phone, Check } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

export default function ContactPage() {
  const { t } = useLanguage()
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
    e.currentTarget.reset()
  }

  const inputClass =
    'h-11 border border-border bg-background px-3 text-sm outline-none transition-colors focus:border-bordeaux'
  const labelClass = 'mb-2 block text-xs uppercase tracking-[0.16em] text-foreground/70'

  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden py-24">
        <Image
          src="/images/tasting.png"
          alt="Experiencia de degustación en Viña Solara"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative mx-auto max-w-3xl px-6 text-center text-background">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-background/80">
            {t.contact.kicker}
          </p>
          <h1 className="text-balance font-serif text-5xl leading-tight md:text-6xl">
            {t.contact.title}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-background/85">
            {t.contact.intro}
          </p>
        </div>
      </section>

      {/* Form + info */}
      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    {t.contact.formName}
                  </label>
                  <input id="name" name="name" type="text" required className={`w-full ${inputClass}`} />
                </div>
                <div>
                  <label htmlFor="lastName" className={labelClass}>
                    {t.contact.formLastName}
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className={`w-full ${inputClass}`}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  {t.contact.formEmail}
                </label>
                <input id="email" name="email" type="email" required className={`w-full ${inputClass}`} />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="date" className={labelClass}>
                    {t.contact.formDate}
                  </label>
                  <input id="date" name="date" type="date" className={`w-full ${inputClass}`} />
                </div>
                <div>
                  <label htmlFor="guests" className={labelClass}>
                    {t.contact.formGuests}
                  </label>
                  <input
                    id="guests"
                    name="guests"
                    type="number"
                    min={1}
                    max={20}
                    defaultValue={2}
                    className={`w-full ${inputClass}`}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="experience" className={labelClass}>
                  {t.contact.formExperience}
                </label>
                <select id="experience" name="experience" className={`w-full ${inputClass}`}>
                  {t.home.exp.map((exp) => (
                    <option key={exp.name} value={exp.name}>
                      {exp.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  {t.contact.formMessage}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full resize-none border border-border bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-bordeaux"
                />
              </div>

              <button
                type="submit"
                className="inline-flex h-12 w-full items-center justify-center bg-bordeaux px-8 text-xs uppercase tracking-[0.18em] text-bordeaux-foreground transition-opacity hover:opacity-90 sm:w-auto"
              >
                {t.cta.send}
              </button>

              {sent && (
                <p className="flex items-center gap-2 text-sm text-bordeaux">
                  <Check className="size-4" /> {t.contact.success}
                </p>
              )}
            </form>
          </div>

          {/* Info */}
          <aside className="lg:col-span-5">
            <div className="border border-border bg-footer p-8">
              <div className="flex items-start gap-4">
                <Clock className="mt-1 size-5 shrink-0 text-bordeaux" />
                <div>
                  <h2 className="text-xs uppercase tracking-[0.2em] text-foreground/70">
                    {t.contact.hoursTitle}
                  </h2>
                  <ul className="mt-3 flex flex-col gap-2">
                    {t.contact.hours.map((h) => (
                      <li key={h.day} className="flex justify-between gap-6 text-sm">
                        <span className="text-foreground/80">{h.day}</span>
                        <span className="text-muted-foreground">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex items-start gap-4 border-t border-border pt-8">
                <MapPin className="mt-1 size-5 shrink-0 text-bordeaux" />
                <div>
                  <h2 className="text-xs uppercase tracking-[0.2em] text-foreground/70">
                    {t.contact.addressTitle}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {t.contact.address}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-start gap-4 border-t border-border pt-8">
                <Phone className="mt-1 size-5 shrink-0 text-bordeaux" />
                <div>
                  <h2 className="text-xs uppercase tracking-[0.2em] text-foreground/70">
                    {t.contact.phoneLabel}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    +54 2494 672736
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
