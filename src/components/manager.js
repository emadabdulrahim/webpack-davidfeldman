import React from 'react'

export default class Manager extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ...props,
    }
  }

  render() {
    return this.props.children({
      setState: (...args) => {
        this.setState(...args)
      },
      state: this.state,
    })
  }
}
