import React from "react";
import Signup from "./signup/Signup";
import Navbar from "./navbar/Navbar";
import Container from "./container/Container";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Signup />
      </Container>
    </div>
  );
};

export default App;
