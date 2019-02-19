import React, { Component } from "react";
import "./App.css";
import 'bulma/css/bulma.css';
import Navbar from "./component/nav/Navbar.js"
 import FormField from "./component/FormField/FormField.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
       </div>
      
    );
  }
}

export default App;
        