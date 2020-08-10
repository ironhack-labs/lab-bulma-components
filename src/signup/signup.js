import React, { Fragment } from "react";

import "bulma/css/bulma.css";
import "./signup.css";

import Navbar from "../navbar/Navbar";
import FormField from "../formfield/FormField";

const Signup = () => {
  return (
    <Fragment>
      <Navbar />
      <FormField 
        label="Name"
        type="text"
        placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <FormField
        label="Password"
        type="password"
        placeholder="********"
      />
    </Fragment>
  );
};

export default Signup;
