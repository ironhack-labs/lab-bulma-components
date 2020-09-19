import React from "react";
import './signup.css';
import Navbar from "./navbar/Navbar.js";
import FormField from "./formfield/FormField.js";
import CoolButton from "./coolbutton/CoolButton.js";
import Message from "./message/Message.js";
import Container from "./Container.js";
const Signup = () => {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField 
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <CoolButton
        isSmall
        isDanger
        className="is-rounded my-class mn-btn"
        btnText="Sign Up"
      />
      <Message isInfo title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        <strong>Pellentesque risus mi</strong>.
      </Message>
    </div>
  );
};
export default Signup