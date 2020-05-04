import React from "react";
import "bulma/css/bulma.css";
import Navbar from "../navbar/Navbar"
import FormField from "../formfield/FormField"
import CoolButton from "../coolbutton/CoolButton"

const SignUp = ({ classtype, text }) => {
    return (
      <>
        <Navbar />
        <FormField name="Name" type="text" placeholder="Chiquito de la calzada" />
        <FormField name="Name" type="email" placeholder="fistrodelapradera@gmail.com" />
        <FormField name="Name" type="password" placeholder="meh" />
        <CoolButton classtype="button is-dark is-rounded" text="Submit" />
      </>
    );
};

export default SignUp;
