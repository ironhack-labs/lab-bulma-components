import 'bulma/css/bulma.css';
import React, {Component} from "react";

class CoolButton extends Component {

    btn =  'button';

    styles = 
    {
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

    render() {
      const {name, className} = this.props;
        
    /*
        https://reactjs.org/docs/jsx-in-depth.html#children-in-jsx

      let styleClass = "button";

      this.props.styleClass.forEach((e,i) => {
        Object.keys(this.styles).forEach((styles) => {
            if (this.props.styleClass[i] === styles){
              styleClass += `${this.styles[styles]}`
            }
        });
      });*/

      return (
        <button class={this.btn + ` ${className}` }>{this.props.name}</button>
        );
    }
  }

  export default CoolButton;