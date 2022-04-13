import { createStore, applyMiddleware } from 'redux'
import { reducer } from './reducer'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

export const initialeState = {
  users: null,
  connected: false,
  status: 'void',
  user: {
    prenom: ' ',
    nom: ' '
  },
  token: '',
  error: null
}

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

export const store = createStore(reducer, composedEnhancer)
