import React from 'react'
import Helmet from 'react-helmet'

import { TypographyStyle } from 'react-typography'
import typography from '../utils/typography'

const App = props => {
  const { children } = props

  return (
    <>
      <Helmet defaultTitle="Riffy CV" titleTemplate="%s · Riffy CV" />
      <TypographyStyle typography={typography} />
      {children}
    </>
  )
}

export default App
