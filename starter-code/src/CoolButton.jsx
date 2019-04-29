import React, { Component } from 'react'

export default class CoolButton extends Component {
  render() {
    let classes = {
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
    };
    let classNameToAdd = "button ";
    
    for(let theClass in classes){
      if(this.props.hasOwnProperty(theClass)){
        classNameToAdd += `${classes[theClass]} `;
      }
    }
    classNameToAdd += this.props.className;
    return (
        <button className={classNameToAdd}>{this.props.children}</button>
    )
  }
}
