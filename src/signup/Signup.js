import React from "react";
import Navbar from "../navbar/Navbar";
import FormField from "../formfield/FormField";
import CoolButton from "../coolbutton/CoolButton";

const Signup = () => {
  return (
    <div>
      <Navbar />

      <div className="container">
        <FormField
          label={"Name"}
          type={"text"}
          placeholder={"e.g Alex Smith"}
        />
        <FormField
          label={"Email"}
          type={"email"}
          placeholder={"e.g alex@smith.com"}
        />
        <FormField
          label={"Password"}
          type={"password"}
          placeholder={"******"}
        />

        <CoolButton isSuccess> Submit </CoolButton>
      </div>
    </div>
  );
};

export default Signup;
