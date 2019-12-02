import React, { Component } from "react";

class CoolButton extends Component {
  render() {
    let btnTup = {
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

    let tProp = []

    Object.entries(this.props).forEach(entry => {
        if(entry[1] && btnTup[entry[0]]){
            tProp.push(btnTup[entry[0]])
        }
    });

    let tPstr = tProp.join(" ");
   
    
    return (
        <button className={ "button" + " " + tPstr + " " + this.props.className}>{this.props.children}</button>
    );
  }
}

export default CoolButton;