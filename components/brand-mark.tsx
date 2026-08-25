import Image from 'next/image'
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
      <Image
        src="/images/logoff.png"
        alt=""
        width={64}
        height={64}
        className="size-[54px] shrink-0 object-contain"
        aria-hidden="true"
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'text-xl tracking-[0.15em] font-(family-name:--font-cormorant) font-normal',
            invert ? 'text-background' : 'text-foreground',
          )}
        >
          Familia Fumagalli
        </span>
      </span>
    </span>
  )
}
