import React from "react";
import Nav from "./Nav";
import FormComponent from "./form";
import CoolButton from "./coolbutton";

const Signup = props => {
  return (
    <div className="container">
      <Nav></Nav>
      <FormComponent
        label="Name"
        type="text"
        placeholder="e.g Alex Smith"
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      ></FormComponent>
      <CoolButton></CoolButton>
    </div>
  );
};

export default Signup;
