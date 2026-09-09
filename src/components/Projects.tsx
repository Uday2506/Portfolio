import { motion, useReducedMotion } from 'framer-motion'
import { projects, type ProjectItem } from '../data/resume'
import { links } from '../data/links'
import RevealText from './RevealText'

function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  const reduce = useReducedMotion()
  const repo = links.projectRepos[project.id]

  return (
    <div
      className="sticky mb-8 sm:mb-10"
      style={{ top: reduce ? undefined : '6.5rem', zIndex: 10 + index }}
    >
      <article className="rounded-3xl border border-gold/30 bg-surface/95 p-8 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.7)] backdrop-blur-sm sm:p-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="lg:max-w-md">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold/80">
              {String(index + 1).padStart(2, '0')} // {project.category}
            </p>
            <h3 className="mt-3 font-display text-3xl uppercase leading-[0.98] text-paper sm:text-4xl">
              {project.title}
            </h3>
            <p className="mt-1 font-mono text-xs uppercase tracking-wide text-paper/40">
              {project.org} · {project.date}
            </p>

            <ul className="mt-6 space-y-3">
              {project.description.map((d, di) => (
                <li key={di} className="flex gap-3 text-sm leading-relaxed text-paper/65 sm:text-base">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold/70" />
                  {d}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-paper/15 px-3 py-1 font-mono text-[11px] uppercase text-paper/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="w-full max-w-sm rounded-2xl border border-paper/10 bg-ink/60 p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-paper/40">// Build Notes</p>
            <dl className="mt-4 space-y-3">
              {project.metrics.map((m) => (
                <div key={m.label} className="flex items-baseline justify-between gap-4 border-b border-paper/10 pb-2">
                  <dt className="font-mono text-[11px] uppercase tracking-wide text-paper/40">{m.label}</dt>
                  <dd className="text-right font-mono text-xs text-gold">{m.value}</dd>
                </div>
              ))}
            </dl>

            {repo ? (
              <a
                href={repo}
                target="_blank"
                rel="noreferrer"
                data-cursor-hover
                className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-gold hover:underline"
              >
                View on GitHub ↗
              </a>
            ) : (
              <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-paper/30">
                Repo link coming soon
              </span>
            )}
          </div>
        </div>
      </article>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-4 flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">02 / Featured Work</span>
          <span className="h-px flex-1 bg-paper/10" />
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <RevealText as="h2" className="font-display text-clamp2 uppercase leading-[0.95]">
            <span className="block text-paper">Selected builds.</span>
            <span className="block text-gold">Real impact.</span>
          </RevealText>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xs font-mono text-xs uppercase tracking-wide text-paper/40"
          >
            Scroll to unfold each build. Every card stacks on the last.
          </motion.p>
        </div>
      </div>

      <div className="relative mx-auto mt-16 max-w-7xl px-6 sm:px-10">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
