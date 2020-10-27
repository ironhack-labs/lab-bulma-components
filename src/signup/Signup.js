import React from "react";
import Navbar from "../navbar/Navbar";
import FormField from "../formfield/FormField";
import CoolButton from "../coolbutton/CoolButton";



export default function Signup() {
  return (
    <div>
      <Navbar />
      <div className="signup-bloc">
      <h1>Sign Up to enjoy our services</h1>
      {/* <form> */}
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
        <FormField label="Password" type="Password" placeholder="enter your password here" />
        <CoolButton type="submit" name = "Submit" isSmall isSuccess></CoolButton>
      {/* </form> */}
      </div>
    </div>
  );
}
