// Single source of truth for all resume-derived copy on the site.
// Edit this file to update content anywhere — components just render it.

export const profile = {
  name: 'Uday Kiran',
  eyebrow: 'B.Tech CSE · IIT Guwahati',
  subhead:
    'Full-stack builder and on-ground event operator — from a nationwide exam platform serving 2,000+ students to coordinating a 3,000-runner marathon, I care about the same thing either way: clean execution under a deadline.',
}

export const stats = [
  { value: '2,000+', label: 'students served by an exam platform I built' },
  { value: '3,000+', label: 'runners coordinated on race day' },
  { value: '120', label: 'team members led across two teams (50 + 70)' },
  { value: '60,000', label: 'national applicants, shortlisted to the 100 at Technothlon Mains' },
]

export const about = {
  paragraphs: [
    "I'm a Computer Science undergrad at IIT Guwahati (2024–Present), based in Hyderabad. Most of my time splits two ways: writing full-stack and systems code, and running the logistics of events big enough that a small mistake becomes everyone's problem.",
    "On the build side, that's meant a nationwide online exam platform, an async media-processing backend, and a hardware accelerator integrated into a pipelined processor — projects that taught me to care about concurrency, security, and things staying up under load.",
    'On the operations side, that\'s meant owning a 100-finalist national event end to end, directing volunteers across a half-marathon course, and leading two very differently sized teams (50 and 70 people) toward the same fixed deadline. Both sides come down to the same instinct: plan for the failure mode, then execute anyway.',
  ],
}

export type ExperienceItem = {
  role: string
  org: string
  date: string
  bullets: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: 'Event Coordinator',
    org: 'Technothlon Mains 2026 · Techniche, IIT Guwahati',
    date: 'Aug 2026',
    bullets: [
      'Coordinated end-to-end execution of a 3-day continuous national-level event hosting ~100 top-performing students, shortlisted from ~60,000 participants across India.',
      'Managed the complete participant journey from arrival through departure — reception, registration, accommodation, meal logistics, inter-venue movement, and safe return travel.',
      'Supported execution of multiple competitive events (Kyden Span, BridgeQ, ServoSurge, EcoOdyssey, Tarkastra, Enigma Grid, Arcane Atlas), coordinating transitions and on-ground requirements between activities.',
      'Worked with cross-functional teams on real-time issue resolution for a high-profile programme featuring a Major General as Chief Guest.',
    ],
  },
  {
    role: 'Core Team Member',
    org: 'Technothlon · Techniche, IIT Guwahati',
    date: 'Sep 2025 – Present',
    bullets: [
      'Led a 50-member team producing the Technothlon question paper — owning quality control and structured review cycles against fixed exam deadlines.',
      'Led a separate 70-member outreach team building school relationships and driving participation across South India.',
      'Coordinated cross-functional teams for a nationwide exam delivered to 2,000+ students, covering registrations and participant management.',
    ],
  },
  {
    role: 'Logistics Coordinator',
    org: 'Guwahati Half Marathon · IIT Guwahati',
    date: 'Apr 2025 & Apr 2026',
    bullets: [
      'Coordinated end-to-end on-ground logistics for a 3,000+ runner event — registration desks, route management, and support stations.',
      'Directed volunteer teams venue-wide for smooth race-day execution and quick issue resolution.',
      'Stationed at the endpoint to accurately record participant timings without interruption.',
    ],
  },
  {
    role: 'Events Executive',
    org: 'TEDx · IIT Guwahati',
    date: '2026',
    bullets: [
      'Coordinated registrations and audience flow on-site, acting as the point of contact for attendees.',
      'Managed on-ground operations to keep sessions running to schedule, resolving issues in real time.',
    ],
  },
]

export const alsoLed = [
  {
    role: 'Organiser, Technothlon',
    detail: 'Ran a finance-based event, Fauna Fantastico, for the top 50 finalists.',
    date: '2025',
  },
  {
    role: 'Invigilator, JDST – Dakshana',
    detail: 'Organised an exam for Navodaya students at JNV East Godavari.',
    date: '2025',
  },
]

export type ProjectItem = {
  id: 'technothlon' | 'ytDownloader' | 'nnAccelerator' | 'aiWebpageAssistant'
  category: string
  title: string
  org: string
  date: string
  description: string[]
  tech: string[]
  metrics: { label: string; value: string }[]
}

