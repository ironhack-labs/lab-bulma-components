import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import FormField from "./components/formfield"

class App extends Component {
    render() {
      console.log(React)
      return (
        <div>
        <NavBar/>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        </div>
      );
 }
}

export default App;