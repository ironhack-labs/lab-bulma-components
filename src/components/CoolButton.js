import React from "react";

const buttonsCases = {
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
  let buttonStyle = " button ";

  for (let key in props) {
    if (typeof props[key] === `boolean`) buttonStyle += `${buttonsCases[key]} `;
  }

  return (
    <div>
      <button className={buttonStyle + props.className} type={props.type}>
        {props.children}
      </button>
    </div>
  );
};

export default CoolButton;
