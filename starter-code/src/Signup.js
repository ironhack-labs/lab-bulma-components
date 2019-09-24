import React from "react";
import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./Coolbutton";

const Signup = () => {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <FormField label="Password" type="password" placeholder="password" />
      <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
      <CoolButton isSmall isSuccess>Button 2</CoolButton>
      <br></br>
      <CoolButton isSmall isSuccess>Submitt</CoolButton>
    </div>

  );
};
export default Signup;
