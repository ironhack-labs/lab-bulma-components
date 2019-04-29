import React, { Component } from "react";

export default class CoolButton extends Component {
  render() {
    const classes = {
      isActive: "is-active",
      isBlack: "is-black",
      isCentered: "is-centered",
      isDanger: "is-danger",
      isDark: "is-dark",
      isFocused: "is-focused",
      isGrouped: "is-grouped",
      isHovered: "is-hovered",
      isInfo: "is-info",
      isInverted: "is-inverted",
      isLarge: "is-large",
      isLight: "is-light",
      isLink: "is-link",
      isLoading: "is-loading",
      isMedium: "is-medium",
      isOutlined: "is-outlined",
      isPrimary: "is-primary",
      isRight: "is-right",
      isRounded: "is-rounded",
      isSelected: "is-selected",
      isSmall: "is-small",
      isStatic: "is-static",
      isSuccess: "is-success",
      isText: "is-text",
      isWarning: "is-warning",
      isWhite: "is-white"
    };

    let classNameString = this.props.className ? this.props.className : "";

    Object.keys(this.props).forEach((el, idx) => {
      if (Object.keys(classes).indexOf(el) >= 0) {
        classNameString += classNameString.split(' ').length > 0 ? ` ${classes[el]}` : `${classes[el]}`;
      }
    });

    classNameString = 'button ' + classNameString;

    return <button className={classNameString}>{this.props.children}</button>;
  }
}
