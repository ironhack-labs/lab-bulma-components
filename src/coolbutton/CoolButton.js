import React from "react";
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

function CoolButton(props) {
  console.log(props);
  //let classes = "button" + " " + props.className;
  let classes = `button ${props.className}`;

  Object.keys(props).forEach((key) => {
    if (dictionary[key]) {
      classes += " " + dictionary[key];
      //classes += ` ${dictionary[key]}`;
    }
    console.log("key", key);
    console.log(dictionary[key]);
    //Dictionary.children
    //dictionary['children']
  });

  return (
    
      <button className={classes}>{props.children}</button>
  )
}

/* 
const CoolButton = (props) => {
    console.log(props)
    const { isSmall, isDanger, className, isSuccess, children, isPrimary, isLight} = props
    const classNameString = `
      button
      ${className}
      ${isSmall ? 'is-small' : ''}
      ${isDanger ? 'is-danger' : ''}
      ${isSuccess ? 'is-success' : ''}
      ${isPrimary ? 'is-primary' : ''}
      ${isLight ? 'is-light' : ''}
    `
    return (
      <button className={classNameString}>
        {children}
      </button>
    )
  }; */

export default CoolButton;
