
import React from "react";

function Button(props) {
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

  let extraClasses = Object.keys(props)
    .filter(prop => {
      return props[prop] === true;
    })
    .map(elm => {
      if (classes.hasOwnProperty(elm)) {
        return classes[elm];
      }
    })
    .join(" ");

  extraClasses = `button ${extraClasses}`;
  if (props.className) extraClasses += ` ${props.className}`;

  return <button className={extraClasses}>{props.children}</button>;
}

export default Button; 