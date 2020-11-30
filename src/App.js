import React from "react";
import Message from "./Message";
import Container from "./Container";

import "bulma/css/bulma.css";

import Signup from "./Signup";

const App = () => {
  return (
    <div>
      <Signup />

      <Message isInfo title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        <strong>Pellentesque risus mi</strong>.
      </Message>
    </div>
  );
};

export default App;
