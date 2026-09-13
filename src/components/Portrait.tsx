import { useState } from 'react'

type Props = {
  className?: string
  tag?: string
  src: string
}

// A gold-framed, spotlit portrait slot. Pass the photo path via `src` — the
// same border, glow, and hover treatment applies wherever this is used, so
// every portrait on the site reads as one consistent design. Falls back to a
// typographic monogram if that file is missing, so the layout never breaks.
export default function Portrait({ className = '', tag, src }: Props) {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <div className={`relative ${className}`}>
      {/* Glow is inset-0 rather than bleeding outward: a larger box would widen
          the page's scroll area on narrow screens. The blur still paints a halo
          outside the card, and painted overflow doesn't affect layout. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 rounded-full bg-gold/25 blur-[80px]" />
      <div className="grid-pattern relative overflow-hidden rounded-2xl border border-gold/40 bg-surface transition-colors duration-300 hover:border-gold/70">
        {!imgFailed ? (
          <img
            src={src}
            alt="Uday Kiran"
            className="aspect-[3/4] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="flex aspect-[3/4] w-full flex-col items-center justify-center gap-3 p-8 text-center">
            <span className="font-display leading-[0.95] text-gold/90">
              <span className="block text-4xl sm:text-5xl">UDAY</span>
              <span className="block text-4xl sm:text-5xl">KIRAN</span>
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-paper/35">
              Photo coming soon
            </span>
          </div>
        )}
        {tag && (
          <span className="absolute bottom-4 right-5 font-body text-sm italic text-goldSoft/80 sm:text-base">
            {tag}
          </span>
        )}
      </div>
    </div>
  )
}
