import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from "../navbar/Navbar"
import FormField from "../formfield/FormField"
import CoolButton from "../coolbutton/CoolButton"

const Signup = () => {
  return (
    <div>
      <Navbar />
      <div>
        <FormField label="Name" type="text" placeholder='e.g Alex Smith' />
        <FormField label="Email" type="email" placeholder='e.g. alexsmith@gmail.com' />
        <FormField label="Password" type="password" placeholder='e.g *****' />
      </div>
      <div>
        <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
      </div>
    </div>
  )};

export default Signup;
