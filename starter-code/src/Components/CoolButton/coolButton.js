import React, { Component } from "react";
import "./coolButton.css";

const bulma = {
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

class CoolButton extends Component {
    constructor() {
        super()
    }
    render() {
        var map = 'button ';
        Object.keys(this.props).filter(elem => {
            Object.keys(bulma).filter(item => {
                if (item == elem) {
                    map += bulma[item] + ' ';
                }
            })
        })
        return (
            <div>
                <button className={map + this.props.className}>{this.props.name}</button>
            </div>
        )
    }
}

export default CoolButton;