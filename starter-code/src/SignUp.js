import React from "react";
import Navbar from "./NavBar.js";
import FormField from "./FormField.js";
import CoolButton from "./CoolButton.js"

const signup = () => {

  return (
    <div>
    <Navbar />
    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    <FormField label="Password" type="password" placeholder="e.g. pudim" />
    <CoolButton isSmall isSuccess>Submit</CoolButton>
    </div>
  )
}

export default signup;
