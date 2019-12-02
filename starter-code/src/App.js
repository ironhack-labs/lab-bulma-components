import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";
import FormField from "./FormField/FormField";
import CoolButton from "./Button/CoolButton";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
<FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
<CoolButton className="is-small is-danger is-rounded my-class button">Button 1</CoolButton>
<CoolButton className= "is-small is-success button">Button 2</CoolButton>
      </div>
    );
  }
}

export default App;
