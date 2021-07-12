import React from 'react'
import './CoolButton.css'

const mapping = {
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

function CoolButton(props){
    let className = 'button';

    for (let prop in props) {
        if (mapping[prop] === undefined) {
            continue;
        }
        className += ` ${mapping[prop]}`;
    }

    if (props.className) {
        className += ` ${props.className}`
    }

    return(
        <button type={props.type} className={className}>{props.children}</button>
    )
}

export default CoolButton