import React from "react";
import Navbar from "../Navbar/Navbar.js";
import FormField from "../FormField/FormField.js";
import CoolButton from "../CoolButton/CoolButton.js";
import Message from "../Message/Message.js";

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
        className="is-rounded my-class"
        btnText="Sign Up"
      />

      <Message isInfo title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        <strong>Pellentesque risus mi</strong>.
      </Message>
    </div>
  );
};

export default Signup;
