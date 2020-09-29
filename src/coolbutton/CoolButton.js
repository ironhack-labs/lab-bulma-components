import React from "react";
import "bulma/css/bulma.css";
import "./CoolButton.css";

const CoolButton = (props) => {
  return <button className={props.className}>{props.text}</button>;
};

export default CoolButton;
