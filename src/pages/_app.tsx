import React from 'react'

import App from 'next/app'
import Head from 'next/head'

import {
  Box,
  ColorModeProvider,
  CSSReset,
  DarkMode,
  Flex,
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
          <Flex justify='center' pt={24}>
            <Box width={[22 / 24, 20 / 24, 18 / 24, 12 / 24]}>
              <Component {...pageProps} />
            </Box>
          </Flex>
        </ThemeProvider>
      </React.StrictMode>
    )
  }
}

export default NextApp
