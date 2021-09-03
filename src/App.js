import React from "react";
import Message from "./message/Message";
import Signup from "./signup/Signup";
import Container from "./container/Container";

const App = () => {
  return (
    <Container> 
      <Signup />
      <Message title = "Hello World"/> 
    </Container> 
  );
};

export default App;
