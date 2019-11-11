import React from 'react';
import './cool.css'

class CoolButton extends React.Component{

    constructor(props){
        super(props);
        this.finalString = "";
        this.options = {
            isActive: 'is-active',
            isBlack: 'is-black',
            isCentered: 'is-centered',
            isDanger: 'is-danger',
            isDark: 'is-dark',
            isBlue: 'is-blue',
            isGreen: 'is-green',
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
    }

    render(){


        // if(this.props.isSmall){
        //     this.finalString += "is-small "
        // }
        // if(this.props.isDanger){
        //     this.finalString += "is-danger "
        // }
        // if(this.props.isSuccess){
        //     this.finalString += "is-success "
        // }

        for(let x in this.props){
            if(this.options[x]){
                this.finalString += this.options[x] + " ";
            }
        }

        return(
            // <button className={this.finalString}></button>
            <button className={this.finalString}>{this.props.name}</button>
        )
    }
}

export default CoolButton;