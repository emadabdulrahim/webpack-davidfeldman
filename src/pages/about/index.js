import React from 'react'
import SiteHeader from 'components/site-header'
import Hero from './hero'
import Bio from './bio'
import SiteFooter from 'components/site-footer'

export default () => (
  <main>
    <SiteHeader theme="light" />
    <Hero />
    <Bio />
    <SiteFooter />
  </main>
)
