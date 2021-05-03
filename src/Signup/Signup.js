import React from "react";
import "bulma/css/bulma.css";
import "./Signup.css";
import Navbar from "../Navbar/Navbar"
import FormField from "../formField/FormField"
import CoolButton from "../coolButton/CoolButton"
import Message from "../Message/Message"

function Signup() {
    return (
      <div>
        <Navbar />
        <FormField label="Name" type="text" placeholder="Name" />
        <FormField label="Email" type="email" placeholder="Email" />
        <FormField label="Password" type="password" placeholder="Password" />
            <CoolButton class="button is-primary" />
            <Message />
      </div>
    );
}

export default Signup;