import React from "react";
import Nav from "../navbar/Navbar";
import FormField from "../formfield/FormField";
import CoolButton from "../coolbutton/CoolButton";
import 'bulma/css/bulma.css';

const Signup = () => {
    return (
        <>
          <Nav />
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
          <FormField label="Password" type="password" placeholder="Your password" />
          <CoolButton className="is-medium is-link">Submit</CoolButton>
        </>
    );
};

export default Signup;