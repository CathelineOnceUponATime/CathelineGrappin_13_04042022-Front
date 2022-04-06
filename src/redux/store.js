import { createStore } from 'redux'
import produce from 'immer'

const initialeState = {
  personneId: 0,
  connected: false
}

export const connexionAction = () => ({ type: 'connexion' })

function reducer (state = initialeState, action) {
  if (action.type === 'connexion') {
    return produce (state, (draft) => {
      draft.connected = !state.connected
    })
  }
  return state
}

export const store = createStore(reducer)
