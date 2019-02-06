import React from 'react'
import { Icon } from 'evergreen-ui'
import s from './workshops-link.scss'

export default ({ className, link }) => (
  <div className={`${s.cta_container} ${className}`}>
    <Icon className={s.cta_icon} icon="circle-arrow-right" />
    <a className={s.cta} href={link}>
      Invite Dr. Feldman&nbsp;
    </a>
    <span className={s.cta_text}>to speak for your organization</span>
  </div>
)
