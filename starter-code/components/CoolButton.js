import React, { Component } from "react";



class CoolButton extends Component {
  cases = {
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

  render() {
    let names = "button " + this.props.className
    let i
    Object.keys(this.props).forEach(prop => {
      i = Object.keys(this.cases).indexOf(prop)
      if (i >= 0) names += " " + Object.values(this.cases)[i]
    })

    return (
      <div className="CoolButton">
        <button className={names}>{this.props.children}</button>
      </div>
    )
  }
}

export default CoolButton;