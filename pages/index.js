import React, {Component} from 'react'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import store from '../store'
import Link from 'next/link'

class Home extends Component {
  render () {
    return (
      <div>
        <h1>Home page</h1>
        <Link href='/other'>
          <a>
            Go to other page
          </a>
        </Link>
      </div>
    )
  }
}

export default withRedux(store)(
  withReduxSaga(Home)
)
