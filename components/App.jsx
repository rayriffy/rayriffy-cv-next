import React from 'react'
import Helmet from 'react-helmet'

import {TypographyStyle} from 'react-typography'
import typography from '../utils/typography'

const App = props => {
  const {children} = props

  return (
    <>
      <Helmet
        defaultTitle="Curriculum Vitae"
        title="Phumrapee Limpianchop"
        titleTemplate="%s · Curriculum Vitae"
        htmlAttributes={{lang: 'en'}}
        meta={[
          {
            content: 'Phumrapee Limpianchop · Curriculum Vitae',
            name: 'name',
          },
          {
            content: "Hi! I'm Phumrapee Limpianchop, Nice to meet you here.",
            name: 'description',
          },
          {
            content: '#212121',
            name: 'theme-color',
          },
        ]}
        link={[
          {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css?family=Kanit&display=swap',
          },
          {
            rel: 'shortcut icon',
            href: '/static/favicon.png',
          },
          {
            rel: 'apple-touch-icon-precomposed',
            href: '/static/favicon.png',
          },
          {
            rel: 'preconnect',
            href: 'https://blog.rayriffy.com',
          },
          {
            rel: 'preconnect',
            href: 'https://h.rayriffy.com',
          },
          {
            rel: 'preconnect',
            href: 'https://rayriffy.com',
          },
          {
            rel: 'preconnect',
            href: 'https://github.com',
          },
          {
            rel: 'dns-prefetch',
            href: 'https://blog.rayriffy.com',
          },
          {
            rel: 'dns-prefetch',
            href: 'https://h.rayriffy.com',
          },
          {
            rel: 'dns-prefetch',
            href: 'https://rayriffy.com',
          },
          {
            rel: 'dns-prefetch',
            href: 'https://github.com',
          },
        ]}
      />
      <TypographyStyle typography={typography} />
      {children}
    </>
  )
}

export default App
