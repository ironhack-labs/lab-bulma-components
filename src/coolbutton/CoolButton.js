import React from 'react';
import 'bulma/css/bulma.css';
import './CoolButton.css';

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
  let keys = Object.keys(props);
  let classes = ['button']

  for(let key in BTN_CLASSES){  
    if(keys.includes(key)){
      classes.push(BTN_CLASSES[key]);
    }
  }
  if(props.className) classes.push(props.className);

  return (
    <button class={classes.join(' ')}>{props.children}</button>
  )
};

export default CoolButton;