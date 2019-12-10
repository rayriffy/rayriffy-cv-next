interface IAward {
  name: string
  issuer: string
  award: string
}

export const awards: IAward[] = [
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
