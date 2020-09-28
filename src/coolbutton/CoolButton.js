import React from 'react'
import 'bulma/css/bulma.css'
import './CoolButton.css'

const CoolButton = props => {

    const btnClasses = {
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
    
    let btnClass = `button`

    if (props.className) {
        btnClass += ` ${props.className}`
    }

    const propsKeys = Object.keys(props)

    propsKeys.forEach(elm => {
        if (elm in btnClasses) {
            btnClass += ` ${btnClasses[elm]}`
        }
    })

    return (
        <button id='buttons' type={props.type} className={btnClass}>{props.children}</button>
    )
  
}





export default CoolButton