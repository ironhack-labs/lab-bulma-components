import React from "react";

function CoolButton(props) {
  return (
    <button
      className={`${props.className} ${props.isPrimary ? "is-primary" : ""} ${
        props.isSuccess ? "is-success" : ""
      } ${props.isDanger ? "is-danger" : ""}`}
    >
      {props.children}
    </button>
  );
}

export default CoolButton;
