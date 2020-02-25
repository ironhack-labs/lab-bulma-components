import React from "react";
import FormField from "./FormField.js";
import CoolButton from "./CoolButton.js";
import Navbar from "./Navbar.js";

function Signup() {
  return (
    <div>
      <Navbar></Navbar>
      <form action="">
        <FormField
          label="Name"
          type="text"
          placeholder="e.g Alex Smith"
        ></FormField>
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        ></FormField>
        <FormField
          label="Password"
          type="password"
          placeholder="password"
        ></FormField>
        <CoolButton
          className="button is-small is-rounded my-class"
          type="submit"
          value="Submit"
        >
          Submit
        </CoolButton>
      </form>
    </div>
  );
}

export default Signup;
