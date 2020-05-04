import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './coolbutton.css'

const classes = {
  isActive: 'is-active',
  isBlack: 'is-black',
  isCentered: 'is-centered',
  isDanger: 'is-danger',
  isDark: 'is-dark',
  isFocused: 'is-focused',
  isGrouped: 'is-grouped',
  isHovered: 'is-hovered',
  isInfo: 'is-info',
  isInverted: 'is-inverted',
  isLarge: 'is-large',
  isLight: 'is-light',
  isLink: 'is-link',
  isLoading: 'is-loading',
  isMedium: 'is-medium',
  isOutlined: 'is-outlined',
  isPrimary: 'is-primary',
  isRight: 'is-right',
  isRounded: 'is-rounded',
  isSelected: 'is-selected',
  isSmall: 'is-small',
  isStatic: 'is-static',
  isSuccess: 'is-success',
  isText: 'is-text',
  isWarning: 'is-warning',
  isWhite: 'is-white',
}

let allClasses

class CoolButton extends Component {
  render() {
    this.props.className
      ? (allClasses = 'button ' + this.props.className)
      : (allClasses = 'button ')

      console.log(allClasses)

    for (const key in this.props) {
      if (classes.hasOwnProperty(key)) {
        console.log(classes[key])
        allClasses += `${classes[key]} `}
        console.log(allClasses)
    }

    return this.props.isButton ? (
      <button className={allClasses}>{this.props.children}</button>
    ) : (
      <a href={this.props.link} className={allClasses}>
        {this.props.children}
      </a>
    )
  }
}

export default CoolButton
