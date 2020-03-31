import React from "react";

const CoolButton = props => {
  console.log(props);
  let { isSmall, isDanger, className, isSuccess } = props;
  const clases = `button ${className} ${isSmall ? "is-small" : ""} ${
    isDanger ? "is-danger" : ""
  } ${isSuccess ? "is-success" : ""} `;
  return <button className={clases}>{props.children}</button>;
};

export default CoolButton;
