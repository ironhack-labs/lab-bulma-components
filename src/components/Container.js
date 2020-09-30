import React from "react";

import "bulma/css/bulma.css";

const Container = (props) => {
  let containerClasses = props.className;
  containerClasses = containerClasses.split(" ");
  containerClasses.unshift("container");
  containerClasses = containerClasses.join(" ");
  return <div className={containerClasses}>{props.children}</div>;
};

export default Container;
