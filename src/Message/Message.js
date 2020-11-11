import React from "react";
import "bulma/css/bulma.css";

const buttonClasses = {
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

function Message(props) {
  function renderClassNames(props) {
    let classNames = "";
    Object.keys(props).map((key) => {
      if (buttonClasses[key]) {
        classNames += `${buttonClasses[key]} `;
      }
    });
    return classNames;
  }
  return (
    <article className={`message ${renderClassNames(props)}`}>
      <div className="message-header" style={{margin: "2% 0" }}>
        <p>${props.title}</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body">${props.children}</div>
    </article>
  );
}

export default Message;
