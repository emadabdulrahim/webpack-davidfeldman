import React from 'react'
import SiteHeader from 'components/site-header'
import Hero from './hero'
import SiteFooter from 'components/site-footer'
import s from './index.scss'

export default () => (
  <div className={s.page}>
    <SiteHeader theme="light" />
    <Hero />
    <SiteFooter />
  </div>
)
