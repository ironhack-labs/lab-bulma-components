import React from "react";
import FormField from "./FormField";
import CoolButton from "./CoolButton";

const Signup = props => {
  const name = {
    type: "text",
    label: "Name",
    placeholder: "e.g Alex Smit"
  };
  const email = {
    type: "email",
    label: "Email",
    placeholder: "e.g. alexsmith@gmail.com"
  };
  const password = {
    type: "password",
    label: "Password",
    placeholder: "****"
  };

  const submitBtn = {
    text: "Submit",
    type: "submit",
    isSmall: true,
    isSuccess: true
  };
  return (
    <form>
      <FormField data={name} />
      <FormField data={email} />
      <FormField data={password} />
      <CoolButton data={submitBtn} />
    </form>
  );
};

export default Signup;
