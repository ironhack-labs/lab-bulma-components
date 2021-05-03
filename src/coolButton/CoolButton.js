import React from "react";
import "bulma/css/bulma.css";
import "./CoolButton.css";

const CoolButton = (props) => {
  return (
      <button class={props.class} >Click me</button>
  );
};

export default CoolButton;