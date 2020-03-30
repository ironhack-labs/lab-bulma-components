import React from "react";
import Navbar from "./Navbar/Navbar";
import FormField from "./FormField/FormField";
import CoolButton from "./CoolButton/CoolButton";
import 'bulma/css/bulma.css';
import "./App.css";

function SignUp() {
  return (
      <div>
      <Navbar></Navbar>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
       <FormField label="password" type="password" placeholder="e.g. alexsmith@gmail.com" />
       <CoolButton isSmall isDanger className="is-rounded my-class">SignUp</CoolButton>
     
      </div>
  );
}

export default SignUp;
