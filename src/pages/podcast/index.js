import React from 'react'
import SiteHeader from 'components/site-header'
import SiteFooter from 'components/site-footer'
import Main from './main'

class Index extends React.Component {
  render() {
    return (
      <>
        <SiteHeader />
        <Main />
        <SiteFooter />
      </>
    )
  }
}

export default Index
