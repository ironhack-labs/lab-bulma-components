import React from "react";
import Navbar from "../navbar/Navbar";
import FormField from "../formfield/FormField";
import CoolButton from "../coolButton/CoolButton";
import "bulma/css/bulma.min.css";

function Signup() {
  return (
    <div>
      <Navbar />
      <FormField label="name" type="text" placeolder="John Doe" />
      <FormField label="email" type="text" placeolder="johndoe@happymail.com" />
      <FormField label="password" type="password" placeholder="password" />
      <CoolButton isSuccess>Submit</CoolButton>
    </div>
  );
}

export default Signup;
