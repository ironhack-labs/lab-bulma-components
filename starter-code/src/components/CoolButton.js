import React, { Component } from "react";

class CoolButton extends Component {
  constructor(props) {
    super(props)
    this.buttonClasses = {
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
  }

  getClasses() {
    const propsKeysArray = Object.keys(this.props);
    const classesArray = [];
    propsKeysArray.map(key => {
      if (this.buttonClasses.hasOwnProperty(key)) {
        classesArray.push(this.buttonClasses.key)
      }
    })
    return classesArray.join(" ");
  }

  render() {
    const { children, className } = this.props;
    const classes = `button ${this.getClasses()} ${className}`
    return(
      <button className={classes}>{children}</button>
    )
  }
}

export default CoolButton;