import React, { Component } from 'react'
import Container from "./Container"

const lookup = {
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
    isWhite: 'is-white'
}

function classString(coolButton) {
    return `button ${Object.keys(coolButton.props).map(c => lookup[c]).filter(e => e).join(' ') || ''} ${coolButton.className}`
}

class CoolButton extends Component {
    render() {
        return (
            <Container>
                <button className={classString(this)}>{this.props.children}</button>
            </Container >
        );
    }
}

export default CoolButton;