import React from "react";
import Signup from "../signup/Signup";
import Message from "../message/Message";

const Container = () => {
  return (
    <div className="container">
      <Signup />

      <Message theme="isDanger" title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        <strong>Pellentesque risus mi</strong>.
      </Message>
    </div>
  );
};

export default Container;
