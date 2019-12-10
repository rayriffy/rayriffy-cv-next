interface IWork {
  name: string
  role: string
  href: string
  year: {
    start: number
    end: number | null
  }
}

export const works: IWork[] = [
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
