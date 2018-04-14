import React, {Component} from 'react'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import store from '../store'
import { LONG_REQUEST, OTHER_REQUEST } from '../actionTypes'

const dispatchOtherRequests = (dispatch) => {
  // set a schedule to dispatch 5 actions,
  // each is dispatched 1 second behind the previous one
  for (let trial = 1; trial <= 5; trial++) {
    setTimeout(() => {
      dispatch({type: OTHER_REQUEST, trial: trial})
    }, (trial - 1) * 1000)
  }
}

class Other extends Component {
  static async getInitialProps ({store}) {
    store.dispatch({type: LONG_REQUEST})
    dispatchOtherRequests(store.dispatch) // pass the dispatch function
  }

  render () {
    return (
      <div>
        <h1>Other page</h1>
      </div>
    )
  }
}

export default withRedux(store)(
  withReduxSaga(Other)
)
