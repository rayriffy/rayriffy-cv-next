import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

class NextDocument extends Document {
  public static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)

    return { ...initialProps }
  }

  public render() {
    return (
      <Html lang='en'>
        <Head>
          <meta
            name='name'
            content='Phumrapee Limpianchop · Curriculum Vitae'
          />
          <meta
            name='description'
            content={`Hi! I\'m Phumrapee Limpianchop, Nice to meet you here.`}
          />
          <meta name='theme-color' content='#212121' />
          <link rel='shortcut icon' href='/static/favicon.png' />
          <link rel='apple-touch-icon-precomposed' href='/static/favicon.png' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default NextDocument
