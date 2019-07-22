
import React, { Component } from "react";

class CoolButton extends Component {

  buildClassString () {
    let classList = {
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

    let classString = 'button ';

    for(let key in classList) {
      if(this.props[key]) {
        classString += `${classList[key]} `
      }
    }



    return classString
  }


  render () {

    return (
      
      <button className={this.buildClassString()} >{this.props.name}</button>
      
      
      
      )  
    }
}

export default CoolButton