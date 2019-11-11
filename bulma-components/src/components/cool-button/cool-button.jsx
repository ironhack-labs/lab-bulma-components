import './cool-button.css'
import React from "react";
// ^ this is always needed for any react components

const bulmaClasses = {
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

class CoolButton extends React.Component {
  classes = "button";
  
  render() {
    // add any class that has been declared inside of the className label
    if(this.props.className)
      this.classes += ` ${this.props.className}`;

    // add any class that was declared outside of the className label
    for(const key in this.props) {
      if(key in bulmaClasses)
        this.classes += ` ${bulmaClasses[key]}`;
    }

    return (
      <div>
        <button className={this.classes}>{this.props.children}</button>
      </div>
    );
  }
}

export default CoolButton;