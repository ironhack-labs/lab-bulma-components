import React from "react";
import NavBar from "../NavBar/NavBar";
import FormField from "../FormField/FormField";
import './App.css';

export default class App extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <div class="form">
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        </div>
      </div>
    );
  }
}


