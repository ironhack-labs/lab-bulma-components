import React, { Fragment } from "react";
import "bulma/css/bulma.css";
import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";
import Signup from "./Signup";

const App = () => {
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
    type: "",
    name: "Button 1"
  };

  const button2 = {
    type: "",
    name: "Button 2"
  };
  return (
    <Fragment>
      <Navbar />
      <FormField data={name} />
      <FormField data={email} />
      <CoolButton
        isSmall
        isDanger
        className="is-rounded my-class"
        name={button1.name}
      />
      <CoolButton isSmall isSuccess name={button2.name} />
      <Signup>
        <FormField data={name} />
        <FormField data={email} />
        <FormField data={password} />
      </Signup>
    </Fragment>
  );
};

export default App;
