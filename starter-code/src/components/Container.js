import React, { Component } from "react";
import Message from "./Message";

class Container extends Component {
  render() {
    return (
      <form>
        <Message title="Hello World" />
      </form>
    );
  }
}

export default Container;
