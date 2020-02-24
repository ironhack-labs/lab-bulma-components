import React from "react";
//import "./App.css";
import NavBar from "./NavBar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";

function SignUp() {
  return (
    <section>
      <NavBar></NavBar>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/>
    <FormField label="Password" type="password" placeholder="password"/>

      <CoolButton type="submit" isSmall isDanger className="is-dark">
       Submit</CoolButton>
      {/* <CoolButton isSmall isSuccess>
        Button 2
      </CoolButton> */}
    </section>
  );
}



export default SignUp;
