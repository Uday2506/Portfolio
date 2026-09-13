import { motion } from 'framer-motion'
import { achievements } from '../data/resume'
import RevealText from './RevealText'

export default function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-24">
      <div className="mb-4 flex items-center gap-4">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">05 / Milestones</span>
        <span className="h-px flex-1 bg-paper/10" />
      </div>
      <RevealText as="h2" className="mb-16 font-display text-clamp2 uppercase leading-[0.95]">
        <span className="block text-paper">A few</span>
        <span className="block text-gold">highlights.</span>
      </RevealText>

      <div className="grid gap-6 sm:grid-cols-2">
        {achievements.map((a, i) => (
          <motion.div
            key={a.value}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="rounded-3xl border border-gold/30 bg-surface p-10"
          >
            <p className="font-display text-5xl text-gold sm:text-6xl">{a.value}</p>
            <p className="mt-4 text-base leading-relaxed text-paper/70">{a.label}</p>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-paper/40">{a.date}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
