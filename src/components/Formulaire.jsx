import { useDispatch, useSelector } from 'react-redux'
import { connexionAction } from '../redux/store'

function Formulaire () {
  const dispatch = useDispatch()
  const connected = useSelector(state => state.connected)

  return (
    <section>
      <i className='fa fa-user-circle sign-in-icon' />
      <h1> Sign In </h1>
      <form action='./User'>
        <div className='input-wrapper'>
          <label htmlFor='username'>Username</label>
          <input type='text' id='username' />
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
          onClick={(e) => {
            e.preventDefault()
            dispatch(connexionAction())
          }}
        > Sign In
        </button>
        <p> {connected ? 'connecté' : 'deconnecté'} </p>
      </form>
    </section>
  )
}

export default Formulaire
