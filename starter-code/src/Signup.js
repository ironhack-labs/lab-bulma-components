import React, { Component } from "react";

import FormField from "./FormField.js";
import CoolButton from "./CoolButton.js";

class Signup extends Component {

  render(){
    return(
      <form>
        <FormField name="Name" />
        <FormField name="Email" />
        <FormField name="Password" />
        <CoolButton isSmall isSuccess name="Sign Up" />
      </form>
    )
  }

}

// export your component CLASS so that you can display it from other files
export default Signup;