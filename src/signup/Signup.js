import React, { Component } from "react";
import "bulma/css/bulma.css";
import Navbar from "../navbar/Navbar.js";
import "../navbar/Navbar.css";
import FormField from "../formfield/FormField.js";
import "../formfield/FormField.css";
import CoolButton from "../coolButton/CoolButton.js";
import "../coolButton/CoolButton.css";

const Signup = () => {
  return (
    <div>
      <Navbar />
      <form>
      <FormField label="Name" type="text" placeholder="Name" />
      <FormField label="Email" type="email" placeholder="email" />
      <FormField label="Password" type="password" placeholder="Password" />
      <CoolButton type="submit">SUBMIT</CoolButton>
      </form>
    </div>
  );
};

export default Signup;
