import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.css";

const dictionary = {
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

const CoolButton = (props) => {
  //   console.log("SOYPROPPPPPS", props);
  let buttonClass = `button ${props.className}`;
//   if (props.isSmall == true) {
//     buttonClass = buttonClass + " is-small";
//   }
//   if (props.isDanger == true) {
//     buttonClass = buttonClass + " is-danger";
//   }
//   if (props.isSuccess == true) {
//     buttonClass = buttonClass + " is-success";
//   }

  Object.keys(props).forEach((key) => {
    buttonClass = buttonClass + " " +dictionary[key];
  });

  return <button className={buttonClass}>{props.children}</button>;
};

export default CoolButton;
