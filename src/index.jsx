import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Accueil from './pages/Accueil'
import Connexion from './pages/Connexion'
import './Sass/main.scss'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Accueil />} />
        <Route path='/Connexion' element={<Connexion />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
