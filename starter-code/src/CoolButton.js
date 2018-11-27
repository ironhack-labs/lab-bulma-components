import React from "react";

const coolbutton = (props) => {

  let buttonProperty = 'button ';

  const buttonProperties = {
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

  Object.keys(buttonProperties).forEach(function(key) {
    if(props.hasOwnProperty(key)) {
      buttonProperty += buttonProperties[key] + ' ';
    }
  });

  if(props.hasOwnProperty('className')) {
    buttonProperty += props.className;
  } else {
    buttonProperty = buttonProperty.slice(0,-1);
  }

  return (
    <button class={buttonProperty}>{props.children}</button>
  )
}

export default coolbutton;
