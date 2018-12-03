import React, { Component } from "react";
import NavBar from "./navBar.jsx";
import FormField from "./FormField.jsx";

class Signup extends Component {

  render() {
    return (
      <div className="Signup">
        <NavBar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. edu@gmail.com"
        />
        <FormField
          label="Password"
          type="password"
          placeholder="your password"
        />
    
      </div>
    );
  }
}

export default Signup;
