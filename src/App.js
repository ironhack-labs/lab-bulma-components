import React from "react";
import Container from "./container/Container";
import Message from "./message/Message";
import Navbar from "./navbar/Navbar";
import Signup from "./signup/Signup";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Container>
        <Signup />
      </Container>
      <Container>
        <Message title="Message to you Rudy" />
      </Container>
    </div>
  );
};

export default App;
