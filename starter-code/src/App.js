import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import Navbar from "./Components/Navbar/Navbar.js";
import FormField from "./Components/FormField/FormField.js";


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <FormField/>
        
        
      </div>
    );
  }
}

export default App;
