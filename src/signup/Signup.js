import React from "react";
import Navbar from "../navbar/Navbar";
import FormField from "../formfield/FormField";
import CoolButton from "../coolbutton/CoolButton";
import "bulma/css/bulma.css";
import "./Signup.css";

function Signup() {
  return (
    <div>
      <Navbar />
      <div className="signup">
        <form>
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField
            label="Email"
            type="email"
            placeholder="e.g. alexsmith@gmail.com"
          />
          <FormField
            label="Password"
            type="password"
            placeholder="enter password"
          />
          <CoolButton isSmall isInfo>
            Register
          </CoolButton>
        </form>
      </div>
    </div>
  );
}

export default Signup;
