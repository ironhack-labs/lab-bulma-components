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
        <Message
          header="FAQ"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>."
          type="message is-success"
        />
      </div>
    );
}

export default Signup;