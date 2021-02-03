import React from "react";

const possibleClassNames = {
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

function CoolButton(props) {
  function renderClassnames() {
    let classNames = "";
    for (let key in props) {
      if (possibleClassNames[key]) {
        classNames += `${possibleClassNames[key]} `;
      }
    }
    return classNames;
  }

  return (
    <button
      type={props.type}
      className={`button ${props.className} ${renderClassnames()}`}
    >
      {props.children}
    </button>
  );
}

export default CoolButton;
