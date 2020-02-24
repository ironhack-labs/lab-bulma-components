import React from 'react'
import './CoolButton.css'

const CoolButton = props => {


    const clases = {
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

    let className = "button "


    function createClassName() {


        if (props.className) { className += props.className }

        for (const p in props) {

            if (props[p]) { className += clases[p] + ' ' }

        }

    }

    createClassName()

    return (
        <>
            <button className={className}>{props.value}</button>
        </>
    )
}

export default CoolButton