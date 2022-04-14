import { useNavigate } from 'react-router-dom'
import { login } from '../redux/action'
import store from '../redux/store'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

function Formulaire () {
  const navigate = useNavigate()
  const statutReq = useSelector(state => state.status)
  useEffect(() => {
    if (statutReq === 'connecte') {
      navigate('/User')
    }
    if (statutReq === 'error') {
      const form = document.getElementsByTagName('form')[0]
      let pError = document.getElementsByClassName('error')[0]
      if (pError === undefined) {
        pError = document.createElement('p')
        pError.classList.add('error')
        pError.textContent = 'Invalid username or password'
        form.appendChild(pError)
      }
    }
  }, [statutReq, navigate])

  function Connexion (e) {
    e.preventDefault()
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    store.dispatch(login(email.value, password.value))
  }

  return (
    <section>
      <i className='fa fa-user-circle fa-4x sign-in-icon' />
      <h1> Sign In </h1>
      <form>
        <div className='input-wrapper'>
          <label htmlFor='username'>Username</label>
          <input type='text' id='email' />
        </div>
        <div className='input-wrapper'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' />
        </div>
        <div className='input-remember'>
          <input type='checkbox' id='remember-me' />
          <label htmlFor='remember-me'>Remember me</label>
        </div>
        <button
          className='sign-in-button'
          onClick={Connexion}
        > Sign In
        </button>
      </form>
    </section>
  )
}

export default Formulaire
