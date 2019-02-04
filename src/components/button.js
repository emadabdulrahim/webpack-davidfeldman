import React from 'react'
import { Button } from 'evergreen-ui'
import classnames from 'classnames/bind'
import s from './button.scss'

const cx = classnames.bind(s)

export default ({ children, className, large, small, light, ...rest }) => {
  const classNames = cx({
    button: true,
    button__large: large,
    button__small: small,
    button__light: light,
  })

  return (
    <button className={cx(classNames, className)} {...rest}>
      {children}
    </button>
  )
}
