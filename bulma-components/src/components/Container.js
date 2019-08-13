import React from "react";
import { tsPropertySignature } from "@babel/types";

const Container = props => {
  return <div class="container">{props.children}></div>;
};

export default Container;
