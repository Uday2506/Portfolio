// Minimal outlined glyphs for the Contact section's social row. Hand-drawn
// rather than pulled from an icon package, kept to a single shared visual
// language (thin stroke, currentColor) so they read as one consistent set.
import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M14.5 8.5h-1.4c-.9 0-1.35.5-1.35 1.4V11h2.35l-.35 2.1h-2V21h-2.1v-7.9H8v-2.1h1.65V9.6c0-1.9 1.1-3.1 3.1-3.1h1.75z" />
    </svg>
  )
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="6.5" width="18" height="11" rx="3.5" />
      <path d="M10.2 9.7l5 2.3-5 2.3z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function MediumIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="7.2" cy="12" r="3.7" />
      <ellipse cx="14.3" cy="12" rx="1.9" ry="3.7" />
      <ellipse cx="18.7" cy="12" rx="0.9" ry="3.7" />
    </svg>
  )
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.4" />
      <circle cx="16.6" cy="7.4" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function XIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

export function WhatsappIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20.2 12a8.2 8.2 0 10-14.9 4.7L4 20.2l3.6-1.2A8.2 8.2 0 0020.2 12z" />
      <path
        d="M9 9.4c0-.5.4-1 .9-1h.5c.3 0 .5.2.6.4l.5 1.2c.1.3.1.6-.1.8l-.5.5c.4.9 1.1 1.6 2 2l.5-.5c.2-.2.5-.2.8-.1l1.2.5c.3.1.4.3.4.6v.5c0 .5-.5.9-1 .9-3.3 0-6-2.7-6-6z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  )
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="8.4" cy="8.6" r="0.9" fill="currentColor" stroke="none" />
      <path d="M8.4 11v6" />
      <path d="M12 17v-3.6c0-1.1.8-1.9 1.9-1.9s1.9.8 1.9 1.9V17" />
      <path d="M12 11v0.3" />
    </svg>
  )
}

export function GithubIcon(props: IconProps) {
  return (
    <svg {...base} {...props} fill="currentColor" stroke="none">
      <path d="M12 3.5c-4.7 0-8.5 3.8-8.5 8.5 0 3.8 2.4 7 5.8 8.1.4.1.6-.2.6-.4v-1.6c-2.4.5-2.9-1.1-2.9-1.1-.4-1-1-1.3-1-1.3-.8-.5.1-.5.1-.5.9.1 1.4.9 1.4.9.8 1.4 2.1 1 2.6.7.1-.6.3-1 .6-1.2-1.9-.2-3.9-1-3.9-4.3 0-.9.3-1.7.9-2.3-.1-.2-.4-1.1.1-2.3 0 0 .7-.2 2.3.9a7.8 7.8 0 0 1 4.2 0c1.6-1.1 2.3-.9 2.3-.9.5 1.2.2 2.1.1 2.3.6.6.9 1.4.9 2.3 0 3.3-2 4.1-3.9 4.3.3.3.6.8.6 1.6v2.4c0 .2.2.5.6.4 3.4-1.1 5.8-4.3 5.8-8.1 0-4.7-3.8-8.5-8.5-8.5z" />
    </svg>
  )
}
