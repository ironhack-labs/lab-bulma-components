import React from "react";

let button = {
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


const Button = props => {

let classProps, className
let propButton = Object.getOwnPropertyNames(button)

propButton.forEach(elm => {
    if (props.hasOwnProperty(elm)) {
let prop = elm
classProps = button[prop]
    } })

    if(classProps) className = props.className + " " + classProps
    else className = props.className


  return (
    <button className={className}>
      {props.name}
    </button>
  );
};

export default Button;
