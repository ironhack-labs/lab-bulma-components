import React from "react";
import "./coolButton.css";

class CoolButton extends React.Component {

    ButtonStyles = {
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

    let classNames = "button";
    for (let style in this.props) {
    if(this.ButtonStyles[style]){
        classNames = this.ButtonStyles[style] + ' ' + classNames
      } 
    }
    return (
      <div>
        <button className={classNames}>
          {this.props.buttonName}
        </button>
      </div>
    );
  }
}

export default CoolButton;
