import "bulma/css/bulma.css";
import React from "react";
import Signup from "../signup/Signup";

const CoolButton = (props) => {
  return (
    <button onClick={props.click} className={`button ${props.class}`}>
      {props.text}
    </button>
  );
};

export default CoolButton;
