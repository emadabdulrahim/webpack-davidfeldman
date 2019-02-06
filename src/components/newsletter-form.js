import 'babel-polyfill'
import React from 'react'
import { toaster } from 'evergreen-ui'

export const NewsletterContext = React.createContext()

class NewsletterContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      actions: {
        subscribe: this.subscribe,
        handleInputChange: this.handleInputChange,
      },
    }
  }

  sendRequest = (path, options = {}) => {
    const headers = {
      'Content-type': 'application/json; charset=UTF-8',
    }

    fetch(path, { method: 'POST', headers: { ...headers }, ...options })
      .then(res => res.json())
      .then(result => {
        let message = ''
        if (result.statusCode === 200) {
          message = 'Success! check your mail.'
        } else {
          message = result.error || result.title
        }
        toaster.notify(message)
        console.log('result: ', result)
      })
      .catch(console.log)
  }

  subscribe = async e => {
    e.preventDefault()

    const { email } = this.state

    this.sendRequest('/api/contact', {
      body: JSON.stringify({ email }),
    })
  }

  handleInputChange = e => {
    const { value } = e.target

    this.setState(() => ({
      email: value,
    }))
  }

  render() {
    return (
      <NewsletterContext.Provider value={this.state}>
        {this.props.children}
      </NewsletterContext.Provider>
    )
  }
}

export default NewsletterContainer
