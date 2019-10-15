// import React, { Component } from "react";

import React, { Component, Fragment } from "react";
// import "./App.css";
import Navbar from "./navbar.js";
import FormField from "./FormField.js";
import CoolButton from "./CoolButton.js";


const Signup = () => {
  return (
    <Fragment>
      <div className="Signup">
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <FormField label="Password" type="password" />
        <CoolButton isSmall isInfo isRounded>
          Submit
        </CoolButton>
      </div>
    </Fragment>
  );
};

export default Signup;
