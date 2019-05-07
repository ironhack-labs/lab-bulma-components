import React from "react";
import Navbar from "../components/Navbar";
import FormField from "../components/FormField";
import CoolButton from "../components/CoolButton";

function Signup() {
  return (
    <div className="App">
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <FormField label="Password" type="password" placeholder="password" />

      <CoolButton className="button is-rounded is-danger">Submit</CoolButton>
      {/*     <CoolButton isSmall isSuccess>
        Button 2
      </CoolButton> */}
      {/*  <h1> Hello Ironhackers! </h1> */}
    </div>
  );
}

export default Signup;
