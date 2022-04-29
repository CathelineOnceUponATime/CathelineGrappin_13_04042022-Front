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

/**
 * Function deconnexion
 * change state of connexion
 * with not connected
 * @returns dispatch
 */
export function deconnexion () {
  return function (dispatch) {
    dispatch(deconnexionAction())
  }
}

/**
 * Function login
 * @param {String} email email of account
 * @param {String} password password of account
 * with good parameters
 * request return a token
 * and with this token
 * connect to profile function
 * @returns dispatch
 */
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
      dispatch(dataError())
    }
  }
}

/**
 * Function profile
 * with token
 * request return a data of user
 * @returns dispatch
 */
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
      dispatch(dataError())
    }
  }
}

/**
 * Function updateUserInfo
 * @param {String} prenom first name of user
 * @param {String} nom last name of user
 * update a first name or/and last name of user
 * in database
 * @returns dispatch
 */
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
      dispatch(dataError())
    }
  }
}
