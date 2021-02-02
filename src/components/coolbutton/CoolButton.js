import "bulma/css/bulma.css";
import React from "react";

const CoolButton = (props) => {
  return <button className={`button ${props.class}`}>{props.text}</button>;
};

export default CoolButton;
