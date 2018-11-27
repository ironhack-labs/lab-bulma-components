import React, { Component } from "react";
import Navbar from "./NavBar";
import FormField from "./FormField.js";
import CoolButton from "./CoolButton.js";

class SignUp extends Component {
    render(){
        return(
        <div>
      <Navbar />
      <form>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <FormField label="Password" type="password" placeholder="Password" />
      <CoolButton isSmall isSuccess className="is-rounded">Submit</CoolButton>
      </form>
      </div>
        )
    }
}

export default SignUp;