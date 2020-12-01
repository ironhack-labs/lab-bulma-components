import React from "react";
import "bulma/css/bulma.css";

const CoolButton = (props) => {
  let classes = ["button"];
  if (props.isInfo) {
    classes.push("is-info");
  }
  if (props.isPrimary) {
    classes.push("is-primary");
  }
  if (props.isSuccess) {
    classes.push("is-success");
  }
  if (props.className) {
    classes.push(props.className);
  }
  return <button className={classes.join(" ")}>{props.children}</button>;
};

export default CoolButton;
