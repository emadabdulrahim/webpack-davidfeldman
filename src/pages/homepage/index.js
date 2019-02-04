import React from 'react'
import SiteHeader from 'components/site-header'
import Hero from './hero'
import Blog from './blog'
import Newsletter from './newsletter'
import Books from './books'
import Workshops from './workshops'
import SiteFooter from 'components/site-footer'

export default () => (
  <div>
    <SiteHeader />
    <Hero />
    <Blog />
    <Newsletter />
    <Workshops />
    <Books />
    <SiteFooter />
  </div>
)
