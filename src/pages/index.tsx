import React from 'react'

import { Experience } from '../modules/experience/components'
import { Header } from '../modules/header/components'

const IndexPage: React.FC = props => {
  return (
    <React.Fragment>
      <Header />
      <Experience />
    </React.Fragment>
  )
}

export default IndexPage
