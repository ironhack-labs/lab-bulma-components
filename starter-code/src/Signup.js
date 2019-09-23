import React from "react";
import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";

const Signup = () => {
  return (
    <div>
      <Navbar />
      <form>
        <h1>Super important form to fill out right now</h1>
        <FormField
          label='Name'
          type='text'
          placeholder='Please enter your name'
        />
        <FormField
          label='Email'
          type='text'
          placeholder='Please enter your email'
        />
        <FormField
          label='Password'
          type='password'
          placeholder='Enter your password'
        />
        <CoolButton type='submit'>Submit the Form</CoolButton>
      </form>
    </div>
  );
};

export default Signup;
