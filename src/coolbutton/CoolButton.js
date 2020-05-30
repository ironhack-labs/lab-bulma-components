import React from "react";
import "bulma/css/bulma.css";
import "./CoolButton.css";

function CoolButton(props) {
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
    }


   const keys = Object.keys(props);

   let selectedClasses = keys.map(function (key) {
       if (buttonClasses[key]) {
           return buttonClasses[key]
       }
   })
   selectedClasses = selectedClasses.join(' ')
//    console.log('after join',selectedClasses)

    return (
        <button type="submit" className={"button" + ' ' + selectedClasses} >
            {props.children}
        </button> 
    );
}

export default CoolButton;
