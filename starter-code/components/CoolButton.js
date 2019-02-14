import React from "react";

// const classesObj = {
//   isActive: "is-active",
//   isBlack: "is-black",
//   isCentered: "is-centered",
//   isDanger: "is-danger",
//   isDark: "is-dark",
//   isFocused: "is-focused",
//   isGrouped: "is-grouped",
//   isHovered: "is-hovered",
//   isInfo: "is-info",
//   isInverted: "is-inverted",
//   isLarge: "is-large",
//   isLight: "is-light",
//   isLink: "is-link",
//   isLoading: "is-loading",
//   isMedium: "is-medium",
//   isOutlined: "is-outlined",
//   isPrimary: "is-primary",
//   isRight: "is-right",
//   isRounded: "is-rounded",
//   isSelected: "is-selected",
//   isSmall: "is-small",
//   isStatic: "is-static",
//   isSuccess: "is-success",
//   isText: "is-text",
//   isWarning: "is-warning",
//   isWhite: "is-white"
// };

const coolbutton = props => {
  let buttonClasses = ["button"];
  if (props.isSmall) buttonClasses.push("is-small");
  if (props.isDanger) buttonClasses.push("is-danger");
  if (props.isSuccess) buttonClasses.push("is-success");
  if (props.className) buttonClasses.push(props.className);
  // for (const key of Object.keys(classesObj)) {
  //   console.log(props.key);
  //   if (props.key) {
  //     buttonClasses.push(classesObj[key]);
  //   }
  // }
  buttonClasses.join(" ");

  return <button class={buttonClasses.join(" ")}>{props.children}</button>;
};

export default coolbutton;
