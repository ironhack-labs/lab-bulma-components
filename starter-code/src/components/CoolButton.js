import React from "react";

class CoolButton extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.buttonBulma = {
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
        this.arrayButtonBulma = Object.keys(this.buttonBulma);
        this.clase = 'button '
        if (this.props.hasOwnProperty('className')) this.clase += this.props.className;
 
        Object.keys(this.props).map(function (key) {
            if (this.arrayButtonBulma.includes(key)) {
                this.clase += ` ${this.buttonBulma[key]}`;
            }
        }.bind(this));

    }

    render() {
    
        return (
            <button className={this.clase}>{this.props.children}</button>
        );
    }
}

export default CoolButton;



