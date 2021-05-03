import React from "react";
import "./CoolButton.css";
import "bulma/css/bulma.css";

function CoolButton() {
  return (
    <div class="button">
    <button class="button is-rounded my-class is-danger is-small">Button 1</button>
    <button class="button is-green">Button 2</button>
  </div>
  )  
  
}

export default CoolButton;
