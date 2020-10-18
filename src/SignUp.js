import React from "react";
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import CoolButton from "./coolbutton/CoolButton";

const Signup = () => {
  return (
    <div className="containeris-fullhd">
      <Navbar />
      <form className="container">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <CoolButton text="Save" is-primary />
      </form>
    </div>
  );
};

export default Signup;
