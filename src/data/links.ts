// Central place for every outbound link. Fill in the empty strings with your
// real URLs — every component reads from here, so this is the only file
// you need to touch to update links across the whole site.

export const links = {
  email: 'battulauday16@gmail.com',
  phone: '+91-8978909914',
  location: 'Hyderabad, Telangana',

  // TODO: paste your GitHub profile URL (resume lists a "Github" link but no
  // resolvable URL was present in the extracted text).
  github: '',
  // TODO: paste your LinkedIn profile URL.
  linkedin: '',
  // TODO: drop your exported resume PDF at public/resume.pdf — this path
  // will then serve it directly.
  resumePdf: '/resume.pdf',

  projectRepos: {
    // TODO: paste each project's repo URL.
    technothlon: '',
    ytDownloader: '',
    nnAccelerator: '',
  },
}

export type Links = typeof links
