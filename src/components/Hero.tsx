import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../data/resume'
import { links } from '../data/links'
import Portrait from './Portrait'

export default function Hero() {
  const reduce = useReducedMotion()

  function goTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-6 py-24 sm:px-10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-[34rem] w-[34rem] rounded-full bg-gold/10 blur-[130px]"
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={reduce ? undefined : { opacity: 0, y: 12 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-gold"
          >
            {profile.eyebrow}
          </motion.p>

          <h1 className="font-display text-clamp1 uppercase leading-[0.94] tracking-tight">
            {['I build systems.', 'I run events.'].map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className={`block ${i === 1 ? 'text-gold' : 'text-paper'}`}
                  initial={reduce ? undefined : { y: '100%' }}
                  animate={reduce ? undefined : { y: '0%' }}
                  transition={{ duration: 0.9, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-paper/50 sm:text-sm"
          >
            Full-Stack Developer &nbsp;·&nbsp; Systems Builder &nbsp;·&nbsp; Event Operations Lead
          </motion.p>

          <motion.p
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-paper/60 sm:text-lg"
          >
            {profile.subhead}
          </motion.p>

          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => goTo('projects')}
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-ink transition-colors hover:bg-goldSoft"
            >
              Explore My Work ↗
            </button>
            <a
              href={links.resumePdf}
              download
              className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-7 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-paper transition-colors hover:border-gold hover:text-gold"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? undefined : { opacity: 0, scale: 0.95 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto w-full max-w-sm"
        >
          <Portrait tag="B. Uday Kiran" />
        </motion.div>
      </div>

      <motion.div
        initial={reduce ? undefined : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-paper/40 sm:left-10"
      >
        <span className="h-9 w-[1px] bg-paper/30" />
        Scroll
      </motion.div>
    </section>
  )
}
