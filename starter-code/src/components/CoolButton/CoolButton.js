import React, { Component } from "react";

export default class CoolButton extends Component {
  constructor(props) {
    super(props);
    this.buttonStyles = {
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
  }

  render() {
    let styles = this.props.className
      ? ["button"].concat(this.props.className.split(" "))
      : ["button"]

    Object.keys(this.props).forEach((key, idx) => {
      if (key in this.buttonStyles && key) {
        styles.push(this.buttonStyles[key])
      }
    })

    styles = styles.join(" ")
    
    return (
      <button className={styles}>
        {this.props.children}
      </button>
    );
  }
}
