import React from 'react'
import Helmet from 'react-helmet'

import { TypographyStyle } from 'react-typography'
import typography from '../utils/typography'

const App = props => {
  const { children } = props

  return (
    <>
      <Helmet defaultTitle="Riffy CV" titleTemplate="%s · Riffy CV">
        <link href="https://fonts.googleapis.com/css?family=Kanit&display=swap" rel="stylesheet" />
      </Helmet>
      <TypographyStyle typography={typography} />
      {children}
    </>
  )
}

export default App
