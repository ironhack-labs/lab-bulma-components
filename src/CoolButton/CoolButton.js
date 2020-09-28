import React, { Component } from 'react'

const classButtons = {
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



class CoolButton extends React.Component {


    render() {

        let basicClass = `button ${this.props.className} `
        let concactClass = basicClass
 
        // A double loop to check all the classes of button and add if exists
        for (let i = 0; i < Object.keys(classButtons).length; i++) {
            for (let j = 0; j < Object.keys(this.props).length; j++) {

                if (Object.keys(classButtons)[i] == Object.keys(this.props)[j]) {
                    concactClass = concactClass + " " + Object.values(classButtons)[i]
                } 
            }
        }

        return (
            <a className={concactClass} href="#">{this.props.children}</a>
        )
    }
}

export default CoolButton