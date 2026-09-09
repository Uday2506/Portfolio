import { motion } from 'framer-motion'
import { about, stats } from '../data/resume'
import RevealText from './RevealText'
import Portrait from './Portrait'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-28 sm:px-10 sm:py-36">
      <div className="mb-4 flex items-center gap-4">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">01 / About Me</span>
        <span className="h-px flex-1 bg-paper/10" />
      </div>

      <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div>
          <RevealText as="h2" className="font-display text-clamp2 uppercase leading-[0.95]">
            <span className="block text-paper">I don't just ship code.</span>
            <span className="block text-gold">I run the event too.</span>
          </RevealText>

          <div className="mt-8 space-y-5">
            {about.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-base leading-relaxed text-paper/65 sm:text-lg"
              >
                {p}
              </motion.p>
            ))}
          </div>

          <div className="mt-14 grid grid-cols-2 gap-8 border-t border-paper/10 pt-10 sm:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <p className="font-display text-3xl text-gold sm:text-4xl">{s.value}</p>
                <p className="mt-2 font-mono text-[11px] uppercase leading-snug tracking-wide text-paper/45">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto w-full max-w-xs"
        >
          <Portrait />
        </motion.div>
      </div>
    </section>
  )
}
