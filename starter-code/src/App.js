import React, { Component } from "react";

import Navbar from "./components/Navbar";
import Signup from "./components/Signup";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar> 
        <Signup></Signup>
       
      </div>
    );
  }
}

export default App;

