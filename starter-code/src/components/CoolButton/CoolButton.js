import React from "react";
import getClass from "../../getClass.util";

export default function CoolButton(props) {

  return <button className={'button ' + getClass(props)}>{props.children}</button>
}
