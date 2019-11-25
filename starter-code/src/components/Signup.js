import React from "react";

import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";

const Signup = props => {
  return (
    <form>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <FormField label="Password" type="password" placeholder="password" />
      <CoolButton isSmall isSuccess type="submit">
        Signup
      </CoolButton>
    </form>
  );
};

export default Signup;
