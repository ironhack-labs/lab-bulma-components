import React from 'react';


function CoolButton(props) {
    var classNameStr = "button";
  
    if(props.className) {
      classNameStr += " " + props.className;
    }
  
    var buttonClass = {
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
  
    for(var key in buttonClass) {
        if(Object.keys(props).includes(key)) {      
          classNameStr += " " + buttonClass[key];      
        }
      }
  
    return(
      <button className={classNameStr}>{props.children}</button>
    )
    
}

export default CoolButton;

