import React from 'react'

import App from '../components/App'
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import Education from '../components/Education'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Language from '../components/Language'
import Skill from '../components/Skill'
import Work from '../components/Work'

const Index = props => {
  return (
    <App>
      <Header />
      <Contact />
      <Work />
      <Education />
      <Blog />
      <Language />
      <Skill />
      <Footer />
    </App>
  )
}

export default Index
