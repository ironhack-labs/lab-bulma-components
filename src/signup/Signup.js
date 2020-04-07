import React from "react";
import Navbar from "../navbar/Navbar";
import FormField from "../formfield/FormField";
import CoolButton from "../coolbutton/CoolButton";
import 'bulma/css/bulma.css';
import "../App.css";

function SignUp() {
  return (
    <div>
      <Navbar></Navbar>
      <FormField label="Name" type="text" placeholder="e.g. Jaime Mora" />
      <FormField label="Email" type="email" placeholder="e.g. jaimemoravallejo@gmail.com" />
      <FormField label="password" type="password" placeholder="pass" />
      <CoolButton isSmall isDanger className="is-rounded my-class">Signup</CoolButton>
    </div>
  );
}

export default SignUp;