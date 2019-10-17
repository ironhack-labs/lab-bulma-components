import React from "react";
import FormField from "./FormField";
import Navbar from "./Navbar";
import CoolButton from "./CoolButton"

class Signup extends React.Component {

  render() {
    return (
      <div className="signup-component">
        <Navbar />
        <div className="signupBox">
          <h1>Sign up</h1>
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
          <FormField label="Password" type="password" placeholder="**********" />
          <CoolButton className="is-success">Sign up</CoolButton>
        </div>
      </div>
    )
  }
}

export default Signup;