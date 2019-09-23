import React from "react";

const Container = props => {
  let componentsToRender = "";
  for (let comp of props.data) {
    componentsToRender += `${comp} /n`;
  }
  return <div>{componentsToRender}</div>;
};

export default Container;
