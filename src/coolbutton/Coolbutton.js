import React from 'react';

function Coolbutton(props) {
    return (
        <button className={getClasses(props)}>Button 1</button>
    );
}

const getClasses = (props) => {    
    const objClasses = {
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

    let classes = "";
    for (let element in props) {
        if (objClasses[element]) {
            classes +=  " "  + objClasses[element];
        }
    }
    
    if (props.className) {
        classes += " " + props.className;
    }

    return classes;
}

export default Coolbutton;