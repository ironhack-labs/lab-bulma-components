import React from "react";

const coolbutton = props => {
  let buttonClasses = ["button"];
  if (props.isSmall) buttonClasses.push("is-small");
  if (props.isDanger) buttonClasses.push("is-danger");
  if (props.isSuccess) buttonClasses.push("is-success");
  if (props.className) buttonClasses.push(props.className);
  buttonClasses.join(" ");

  return <button class={buttonClasses.join(" ")}>{props.children}</button>;
};

export default coolbutton;
