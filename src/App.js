import React from "react";

import "bulma/css/bulma.css";

import Signup from "./signup/Signup";
import Container from "./container/Container";
import Message from "./message/Message";

const App = () => {
  return (
    <Container>
      <Signup />
      <Message isSmall isInfo title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        <strong>Pellentesque risus mi</strong>.
      </Message>
    </Container>
  );
};

export default App;
