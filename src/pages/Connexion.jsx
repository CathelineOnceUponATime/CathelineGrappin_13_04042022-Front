import Header from '../components/Header'
import Footer from '../components/Footer'
import Formulaire from '../components/Formulaire'
import { Display } from '../redux/display'

function Connexion () {
  return (
    <div className='connexion'>
      <Header />
      <main>
        <Display />
        <Formulaire />
      </main>
      <Footer />
    </div>
  )
}

export default Connexion
