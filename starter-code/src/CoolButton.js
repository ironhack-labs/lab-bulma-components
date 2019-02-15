import React from "react";

const CoolButton = (props) => {
  const classesArray = ["button", props.className];

  if (props.isSmall) {
    classesArray.push("is-small");
    if (props.isDanger) {
      classesArray.push("is-danger");
    }
    if (props.isPrimary) {
      classesArray.push("is-primary");
    }
    if (props.isSuccess) {
      classesArray.push("is-success");
    }
  }
  const classes = classesArray.join(" ");
  return <button className={classes}>{props.children}</button>;
};

export default CoolButton;
