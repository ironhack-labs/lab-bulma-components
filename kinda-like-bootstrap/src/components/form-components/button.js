import React from 'react';

class CoolButton extends React.Component {
    allValues = {
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
    
    render(){
        let btnClass = 'button';
        if (this.props.className) {
            btnClass += ' ' + this.props.className;
        }
        for (let key in this.props){
            if (key in this.allValues) {
                btnClass += ' ' + this.allValues[`${key}`];
            }
        }
        console.log(btnClass)
        return <button className={btnClass}>{this.props.children}</button>  
    }
}

export default CoolButton;