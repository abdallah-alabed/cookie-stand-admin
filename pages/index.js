import NewHead from './head'
import Header from './header';
import Main from './main';
import Footer
 from './footer';
const Home=()=> {
  return (
    <div className='bg-green-100'>
      <NewHead />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Home