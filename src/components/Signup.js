import React from "react";
import Navbar from "../navbar/Navbar";
import FormField from "../formfield/FormField";
import CoolButton from "../coolbutton/CoolButton";

const Signup = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <FormField label="Password" type="password" placeholder="*************" />

      <CoolButton className="button is-rounded my-class is-danger is-small">
        Submit
      </CoolButton>
    </React.Fragment>
  );
};

export default Signup;