export const projects: ProjectItem[] = [
  {
    id: 'technothlon',
    category: 'FULL-STACK / EXAM PLATFORM',
    title: 'Technothlon Online Contest',
    org: 'Techniche, IIT Guwahati',
    date: 'Nov 2025 – Jun 2026',
    description: [
      'Full-stack online examination platform conducting a nationwide competitive exam for 2,000+ students across India, with distributed caching and real-time scoring analytics.',
      'Scalable backend managing concurrent exam sessions, registrations, and team management, with connection pooling and database indexing under high traffic.',
      'Secure session management, encrypted authentication, RESTful APIs with CORS policies, and OTP-based verification to prevent unauthorized exam access.',
    ],
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    metrics: [
      { label: 'SCALE', value: '2,000+ students' },
      { label: 'CACHING', value: 'Distributed' },
      { label: 'SCORING', value: 'Real-time analytics' },
      { label: 'AUTH', value: 'OTP + encrypted sessions' },
    ],
  },
  {
    id: 'ytDownloader',
    category: 'BACKEND / MEDIA PROCESSING',
    title: 'YouTube Downloader Toolkit',
    org: 'Personal Project',
    date: 'Dec 2025 – Jun 2026',
    description: [
      'Asynchronous FastAPI backend with concurrent job orchestration and non-blocking coroutines for video transcoding, audio conversion, and subtitle extraction.',
      'JWT authentication with encrypted credential storage and role-based access control, plus download history and expiring file links.',
      "Docker containerized deployment with multi-stage builds and optimized layer caching, running on Render's free-tier infrastructure.",
    ],
    tech: ['FastAPI', 'Python', 'JWT', 'Docker'],
    metrics: [
      { label: 'RUNTIME', value: 'Async / non-blocking' },
      { label: 'AUTH', value: 'JWT + RBAC' },
      { label: 'DEPLOY', value: 'Docker, multi-stage builds' },
      { label: 'HOST', value: "Render free tier" },
    ],
  },
  {
    id: 'nnAccelerator',
    category: 'HARDWARE / COMPUTER ARCHITECTURE',
    title: 'Neural Network Accelerator',
    org: 'Course Group Project',
    date: 'Jan 2026 – Apr 2026',
    description: [
      'Integrated a custom neural network accelerator into a 3-stage pipelined processor architecture.',
      'Implemented hardware offloading of neural network computations to improve overall system performance.',
      'Designed and verified accelerator modules in Verilog/HDL with a focus on efficient pipeline integration.',
    ],
    tech: ['Verilog', 'HDL', 'Computer Architecture'],
    metrics: [
      { label: 'PIPELINE', value: '3-stage architecture' },
      { label: 'OFFLOAD', value: 'Hardware-accelerated' },
      { label: 'VERIFICATION', value: 'Verilog / HDL' },
      { label: 'SCOPE', value: 'Course group project' },
    ],
  },
  {
    id: 'aiWebpageAssistant',
    category: 'BROWSER EXTENSION / AI TOOLING',
    title: 'AI Webpage Assistant',
    org: 'Personal Project',
    date: 'Jun 2025',
    description: [
      'Chrome extension that answers user questions about the current page, extracting on-page content through content scripts and capturing queries through a lightweight popup interface.',
      'Serverless API route built on Next.js and deployed to Vercel proxies each request to the Groq API, keeping the API key server-side via environment variables instead of exposing it to the client.',
      "Queries Groq's LLaMA 3 model through its chat completion endpoint and renders the response back inside the extension UI.",
    ],
    tech: ['Chrome Extensions', 'Next.js', 'Vercel', 'Groq API'],
    metrics: [
      { label: 'CONTEXT', value: 'Live page content' },
      { label: 'MODEL', value: 'Groq LLaMA 3' },
      { label: 'BACKEND', value: 'Next.js serverless (Vercel)' },
      { label: 'SECURITY', value: 'Server-side API key' },
    ],
  },
]

export type SkillGroup = {
  tag: string
  category: string
  description: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    tag: 'CORE',
    category: 'Programming',
    description: 'Languages I reach for most, for algorithmic problem-solving and systems coursework.',
    items: ['C', 'C++', 'Python', 'JavaScript'],
  },
  {
    tag: 'BUILD',
    category: 'Web Technologies',
    description: 'The stack behind my full-stack projects, from UI to backend APIs.',
    items: ['REST APIs', 'React', 'Next.js', 'Node.js'],
  },
  {
    tag: 'PERSIST',
    category: 'Database',
    description: 'Relational and document stores used across my project backends.',
    items: ['MongoDB', 'MySQL'],
  },
  {
    tag: 'TOOLS',
    category: 'Tools & Systems',
    description:
      'Version control, both major OS environments, and hardware description languages at an elementary level.',
    items: ['Git', 'Windows', 'Linux', 'Verilog*'],
  },
]

export const skillsFootnote = '* Elementary proficiency'

export const achievements = [
  {
    value: 'Top 10',
    label: 'PTC Campus Contest, among all campus participants',
    date: '2026',
  },
  {
    value: 'Top 1.95%',
    label: 'JNVST Qualifier — ranked among 2.4M+ candidates across India',
    date: '2017',
  },
]

export const education = [
  {
    degree: 'B.Tech, Computer Science and Engineering',
    institute: 'Indian Institute of Technology Guwahati',
    detail: '',
    date: '2024 – Present',
    courses: [
      'Data Structures & Algorithms',
      'Design and Analysis of Algorithms',
      'Database Management Systems',
      'Computer Architecture and Organization',
      'Linear Algebra',
      'Discrete Maths',
      'Probability & Random Processes',
      'Digital Design',
    ],
  },
  {
    degree: 'Senior Secondary (CBSE)',
    institute: 'JNV Bengaluru Urban',
    detail: '89.6%',
    date: '2024',
    courses: [],
  },
  {
    degree: 'Secondary (CBSE)',
    institute: 'JNV Khammam',
    detail: '85.6%',
    date: '2022',
    courses: [],
  },
]
