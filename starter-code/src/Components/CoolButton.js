import React, {Component} from 'react';


class CoolButton extends Component{

    enums = {
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
        isBlue: 'is-blue'
      }

      handleClasses = () => {
        let classes = '';
        const keys = Object.keys(this.props);
        keys.map((key) =>{
            this.enums[key] && (classes += `${this.enums[key]} `)
        });
        return classes;
      }



    render(){
        return(
            <a className={`button ${this.handleClasses()}`}>
                {this.props.name}
            </a>
        );

    }
}

export default CoolButton;