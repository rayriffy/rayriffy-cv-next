import React from 'react'
import Helmet from 'react-helmet'

import { TypographyStyle } from 'react-typography'
import typography from '../utils/typography'

const App = props => {
  const { children } = props

  return (
    <>
      <Helmet
        defaultTitle="Riffy CV"
        titleTemplate="%s · Riffy CV"
        link={[
          {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css?family=Kanit&display=swap'
          },
          {
            rel: 'shortcut icon',
            href: '/static/favicon.png'
          },
          {
            rel: 'apple-touch-icon-precomposed',
            href: '/static/favicon.png'
          }
        ]}
      />
      <TypographyStyle typography={typography} />
      {children}
    </>
  )
}

export default App
