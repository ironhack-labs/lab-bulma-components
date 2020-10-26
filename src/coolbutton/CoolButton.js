import React from "react";
import "./CoolButton.css";

const Button = (props) => {
  return (
    <div>
      <button id="myButton" className={props.className}>
        {props.children}
      </button>
    </div>
  );
};

export default Button;
