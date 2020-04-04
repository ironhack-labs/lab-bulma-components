import React, { Component } from "react";
import 'bulma/css/bulma.css';

const allClasses = {
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


class CoolButton extends Component {
  setClasses(){
    const styleClasses = ['button']
    if(this.props.className) styleClasses.push(...this.props.className.split(' ')) 
    Object.keys(this.props).map((pKey) => {
      if(Object.keys(allClasses).includes(pKey)) styleClasses.push(allClasses[pKey])
    })
    return styleClasses
  }

  render(){
    return (
      <button className={this.setClasses().join(' ')}>{this.props.children}</button>
    );
  }
};

export default CoolButton