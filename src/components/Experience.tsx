import { motion } from 'framer-motion'
import { alsoLed, experience } from '../data/resume'
import RevealText from './RevealText'

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-28 sm:px-10 sm:py-36">
      <div className="mb-4 flex items-center gap-4">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">04 / Experience</span>
        <span className="h-px flex-1 bg-paper/10" />
      </div>
      <RevealText as="h2" className="mb-16 font-display text-clamp2 uppercase leading-[0.95]">
        <span className="block text-paper">Running the room,</span>
        <span className="block text-gold">on a deadline.</span>
      </RevealText>

      <ol className="relative border-l border-gold/30 pl-8 sm:pl-12">
        {experience.map((item, i) => (
          <motion.li
            key={item.role + item.date}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="relative pb-16 last:pb-0"
          >
            <span className="absolute -left-[2.15rem] top-1.5 h-3 w-3 rounded-full border-2 border-ink bg-gold sm:-left-[3.15rem]" />
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper/40">{item.date}</p>
            <h3 className="mt-2 font-display text-2xl uppercase leading-tight text-paper sm:text-3xl">
              {item.role}
            </h3>
            <p className="mt-1 font-mono text-xs uppercase tracking-wide text-gold/80">{item.org}</p>
            <ul className="mt-4 space-y-2.5">
              {item.bullets.map((b, bi) => (
                <li key={bi} className="flex gap-3 text-sm leading-relaxed text-paper/65 sm:text-base">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-paper/30" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>

      <div className="mt-4 grid gap-6 border-t border-paper/10 pt-12 sm:grid-cols-2">
        {alsoLed.map((item, i) => (
          <motion.div
            key={item.role}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-2xl border border-paper/10 p-6"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper/40">{item.date}</p>
            <h4 className="mt-2 font-display text-lg uppercase text-paper">{item.role}</h4>
            <p className="mt-2 text-sm leading-relaxed text-paper/60">{item.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
