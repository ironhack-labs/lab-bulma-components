import React from "react";
import "bulma/css/bulma.css";

const BTN_CLASSES = {
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
    console.log(props)
    const propNames = Object.keys(props);
    let classes = "button";

    propNames.forEach((propName) => {
        if(BTN_CLASSES[propName]){
            classes += " " + BTN_CLASSES[propName]
        }
    })
    return(
        <button class= {`${classes} ${props.className}`}> {props.children} </button>
    )
}

export default CoolButton;