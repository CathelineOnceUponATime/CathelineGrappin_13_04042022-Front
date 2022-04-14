/* eslint-disable no-redeclare */
/* global fetch */
/* eslint no-undef: "error" */

import store from './store'

const dataFetching = () => ({ type: 'loading' })
const dataError = () => ({ type: 'error' })
const connexionAction = (data) => ({ type: 'connexion', payload: data })
const profileAction = (data) => ({ type: 'profile', payload: data })
const updateUserAction = (data) => ({ type: 'updateUser', payload: data })
const deconnexionAction = () => ({ type: 'deconnexion' })

export function deconnexion () {
  return function (dispatch) {
    dispatch(deconnexionAction())
  }
}

export function login (email, password) {
  return function (dispatch) {
    try {
      dispatch(dataFetching())
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({ email: email, password: password })
      }
      fetch('http://localhost:5001/api/v1/user/login', requestOptions).then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            dispatch(connexionAction(data))
            dispatch(profile())
          })
        } else {
          dispatch(dataError())
        }
      })
    } catch (error) {
      // store.dispatch(dataRejected(error))
    }
  }
}

export function profile () {
  return function (dispatch) {
    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: 'Bearer' + store.getState().token
        }
      }
      fetch('http://localhost:5001/api/v1/user/profile', requestOptions).then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            dispatch(profileAction(data))
          })
        }
      })
    } catch (error) {
      // store.dispatch(dataRejected(error))
    }
  }
}

export function updateUserInfo (prenom, nom) {
  return function (dispatch) {
    try {
      dispatch(dataFetching())
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: 'Bearer' + store.getState().token
        },
        body: JSON.stringify({ firstName: prenom, lastName: nom })
      }
      fetch('http://localhost:5001/api/v1/user/profile', requestOptions).then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            dispatch(updateUserAction(data))
          })
        }
      })
    } catch (error) {
      // store.dispatch(dataRejected(error))
    }
  }
}
