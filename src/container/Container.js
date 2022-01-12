import React from "react";
import Signup from "../signup/Signup.js";
import Message from "../message/Message.js"

const Container = () => {
  return (
    <div className ="container is-fluid">
      <Signup />
      <Message className="is-info" title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
      </Message>
    </div>
  );
};

export default Container;