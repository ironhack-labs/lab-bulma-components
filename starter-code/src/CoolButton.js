import React, { Component } from 'react'

class CoolButton extends Component {
  constructor(props){
    super(props);
    
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
    };
    console.log(this.props.listOfClasses);
    this.listOfClasses = this.fillClasses(this.props.listOfClasses);
  }

  

  fillClasses(listOfClasses){
    let finalResult = "";
    let arrOfClasses = listOfClasses.split(' ');
    arrOfClasses.forEach(classToCheck => {
      finalResult += this.buttonClasses.hasOwnProperty(classToCheck) ? ` ${this.buttonClasses[classToCheck]}`  : '';
    });
    return `button${finalResult}`;
  }
  


  render() {

    return (
      <button className={this.listOfClasses}>{this.props.label}</button>
    )
  }
}

export default CoolButton;