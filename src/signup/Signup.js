import React from "react";
import "bulma/css/bulma.css";
import Navbar from "../navbar/Navbar";
import FormField from "../formfield/FormField";
import CoolButton from "../coolbutton/CoolButton";

function Signup(props) {
  return (
    <>
      <Navbar />
      <div>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <FormField
          label="Password"
          type="password"
          placeholder="e.g. Potatoe"
        />
      </div>

      <div>
        <CoolButton
          className="button is-danger is-rounded is-small"
          buttontext="Submit"
        />
      </div>
    </>
  );
}

export default Signup;
