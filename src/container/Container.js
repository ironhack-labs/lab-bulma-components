import React from "react";
import Message from "../message/Message";

const Container = (props) => {
  return (
    <Message
      className="isInfo"
      title="Hello World"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      strong="Pellentesque risus mi"
    />
  );
};

export default Container;
