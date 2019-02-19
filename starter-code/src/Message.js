import React, { Component } from "react";
import "bulma/css/bulma.css";

const elements = {
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

class Message extends Component {
  render() {
    const { title, isInfo } = this.props;
    let { className } = this.props;
    console.log(this.props.title);

    if (!className) {
      className = "message";
    } else {
      className = "message " + className;
    }

    if (isInfo) {
      className += " " + elements.isInfo;
    }

    return (
      <article className={className}>
        <div class="message-header">
          <p>{title}</p>
          <button class="delete" aria-label="delete" />
        </div>
        <div class="message-body">{this.props.children}</div>
      </article>
    );
  }
}

export default Message;
