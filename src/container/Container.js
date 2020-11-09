import React, { Component } from "react";
import "bulma/css/bulma.css";

const Container = (props) => {
  return <div className="container">{props.children}</div>;
};

export default Container;
