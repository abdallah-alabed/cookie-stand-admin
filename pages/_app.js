import '../styles/globals.css'
import Footer from './footer'
import NewHead from './head'
import Header from './header';
function MyApp({ Component, pageProps }) {
  return (
  <>
  <NewHead />
  <Header /> 
  <Component {...pageProps} />
  <Footer />
  </>)
}

export default MyApp
