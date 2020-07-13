import React from "react";
import "bulma/css/bulma.css";

const CoolButton = (props) => {
  const className = `button ${props.isSmall ? "is-small" : ""} ${
    props.isDanger ? "is-danger" : ""
  } ${props.isSuccess ? "is-success" : ""} 
  ${props.isRounded ? "is-rounded" : ""}`;
  return <button className={className}>{props.name}</button>;
};

export default CoolButton;
