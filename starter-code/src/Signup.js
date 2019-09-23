import React, { Fragment } from "react";
import Navbar from "./Navbar";
import CoolButton from "./CoolButton";
import FormField from "./FormField";
import "bulma/css/bulma.css";

const Signup = () => {
  const name = {
    type: "text",
    label: "Name",
    placeholder: "Alex Smith"
  };

  const email = {
    type: "email",
    label: "Email",
    placeholder: "alexsmith@gmail.com"
  };

  const password = {
    type: "password",
    label: "Password",
    placeholder: "password"
  };

  const button1 = {
    name: "Button 1"
  };

  const button2 = {
    name: "Button 2"
  };

  const submit = {
    name: "Submit",
    type: "submit"
  };
  return (
    <Fragment>
      <Navbar />
      <form>
        <FormField data={name} />
        <FormField data={email} />
        <FormField data={password} />
        <CoolButton name={submit.name} type={submit.type} />
      </form>
      <CoolButton
        isSmall
        isDanger
        className="is-rounded my-class"
        name={button1.name}
      />
      <CoolButton isSmall isSuccess name={button2.name} />
    </Fragment>
  );
};

export default Signup;
