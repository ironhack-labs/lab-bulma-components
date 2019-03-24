import React, { Component } from 'react'

import NavBar from "./Navbar"
import FormField from "./FormField"
import CoolButton from "./CoolButton"

const Form = () => {
  return(
    <div>
      <NavBar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" /> 
      <FormField label="Password" type="password" placeholder="password" />  
      <CoolButton className="button is-success">Submit</CoolButton>
     </div>
  )}

export default Form;
