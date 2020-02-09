import React from "react";
import classNames from "classnames";

function CoolButton(props) {
  const classes = classNames("button", props.className, {
    "is-small": props.isSmall,
    "is-danger": props.isDanger,
    "is-success": props.isSuccess
  });

  // let classes2 = ["button"];

  // if (props.isSmall) {
  //   classes2.push("is-small");
  // }
  // if (props.isDanger) {
  //   classes2.push("is-danger");
  // }
  // if (props.isSuccess) {
  //   classes2.push("is-success");
  // }
  // if (props.className) {
  //   classes2.push(props.className);
  // }

  // classes2 = classes2.join(" ");

  return <button className={classes}>{props.children}</button>;
}

export default CoolButton;
