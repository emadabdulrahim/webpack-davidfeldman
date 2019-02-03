import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(console.log)
  }

  render() {
    return <h1>NodeJS + React</h1>
  }
}

ReactDOM.render(<App />, document.getElementById('app'))

module.hot.accept()
