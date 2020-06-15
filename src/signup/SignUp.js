import React from "react";
import Navbar from "../navbar/Navbar";
import Formfield from "../formfield/Formfield";
import CoolButton from "../coolbutton/CoolButton";
import "bulma/css/bulma.css";

function SignUp() {
  return (
    <div>
      <Navbar />
    <Formfield label="name" type="text" placeholder="e.g Alex Smith" />
    <Formfield label="email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    <Formfield label="password" type="password" placeholder="***********" />
    <CoolButton isSmall isSuccess>Sign Up</CoolButton>
    </div>
  );
}

export default SignUp