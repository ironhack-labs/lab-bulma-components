import React from "react";

import Navbar from "./Navbar.js";
import FormField from "./FormField.js";
import CoolButton from "./CoolButton.js";

class Signup extends React.Component {
  render() {
    return (
      <div>
        <Navbar />

        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="text" placeholder="######" />

        <br />
        {/* <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton> */}
        <CoolButton isSmall isSuccess> Submit </CoolButton>
      </div>
    );
  }
}

export default Signup;
