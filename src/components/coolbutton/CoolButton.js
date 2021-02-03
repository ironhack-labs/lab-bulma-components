import "bulma/css/bulma.css";
import React from "react";
import Signup from "../signup/Signup";

const CoolButton = (props) => {
  return (
    <a href={props.click} className={`button ${props.class}`}>
      {props.text}
    </a>
  );
};

export default CoolButton;
