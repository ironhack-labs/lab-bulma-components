import React from "react";
import "./CoolButton.css";
import "bulma/css/bulma.css";

function CoolButton({buttonName, classes}) {
  return (
    <div>
    <button class={classes}>{buttonName}</button>
  </div>
  )  
  
}

export default CoolButton;
