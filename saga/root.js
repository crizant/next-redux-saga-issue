import { all, takeLatest } from 'redux-saga/effects'
import { LONG_REQUEST, OTHER_REQUEST } from '../actionTypes'
import longRequestHandler from './longRequest'
import otherActionHandler from './otherRequest'

function * rootSaga () {
  yield all([
    takeLatest(LONG_REQUEST, longRequestHandler),
    takeLatest(OTHER_REQUEST, otherActionHandler)
  ])
}

export default rootSaga
