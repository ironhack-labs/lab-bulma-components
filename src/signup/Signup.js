import React from "react";
import "bulma/css/bulma.css";
import Navbar from "../navbar/Navbar";
import FormField from "../formfield/FormField";
import CoolButton from "../coolButton/CoolButton";
import Message from "../message/message";

const Signup = () => {
  return (
    <div>
      <Navbar />
      <FormField label="Name" />
      <FormField label="Email" />
      <br />

      <CoolButton
        className="button is-rounded my-class is-danger is-small"
        data="Button 1"
      />
      <CoolButton className="button is-small is-success" data="Button 2" />
      <br />
      <Message />
    </div>
  );
};

export default Signup;
