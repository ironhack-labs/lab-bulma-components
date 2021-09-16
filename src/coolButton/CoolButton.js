import React from "react";

function CoolButton(props) {
  if (props.isPrimary) {
    props.className.join(" is-primary");
  }

  if (props.isSuccess) {
    props.className.join(" is-success");
  }

  if (props.isDanger) {
    props.className, join(" is-danger");
  }

  return <button className={props.className}>{props.children}</button>;
}

export default CoolButton;
