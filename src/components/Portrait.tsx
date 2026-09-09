import { useState } from 'react'

type Props = {
  className?: string
  tag?: string
}

// A gold-framed, spotlit portrait slot. Drop a real photo at public/profile.jpg
// and it renders there automatically; until then it falls back to a
// typographic monogram so the layout never depends on a photo that doesn't exist.
export default function Portrait({ className = '', tag }: Props) {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <div className={`relative ${className}`}>
      <div
        aria-hidden="true"
        className="absolute -inset-10 -z-10 rounded-full bg-gold/15 blur-[80px]"
      />
      <div className="grid-pattern relative overflow-hidden rounded-2xl border border-gold/40 bg-surface">
        {!imgFailed ? (
          <img
            src="/profile.jpg"
            alt="Battula Uday Kiran"
            className="aspect-[3/4] w-full object-cover"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="flex aspect-[3/4] w-full flex-col items-center justify-center gap-3 p-8 text-center">
            <span className="font-display text-6xl leading-none text-gold/90 sm:text-7xl">B.U.K</span>
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
