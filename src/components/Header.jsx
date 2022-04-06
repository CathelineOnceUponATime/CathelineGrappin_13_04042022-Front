import logo from '../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'

function Header () {
  return (
    <header>
      <nav>
        <Link to='/'>
          <img src={logo} alt='Argent Bank Logo' />
        </Link>
        <Link to='/Connexion'>
          <i className='fa fa-user-circle' />
          <p> Sign In </p>
        </Link>
      </nav>
    </header>
  )
}

export default Header
