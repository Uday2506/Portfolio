import { motion } from 'framer-motion'
import { education } from '../data/resume'
import RevealText from './RevealText'

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-24">
      <div className="mb-4 flex items-center gap-4">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">06 / Education</span>
        <span className="h-px flex-1 bg-paper/10" />
      </div>
      <RevealText as="h2" className="mb-16 font-display text-clamp2 uppercase leading-[0.95]">
        <span className="block text-paper">The academic</span>
        <span className="block text-gold">path so far.</span>
      </RevealText>

      <div className="space-y-10">
        {education.map((e, i) => (
          <motion.div
            key={e.degree}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex flex-col gap-2 border-b border-paper/10 pb-10 last:border-none sm:flex-row sm:items-baseline sm:justify-between"
          >
            <div>
              <h3 className="font-display text-2xl uppercase leading-tight text-paper sm:text-3xl">{e.degree}</h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-wide text-gold/80">{e.institute}</p>
              {e.courses.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {e.courses.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-paper/15 px-3 py-1 font-mono text-[11px] uppercase text-paper/60"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="text-left sm:text-right">
              {e.detail && <p className="font-display text-xl text-gold">{e.detail}</p>}
              <p className="mt-1 whitespace-nowrap font-mono text-xs uppercase tracking-wide text-paper/45">
                {e.date}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
