import React, { Component } from "react";

class CoolButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let allClasses = {
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

        const allClassesKeys = Object.keys(allClasses);
        // console.log(allClassesKeys);

        let presentClasses = 'button';

        if (this.props.className) {
            presentClasses += ` ${this.props.className}`;
        }

        allClassesKeys.forEach(classKey => {
            if (this.props[classKey]) {
                presentClasses += ' ' + allClasses[classKey];
            }
        });

        return (
            <button className={presentClasses}>{this.props.text}</button>
        )
    }
}

export default CoolButton;