import React from "react";

let data = {
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

class CoolButton extends React.Component {
  constructor(props) {
    super(props);
    let classString = "button ";
    Object.keys(props).forEach(prop => {
      if (prop == "className") {
        classString += props[prop] + " ";
      } else {
        if (data[prop]) classString += data[prop] + " ";
      }
    });
    console.log(classString);
    this.classString = classString;
  }

  render() {
    return <button className={this.classString}>{this.props.children}</button>;
  }
}

export default CoolButton;
