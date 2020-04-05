import React from 'react'

import App from 'next/app'
import Head from 'next/head'

import {
  ColorModeProvider,
  CSSReset,
  DarkMode,
  theme,
  ThemeProvider,
} from '@chakra-ui/core'

class NextApp extends App {
  public render() {
    const { Component, pageProps } = this.props

    return (
      <React.StrictMode>
        <Head>
          <title>Phumrapee Limpianchop · Curriculum Vitae</title>
        </Head>
        <ThemeProvider theme={theme}>
          <CSSReset />
          <>
            <Component {...pageProps} />
          </>
        </ThemeProvider>
      </React.StrictMode>
    )
  }
}

export default NextApp
