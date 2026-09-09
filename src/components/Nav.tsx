import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Milestones' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  function goTo(id: string) {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-paper/10 bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault()
            goTo('top')
          }}
          className="font-display text-xl tracking-wide text-paper"
        >
          B.U.K<span className="text-gold">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => goTo(s.id)}
              className={`font-mono text-xs uppercase tracking-[0.15em] transition-colors ${
                activeId === s.id ? 'text-gold' : 'text-paper/60 hover:text-paper'
              }`}
            >
              {s.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => goTo('contact')}
          className="hidden items-center gap-2 rounded-full border border-gold/50 px-5 py-2 font-mono text-xs uppercase tracking-[0.15em] text-gold transition-colors hover:bg-gold hover:text-ink md:inline-flex"
        >
          Let's Talk ↗
        </button>

        <button
          onClick={() => setOpen(true)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
        >
          <span className="h-[2px] w-7 bg-paper" />
          <span className="h-[2px] w-7 bg-paper" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col bg-ink md:hidden"
          >
            <div className="flex items-center justify-between border-b border-paper/10 px-6 py-4">
              <span className="font-display text-xl text-paper">
                B.U.K<span className="text-gold">.</span>
              </span>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-2xl leading-none">
                ×
              </button>
            </div>
            <nav className="flex flex-1 flex-col items-start justify-center gap-6 px-8" aria-label="Mobile">
              {SECTIONS.map((s, i) => (
                <motion.button
                  key={s.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => goTo(s.id)}
                  className="font-display text-4xl text-paper/85 hover:text-gold"
                >
                  {s.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
