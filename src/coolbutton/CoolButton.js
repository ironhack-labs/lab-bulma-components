import React, { Fragment, Component } from "react";
import "bulma/css/bulma.css";
import "./CoolButton.css";

export default function CoolButton(props) {
  const lookupClasses = {
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

  let classes = "button";

  // if (props.isActive){
  //     classes += ` ${lookupClasses.isActive}`
  // }

  // if (props.isBlack){
  //     classes += ` ${lookupClasses.isBlack}`
  // }

  // if (props.isCentered){
  //     classes += ` ${lookupClasses.isCentered}`
  // }

  // if (props.isMedium){
  //     classes += ` ${lookupClasses.isMedium}`
  // }

  // if (props.isSuccess){
  //     classes += ` ${lookupClasses.isSuccess}`
  // }

  // if (props.isDanger){
  //     classes += ` ${lookupClasses.isDanger}`
  // }

  // if (props.isRounded){
  //     classes += ` ${lookupClasses.isRounded}`
  // }

  Object.keys(props).forEach((key) => {
    if (props[key]) {
      classes += ` ${lookupClasses[key]}`;
    }
  });

  return (
    <Fragment>
      <button className={classes}>{props.text}</button>
    </Fragment>
  );
}
