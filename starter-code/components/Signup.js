import React from "react";

import FormField from "../components/FormField.js";
import CoolButton from "../components/CoolButton.js";

const signup = props => {
  return (
    <form>
      <FormField label="Name" type="text" />
      <FormField label="E-Mail" type="email" />
      <FormField label="Password" type="password" />
      <CoolButton isSuccess>Submit</CoolButton>
    </form>
  );
};

export default signup;
