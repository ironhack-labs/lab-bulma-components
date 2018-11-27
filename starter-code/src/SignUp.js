import React from "react";
import FormField from "./FormField.js";
import CoolButton from "./CoolButton.js";
import Nav from "./Nav.js";

const SignUp = (props) => {
  console.log(props);
  
  return (
    <div>
      <Nav />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <FormField label="Password" type="password" placeholder="" />
      <CoolButton isSuccess className="is-rounded my-class">Submit</CoolButton>

    </div>
  );
};
export default SignUp;