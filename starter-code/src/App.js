import React, { Component } from 'react';
import "./App.css";
import NavBar from "./components/Navbar"
import FormField from "./components/FormField"
import CoolButton from "./components/CoolButton"
import Form from "./components/Form"



class App extends Component {
  //state = {  }
  render() {
    return (
      <div className="App">
        {/*<NavBar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <CoolButton className="button is-danger is-rounded">Button 1</CoolButton>
        <CoolButton className="button is-success">Button 2</CoolButton>*/}
        <Form />
      </div>
    );
  }
}


export default App;