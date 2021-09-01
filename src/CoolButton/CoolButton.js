import React from "react";
import "./CoolButton.css";

const CoolButton = ({
  children,
  size = "is-small",
  shape = "",
  color = "is-primary",
  myClass = "",
}) => (
  <button className={`button ${size} ${shape} ${color} ${myClass}`}>
    {children}
  </button>
);

export default CoolButton;
