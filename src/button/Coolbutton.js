import React from 'react'


export default function Coolbutton(props) {
    let classes = "button";

    classes += ` ${props.className}`
  
    const buttonStyle = {
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

    const keys = Object.keys(props);

    let stylesValueForKeys = '';

    keys.forEach((key) => {
        if (buttonStyle[key] !== undefined) stylesValueForKeys += buttonStyle[key];
    })

    console.log(keys);

    return (
    <button className={classes}>{props.children}</button>
    )
};
