const works = [
  {
    name: 'rayriffy.com',
    role: 'Founder',
    href: 'https://rayriffy.com/',
    year: {
      start: 2015,
      end: null,
    },
  },
  {
    name: 'Riffy Blog',
    role: 'Blogger',
    href: 'https://blog.rayriffy.com/',
    year: {
      start: 2018,
      end: null,
    },
  },
  {
    name: 'IVAO Headquaters',
    role: 'DevOps',
    href: 'https://www.ivao.aero/staff/details.asp?Id=DOS4',
    year: {
      start: 2018,
      end: null,
    },
  },
  {
    name: 'IVAO Thailand Division',
    role: 'Assistant Webmaster',
    href: 'https://www.ivao.aero/staff/details.asp?Id=TH-AWM',
    year: {
      start: 2017,
      end: null,
    },
  },
  {
    name: 'Level11th',
    role: 'Part-time Frontend Web Developer',
    href: '#',
    year: {
      start: 2019,
      end: null,
    },
  },
  {
    name: 'BrikL',
    role: 'Software Engineer',
    href: 'https://www.brikl.com/',
    year: {
      start: 2019,
      end: null,
    },
  },
]

const educations = [
  {
    name: 'Mahidol University',
    edu: 'Bachelor’s Degree',
    desc: 'Mahidol University is recognized as a large higher education institution comprising of academicians and professionals in every field, both in arts and sciences.',
    year: {
      start: 2018,
      end: null,
    },
    banner: '/static/mu.jpg',
    link: {
      name: 'Website',
      href: 'https://mahidol.ac.th',
    },
  },
  {
    name: 'Mahidol Wittayanusorn School',
    edu: 'Senior High School',
    desc: 'Mahidol Wittayanusorn School (MWIT) which in its English translation means “Prince Mahidol Memorial Science School” is funded by the government.',
    year: {
      start: 2015,
      end: 2018,
    },
    banner: '/static/mwit.jpg',
    link: {
      name: 'Website',
      href: 'https://www.mwit.ac.th',
    },
  },
  {
    name: 'Rayongwittayakom School',
    edu: 'Junior High School',
    desc:
      'Rayongwittayakom School was established on August 5, 1971 because the Ministry of Education considered the development of secondary school education to make it appropriate and convenient to allocate teachers and budget in order to make the school administration more effective.',
    year: {
      start: 2011,
      end: 2014,
    },
    banner: '/static/ryw.jpg',
    link: {
      name: 'Website (Insecure)',
      href: 'http://webserver.rayongwit.ac.th/main/main.php',
    },
  },
]

const awards = [
  {
    name: '19th National Software Contest',
    issuer: 'NECTEC',
    award: 'First Runner-up in Application Program Category',
  },
  {
    name: '20th National Software Contest',
    issuer: 'NECTEC',
    award: 'Honorable Mention Award in Application Program Category',
  },
  {
    name: 'Junior Scientist and Technologist Programme',
    issuer: 'NSTDA',
    award: 'Scholarship Student',
  },
  {
    name: 'Actions on Google Hackathon Thailand 2018',
    issuer: 'Google Developer Group Thailand',
    award: '1st Runner-up',
  },
  {
    name: 'Hack Your Tech 2018',
    issuer: 'MUICT',
    award: 'First Prize',
  },
  {
    name: 'The Stupid Hackathon 2018',
    issuer: 'StupidHackTH',
    award: 'First Prize in the most Angry Emoji Vote Category',
  },
  {
    name: 'The Stupid Hackathon 2019',
    issuer: 'StupidHackTH',
    award: 'Sponsorship Award',
  },
  {
    name: 'ICT Junior Camp 2018',
    issuer: 'MUICT',
    award: 'First Prize in Databases and Intelligent Systems',
  },
  {
    name: 'ACM-ICPC Asia Nakhon Pathom Regional Contest 2018',
    issuer: 'Baylor University',
    award: 'Contestant',
  },
  {
    name: 'TechJam 2018',
    issuer: 'KBank',
    award: 'Contestant',
  },
]

