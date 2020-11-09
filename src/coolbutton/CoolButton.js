import React from 'react';

const classTags = {
    // isSuccess: "is-success",
    // isPrimary: "is-primary",
    // isDanger: "is-danger",
    // isLight: "is-light",
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

const CoolButton = (props) => {
    let classes = `button ${props.className}`;
    Object.keys(props).forEach((key) => {
      if (classTags[key]) {
        classes += " " + classTags[key];
      }
    });
    return (
        <button className={classes}>{props.children}</button>
    )
  };


export default CoolButton