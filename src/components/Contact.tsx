import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { links, whatsappLink } from '../data/links'
import { profile } from '../data/resume'
import RevealText from './RevealText'
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MediumIcon,
  WhatsappIcon,
  XIcon,
  YoutubeIcon,
} from './SocialIcons'

const socialLinks = [
  { label: 'Facebook', href: links.facebook, Icon: FacebookIcon },
  { label: 'YouTube', href: links.youtube, Icon: YoutubeIcon },
  { label: 'Medium', href: links.medium, Icon: MediumIcon },
  { label: 'Instagram', href: links.instagram, Icon: InstagramIcon },
  { label: 'X', href: links.twitter, Icon: XIcon },
  { label: 'WhatsApp', href: whatsappLink, Icon: WhatsappIcon },
  { label: 'LinkedIn', href: links.linkedin, Icon: LinkedinIcon },
  { label: 'GitHub', href: links.github, Icon: GithubIcon },
].filter((s) => s.href)

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
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-24">
      <div className="mb-4 flex items-center gap-4">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">07 / Contact</span>
        <span className="h-px flex-1 bg-paper/10" />
      </div>

      <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
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
              aria-label="Your name"
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
              aria-label="Your email address"
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
              aria-label="Your message"
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

      {socialLinks.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mt-20 border-t border-paper/10 pt-10"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-paper/40">// Connect</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 text-paper/70 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </motion.div>
      )}

      <footer className="mt-12 flex flex-col gap-2 border-t border-paper/10 pt-8 font-mono text-xs text-paper/35 sm:flex-row sm:items-center sm:justify-between">
        <span>© {year} {profile.name}. All rights reserved.</span>
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
