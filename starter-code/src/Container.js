import React, { Component } from "react";
import Message from "./Message.js"

class Container extends Component {

  render() {

    let messageObj = {
      header: `Info`,
      message: `Bla-Bla-Bla`,
    }

    return (
      <Message params={messageObj} />
    );


  }
}

export default Container;