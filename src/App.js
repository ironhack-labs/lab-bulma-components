import React, { Component } from "react";
import "bulma/css/bulma.css";
import SignUp from "./components/signUp/SignUp.js";
import Message from "./components/message/Message.js";

class App extends Component {
  render() {
    return (
      <div>
        <SignUp />
        <Message />
      </div>
    );
  }
}

export default App;
