import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import FormField from "../formfield/FormField";
import CoolButton from "../Button/CoolButton";
import "bulma/css/bulma.css";

class Signup extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="m-6">
          <FormField label="Name" type="text" placeholder="Name" />
          <FormField label="Email" type="email" placeholder="Email" />
          <FormField label="Password" type="password" placeholder="Password" />
        </div>
        <div className="is-centered">
          <CoolButton className="button is-fullwidth is-success" />
        </div>
      </div>
    );
  }
}

export default Signup;
