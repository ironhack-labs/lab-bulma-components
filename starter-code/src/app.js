import React, { Component } from "react";
import NavBar from "../components/NavBar"
import FormField from "../components/FormField"
import "bulma/css/bulma.css";


import "../src/App.css"
import CoolButton from "../components/CoolButton";


class App extends Component {

render () {
  return (
    <div className="App">
      <NavBar />
      <h1>bulma App</h1>

      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <CoolButton class="button is-danger is-medium" value="button1" />
      <CoolButton class="button is-success is-medium" value="button2" />
    </div>
  );
}
}



export default App