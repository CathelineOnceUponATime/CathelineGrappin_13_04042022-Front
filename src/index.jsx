import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Accueil from './pages/Accueil'
import Connexion from './pages/Connexion'
import User from './pages/User'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import './Sass/main.scss'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path='/' element={<Accueil />} />
          <Route path='/Connexion' element={<Connexion />} />
          <Route path='/User' element={<User />} />
        </Routes>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)