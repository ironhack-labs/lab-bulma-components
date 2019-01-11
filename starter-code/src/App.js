import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import FormField from "./components/FormField";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <FormField />
        
      </div>
    );
  }
}

export default App;
