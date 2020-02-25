import React, { Component } from "react";
import 'bulma/css/bulma.css';
import "./App.css";
import Navbar from "./Navbar/Navbar.js"
// import FormField from "./Formfield/Formfield"
class App extends Component {

  render() {
    return ( 
      <div className="App">
        <Navbar></Navbar>
        {/* <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" /> */}
        <h1> Hello Ironhackers! </h1>
      </div>
    );
  }
}
export default App;