// Central place for every outbound link. Fill in the empty strings with your
// real URLs — every component reads from here, so this is the only file
// you need to touch to update links across the whole site.

export const links = {
  email: 'battulauday16@gmail.com',
  phone: '+91-8978909914',
  location: 'Hyderabad, Telangana',

  github: 'https://github.com/Uday2506',
  linkedin: 'https://www.linkedin.com/in/uday-kiran-battula-435054250/',
  // Drop your exported resume PDF at public/resume.pdf and set this to
  // '/resume.pdf' — the hero's download button only renders once it's set,
  // so it can never point at a missing file.
  resumePdf: '',

  // Social links for the Contact section's icon row. Each icon only renders
  // once its URL is filled in here — leave blank to keep it hidden rather
  // than link somewhere fake.
  // TODO: paste your Facebook profile URL.
  facebook: '',
  // TODO: paste your YouTube channel URL.
  youtube: '',
  // TODO: paste your Medium profile URL.
  medium: '',
  instagram: 'https://www.instagram.com/_suv_uday_2506_/',
  // TODO: paste your X (Twitter) profile URL.
  twitter: '',

  projectRepos: {
    technothlon: 'https://github.com/coded-circuit/Technothlon-Online-Contest--2026',
    ytDownloader: 'https://github.com/Uday2506/Youtube-Video-Downloader',
    nnAccelerator: 'https://github.com/nishanbhakta/Image-filter',
    // Intentionally left blank — no repo link for this project.
    aiWebpageAssistant: '',
  },
}

// Derived from the phone number above — a real wa.me deep link, not a
// placeholder. Empty automatically if the phone number above is ever cleared.
export const whatsappLink = links.phone
  ? `https://wa.me/${links.phone.replace(/\D/g, '')}`
  : ''

export type Links = typeof links
