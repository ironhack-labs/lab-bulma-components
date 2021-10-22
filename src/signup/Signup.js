import "bulma/css/bulma.css";
import React from "react";
import Navbar from "../navbar/Navbar";
import CoolButton from "../coolbutton/CoolButton";
import FormField from "../formfield/FormField";

function Signup() {
  return (
    <>
      <Navbar />
      <form>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <FormField label="Password" type="password" placeholder="****" />
        <CoolButton
          className="button is-success is-primary"
          type="submit"
          text="Submit"
        />
      </form>
    </>
  );
}

export default Signup;
