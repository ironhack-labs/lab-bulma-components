import React, { Component } from "react";
import NavBar from "./Navbar/Navbar"
import FormField from "./FormField/FormField"


class App extends Component {
  render() {
    return (
      <div>
      <NavBar />
      <FormField />
      </div>
      
    );
  }
}
// exporta APP
export default App;