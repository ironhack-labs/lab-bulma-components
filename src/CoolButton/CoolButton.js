import React, { Component } from "react";
import "bulma/css/bulma.css";
import "./CoolButton.css";

export default class CoolButton extends Component {
  bulmaClasses = {
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
    isWhite: "is-white",
  };

  render() {
    const buttonClassName = ["button"];
    if (this.props.className) buttonClassName.push(this.props.className);

    for (const property of Object.keys(this.props)) {
      if (this.bulmaClasses[property])
        buttonClassName.push(this.bulmaClasses[property]);
    }

    return (
      <button class={buttonClassName.join(" ")}>
        {this.props.children[0]}
      </button>
    );
  }
}
