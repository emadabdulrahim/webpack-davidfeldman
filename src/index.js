import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import { render } from 'react-dom'
import schema from './schema'
import AppContext from './context'
import App from './app'
import './styles/_main.scss'

class Index extends React.Component {
  state = { feed: [], isFetching: false }

  componentDidMount() {
    const { feed } = this.state
    if (feed.length > 0) {
      return
    }

    this.fetchBlogFeed()
  }

  fetchBlogFeed = () => {
    this.setState(state => ({
      ...state,
      isFetching: true,
    }))
    console.log('fetching called')

    fetch('/api/blog')
      .then(res => res.json())
      .then(result => {
        this.setState(state => ({
          ...state,
          feed: schema(result),
          isFetching: false,
        }))
      })
      .catch(console.log)
  }

  render() {
    return (
      <BrowserRouter>
        <AppContext.Provider value={this.state}>
          <Route path="/" component={App} />
        </AppContext.Provider>
      </BrowserRouter>
    )
  }
}

render(<Index />, document.getElementById('app'))

module.hot.accept()
