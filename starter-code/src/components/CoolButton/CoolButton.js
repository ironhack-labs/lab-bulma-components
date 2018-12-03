import React, { Component } from 'react'

export default class CoolButton extends Component {

    constructor(props) {

        super(props)

        this.props=props

        this.classNames = {
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

        this.modifiedClass = 'button ' + Object.keys(this.props).map(prop => {
            return prop = this.classNames[prop]
        }).concat(this.props.className).join(' ')

    }

  render() {
    return (
       <button className= {this.modifiedClass}>{this.props.children}</button> 
    )
  }
}
