import React, { Component } from "react";
import NavBar from "../navBar/navBar.jsx"
import FormField from "../formField/formField.jsx"



class SignUp extends Component {
    render() {
      return (
        <div className="App">
          <NavBar />
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
          <FormField label="password" type="password" placeholder="Super Pass" />
        </div>
      );
    }
  }
  
  export default SignUp;