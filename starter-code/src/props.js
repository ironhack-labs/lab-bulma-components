import React from "react";
import CoolButton from "./CoolButton";

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

const inputprops = [
  { name: "Name", type: "text", placeholder: "e.g Alex Smith" },
  {
    name: "Email",
    type: "email",
    placeholder: "e.g. alexsmith@gmail.com"
  },
  {
      name:"Password",
      type:"password",
      placeholder:"password"
  }
];



const buttons = (prop, name) => {
    console.log(prop.join(" "));
    return <CoolButton name={name} bclas={prop.join(" ")} />;
  };

export { classes, inputprops, buttons};
