import 'bulma/css/bulma.css';

import React from 'react';

const CoolButton = (props) => {
  let classes = 'button ';
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
  for (const key in cases) {
    if (props[key]) {
      classes += " " + cases[key]
    }
  }
  // if(props.isSmall === true) {
  //   classes += 'is-small'
  // }
  // if(props.isSuccess === true){
  //   classes += ' is-success'
  // }
  // console.log(classes)
  return (
    <div>
      <button className={classes}>{props.text}</button>
    </div>
  );
};

export default CoolButton;