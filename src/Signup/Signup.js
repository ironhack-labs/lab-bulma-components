import React from "react";
import Formfield from "/src/formfield/Formfield";
import CoolButton from "/src/CoolButton/CoolButton";
import "bulma/css/bulma.css";

const Signup = (props) => {
  return (
    <div>
      <Formfield label="Name" type="text" placeholder="e.g Alex Smith" />
      <Formfield
        label="Email"
        type="email"
        placeholder="e.g alexsmith@xyz.com"
      />
      <Formfield
        label="Password"
        type="password"
        placeholder="my-secret-password"
      />
      <CoolButton isSmall isPrimary isSuccess>
        Submit
      </CoolButton>
    </div>
  );
};

export default Signup;
