import { put } from 'redux-saga/effects'
import { OTHER_REQUEST_SUCCESS } from '../actionTypes'

export default function * otherRequestHandler (action) {
  console.log('Other request handler received: ', action)
  yield put({
    type: OTHER_REQUEST_SUCCESS
  })
}
