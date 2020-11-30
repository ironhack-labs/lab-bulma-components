import React from "react";
import "bulma/css/bulma.css";

function CoolButton(props) {
  return (
    <button className={`button ${props.color} is-light`}>
      {props.children}
    </button>
  );
}

export default CoolButton;
