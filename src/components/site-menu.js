import React from 'react'
import s from './site-menu.scss'
import classNames from 'classnames/bind'
import { TweenLite, Circ } from 'gsap'

const cx = classNames.bind(s)

const MenuContext = React.createContext()

class Sheet extends React.Component {
  constructor(props) {
    super(props)

    this.sheetTween = null
  }

  componentDidMount() {
    if (this.props.isOpen) {
      this.slideDown()
    }
  }

  componentDidUpdate(prevProps) {
    const { isOpen } = this.props

    if (prevProps.isOpen === false && isOpen === true) {
      this.slideDown()
    } else if (prevProps.isOpen === true && isOpen === false) {
      this.slideUp()
    }
  }

  slideDown = () => {
    this.sheetTween = TweenLite.to(this.menuSheet, 0.5, {
      y: 0,
      ease: Circ.easeInOut,
    })
  }

  slideUp = () => {
    this.sheetTween.reverse()
  }

  getMenuSheet = el => {
    this.menuSheet = el
  }

  render() {
    return (
      <div className={s.menu_sheet} ref={this.getMenuSheet}>
        {this.props.children}
      </div>
    )
  }
}

const _MenuSheet = props => <MenuContext.Consumer>{({ isOpen }) => <Sheet isOpen={isOpen} {...props} />}</MenuContext.Consumer>

class SiteMenu extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      toggle: this.toggle,
    }
  }

  toggle = () => {
    this.setState(state => ({
      ...state,
      isOpen: !state.isOpen,
    }))
  }

  render() {
    console.log('menu state:', this.state)

    return <MenuContext.Provider value={this.state}>{this.props.children}</MenuContext.Provider>
  }
}

SiteMenu.MenuButton = props => (
  <MenuContext.Consumer>
    {({ isOpen, toggle }) => (
      <button
        className={cx({
          icon: true,
          icon__open: isOpen,
        })}
        onClick={toggle}
        {...props}
      />
    )}
  </MenuContext.Consumer>
)

SiteMenu.MenuSheet = _MenuSheet

export default SiteMenu
