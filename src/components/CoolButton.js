import React from "react";

const CoolButton = (props) => {
  const types = {
    "is-primary": "is-primary",
    "is-success": "is-success",
    "is-danger": "is-danger",
  };

  const className = props.className || "";
  const typesKeys = Object.keys(types);
  const propsKeys = Object.keys(props);
  const propClass = typesKeys.filter((el) => propsKeys.includes(el)).join(" ");
  const classes = `button ${className} ${propClass}`;

  return <button className={classes}>{props.text}</button>;
};

export default CoolButton;
