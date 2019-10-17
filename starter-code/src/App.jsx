import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import Signup from "./../components/signup/signup";

class App extends Component {
  render() {
    return (
      <div>
        <Signup />
      </div>
    );
  }
}

export default App;
