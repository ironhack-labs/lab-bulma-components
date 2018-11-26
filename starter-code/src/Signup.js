import React, { Component } from "react";

import Navbar from "./Navbar";
import FormField from "./FormField.js";
import CoolButton from "./CoolButton.js";

class Signup extends Component{
  render(){
    return (
      <div className="Signup">
        <Navbar/>
        <form action="">
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
          <FormField label="Password" type="password" placeholder="Shuuut ! This is secret !" />
          <CoolButton isPrimary isMedium children="Sign Up !"/>
        </form>
      </div>
    )
  }
}


export default Signup;