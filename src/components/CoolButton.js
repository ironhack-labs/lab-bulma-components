import React, { Component } from 'react';

class CoolButton extends Component {
  render() {
    console.log('COOL BUTTON THIS.PROPS.CHILDREN', this.props.children);
    console.log("this.props", this.props )
    // this.props.children --> e.g. Sign up 
    // this.props --> different properties of the child: className: is-rounded my-class
    const legend = {
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

    let classes = 'button';

    // Get all the prop names passed to the component
    let propNames = Object.keys(this.props);
    console.log("propNames", propNames); 
    // 0: isSmall 1: isDanger 2:className 3:children
    propNames.forEach(propName => {
      if (legend[propName]) {
        console.log("legend[propName]",legend[propName] )
        classes += ' ' + legend[propName];
        console.log("classes", classes)
      }
    });
    return <button className={classes}>{this.props.children}</button>;
  }
}

export default CoolButton;