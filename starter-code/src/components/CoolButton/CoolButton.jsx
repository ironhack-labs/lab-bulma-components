import React from 'react';

const CoolButton = (props) => {
  const buttonClasses = {
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

  let classNameButton = 'button ';
  const { btnArray } = props;

  btnArray.forEach((elem) => {
    if (buttonClasses.hasOwnProperty(elem)) {
      classNameButton += `${buttonClasses[elem]} `;
    }
  });
  console.log('classNameButton', classNameButton);
  return <button className={classNameButton}>{props.children}</button>;
};

export default CoolButton;
