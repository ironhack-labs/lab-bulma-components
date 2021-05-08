import React from 'react';

import './CoolButton.css';

const classButton = {
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
    const mountClass = () => {
        let buttonStyle = props.className ? props.className : "";
    
        const propNames = Object.keys(props);
        
        propNames.forEach(typeName => {
            if (classButton[typeName]) {
                buttonStyle += ` ${classButton[typeName]}`
            }
        });

        return buttonStyle;
    }; 
       
    return (
        <button className={`button ${mountClass()}`}>{props.children}</button>
    );
};

export default CoolButton;