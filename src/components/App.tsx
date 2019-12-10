import React from 'react'

import { CSSReset, DefaultTheme, theme, ThemeProvider } from '@chakra-ui/core'

import Footer from './Footer'
import Header from './Header'

const App: React.FC = props => {
  const { children } = props

  const customTheme: DefaultTheme = {
    ...theme,
    fonts: {
      ...theme.fonts,
      body:
        "'Helvetica Neue', 'Segoe UI', 'Helvetica', Kanit, system-ui, sans-serif",
      heading:
        "'Helvetica Neue', 'Segoe UI', 'Helvetica', Kanit, system-ui, sans-serif",
    },
  }

  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  )
}

export default App
