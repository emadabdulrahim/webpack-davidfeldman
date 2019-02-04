import React from 'react'
import { Icon } from 'evergreen-ui'
import { Link } from 'react-router-dom'
import cx from 'classnames'
import s from './link.scss'

export const LinkExternal = ({ children, ...rest }) => (
  <a target="_blank" rel="noopener noreferrer" {...rest}>
    {children}
  </a>
)

const BasicLink = ({ className, children, isExternal, ...rest }) => (
  <>
    {isExternal ? (
      <LinkExternal className={cx(s.base, className)} {...rest}>
        {children}
      </LinkExternal>
    ) : (
      <Link className={cx(s.base, className)} {...rest}>
        {children}
      </Link>
    )}
  </>
)

export const HashLink = ({ className, children, ...rest }) => (
  <a className={cx(s.base, className)} {...rest}>
    {children}
  </a>
)

export const IconExternalLink = props => (
  <Icon
    className={s.external_link_icon}
    icon="arrow-top-right"
    size="0.75em"
    {...props}
  />
)

export default BasicLink
