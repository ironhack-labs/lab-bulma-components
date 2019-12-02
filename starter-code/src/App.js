import React from "react";
import "./App.css";
import NavComponent from "./NavComponent";
import FormField from "./FormField";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavComponent />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />

        <div className="container"> </div>
      </div>
    );
  }
}

export default App;
