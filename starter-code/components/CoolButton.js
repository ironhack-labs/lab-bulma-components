import React, { Component } from "react";

import "./CoolButton.css";

class CoolButton extends Component {
  render() {
    let properties = "button";

    const listObj = {
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

    Reflect.ownKeys(this.props).forEach(key => {
      if (key === "className") {
        properties += ` ${this.props.className}`;
      } else {
        properties += " " + listObj[key];
      }
    });

    return (
      <div className="CoolButton">
        <button className={properties}>{this.props.children}</button>
      </div>
    );
  }
}

export default CoolButton;
