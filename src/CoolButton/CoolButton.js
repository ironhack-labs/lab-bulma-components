import React from "react";

const BulmaClasses = {
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
  // why there needs to be button word in string for this to work?
  let classString = `button ${props.className}`;
  //why below loop does not work???
  //isDanger isSuccess - colors do not work as they are small so isSmall works?
  for (let key in props) {
    if (BulmaClasses[key]) {
      classString += `${BulmaClasses[key]}`;
    }
  }

  return (
    <div>
      <button className={classString}>{props.children}</button>
    </div>
  );
};

export default CoolButton;
