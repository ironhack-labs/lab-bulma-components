import React from 'react'
import 'bulma/css/bulma.css';

const CoolButton = (props) => {
    /* console.log('props',props) */

    let classes = 'button '+ props.className
    const object = {
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
    const propNamesArr = Object.keys(props);
      
    /* console.log(propNamesArr) */

    propNamesArr.forEach((name)=>{
        //  object.isActive
        //  object["isActive"]
        if(object[name]){
            classes += ' ' + object[name]
        }
    })
    return (
        <div>
        <button type ={props.type} className = {classes}>{props.name}</button>
        </div>
    )
}

export default CoolButton
