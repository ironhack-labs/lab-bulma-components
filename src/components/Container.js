import React from "react";
import Signup from "./Signup";
import Message from "./Message.js";

class Container extends React.Component {
  render() {
    return (
      <div>
        <Signup />
        <Message />
      </div>
    );
  }
}

export default Container;