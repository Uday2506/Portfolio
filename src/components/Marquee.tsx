type Props = {
  items: string[]
}

// Horizontal auto-scrolling strip, used as a textured divider between sections.
export default function Marquee({ items }: Props) {
  const doubled = [...items, ...items]
  return (
    <div className="relative overflow-hidden border-y border-paper/10 py-5" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="mx-4 flex items-center gap-4 font-display text-2xl font-medium text-paper/25 sm:text-3xl"
          >
            {item}
            <span className="text-gold/50">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
