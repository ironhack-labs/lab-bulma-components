import React, { Component } from "react";

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
  myClass: "my-class",
  Button: "button",
};

//   filtered_keys = () => {
//     let key,
//       keys = [];
//     let propKeys = Object.keys(this.props);
//     for (key in this.buttonClasses) {
//       for (let i in propKeys) {
//         if (key === propKeys[i]) {
//           keys.push(this.buttonClasses.key);
//         }
//       }
//     }
//     return keys;
//   };

// compare = (a, b) =>
//   JSON.stringify(Object.keys(a).sort()) ===
//   JSON.stringify(Object.keys(b).sort());

function classString(buttonClass) {
  let key, bulmaProps = [];
  for (key of Object.keys(buttonClass.props)) {
      console.log(key);
    if (buttonClasses[key]) {
      bulmaProps.push(buttonClasses[key]);
    }
  }
  console.log(bulmaProps);
  return bulmaProps.join(" ");
}

class CoolButton extends Component {
    render() {
    console.log(classString(this));
    return <a className={classString(this)} href={this.props.href}>{this.props.children}</a>;
  }
}

export default CoolButton;
