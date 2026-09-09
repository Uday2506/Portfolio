import { useEffect, useRef, useState } from 'react'

// Custom dot+ring cursor for desktop pointer devices. No-ops on touch and
// respects prefers-reduced-motion by simply not taking over the cursor.
export default function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!isFinePointer || reduceMotion) return

    setActive(true)
    document.body.classList.add('cursor-enabled')

    let ringX = window.innerWidth / 2
    let ringY = window.innerHeight / 2
    let mouseX = ringX
    let mouseY = ringY

    function onMove(e: PointerEvent) {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
      }
      const target = e.target as HTMLElement
      setHovering(Boolean(target.closest('a, button, [data-cursor-hover]')))
    }

    let raf = 0
    function tick() {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`
      }
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('pointermove', onMove)
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
      document.body.classList.remove('cursor-enabled')
    }
  }, [])

  if (!active) return null

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[70] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold"
      />
      <div
        ref={ringRef}
        className={`pointer-events-none fixed left-0 top-0 z-[70] -translate-x-1/2 -translate-y-1/2 rounded-full border transition-[width,height,border-color] duration-200 ${
          hovering ? 'h-12 w-12 border-gold' : 'h-8 w-8 border-paper/40'
        }`}
      />
    </>
  )
}
