import React, { Component } from "react";
import 'bulma/css/bulma.css';
import Navbar from "./Navbar";
import Formfield from "./Formfield";
import CoolButton from "./CoolButton";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Formfield label="Name" type="text" placeholder="e.g Alex Smith" />
        {/* <CoolButton className="button is-rounded my-class is-danger is-small">Button 1</CoolButton>
        <CoolButton className="button is-small is-success">Button 2</CoolButton>
         */}
        <h1>Hola</h1>
      </div>
    );
  }
}

export default App;
