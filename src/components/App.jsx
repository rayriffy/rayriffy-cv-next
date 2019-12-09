import React from 'react'
import PropTypes from 'prop-types'

import {Helmet} from 'react-helmet'

import {ThemeProvider, CSSReset, theme} from '@chakra-ui/core'

const App = props => {
  const {children} = props

  const customTheme = {
    ...theme,
    fonts: {
      ...theme.fonts,
      body: "'Helvetica Neue', 'Segoe UI', 'Helvetica', Kanit, system-ui, sans-serif",
      heading: "'Helvetica Neue', 'Segoe UI', 'Helvetica', Kanit, system-ui, sans-serif",
    },
  }

  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Helmet
        defaultTitle="Curriculum Vitae"
        title="Phumrapee Limpianchop · Curriculum Vitae"
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
      {children}
    </ThemeProvider>
  )
}

export default App

App.propTypes = {
  children: PropTypes.node,
}
