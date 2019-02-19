import React, { Component } from "react";
import "bulma/css/bulma.css";
import "../public/App.css";

import Navbar from "./Navbar.js";
import Signup from "./Signup.js";
import Message from "./Message.js";

class App extends Component {
  render() {
    // render() returns the HTML of this component's content
    // (use parenthesis when returning multiple lines of HTML)
    return (
      <div>
        <Navbar />
        <Signup />
        <Message title="Hello, World!" message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi"/>
      </div>
    );
  }
}

export default App;
