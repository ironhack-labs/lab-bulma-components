import React from "react";
import Navbar from "./components/navbar/Navbar";
import Signup from "./components/signup/Signup";
import Message from "./components/message/Message";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Signup />
      <Message />
    </div>
  );
};

export default App;
