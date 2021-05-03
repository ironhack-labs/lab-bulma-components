import React from "react";
import "bulma/css/bulma.css";
import SignUp from "../signup/Signup";
import Message from "../message/Message";

const Container = () => {
  return (
    <div className="Container">
      <SignUp />
      <Message isInfo title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <strong>Pellentesque risus mi</strong>.
      </Message>
    </div>
  );
};

export default Container;
