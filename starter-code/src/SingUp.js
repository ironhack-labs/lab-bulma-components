import React from "react";
//import "./App.css";
import NavBar from "./NavBar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";


function SingUp() {
  return (
    <section>
      <NavBar></NavBar>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <FormField label="Password" type="password" placeholder="123456789" />
      <CoolButton className='is-primary'>Submit</CoolButton>
     
    </section>
  );
}

export default SingUp;