import React from "react";

import Navbar from "./../Navbar/Navbar";
import CoolButton from "../CoolButton/CoolButton";
import FormField from "../FormField/FormField";

const Signup = () => {
  return (
    <div>
      <Navbar />
      <form>
        <FormField label="Name" type="text" placeholder="Alex Smith" />
        <FormField label="Email" type="email" placeholder="exemplo@gmail.com" />

        <FormField label="Password" type="password" />

        <CoolButton isSuccess className="is-rounded my-class">
          Submit
        </CoolButton>
      </form>
    </div>
  );
};

export default Signup;
