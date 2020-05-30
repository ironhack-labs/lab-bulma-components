import React from "react";
import "bulma/css/bulma.css";

function CoolButton(props) {
    return (
      <button class={props.class} type={props.submit}>
        {props.children}
      </button>
    );
  }
  
  export default CoolButton;