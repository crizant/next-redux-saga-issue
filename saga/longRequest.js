import { delay } from 'redux-saga'
import { put } from 'redux-saga/effects'
import { LONG_REQUEST_SUCCESS } from '../actionTypes'

export default function * longRequestHandler (action) {
  console.log('Long request handler received: ', action)
  yield delay(3000)
  yield put({
    type: LONG_REQUEST_SUCCESS
  })
}
