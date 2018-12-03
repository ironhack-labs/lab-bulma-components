import React, { Component } from "react";
import FormField from "../FormField/formfield"
import NavBar from "../navbar/navbar.jsx"
// import "./App.css";


class Signup extends Component {
  render() {
    return (
      <div className="App">
       <NavBar />
       <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
       <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
       <FormField label="Password" type="password" placeholder="e.g. mysuperpassword" />

      </div>

    );
  }
}

export default Signup