import React from "react";
import Message from "../message/Message"

export const Container = (props) => {
  return (
    <div>
    <Message className={"message " + props.className} title={props.title}>
    {props.children}
  </Message>
  </div>
  );
};

export default Container;
