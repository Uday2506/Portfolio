import { motion } from 'framer-motion'
import { skills, skillsFootnote } from '../data/resume'
import RevealText from './RevealText'
import Marquee from './Marquee'

// The asterisk is a footnote marker that only makes sense next to the footnote,
// so it's stripped for the decorative marquee.
const allSkills = skills.flatMap((g) => g.items).map((item) => item.replace('*', ''))

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-4 flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">03 / System Matrix</span>
          <span className="h-px flex-1 bg-paper/10" />
        </div>

        <RevealText as="h2" className="mb-16 font-display text-clamp2 uppercase leading-[0.95]">
          <span className="block text-paper">What I build with.</span>
          <span className="block text-gold">Tools I trust.</span>
        </RevealText>

        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-2xl border border-paper/10 bg-surface p-8 transition-colors duration-300 hover:border-gold/40"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/80">{group.tag}</p>
              <h3 className="mt-2 font-display text-2xl uppercase text-paper">{group.category}</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/55">{group.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-paper/15 px-3.5 py-1.5 font-mono text-xs uppercase text-paper/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <p className="mt-6 font-mono text-xs text-paper/35">{skillsFootnote}</p>
      </div>

      <div className="mt-16">
        <Marquee items={allSkills} />
      </div>
    </section>
  )
}
