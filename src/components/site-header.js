import React from 'react'
import { NavLink } from 'react-router-dom'
import Link, { HashLink } from './link'
import Logo from 'components/logo'
import { Separator } from './index'
import DFButton from './button'
import s from './site-header.scss'

const SiteHeader = ({ theme }) => {
  const className = `${s.base} ${theme && s.light_theme}`

  return (
    <nav className={className}>
      <div className={s.nav_content}>
        <Logo theme={theme} />
        <div className={s.nav_menu}>
          <Link className={s.link} to="/about">
            About
          </Link>
          <Separator />
          <Link className={s.link} to="/psychologyin10minutes">
            Blog & Podcast
          </Link>
          <Separator />
          <Link className={s.link} to="/research">
            Research
          </Link>
          <Separator />
          <HashLink className={s.link} href="/#books">
            Books
          </HashLink>
          <Separator />
          <NavLink to="/workshops">
            <DFButton className={s.link_cta}>Workshops</DFButton>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default SiteHeader
