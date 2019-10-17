import React from "react";
import Container from "./../message/Container";
import Navbar from "./../navbar/Navbar";
import Formfield from "./../form/FormField";
import CoolButton from "./../button/CoolButton";
import "./signup.css";

function Signup() {
  return (
    <div className="signup">
      <Navbar className="navbar" />
      <div className="div-signup">
        <Formfield label="Name" type="text" placeholder="e.g Alex Smith" />
        <Formfield
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <Formfield label="Password" type="password" placeholder="password" />
        <CoolButton className="button" isPrimary text="Submit" />
      </div>
      <div>
        <Container />
      </div>
    </div>
  );
}

export default Signup;
