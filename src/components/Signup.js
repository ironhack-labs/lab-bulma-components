import React from "react";
import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";

import "bulma/css/bulma.css";
import "../../public/index.css";

const Signup = () => {
  return (
    <div>
      <Navbar />

      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <FormField
        label="Password"
        type="password"
        placeholder="e.g. 123!Oliveira4"
      />
      <div className="button-group">
        <CoolButton isLarge isCentered isSmall isSuccess isRounded>
          Submit
        </CoolButton>
      </div>
    </div>
  );
};

export default Signup;