const projects = [
  {
    name: 'rayriffy-cv-next',
    slug: 'THIS SITE',
    links: [
      {
        name: 'GitHub',
        href: 'https://github.com/rayriffy/rayriffy-cv-next',
      },
    ],
    year: {
      start: 2019,
      end: null,
    },
  },
  {
    name: 'M-NET API',
    links: [
      {
        name: 'GitHub',
        href: 'https://github.com/rayriffy/mnet-api',
      },
    ],
    year: {
      start: 2019,
      end: null,
    },
  },
  {
    name: 'Riffy H',
    slug: 'NSFW',
    links: [
      {
        name: 'GitHub',
        href: 'https://github.com/rayriffy/rayriffy-h',
      },
      {
        name: 'Write-up',
        href: 'https://blog.rayriffy.com/analysis-rayriffy-h/',
      },
      {
        name: 'Website',
        href: 'https://h.rayriffy.com',
      },
    ],
    year: {
      start: 2018,
      end: null,
    },
  },
  {
    name: 'maimai Song Randomizer',
    links: [
      {
        name: 'GitHub',
        href: 'https://github.com/rayriffy/maimai-song-randomizer',
      },
      {
        name: 'Google Assistant',
        href: 'https://assistant.google.com/services/a/uid/00000072b48cd3d6?hl=en',
      },
    ],
    year: {
      start: 2018,
      end: null,
    },
  },
  {
    name: 'Riffy Blog',
    links: [
      {
        name: 'GitHub',
        href: 'https://github.com/rayriffy/rayriffy-blog',
      },
      {
        name: 'Website',
        href: 'https://blog.rayriffy.com',
      },
    ],
    year: {
      start: 2018,
      end: null,
    },
  },
  {
    name: 'Thai Lottery API',
    links: [
      {
        name: 'GitHub',
        href: 'https://github.com/rayriffy/thai-lotto-api',
      },
    ],
    year: {
      start: 2019,
    },
  },
  {
    name: 'IvAc Thailand Modular Sector File',
    links: [
      {
        name: 'GitHub',
        href: 'https://github.com/ivaothai/ivac-sector-file',
      },
    ],
    year: {
      start: 2017,
      end: null,
    },
  },
  {
    name: 'Siri FastPass',
    links: [
      {
        name: 'GitHub',
        href: 'https://github.com/actions-on-falcon/siri-fastpass',
      },
    ],
    year: {
      start: 2018,
    },
  },
  {
    name: 'MWIT Square XI API',
    links: [
      {
        name: 'GitHub',
        href: 'https://github.com/rayriffy/mwits-square-xi-api',
      },
    ],
    year: {
      start: 2018,
    },
  },
  {
    name: 'OrchidGazer',
    links: [
      {
        name: 'GitHub',
        href: 'https://github.com/rayriffy/OrchidGazer-web',
      },
    ],
    year: {
      start: 2016,
      end: 2018,
    },
  },
  {
    name: 'PRE-MWITS 2018',
    links: [
      {
        name: 'GitHub',
        href: 'https://github.com/premwits/premwits-2018',
      },
    ],
    year: {
      start: 2017,
    },
  },
  {
    name: 'PRE-MWITS 2016',
    links: [
      {
        name: 'GitHub',
        href: 'https://github.com/premwits/premwits-2016',
      },
    ],
    year: {
      start: 2014,
      end: 2015,
    },
  },
]

const languages = [
  {
    lang: 'Thai',
    level: 'Native',
  },
  {
    lang: 'English',
    level: 'Excellent',
  },
  {
    lang: 'Japanese',
    level: 'Good',
  },
]

const skills = ['TypeScript', 'React', 'Firebase', 'Now.sh', 'Laravel', 'PHP', 'MySQL', 'MongoDB', 'Docker', 'TensorFlow', 'C', 'Python', 'Go', 'Java']

export {works, educations, awards, projects, languages, skills}
