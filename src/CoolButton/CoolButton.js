import React from "react";
import "bulma/css/bulma.css";
import './CoolButton.css'


const CoolButton = (props) => {
  const styles = {
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
  const { text } = props; //isSmall isRounded text='send'
  const arrKeys = Object.keys(props);
  let string = "";
  for (let i = 0; i < arrKeys.length; i++) {
    if (styles[arrKeys[i]] !== undefined) {
      string += " " + styles[arrKeys[i]]; //'is-small is-rounded'
    }
  }
  return <button className={`button ${string}`}>{text}</button>;
};
export default CoolButton;
