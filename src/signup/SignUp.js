import React from "react";
import "bulma/css/bulma.css";
import Navbar from "../navbar/Navbar";
import FormField from "../formfield/FormField";
import CoolButton from "../coolbutton/CoolButton";

const SignUp = (props) => {
  return (
    <div>
      <Navbar />
      <form>
        <FormField label="Name" type="text" />
        <FormField label="Email" type="email" />
        <FormField label="Password" type="password" />
        <CoolButton
          styles="is-primary is-outlined is-centered"
          buttonContent="Sign Up"
        />
      </form>
    </div>
  );
};

export default SignUp;
