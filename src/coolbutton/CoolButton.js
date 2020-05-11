import React from "react";

const CoolButton = props => {
  const {isSmall, isDanger, isSuccess, className, isDark} = props
  const clases = `button ${className} ${isSmall ? "is-small" : ""} ${
    isDanger ? "is-danger" : ""
  } ${isDark ? 'is-dark' : ''}${isSuccess ? "is-success" : ""} `;
  return <button className={clases}>{props.children}</button>;
};

export default CoolButton;