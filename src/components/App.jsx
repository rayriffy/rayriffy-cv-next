import React from 'react'
import PropTypes from 'prop-types'

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
      {children}
    </ThemeProvider>
  )
}

export default App

App.propTypes = {
  children: PropTypes.node,
}
