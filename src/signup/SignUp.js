import React from "react";
import Navbar from "../navbar/Navbar";
import FormField from "../formfield/FormField";
import CoolButton from "../coolbutton/CoolButton";
import "bulma/css/bulma.css";

const SignUp = () => {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="alex" />
      <FormField label="Email" type="email" placeholder="hi@ironhack.com" />
      <FormField label="Password" type="password" placeholder="*******" />
      <br />
      <CoolButton
        isSmall
        isSuccess
        className="is-rounded my-class"
        btnText="Sign Up"
      />
      {/* <FormField /> */}
    </div>
  );
};

export default SignUp;
