import React from 'react'

// CSS Bulma
import 'bulma/css/bulma.css'

const CoolButton = props => {

    const btnStates = {
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

    let btnClasses = 'button'

    if (props.className) {
        btnClasses += ` ${props.className}`
    }

    const propsKeys = Object.keys(props)

    propsKeys.forEach(element => {
        if (element in btnStates) {
            btnClasses += ` ${btnStates[element]}`
        }
    })

    return (
        <a className={btnClasses} href="https://www.google.com">{props.children}</a>
    )
}

export default CoolButton