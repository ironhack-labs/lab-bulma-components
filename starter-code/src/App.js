import React, { Component } from "react";
import Navbar from "./Navbar";
// import FormField from "./FormField";
import Signup from "./Signup";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Signup />
      </div>
    );
  }
}

export default App;
