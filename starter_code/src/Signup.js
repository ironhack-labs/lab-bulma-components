import React from "react";
import Formfield from "./Formfield";
import Coolbutton from "./Coolbutton";

class Signup extends React.Component {
  render() {
    return (
      <div>
        <Formfield label="Name" type="text" placeholder="e.g Alex Smith" />
        <Formfield
          label="e-mail"
          type="e-mail"
          placeholder="alex.smith@gmail.com"
        />
        <Formfield label="Password" type="password" placeholder="**********" />
        <Coolbutton isSmall isDanger className="is-rounded my-class">
          Submit
        </Coolbutton>
      </div>
    );
  }
}

export default Signup;
