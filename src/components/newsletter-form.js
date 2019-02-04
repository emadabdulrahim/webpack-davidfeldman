import 'babel-polyfill'
import React from 'react'
import { TextInput, Button, Icon, toaster } from 'evergreen-ui'
import DFButton from './button'
import s from './newsletter-form.scss'

class NewsletterForm extends React.Component {
  state = { email: '' }

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

  handleChange = e => {
    const { value } = e.target

    this.setState(() => ({
      email: value,
    }))
  }

  render() {
    return (
      <form className={s.form} onSubmit={this.subscribe}>
        <div className={s.input_group}>
          <Icon icon="envelope" className={s.input_icon} size={20} />
          <TextInput
            required
            placeholder="Your email here"
            onChange={this.handleChange}
            value={this.state.email}
            marginBottom={0}
          />
        </div>
        <DFButton className={s.button} large type="submit">
          Subscribe
        </DFButton>
      </form>
    )
  }
}

export default NewsletterForm
