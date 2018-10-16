import React, { Component } from "react";
import Navbar from "./navbar.js"
import 'bulma/css/bulma.css';
import './App.css'
import FormField from "./form.js";
import CoolButton from "./button.js";
import Signup from "./signup.jsx";





class App extends Component {
  render(){
    return(
      <div className="App">
        <Navbar />
        <Signup />
      </div>
    );
  }
}

export default App;
