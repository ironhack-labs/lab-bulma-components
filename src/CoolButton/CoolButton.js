import React from 'react'

import 'bulma/css/bulma.css'


const CoolButton = props => {
    let classes = 'button'
    let cases = {
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
        isWhite: 'is-white'
    }

    //Recorre el objeto cases, mirando cada una de sus propiedades y comparándolo con las props que le llegan. Si se cumple que existe una de ellas, añade el valor de la propiedad del objeto cases al string de classes.
    for(const key in cases) {
        props[key] ? classes += " " + cases[key] : null
    }

    return (
        <button className={classes}>{props.name}</button>
    )
}

export default CoolButton
