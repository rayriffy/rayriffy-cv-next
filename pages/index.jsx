import React from 'react'

import App from '../components/App'
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import Education from '../components/Education'
import Header from '../components/Header'
import Work from '../components/Work'

const Index = props => {
  return (
    <App>
      <Header />
      <Contact />
      <Work />
      <Education />
      <Blog />
    </App>
  )
}

export default Index
