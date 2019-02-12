import React from 'react'
import { Link } from 'react-router-dom'
import DFLink, { IconExternalLink } from './link'
import { Container, Section } from 'components'
import Logo from './logo'
import FBIcon from './static/facebook-icon'
import s from './site-footer.scss'

const linksProps = [
  {
    title: 'Worshops & Speaking',
    blurb:
      'Dr. Feldman speaks for audiences in sectors including medicine, education, business, and technology.',
    linkText: 'Invite Dr. Feldman',
    link: 'workshops',
  },
  {
    title: 'Blog & Podcast',
    blurb:
      'Useful bite-sized psychology for reading or listening. Learn something new while you sip your morning coffee.',
    linkText: 'All posts',
    link: 'psychologyin10minutes',
  },
  {
    title: 'Research',
    blurb:
      'Dr. Feldman’s research explores how people maintain hope in the face of setbacks, losses, and trauma.',
    linkText: 'Read more',
    link: 'research',
  },
]

const LinkBig = ({ title, blurb, link, linkText }) => (
  <li className={s.link_big}>
    <h6 className={s.link_big_title}>{title}</h6>
    <p className={s.link_big_blurb}>{blurb}</p>
    <Link className={s.link_big_link} to={link}>
      {linkText}
    </Link>
  </li>
)

const MobileLinks = () => (
  <ul className={s.mobile_links}>
    <DFLink className={s.link} to="workshops">
      <li>Workshops</li>
    </DFLink>
    <DFLink className={s.link} to="psychologyin10minutes">
      <li>Blog & Podcast</li>
    </DFLink>
    <DFLink className={s.link} to="research">
      <li>Research</li>
    </DFLink>
    <DFLink className={s.link} to="about">
      <li>About</li>
    </DFLink>
    <div className={s.external_link_container}>
      <DFLink
        className={s.link}
        href="http://www.supersurvivors.com/press/"
        isExternal
      >
        <li>Press</li>
      </DFLink>
      <IconExternalLink />
    </div>
    <div className={s.external_link_container}>
      <DFLink
        className={s.link}
        href="http://www.davidfeldmanphd.com/therapy/"
        isExternal
      >
        <li>Therapy</li>
      </DFLink>
      <IconExternalLink />
    </div>
    <a
      href="https://www.facebook.com/DavidFeldmanPhD/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FBIcon className={s.social_icon} />
    </a>
  </ul>
)

export default () => (
  <section className={s.section}>
    <Container>
      <div className={s.layout}>
        <Logo />
        <MobileLinks />
        <ul className={s.links_big_container}>
          {linksProps.map(each => (
            <LinkBig key={each.link} {...each} />
          ))}
        </ul>
        <div className={s.separator} />
        <div className={s.secondary_links}>
          <ul className={s.links_list}>
            <DFLink className={s.link} to="about">
              <li>About</li>
            </DFLink>
            <div className={s.external_link_container}>
              <DFLink
                className={s.link}
                href="http://www.supersurvivors.com/press/"
                isExternal
              >
                <li>Press</li>
              </DFLink>
              <IconExternalLink />
            </div>
            <div className={s.external_link_container}>
              <DFLink
                className={s.link}
                href="http://www.davidfeldmanphd.com/therapy/"
                isExternal
              >
                <li>Therapy</li>
              </DFLink>
              <IconExternalLink />
            </div>
          </ul>
          <a
            href="https://www.facebook.com/DavidFeldmanPhD/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FBIcon className={s.social_icon} />
          </a>
        </div>
      </div>
    </Container>
  </section>
)
