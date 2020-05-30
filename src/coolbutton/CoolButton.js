import React from 'react';
import 'bulma/css/bulma.css';

function CoolButton(props) {
    const bumaClasses = {
        isActive: 'button is-active',
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

    return (
        <div className="Buttons">
            {/* <button className="button is-rounded my-class is-danger is-small">Button 1</button>
            <button className="button is-small is-success">Button 2</button> */}
            <button className={props.className}>{props.button}</button>
        </div>
    );
}

export default CoolButton;