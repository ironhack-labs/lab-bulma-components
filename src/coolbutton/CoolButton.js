// components/CoolButton.js

import React from 'react';
import 'bulma/css/bulma.css';
import './CoolButton.css';

const bulmaClasses = {
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

const CoolButton = props => {
  const { className } = props;
  const buttonClasses = [];

  if (className !== undefined) {
    buttonClasses.push(...className.split(' '));
  }
  
  for (const key in props) {
    if (bulmaClasses.hasOwnProperty(key)) {
      const bulmaClass = bulmaClasses[key];
      buttonClasses.push(bulmaClass);
    }
  }

  return (
    <button className={`button ${buttonClasses.join(' ')}`}>
      {props.children}
    </button>
  );
};

export default CoolButton;
