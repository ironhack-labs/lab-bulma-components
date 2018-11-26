import React from "react";
import { prependOnceListener } from "cluster";

const CoolButton = (props) => {
  return (
    <button>{props.name}</button>
  )
}

export default CoolButton;