interface IEducation {
  name: string
  edu: string
  desc: string
  banner: string
  link: {
    name: string
    href: string
  }
  year: {
    start: number
    end: number | null
  }
}

export const educations: IEducation[] = [
  {
    name: 'Mahidol University',
    edu: 'Bachelor’s Degree',
    desc:
      'Mahidol University is recognized as a large higher education institution comprising of academicians and professionals in every field, both in arts and sciences.',
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
    desc:
      'Mahidol Wittayanusorn School (MWIT) which in its English translation means “Prince Mahidol Memorial Science School” is funded by the government.',
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
