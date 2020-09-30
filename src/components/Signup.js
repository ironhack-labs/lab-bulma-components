import React from "react";
import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";

const Signup = () => {
  return (
    <div className="containeris-fullhd">
      <Navbar />
      <form className='container'>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <CoolButton text='Save' is-primary/>
      </form>
    </div>
  );
};

export default Signup;
