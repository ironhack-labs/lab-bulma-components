import React from "react";
import "bulma/css/bulma.css";

const CoolButton = (props) => {
  const buttonStyles = `
  button 
  ${props.isPrimary ? "is-primary" : ""} 
  ${props.isDanger ? "is-danger" : ""}
  ${props.isSuccess ? "is-success" : ""}
  `;

  return <button className={buttonStyles}>{props.children}</button>;
};

export default CoolButton;
