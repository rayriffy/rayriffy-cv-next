import App from 'next/app'
import React from 'react'

import AppShell from '../components/App'

class NextApp extends App {
  render() {
    const {Component, pageProps} = this.props

    return (
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    )
  }
}

export default NextApp
