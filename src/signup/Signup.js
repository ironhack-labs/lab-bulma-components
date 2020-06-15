import React from "react";
import "bulma/css/bulma.css";

import Navbar from "../navbar/Navbar";
import FormField from "../formfield/FormField";
import CoolButton from "../coolbutton/CoolButton";

function Signup() {
    return (
      <div>
        <Navbar />
        <form action="#">
          <FormField
            label="Name"
            type="text"
            placeholder="e.g Alex Jonathan Smith"
          />
          <FormField
            label="Email"
            type="email"
            placeholder="e.g. alexsmith@gmail.com"
          />
          <FormField label="Password" type="password" placeholder="******" />
          <p className="field">
            <CoolButton isSuccess>Signup</CoolButton>
          </p>
        </form>
      </div>
    );
  }
  
  export default Signup;