import React from 'react';
import "./Signup.css";
import Navbar from "../navbar/Navbar";
import Formfield from "../formfield/Formfield";
import CoolButton from "../coolbutton/CoolButton";

const Signup = (props) => {
  return (
    <div>
      <Navbar />

    <Formfield label="Name" type="texy" placeholder="e.g Alex Smith" />
    <Formfield label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    <Formfield label="Password" type="password" placeholder="Type your password" />

    <CoolButton isActive isRounded isLarge isPrimary>Signup</CoolButton>
    </div>
  )
}

export default Signup;