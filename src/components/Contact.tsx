import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { links } from '../data/links'
import RevealText from './RevealText'

export default function Contact() {
  const year = new Date().getFullYear()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'a visitor'}`)
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`)
    window.location.href = `mailto:${links.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-28 sm:px-10 sm:py-40">
      <div className="mb-4 flex items-center gap-4">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">07 / Contact</span>
        <span className="h-px flex-1 bg-paper/10" />
      </div>

      <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div>
          <RevealText as="h2" className="font-display text-clamp1 uppercase leading-[0.92]">
            <span className="block text-paper">Establish</span>
            <span className="block text-gold">connection.</span>
          </RevealText>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8 max-w-md text-base leading-relaxed text-paper/65 sm:text-lg"
          >
            Open to internships and roles where shipping software and running operations both matter. Based in{' '}
            {links.location} — happy to work remote or on-site.
          </motion.p>

          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-paper/10 pt-8 font-mono text-sm">
            <a href={`mailto:${links.email}`} className="text-paper/70 hover:text-gold">
              {links.email}
            </a>
            <a href={`tel:${links.phone}`} className="text-paper/70 hover:text-gold">
              {links.phone}
            </a>
          </div>
          <div className="mt-4 flex flex-wrap gap-x-10 gap-y-4 font-mono text-sm">
            <a
              href={links.github || undefined}
              target={links.github ? '_blank' : undefined}
              rel="noreferrer"
              className={links.github ? 'text-paper/70 hover:text-gold' : 'text-paper/25'}
            >
              GitHub {links.github ? '↗' : '(coming soon)'}
            </a>
            <a
              href={links.linkedin || undefined}
              target={links.linkedin ? '_blank' : undefined}
              rel="noreferrer"
              className={links.linkedin ? 'text-paper/70 hover:text-gold' : 'text-paper/25'}
            >
              LinkedIn {links.linkedin ? '↗' : '(coming soon)'}
            </a>
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-gold/30 bg-surface p-8 sm:p-10"
        >
          <label className="block">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/80">// Sender</span>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
              className="mt-2 w-full rounded-lg border border-paper/15 bg-ink px-4 py-3 text-sm text-paper placeholder:text-paper/30 focus:border-gold focus:outline-none"
            />
          </label>

          <label className="mt-6 block">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/80">// Channel</span>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              className="mt-2 w-full rounded-lg border border-paper/15 bg-ink px-4 py-3 text-sm text-paper placeholder:text-paper/30 focus:border-gold focus:outline-none"
            />
          </label>

          <label className="mt-6 block">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/80">// Payload</span>
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter transmission payload..."
              rows={4}
              className="mt-2 w-full resize-none rounded-lg border border-paper/15 bg-ink px-4 py-3 text-sm text-paper placeholder:text-paper/30 focus:border-gold focus:outline-none"
            />
          </label>

          <button
            type="submit"
            className="mt-8 w-full rounded-full bg-gold py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-ink transition-colors hover:bg-goldSoft"
          >
            Execute Dispatch ↗
          </button>
        </motion.form>
      </div>

      <footer className="mt-24 flex flex-col gap-2 border-t border-paper/10 pt-8 font-mono text-xs text-paper/35 sm:flex-row sm:items-center sm:justify-between">
        <span>© {year} Battula Uday Kiran. All rights reserved.</span>
        <button
          onClick={() => document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-left hover:text-gold sm:text-right"
        >
          Back to top ↑
        </button>
      </footer>
    </section>
  )
}
