import React from "react";
import "bulma/css/bulma.css";
import Signup from "./signup/Signup";
import Message from "./message/Message";
import "./index.css";

const App = () => {
  return (
    <div className="App">
      <Signup />
      <Message isInfo title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        <strong>Pellentesque risus mi</strong>.
      </Message>
    </div>
  );
};
export default App;
