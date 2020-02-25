

// button

//button is rounden 

import React from 'react'

const legend = {
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

export default function Button(props) {
    console.log (props) // --> is an object
    const propNames = Object.keys(props) // --> gets all the key in an array
    let classes = "button "
    classes += props.className ? props.className : "";
    propNames.forEach((propName) => {
        if(legend[propName]) {
            classes += " " + legend[propName];
        }
    })
    return (
        <button className={classes}>{props.children}</button>
    )
}
