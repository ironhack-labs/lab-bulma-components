import React, { Component } from "react";
import Navbar from "../components/Navbar"
import FormField from "../components/FormField";
import CoolButton from "../components/CoolButton";
import Signup from "../components/Signup";

class App extends Component {

  render() {
    return(
      <div className="App">
        <Signup />
      </div>
    )
  }

}

export default App;