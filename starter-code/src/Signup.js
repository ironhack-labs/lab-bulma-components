import React from "react";
import Navbar from "./Navbar";
import CoolButton from "./CoolButton";
import FormField from "./Formfield";

import "./style.css";

const Signup = props => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <FormField label="Name" name="name" />
        <FormField label="Email" name="email" />
        <FormField label="Password" name="password" />
        <CoolButton isSmall isSuccess>
          Submit
        </CoolButton>
      </div>
    </div>
  );
};

export default Signup;
