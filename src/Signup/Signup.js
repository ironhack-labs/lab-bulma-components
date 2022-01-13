import React from "react";
import { Navbar } from "../Navbar/Navbar.js";
import FormField from "../FormField/FormField.js";
import "bulma/css/bulma.css";
import CoolButton from "../CoolButton/CoolButton.js";
import '../Formfield/FormField.css'

const Signup = () => {
  return (
    <>
      <Navbar />
      <FormField label="Nome" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <FormField label="Senha" type="password" placeholder="********" />
      <CoolButton isRounded isDanger text="Enviar" />
    </>
  );
};

export default Signup;
