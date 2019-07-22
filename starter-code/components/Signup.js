import React, { Component } from 'react';
import Navbar from "../components/Navbar"
import FormField from "../components/FormField";
import CoolButton from "../components/CoolButton";

const Signup = () => {
  return(
    <div className="Signup">
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <FormField label="Password" type="password" placeholder="password" />
      <CoolButton className="button is-small is-success">Submit</CoolButton>
    </div>
  )
}

export default Signup;