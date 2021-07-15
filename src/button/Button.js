import React, { Component } from 'react';
import 'bulma/css/bulma.css'

const classesBtn = {
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
    render(){  
        let classesElement = ''
        for(let element in classesBtn){
            if(this.props[element]){
                classesElement+= ` ${classesBtn[element]} `
            }
        }
    console.log(this.props)
        return <button className = {`button ${classesElement}`}>{this.props.input}</button>
     
  }}

  export default CoolButton