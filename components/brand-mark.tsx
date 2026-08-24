import { cn } from '@/lib/utils'

export function BrandMark({
  className,
  invert = false,
}: {
  className?: string
  invert?: boolean
}) {
  return (
    <span className={cn('flex items-center gap-3', className)}>
      <svg
        viewBox="0 0 40 40"
        className={cn('size-8 shrink-0', invert ? 'text-background' : 'text-bordeaux')}
        aria-hidden="true"
        fill="none"
      >
        <path
          d="M20 3 L31 10 V22 C31 30 26 35 20 37 C14 35 9 30 9 22 V10 Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M20 12 V26 M20 26 L15 21 M20 26 L25 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'text-xl tracking-[0.12em] font-[family-name:var(--font-bodoni)]',
            invert ? 'text-background' : 'text-foreground',
          )}
        >
          Familia Fumagalli
        </span>
      </span>
    </span>
  )
}
