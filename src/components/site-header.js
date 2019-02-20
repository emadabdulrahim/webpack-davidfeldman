import React from 'react'
import { Popover, IconButton } from 'evergreen-ui'
import { NavLink } from 'react-router-dom'
import Link, { HashLink } from './link'
import Logo from 'components/logo'
import DFButton from './button'
import s from './site-header.scss'

const Separator = () => <div className={s.separator} />

const NavLinks = () => (
  <>
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
  </>
)

const MobileNavLinks = () => (
  <Popover
    content={() => (
      <div className={s.mobile_nav_menu}>
        <NavLinks />
      </div>
    )}
    position="bottom-right"
  >
    <IconButton
      className={s.menu_icon}
      icon="menu"
      appearance="minimal"
      iconSize={20}
    />
  </Popover>
)

const SiteHeader = ({ theme }) => {
  const className = `${s.base} ${theme && s.light_theme}`

  return (
    <nav className={className}>
      <div className={s.nav_content}>
        <Logo theme={theme} />
        <div className={s.nav_menu}>
          <NavLinks />
        </div>
        <MobileNavLinks />
      </div>
    </nav>
  )
}

export default SiteHeader
