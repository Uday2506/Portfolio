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
      className="relative flex min-h-[85svh] items-center overflow-hidden px-6 py-16 sm:px-10 sm:py-20"
    >
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

          <motion.h1
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="block overflow-hidden font-display text-[clamp(2.75rem,9vw,6.5rem)] uppercase leading-[0.9] tracking-tight text-paper"
          >
            Uday <span className="text-gold">Kiran</span>
          </motion.h1>

          <div className="mt-3 font-display text-clamp2 uppercase leading-[0.94] tracking-tight">
            {['I build.', 'I lead.', 'I create impact.'].map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className={`block ${i === 2 ? 'text-gold' : 'text-paper'}`}
                  initial={reduce ? undefined : { y: '100%' }}
                  animate={reduce ? undefined : { y: '0%' }}
                  transition={{ duration: 0.9, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </div>

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
            {links.resumePdf && (
              <a
                href={links.resumePdf}
                download
                className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-7 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-paper transition-colors hover:border-gold hover:text-gold"
              >
                Download Resume
              </a>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? undefined : { opacity: 0, scale: 0.95 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto w-full max-w-sm"
        >
          <Portrait src="/profile-straight.jpg" tag="Uday Kiran" />
        </motion.div>
      </div>
    </section>
  )
}
