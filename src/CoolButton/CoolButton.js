import React from "react";
import "bulma/css/bulma.css";

const CoolButton = (props) => {
  return (
    <button
      className={`button my-class
                ${props.isSmall ? "is-small" : ""}
                ${props.isLarge ? "is-large" : ""}
                ${props.isDanger ? "is-danger" : ""}
                ${props.isSuccess ? "is-success" : ""}
                ${props.isRounded ? "is-rounded" : ""}
                ${props.isPrimary ? "is-primary" : ""}
                 `}
    >
      {props.children}
    </button>
  );
};

export default CoolButton;
