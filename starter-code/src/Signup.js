import React, { Component } from "react";
import CoolButton from "./CoolButton.js";
import FormField from "./Formfield.js";

class SignUp extends Component {
  render() {

    return (
      <div className="center-c">
        <nav>
          <a>Home</a>
          <a><CoolButton name="login" className="button is-rounded my-class is-danger is-small" /></a>
          <a><CoolButton name="signup" className="button is-small is-success" /></a>
        </nav>
        
        <div>
          <FormField label="Name" type="text" placeholder="Put your name here" />
          <FormField label="Email" type="email" placeholder="Put your email here" />
          <FormField label="Password" type="password" placeholder="Put your password here" />
          <CoolButton name="Submit" className="button is-small is-success" />
        </div>

      </div>
    );
  }
}

export default SignUp;