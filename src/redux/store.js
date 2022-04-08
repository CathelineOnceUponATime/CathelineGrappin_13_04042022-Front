import { createStore } from 'redux'
import produce from 'immer'

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const initialeState = {
  personneId: 0,
  connected: false,
  status: 'void',
  data: null,
  error: null
}

const FETCHING = 'data/fetching'
const RESOLVED = 'data/resolved'
const REJECTED = 'data/rejected'

const dataFetching = () => ({ type: FETCHING })
const dataResolved = (data) => ({ type: RESOLVED, payload: data })
const dataRejected = (error) => ({ type: REJECTED, payload: error })

export const connexionAction = () => ({ type: 'connexion' })

function reducer (state = initialeState, action) {
  if (action.type === 'connexion') {
    return produce(state, (draft) => {
      draft.connected = !state.connected
    })
  }
  return state
}

function dataReducer (state = initialeState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case FETCHING : {
        if (draft.status === 'void') {
          draft.status = 'pending'
          return
        }
        if (draft.status === 'rejected') {
          draft.error = null
          draft.status = 'pending'
          return
        }
        if (draft.status === 'resolved') {
          draft.status = 'updating'
          return
        }
        return
      }
      case RESOLVED : {
        if (draft.status === 'pending' || draft.status === 'updating') {
          draft.data = action.payload
          draft.status = 'resolved'
          return
        }
        return
      }
      case REJECTED : {
        if (draft.status === 'pending' || draft.status === 'updating') {
          draft.error = action.payload
          draft.data = null
          draft.status = 'rejected'
        }
      }
      default: return
    }
  })
}
export const store = createStore(reducer, initialeState, reduxDevTools)
