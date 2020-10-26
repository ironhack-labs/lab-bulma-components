import React from "react";

const CoolButton = (props) => {
  const { isSmall, isDanger, className, isSuccess, type } = props;

  let newName = `button ${className}`;

  // if (isSmall) {
  //   newName = newName + " is-small";
  // }

  // if (isDanger) {
  //   newName = newName + " is-danger";
  // }

  // if (isSuccess) {
  //   newName = newName + " is-success";
  // }

  let list = {
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

  for (let key1 in list) {
    for (let key2 in props) {
      // console.log(key1, list[key1]);
      // console.log(key2, props[key2]);
      if (key1 == key2) {
        newName = newName + " " + list[key1];
      }
    }
  }

  console.log(newName);
  return (
    <div>
      <button className={newName}>{type}</button>
    </div>
  );
};

export default CoolButton;
