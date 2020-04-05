export interface IExperience {
  name: string
  role: string
  year: {
    start: number
    end: number | null
  }
}

export const experiences: IExperience[] = [
  {
    name: 'Riffy Blog',
    role: 'Blogger',
    year: {
      start: 2018,
      end: null,
    },
  },
  {
    name: 'IVAO Thailand Division',
    role: 'Assistant Webmaster',
    year: {
      start: 2017,
      end: null,
    },
  },
  {
    name: 'Level11th',
    role: 'Part-time Frontend Web Developer',
    year: {
      start: 2019,
      end: null,
    },
  },
  {
    name: 'BrikL',
    role: 'Software Engineer',
    year: {
      start: 2019,
      end: null,
    },
  },
]
