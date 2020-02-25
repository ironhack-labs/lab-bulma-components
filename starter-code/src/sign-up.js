import React, { Component } from "react";
import Navbar from './Navbar/Navbar';
import FormField from './FormField'
import CoolButton from  './CoolButton'

function Signup() {
    return (
        <section>
            <Navbar></Navbar>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
  <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
  <FormField label="password" type="password" placeholder="password" />
  
  <CoolButton isSmall isDanger className="button  is-primary is-rounded my-class">enviar</CoolButton>
  
        </section>
    );
  }
  
  export default Signup;