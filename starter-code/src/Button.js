import React, { Component, Fragment } from 'react';

class CoolButton extends Component {
  render() {
    const classes = {
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

    let className = 'button control';
    const {isSmall, isDanger, isSuccess, isRounded, isPrimary} = this.props;
    // if (this.props === Object.keys(classes)) {
    //   className += classes[this.props];
    // }
    if (isSmall) {
      className += ' is-small'
    };
    if (isDanger) {
      className += ' is-danger'
    };
    if (isSuccess) {
      className += ' is-success'
    };
    if (isRounded) {
      className += ' is-rounded'
    };
    if (isPrimary) {
      className += ' is-primary'
    };

    return (
      <a className={className} >{this.props.children}</a>
    )}}

export default CoolButton;