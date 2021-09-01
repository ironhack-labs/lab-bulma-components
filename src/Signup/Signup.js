import React from "react";
import "./Signup.css";
import Navbar from "../navbar/NavBar";
import FormField from "../Formfield/FormField";
import CoolButton from "../CoolButton/CoolButton";

const Signup = () => (
  <div>
    <Navbar />
    <FormField label="Name" type="text" />
    <FormField label="Email" type="email" />
    <FormField label="Password" type="password" />
    <div className="button-container">
      <CoolButton>Submit</CoolButton>
    </div>
  </div>
);

export default Signup;
