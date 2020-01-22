import React, { Component } from "react";
import NavBar from "./components/NavBar";
import FormField from "./components/FormField";

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      </div>
    );
  }
}

export default App;
