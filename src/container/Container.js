import React from "react";
import "bulma/css/bulma.css";
import "./Container.css";

function Container(props) {
  return <div className="container">{props.children}</div>;
}

export default Container;
