import React, { Component } from 'react';
import './CoolButton.css';
import 'bulma/css/bulma.css';

const cbClasses = {
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

class CoolButton extends Component {
    render() {
        const { className } = this.props;
        let stringClasses = 'button';

        if (className) {
            stringClasses += ` ${className}`;
        }

        Object.keys(this.props).map((key) => {
            if (key !== 'children' && key !== 'className') {
                stringClasses += ` ${cbClasses[key]}`;
            }
        });

        console.log('stringClasses = ', stringClasses);

        return <button className={stringClasses}>{this.props.children}</button>;
    }
}

export default CoolButton;