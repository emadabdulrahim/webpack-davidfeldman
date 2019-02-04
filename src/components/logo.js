import React from 'react'
import { Link } from 'react-router-dom'
import LogoMark from './static/ornament-circle'
import s from './logo.scss'

const Logo = () => (
  <Link to="/" className={s.link}>
    <div className={s.container}>
      <LogoMark className={s.logo_ornament} />
      <span className={s.text}>DF</span>
    </div>
  </Link>
)

export default Logo
