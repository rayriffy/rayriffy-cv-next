import React from 'react'

import Award from '../components/Award'
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import Education from '../components/Education'
import Language from '../components/Language'
import Project from '../components/Project'
import Skill from '../components/Skill'
import Work from '../components/Work'

const IndexPage: React.FC = props => {
  return (
    <React.Fragment>
      <Contact />
      <Work />
      <Education />
      <Award />
      <Blog />
      <Project />
      <Language />
      <Skill />
    </React.Fragment>
  )
}

export default IndexPage
