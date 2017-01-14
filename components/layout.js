import Head from 'next/head'

export default ({ children, title = 'Preschian Febryantara' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />

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
          font-family: 'Montserrat', sans-serif;
          margin: 0;
        }
      `}</style>

      <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
    </Head>

    { children }

  </div>
)
