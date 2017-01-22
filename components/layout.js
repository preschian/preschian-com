import Footer from './footer'
import Head from './head'

export default ({ children }) => (
  <div>
    <Head />
    {children}
    <Footer />
  </div>
)
