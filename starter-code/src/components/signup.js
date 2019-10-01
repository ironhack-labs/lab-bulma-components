import React, { Component } from "react";
import Navbar from "./navbar";
import CoolButton from "./coolButton";
import FormField from "./formField.js";


function Signup(props) {
  return (
    <div>
      <Navbar/>
      <form action = "/signup" method = "POST">
        <FormField label = "Name" type = "text" placeholder = "e.g Alex Smith" />
        <FormField label = "Email" type = "email" placeholder = "e.g. alexsmith@gmail.com" /> 
        <FormField label = "Password" type = "password" placeholder = "" /> 
        <CoolButton type = "submit" name = "Signup" className = "button is-small is-success"/>
      </form> 
    </div>
  )
}

export default Signup;