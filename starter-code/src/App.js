import React, { Component } from 'react';
import "./App.css";
import NavBar from "./components/Navbar"
import FormField from "./components/FormField"
import CoolButton from "./components/CoolButton"
import 'bulma/css/bulma.css';

class App extends Component {
  //state = {  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <CoolButton  className="button is-danger">Button 1</CoolButton>
        <CoolButton className="button are-Small isSuccess">Button 2</CoolButton>
      </div>
    );
  }
}


export default App;