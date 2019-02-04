import 'babel-polyfill'
import React from 'react'
import { SectionTitle, SectionSuperTitle } from 'components/typography'
import { Label, Pane, TextInput, Textarea } from 'evergreen-ui'
import { TimelineLite, Circ } from 'gsap'
import DFButton from 'components/button'
import cx from 'classnames'
import s from './contact-form.scss'

class ContactForm extends React.Component {
  state = { email: '', fullName: '', message: '' }

  successTween = new TimelineLite()

  sendRequest = (path, options = {}) => {
    const headers = {
      'Content-type': 'application/json; charset=UTF-8',
    }

    fetch(path, { method: 'POST', headers: { ...headers }, ...options })
      .then(res => res.json())
      .then(result => {
        this.successTween
          .to(this.success_message, 0.4, {
            y: 0,
            ease: Circ.easeInOut,
          })
          .to(
            this.success_message,
            0.3,
            {
              scale: 1,
              ease: Circ.easeInOut,
            },
            0.1
          )
        console.log('result: ', result)
      })
      .catch(console.log)
  }

  subscribe = async e => {
    e.preventDefault()

    this.sendRequest('/api/contact', {
      body: JSON.stringify({ ...this.state, source: this.props.source }),
    })
  }

  handleChange = e => {
    const { currentTarget } = e
    this.setState(() => ({
      [currentTarget.id]: currentTarget.value,
    }))
  }

  render() {
    const { className, theme } = this.props
    const themeClass = theme === 'light' ? s.light : s.dark

    return (
      <form
        className={cx(s.form, themeClass, className)}
        onSubmit={this.subscribe}
      >
        <div
          className={s.success_message}
          ref={el => {
            this.success_message = el
          }}
        >
          <div className={s.success_message_layout}>
            <SectionSuperTitle className={s.success_message_title_super_title}>
              Message Sent Successfuly
            </SectionSuperTitle>
            <SectionTitle className={s.success_message_title}>
              Thank you.
            </SectionTitle>
          </div>
        </div>
        <Pane className={s.form_inputs}>
          <div className={s.input_group}>
            <Pane className={s.input_field}>
              <Label htmlFor="fullName">Full Name</Label>
              <TextInput
                required
                id="fullName"
                onChange={this.handleChange}
                value={this.state.fullName}
                marginBottom={0}
              />
            </Pane>
            <Pane className={s.input_field}>
              <Label htmlFor="email">Email</Label>
              <TextInput
                required
                id="email"
                onChange={this.handleChange}
                value={this.state.email}
                marginBottom={0}
              />
            </Pane>
          </div>
          <Pane className={s.input_field}>
            <Label htmlFor="message">Message</Label>
            <Textarea
              required
              id="message"
              onChange={this.handleChange}
              value={this.state.message}
              marginBottom={0}
            />
          </Pane>
        </Pane>
        <DFButton type="submit" light={theme === 'light'}>
          Send
        </DFButton>
      </form>
    )
  }
}

export default ContactForm
