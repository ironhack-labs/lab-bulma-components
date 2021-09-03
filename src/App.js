import React from "react";
import Message from "./message/Message";
import Signup from "./signup/Signup";

const App = () => {
  return (
    <main className="container">
      <Signup />
      <Message title = "Hello World"/> 
    </main>
  );
};

export default App;
