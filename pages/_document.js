import Document, { Head, Main, NextScript } from 'next/document'
import styleSheet from 'styled-components/lib/models/StyleSheet'

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage()
    const style = styleSheet.rules().map(rule => rule.cssText).join('\n')
    return { ...page, style }
  }

  render() {
    return (
      <html>
        <Head>
          <title>Preschian Febryantara</title>
          <meta charSet='utf-8' />
          <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <link rel='shortcut icon' type='image/x-icon' href='/static/favicon.ico' />

          <style>{`
            * {
              box-sizing: border-box;
              margin: 0;
              padding: 0;
            }

            a {
              display: inline-block;
              text-decoration: none;
            }

            body {
              font-family: Montserrat, sans-serif;
              margin: 0;
            }
          `}</style>
          <style dangerouslySetInnerHTML={{ __html: this.props.style }} />
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Droid+Serif:400,400i,700,700i" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
