import React from "react";
import 'bulma/css/bulma.css';

let buttonsStyle = {
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

const CoolButton = (props) => {
    let properties = " "
    let newArray = Object.keys(props)
    newArray.forEach((elm) => {
        properties += (buttonsStyle[elm] || "") + " "
    })
    console.log('properties', properties)

    let classString = "button " + properties + props.className
    return (
        < button className={classString}> {props.children} </button>
    )
}


export default CoolButton
