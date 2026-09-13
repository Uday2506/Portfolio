// Fixed, full-viewport ambient backdrop — layered flowing green/teal/gold
// gradients behind a dark base, evoking the site's abstract cinematic look.
// Sits at -z-10 behind all page content and never intercepts pointer events,
// so it can't affect layout, scrolling, or readability of foreground text.
export default function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink">
      <svg
        className="absolute left-1/2 top-0 h-[130vh] w-[160vw] -translate-x-1/2 opacity-70 blur-3xl sm:w-[130vw]"
        viewBox="0 0 1440 1400"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="bg-green" x1="10%" y1="0%" x2="90%" y2="100%">
            <stop offset="0%" stopColor="#0e3d2c" />
            <stop offset="55%" stopColor="#1d8f5e" />
            <stop offset="100%" stopColor="#062018" />
          </linearGradient>
          <linearGradient id="bg-teal" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0a2b28" />
            <stop offset="100%" stopColor="#123f38" />
          </linearGradient>
          <linearGradient id="bg-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6b4e1c" />
            <stop offset="100%" stopColor="#d9a94e" />
          </linearGradient>
          <radialGradient id="bg-vignette" cx="50%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#0a0c10" stopOpacity="0" />
            <stop offset="100%" stopColor="#0a0c10" stopOpacity="1" />
          </radialGradient>
        </defs>

        <path
          d="M-300,250 C50,50 300,420 620,300 C980,170 1150,520 1500,340 L1500,-100 L-300,-100 Z"
          fill="url(#bg-teal)"
          opacity="0.8"
        />
        <path
          d="M-300,500 C120,280 380,700 700,520 C1040,330 1260,650 1600,480 L1600,1500 L-300,1500 Z"
          fill="url(#bg-green)"
          opacity="0.6"
        />
        <path
          d="M-300,780 C200,950 500,680 820,880 C1140,1080 1340,820 1650,980 L1650,1500 L-300,1500 Z"
          fill="url(#bg-gold)"
          opacity="0.22"
        />
        <rect width="1440" height="1400" fill="url(#bg-vignette)" />
      </svg>

      <div className="absolute inset-0 bg-gradient-to-b from-ink/10 via-ink/60 to-ink" />
    </div>
  )
}
