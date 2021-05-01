import React from 'react';

const getBooleanClasses = propsList => {
    const bulmaBtnStates = {
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
      };

    const filteredClasses = [];

    for (let prop in propsList) {
        if (bulmaBtnStates[prop]) filteredClasses.push(bulmaBtnStates[prop])
    }

    console.log(filteredClasses)
    return filteredClasses.join(' ');
}

const CoolButton = (props) => {
    return (
        <button className={`button ${getBooleanClasses(props)} ${props.className}`}>{props.children}</button>
    )
}

export default CoolButton;