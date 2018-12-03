import React, { Component } from "react";
import NavBar from "./components/navBar.jsx";
import FormField from "./components/FormField.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. edu@gmail.com"
        />
        <FormField
          label="Password"
          type="password"
          placeholder="your password"
        />
    
      </div>
    );
  }
}

export default App;
