import React, { Component } from "react";
import "./App.css";
import Navbar from "../Components/navbar/Navbar.js";
import FormField from "../Components/formfield/formfield";
class App extends Component {
  render() {
    return (<div className="App">
    <header>
    <Navbar />
    </header>
    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" /> 
    </div>)
    }
}


export default App;