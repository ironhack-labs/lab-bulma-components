import React from "react";
import "bulma/css/bulma.css";
import "./CoolButton.css";

function CoolButton(props) {
  return (
    <div>
      <button class={props.class}>{props.text}</button>
    </div>
  );
}

export default CoolButton;
