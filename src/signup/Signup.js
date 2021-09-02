import React from "react";
import Navbar from "../navbar/Navbar";
import FormField from "../formField/FormField";
import CoolButton from "../coolButton/CoolButton";
import "bulma/css/bulma.css";

const Signup = () => {
    return(
        <div>
        <Navbar />
        <FormField 
      label="Name" 
      type="text" 
      placeholder="e.g XXX Smith" 
      />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <FormField
      label="Password"
      type="password"
      placeholder="********"
      />
    <CoolButton class="button is-success is-medium is-focused is-rouded">Submit
      </CoolButton>
        </div>
    );
};

export default Signup;