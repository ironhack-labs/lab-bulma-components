import React from 'react';

function CoolButton (props) {
    let classes = "button" + props.className + ' ';
    
    //Dynamicaly create classes string from incoming props and className.
    const propKeys = Object.keys(props)

    const dictionary = {
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

    propKeys.forEach((key) => {
      if (dictionary[key]) {
        const value = dictionary[key];
        classes += value + ' ';
      }
    })

    return (
      <button className={classes}>{props.children}</button>
    )

  }
export default CoolButton;