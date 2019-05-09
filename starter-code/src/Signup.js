import React, { Component } from "react";

import FormField from "./FormField ";

import CoolButton from "./CoolButton";

function Signup(props) {
  return (
    <div>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <FormField label="Password" type="password" placeholder="password" />
      <CoolButton
        className="button is-large is-success is-rounded my-class"
        name="Button2"
      />
    </div>
  );
}

export default Signup;
