import React from "react";
import "bulma/css/bulma.css";
import "./../buttons/CoolButton.css";

const CoolButton = (props) => {
    var classes = {
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
    var myClasses = props.className + " button";
    Object.keys(props).forEach((prop) => {
      if (classes[prop]) {
        myClasses += " " + classes[prop];
      }
    });
    return <button id="submit" className={myClasses}>{props.children}</button>;
  };

export default CoolButton;
