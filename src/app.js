import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Homepage from './pages/homepage'
import About from './pages/about'
import Podcast from './pages/podcast'
import Workshops from './pages/workshops'
import Research from './pages/research'
import StyleGuide from './pages/style-guide'

class App extends React.Component {
  componentDidMount() {
    this.props.history.listen((location, action) => {
      if (window && action === 'PUSH') {
        window.scrollTo(0, 0)
      }
    })
  }

  render() {
    return (
      <Switch>
        <Route path="/research" component={Research} />
        <Route path="/workshops" component={Workshops} />
        <Route path="/psychologyin10minutes" component={Podcast} />
        <Route path="/about" component={About} />
        <Route path="/styleguide" component={StyleGuide} />
        <Route path="/" component={Homepage} />
      </Switch>
    )
  }
}

export default App
