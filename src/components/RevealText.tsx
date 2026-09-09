import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

// Stable component references — indexing the `motion` proxy inline on every
// render creates a fresh component identity each time, which makes React
// remount the node (and lose its "already animated" viewport state).
const TAGS = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  div: motion.div,
  span: motion.span,
} as const

type Props = {
  children: ReactNode
  as?: keyof typeof TAGS
  className?: string
  delay?: number
  once?: boolean
}

// Wraps children in a clipped rise-and-reveal, triggered when scrolled into view.
//
// The observed element and the animated element must be different nodes: if
// the same node that whileInView watches also carries a large translateY,
// its own transformed geometry feeds back into the intersection calculation
// (a big enough offset can push it back out of the "amount" threshold before
// it ever gets a chance to fire). So the outer wrapper — untransformed, only
// clipped — is what's observed, and the inner tag just follows via variants.
export default function RevealText({ children, as = 'div', className = '', delay = 0, once = true }: Props) {
  const reduce = useReducedMotion()
  const Tag = TAGS[as]

  if (reduce) {
    const Plain = as
    return <Plain className={className}>{children}</Plain>
  }

  const child: Variants = {
    hidden: { y: '110%', opacity: 0 },
    visible: { y: '0%', opacity: 1, transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <motion.div
      className="overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.4 }}
    >
      <Tag className={className} variants={child}>
        {children}
      </Tag>
    </motion.div>
  )
}
