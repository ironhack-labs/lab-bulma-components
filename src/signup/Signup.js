import React from "react";
import FormField from "../formfield/FormField";
import NavBar from "../navbar/Navbar";
import "bulma/css/bulma.css";

const SignUp = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="form-div">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g alexsmith@gmail.com"
        />
      </div>
      <div className="buttons"></div>
    </div>
  );
};

export default SignUp;
