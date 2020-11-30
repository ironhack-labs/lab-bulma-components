import React from "react";
import "bulma/css/bulma.css";

function Container(props) {
  return <div className=" mt-6 container">{props.children}</div>;
}

export default Container;
