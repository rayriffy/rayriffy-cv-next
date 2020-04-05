export interface IProject {
  name: string
  slug?: string
  year: {
    start: number
    end?: number | null
  }
  links: {
    name: string
    href: string
  }[]
}

export const projects: IProject[] = [
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
        href:
          'https://assistant.google.com/services/a/uid/00000072b48cd3d6?hl=en',
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
