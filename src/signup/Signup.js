import React from "react";
import "bulma/css/bulma.css";
import FormField from "../formfield/FormField";
import CoolButton from "../coolbutton/CoolButton";

const Signup = () => {
  return (
    <div>
      <form>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <FormField label="Password" type="password" placeholder="" />
        <CoolButton isSuccess>BUTTON</CoolButton>
      </form>
    </div>
  );
};

export default Signup;
