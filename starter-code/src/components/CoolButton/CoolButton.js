import React, { Component } from 'react'

export default class CoolButton extends Component {
  constructor(props){
   
    super(props);
    this.classNames= {
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
    this.props=props;
  
    this.clases = 'button ' + Object.keys(this.props).map(cla=> this.classNames[cla]).concat(this.props.className).join(' ');
    

    }
    render() {
      return (
          <button className={this.clases}>{this.props.children}</button>
      )
    }
  }