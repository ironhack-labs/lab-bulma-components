import React, { Component } from "react";

import Nav from "./Nav";

import Signup from "./Signup";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Signup />
      </div>
    );
  }
}

export default App;
