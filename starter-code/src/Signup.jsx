import React, { Component } from "react";
import Navbar from "./Navbar";
import FormField from "./FormField";

class Signup extends Component {
  render() {
    return (
      <div className="Signup">
        <Navbar />
        <FormField label="Name" type="text" placeholder="Your name" />
        <FormField label="Email" type="email" placeholder="your@email.here" />
        <FormField label="Password" type="password" placeholder="********" />
        {/* <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton> */}
      </div>
    );
  }
}



export default Signup;