import React, { Component } from "react";
import NavBar from "./components/navBar/navBar.jsx"
import FormField from "./components/formField/formField.jsx"
// import Header from "./components/header/header.jsx"
// import Section from "./components/section/section.jsx"

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      </div>
    );
  }
}

export default App;